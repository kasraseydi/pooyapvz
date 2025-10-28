/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wall extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Wallnut_body", "./Wall/costumes/Wallnut_body.svg", {
        x: 54.04761904761901,
        y: 96,
      }),
      new Costume("Wallnut_cracked1", "./Wall/costumes/Wallnut_cracked1.svg", {
        x: 54.0572752084656,
        y: 95.98084188258883,
      }),
      new Costume("Wallnut_cracked2", "./Wall/costumes/Wallnut_cracked2.svg", {
        x: 54.046625000000006,
        y: 95.99847,
      }),
      new Costume("blink 0", "./Wall/costumes/blink 0.svg", {
        x: 23.961405310964352,
        y: 73.0329534170216,
      }),
      new Costume("blink 1", "./Wall/costumes/blink 1.svg", {
        x: 23.983325000000008,
        y: 73.01667,
      }),
      new Costume("blink 2", "./Wall/costumes/blink 2.svg", {
        x: 23.961405000000013,
        y: 73.032955,
      }),
      new Costume("blink 3", "./Wall/costumes/blink 3.svg", { x: 0, y: 0 }),
    ];

    this.sounds = [
      new Sound("plant", "./Wall/sounds/plant.mp3"),
      new Sound("chompsoft", "./Wall/sounds/chompsoft.mp3"),
      new Sound("gulp", "./Wall/sounds/gulp.mp3"),
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

    this.audioEffects.volume = 50;

    this.vars.x = -196;
    this.vars.y = 60;
    this.vars.sin = 746.2500000000246;
    this.vars.grid = 0;
    this.vars.i = 46;
    this.vars.state = "set";
    this.vars.first = "no";
    this.vars.timer = 41.40000000000157;
    this.vars.size = 45.00000272872702;
    this.vars.ghost2 = 0;
    this.vars.hp = 0;
    this.vars.bright = 0;
    this.vars.firstFirst = 0;
    this.vars.deleter = "no";
  }

  *animate() {
    this.vars.y -= 40;
    this.effects.ghost = this.toNumber(this.vars.ghost2);
    this.effects.brightness = this.toNumber(this.vars.bright);
    if (this.compare(this.vars.hp, 700) > 0) {
      this.costume = "Wallnut_body";
    } else {
      if (this.compare(this.vars.hp, 350) > 0) {
        this.costume = "Wallnut_cracked1";
      } else {
        this.costume = "Wallnut_cracked2";
      }
    }
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

  *gridPos() {
    this.vars.i = 1;
    for (let i = 0; i < this.stage.vars.gridSpaceX.length; i++) {
      if (
        this.compare(
          this.itemOf(this.stage.vars.gridSpaceX, this.vars.i - 1),
          this.vars.x
        ) === 0 &&
        this.compare(
          this.itemOf(this.stage.vars.gridSpaceY, this.vars.i - 1),
          this.vars.y
        ) === 0
      ) {
        this.vars.grid = this.vars.i;
        this.stage.vars.wallGrid = this.vars.grid;
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
    while (true) {
      this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * 250;
      if (this.toString(this.vars.state) === "grabbed") {
        yield* this.goto2();
        yield* this.gridPos();
      } else {
        if (this.toString(this.vars.first) === "yes") {
          this.vars.deleter = "no";
          this.stage.vars.grid.splice(this.vars.grid - 1, 1, "wall");
          this.stage.vars.sun -= 50;
          this.vars.firstFirst = "yes";
        }
        this.vars.first = "no";
        if (
          this.toString(
            this.itemOf(this.stage.vars.zombieGrid, this.vars.grid - 1)
          ) === "zomb"
        ) {
          this.vars.hp += this.toNumber(this.stage.vars.deltaTime) * -30;
          this.vars.bright +=
            (0 - this.toNumber(this.vars.bright)) /
            (0.2 / this.toNumber(this.stage.vars.deltaTime));
          if (Math.round(this.toNumber(this.vars.bright)) === 0) {
            this.vars.bright = 50;
            yield* this.startSound("chompsoft");
          }
        } else {
          this.vars.bright = 0;
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
      }
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
    while (!!this.mouse.down) {
      yield;
    }
    while (!this.mouse.down) {
      yield;
    }
    if (
      this.toString(this.itemOf(this.stage.vars.grid, this.vars.grid - 1)) ===
      "wall"
    ) {
      this.broadcast("repair wall");
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield* this.startSound("plant");
      this.vars.state = "set";
    } else {
      if (
        this.toString(this.itemOf(this.stage.vars.grid, this.vars.grid - 1)) ===
        "none"
      ) {
        this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
        yield* this.startSound("plant");
        this.vars.state = "set";
      } else {
        this.stage.vars.timerReset = "wall";
        this.broadcast("reset timer");
        this.deleteThisClone();
      }
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
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }

  *startAsClone4() {
    for (let i = 0; i < 1; i++) {
      null;
      yield;
    }
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }

  *startAsClone5() {
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }
}
