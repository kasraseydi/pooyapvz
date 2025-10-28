/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bowl extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Wallnut_body", "./Bowl/costumes/Wallnut_body.svg", {
        x: 50.00000000000003,
        y: 50,
      }),
      new Costume("Wallnut_body2", "./Bowl/costumes/Wallnut_body2.svg", {
        x: 54.047619999999995,
        y: 96,
      }),
      new Costume("blink 0", "./Bowl/costumes/blink 0.svg", {
        x: 23.961405310964352,
        y: 73.0329534170216,
      }),
      new Costume("blink 1", "./Bowl/costumes/blink 1.svg", {
        x: 23.983325000000008,
        y: 73.01667,
      }),
      new Costume("blink 2", "./Bowl/costumes/blink 2.svg", {
        x: 23.961405000000013,
        y: 73.032955,
      }),
      new Costume("blink 3", "./Bowl/costumes/blink 3.svg", { x: 0, y: 0 }),
      new Costume("pos", "./Bowl/costumes/pos.svg", { x: 140.5, y: 140.5 }),
      new Costume("col", "./Bowl/costumes/col.svg", {
        x: 43.581019999999995,
        y: 43.581019999999995,
      }),
      new Costume("col2", "./Bowl/costumes/col2.svg", {
        x: 52.831019999999825,
        y: 52.83102000000001,
      }),
    ];

    this.sounds = [
      new Sound("plant", "./Bowl/sounds/plant.mp3"),
      new Sound("chompsoft", "./Bowl/sounds/chompsoft.mp3"),
      new Sound("gulp", "./Bowl/sounds/gulp.mp3"),
      new Sound("bowlingimpact", "./Bowl/sounds/bowlingimpact.mp3"),
      new Sound("bowling", "./Bowl/sounds/bowling.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "delete plant" },
        this.whenIReceiveDeletePlant
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "repair wall" },
        this.whenIReceiveRepairWall
      ),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stop game" },
        this.whenIReceiveStopGame
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
    ];

    this.vars.x = -196;
    this.vars.y = -120;
    this.vars.sin = 173.2500000000003;
    this.vars.grid = 0;
    this.vars.i = 37;
    this.vars.state = "grabbed";
    this.vars.first = "yes";
    this.vars.timer = 0;
    this.vars.size = 45;
    this.vars.ghost2 = 0;
    this.vars.hp = 1000;
    this.vars.bright = 0;
    this.vars.firstFirst = 0;
    this.vars.deleter = "yes";
    this.vars.animation = "norm";
    this.vars.direction = 90;
    this.vars.gridX = -196;
    this.vars.gridY = -120;
    this.vars.yChange = 0;
  }

  *animate() {
    if (this.toString(this.vars.animation) === "bowl") {
      this.vars.y -= 15;
      this.effects.ghost = this.toNumber(this.vars.ghost2);
      this.effects.brightness = this.toNumber(this.vars.bright);
      this.costume = "pos";
      this.direction = this.toNumber(this.vars.direction);
      this.goto(
        this.toNumber(this.vars.x),
        Math.sin(this.degToRad(this.toNumber(this.vars.direction))) * 2 +
          this.toNumber(this.vars.y)
      );
      this.costume = "Wallnut_body";
      this.size =
        Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1.5)) * 0.5 + 55;
      this.stamp();
      this.vars.y += 15;
    } else {
      this.vars.y -= 40;
      this.effects.ghost = this.toNumber(this.vars.ghost2);
      this.effects.brightness = this.toNumber(this.vars.bright);
      this.costume = "Wallnut_body2";
      this.size =
        Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1.5)) * 0.5 + 55;
      this.direction =
        Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1.5)) * 5 + 90;
      this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
      this.stamp();
      this.costume =
        "blink " +
        this.toString(Math.round(this.toNumber(this.vars.sin) / 10) % 60);
      if (
        this.compare(Math.round(this.toNumber(this.vars.sin) / 10) % 60, 3) > 0
      ) {
        this.costume = "blink 3";
      }
      this.stamp();
      this.vars.y += 40;
    }
  }

  *gridPos() {
    this.vars.i = 1;
    this.vars.gridX = Math.round(this.toNumber(this.vars.x) / 49) * 49;
    this.vars.gridY = Math.round(this.toNumber(this.vars.y) / 60) * 60;
    for (let i = 0; i < this.stage.vars.gridSpaceX.length; i++) {
      if (
        this.compare(
          this.itemOf(this.stage.vars.gridSpaceX, this.vars.i - 1),
          this.vars.gridX
        ) === 0 &&
        this.compare(
          this.itemOf(this.stage.vars.gridSpaceY, this.vars.i - 1),
          this.vars.gridY
        ) === 0
      ) {
        this.vars.grid = this.vars.i;
        return;
      }
      this.vars.i++;
    }
  }

  *startAsClone() {
    this.vars.sin = 0;
    this.vars.state = "grabbed";
    this.vars.first = "yes";
    this.vars.timer = 0;
    this.vars.size = 45;
    this.vars.hp = 1000;
    this.vars.bright = 0;
    this.vars.deleter = "yes";
    this.vars.animation = "norm";
    this.vars.direction = 90;
    this.vars.yChange = 0;
    while (true) {
      this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * 250;
      if (this.toString(this.vars.state) === "grabbed") {
        yield* this.goto2();
        yield* this.gridPos();
      } else {
        if (this.toString(this.vars.first) === "yes") {
          this.vars.deleter = "no";
          this.vars.firstFirst = "yes";
          yield* this.startSound("bowling");
        }
        this.vars.first = "no";
        yield* this.gridPos();
        this.vars.y -= 15;
        this.costume = "pos";
        this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
        this.costume = "col";
        this.vars.y += 15;
        this.visible = true;
        this.effects.ghost = 100;
        if (this.touching(this.sprites["Zombies"].andClones())) {
          if (this.toString(this.vars.firstFirst) === "yes") {
            yield* this.startSound("bowlingimpact");
            this.vars.y -= 15;
            this.costume = "pos";
            this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
            this.costume = "col2";
            this.vars.y += 15;
            this.visible = true;
            this.effects.ghost = 100;
            this.broadcast("bowl");
            if (this.toNumber(this.vars.yChange) === 100) {
              this.vars.yChange = -100;
            } else {
              if (this.toNumber(this.vars.yChange) === -100) {
                this.vars.yChange = 100;
              } else {
                this.vars.yChange = this.random(1, 2);
                if (this.toNumber(this.vars.yChange) === 1) {
                  this.vars.yChange = 100;
                } else {
                  this.vars.yChange = -100;
                }
              }
            }
          }
          this.vars.firstFirst = "no";
        } else {
          this.vars.bright = 0;
          this.vars.firstFirst = "yes";
        }
        if (this.compare(this.vars.grid, this.stage.vars.shovelGrid) === 0) {
          this.vars.bright = 30;
        }
        this.vars.ghost2 = 0;
        yield* this.animate();
        if (this.compare(this.vars.hp, 1) < 0) {
          this.stage.vars.grid.splice(this.vars.grid - 1, 1, "none");
          yield* this.startSound("gulp");
          this.deleteThisClone();
        }
        this.vars.direction += this.toNumber(this.stage.vars.deltaTime) * 300;
        this.vars.x += this.toNumber(this.stage.vars.deltaTime) * 150;
        this.vars.y +=
          this.toNumber(this.stage.vars.deltaTime) *
          this.toNumber(this.vars.yChange);
        if (this.compare(this.vars.x, 270) > 0) {
          this.deleteThisClone();
        }
        if (this.compare(this.vars.y, 120) > 0) {
          this.vars.yChange = -100;
        }
        if (this.compare(this.vars.y, -120) < 0) {
          this.vars.yChange = 100;
        }
      }
      this.vars.y -= 15;
      this.costume = "pos";
      this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
      this.costume = "col2";
      this.vars.y += 15;
      this.visible = true;
      this.effects.ghost = 100;
      yield;
    }
  }

  *goto2() {
    this.vars.ghost2 = 50;
    this.vars.x = this.mouse.x;
    this.vars.y = this.mouse.y;
    this.vars.x = Math.round(this.toNumber(this.vars.x) / 49) * 49;
    this.vars.y = Math.round(this.toNumber(this.vars.y) / 60) * 60;
    if (this.compare(this.vars.y, 120) > 0) {
      this.vars.y = 120;
    }
    if (this.compare(this.vars.y, -120) < 0) {
      this.vars.y = -120;
    }
    if (this.compare(this.vars.x, 196) > 0) {
      this.vars.x = 196;
    }
    if (this.compare(this.vars.x, -196) < 0) {
      this.vars.x = -196;
    }
    this.warp(this.animate)();
    this.vars.ghost2 = 0;
    this.vars.x = this.mouse.x;
    this.vars.y = this.mouse.y;
    this.warp(this.animate)();
    this.vars.x = this.mouse.x;
    this.vars.y = this.mouse.y;
    this.vars.x = Math.round(this.toNumber(this.vars.x) / 49) * 49;
    this.vars.y = Math.round(this.toNumber(this.vars.y) / 60) * 60;
    if (this.compare(this.vars.y, 120) > 0) {
      this.vars.y = 120;
    }
    if (this.compare(this.vars.y, -120) < 0) {
      this.vars.y = -120;
    }
    if (this.compare(this.vars.x, 196) > 0) {
      this.vars.x = 196;
    }
    if (this.compare(this.vars.x, -196) < 0) {
      this.vars.x = -196;
    }
  }

  *whenIReceiveDeletePlant() {
    if (this.compare(this.vars.grid, this.stage.vars.shovelGrid) === 0) {
      yield* this.startSound("plant");
      this.stage.vars.grid.splice(this.vars.grid - 1, 1, "none");
      this.deleteThisClone();
    }
  }

  *whenIReceiveRepairWall() {
    if (
      this.toString(this.vars.deleter) === "no" &&
      this.compare(this.vars.grid, this.stage.vars.wallGrid) === 0
    ) {
      this.deleteThisClone();
    }
  }

  *whenIReceiveDeath() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *startAsClone2() {
    this.visible = false;
    while (true) {
      while (!!this.mouse.down) {
        yield;
      }
      while (!this.mouse.down) {
        yield;
      }
      if (this.compare(this.vars.x, -97) < 0) {
        this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
        yield* this.startSound("plant");
        this.vars.state = "set";
        this.vars.animation = "bowl";
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.vars.grid = 0;
  }

  *whenIReceiveStopGame() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *startAsClone3() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume) * 2;
      yield;
    }
  }

  *startAsClone4() {
    for (let i = 0; i < 1; i++) {
      null;
      yield;
    }
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume) * 2;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume) * 2;
      yield;
    }
  }

  *startAsClone5() {
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume) * 2;
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume) * 2;
      yield;
    }
  }

  *gridPosFinal() {
    this.vars.i = 1;
    this.vars.gridX = Math.round(this.toNumber(this.vars.x) / 49) * 49;
    this.vars.gridY = Math.round(this.toNumber(this.vars.y) / 60) * 60;
    for (let i = 0; i < this.stage.vars.gridSpaceX.length; i++) {
      if (
        this.compare(
          this.itemOf(this.stage.vars.gridSpaceX, this.vars.i - 1),
          this.vars.gridX
        ) === 0 &&
        this.compare(
          this.itemOf(this.stage.vars.gridSpaceY, this.vars.i - 1),
          this.vars.gridY
        ) === 0
      ) {
        this.vars.grid = this.vars.i;
        this.stage.vars.wallGrid = this.vars.grid;
        return;
      }
      this.vars.i++;
    }
  }
}
