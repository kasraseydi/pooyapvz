/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Blover extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Blover_dirt_back",
        "./Blover/costumes/Blover_dirt_back.svg",
        { x: 6, y: 4.999995000000013 }
      ),
      new Costume(
        "Blover_dirt_front",
        "./Blover/costumes/Blover_dirt_front.svg",
        { x: 7.5, y: 2 }
      ),
      new Costume("Blover_head", "./Blover/costumes/Blover_head.svg", {
        x: 28,
        y: 65.80000000000001,
      }),
      new Costume("Blover_head2", "./Blover/costumes/Blover_head2.svg", {
        x: 28.03809523809508,
        y: 65.81904761904761,
      }),
      new Costume("Blover_stem2", "./Blover/costumes/Blover_stem2.svg", {
        x: 16.791210000000035,
        y: 37.785709999999995,
      }),
      new Costume("Blover_petal", "./Blover/costumes/Blover_petal.svg", {
        x: 0.8714285714293055,
        y: 16.5,
      }),
    ];

    this.sounds = [
      new Sound("plant", "./Blover/sounds/plant.mp3"),
      new Sound("chompsoft", "./Blover/sounds/chompsoft.mp3"),
      new Sound("gulp", "./Blover/sounds/gulp.mp3"),
      new Sound("blover", "./Blover/sounds/blover.mp3"),
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "delete plant" },
        this.whenIReceiveDeletePlant
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
    this.vars.y = -120;
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
    this.vars.direction = 0;
    this.vars.add = 0;
    this.vars.xAdd = 0;
  }

  *animate() {
    this.vars.y -= 40;
    this.effects.ghost = this.toNumber(this.vars.ghost2);
    this.effects.brightness = this.toNumber(this.vars.bright);
    this.costume = "Blover_dirt_back";
    this.size = 50;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.stamp();
    this.costume = "Blover_stem2";
    this.size = 50;
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 2 +
      this.toNumber(this.vars.add);
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.stamp();
    this.costume = "Blover_dirt_front";
    this.size = 50;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.stamp();
    this.costume = "Blover_petal";
    this.size = 60;
    this.direction = this.toNumber(this.vars.direction);
    this.goto(
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 2 +
        (this.toNumber(this.vars.x) + this.toNumber(this.vars.xAdd)),
      this.toNumber(this.vars.y) + 24
    );
    this.move(6);
    this.stamp();
    this.direction = this.toNumber(this.vars.direction) + 120;
    this.goto(
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 2 +
        (this.toNumber(this.vars.x) + this.toNumber(this.vars.xAdd)),
      this.toNumber(this.vars.y) + 24
    );
    this.move(6);
    this.stamp();
    this.direction = this.toNumber(this.vars.direction) + -120;
    this.goto(
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 2 +
        (this.toNumber(this.vars.x) + this.toNumber(this.vars.xAdd)),
      this.toNumber(this.vars.y) + 24
    );
    this.move(6);
    this.stamp();
    this.costume = "Blover_head";
    this.size = 50;
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 2 +
      this.toNumber(this.vars.add);
    if (this.compare(this.vars.timer, 30) > 0) {
      this.costume = "Blover_head2";
    }
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
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
    this.vars.hp = 10;
    this.vars.bright = 0;
    this.vars.deleter = "yes";
    this.vars.direction = 0;
    this.vars.add = 90;
    this.vars.xAdd = -4;
    while (true) {
      this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * 250;
      if (this.toString(this.vars.state) === "grabbed") {
        yield* this.goto2();
        yield* this.gridPos();
      } else {
        if (this.toString(this.vars.first) === "yes") {
          this.vars.deleter = "no";
          this.stage.vars.grid.splice(this.vars.grid - 1, 1, "blover");
          this.stage.vars.sun -= 75;
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
        if (this.toString(this.stage.vars.pauseCertainPlants) === "no") {
          this.vars.timer += this.toNumber(this.stage.vars.deltaTime) * 30;
          if (this.compare(this.vars.timer, 30) > 0) {
            if (this.toString(this.vars.firstFirst) === "yes") {
              this.broadcast("blover");
              yield* this.startSound("blover");
            }
            this.vars.direction +=
              this.toNumber(this.stage.vars.deltaTime) * 350;
            this.vars.add +=
              (120 - this.toNumber(this.vars.add)) /
              (0.1 / this.toNumber(this.stage.vars.deltaTime));
            this.vars.xAdd +=
              (8 - this.toNumber(this.vars.xAdd)) /
              (0.1 / this.toNumber(this.stage.vars.deltaTime));
            this.vars.firstFirst = "no";
          }
          if (this.compare(this.vars.timer, 90) > 0) {
            this.stage.vars.grid.splice(this.vars.grid - 1, 1, "none");
            this.deleteThisClone();
          }
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
      "none"
    ) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield* this.startSound("plant");
      this.vars.state = "set";
    } else {
      this.stage.vars.timerReset = "blover";
      this.broadcast("reset timer");
      this.deleteThisClone();
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
