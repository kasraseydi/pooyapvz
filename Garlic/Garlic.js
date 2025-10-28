/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Garlic extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("blink 0", "./Garlic/costumes/blink 0.svg", {
        x: 10.500004999999987,
        y: 36.12726000000001,
      }),
      new Costume("blink 1", "./Garlic/costumes/blink 1.svg", {
        x: 10.517124999999993,
        y: 36.128569999999996,
      }),
      new Costume("blink 2", "./Garlic/costumes/blink 2.svg", {
        x: 10.500004999999987,
        y: 36.12726000000001,
      }),
      new Costume("blink 3", "./Garlic/costumes/blink 3.svg", { x: 0, y: 0 }),
      new Costume("stink 0", "./Garlic/costumes/stink 0.svg", {
        x: 9.5,
        y: 30,
      }),
      new Costume("stink 1", "./Garlic/costumes/stink 1.svg", {
        x: 9.5,
        y: 30,
      }),
      new Costume("stink 2", "./Garlic/costumes/stink 2.svg", {
        x: 9.5,
        y: 30,
      }),
      new Costume("stink 3", "./Garlic/costumes/stink 3.svg", {
        x: 9.5,
        y: 30,
      }),
      new Costume("stink 4", "./Garlic/costumes/stink 4.svg", { x: 0, y: 0 }),
      new Costume("Garlic_body1", "./Garlic/costumes/Garlic_body1.svg", {
        x: 30.5,
        y: 56.10668000000001,
      }),
      new Costume("Garlic_body2", "./Garlic/costumes/Garlic_body2.svg", {
        x: 30.5,
        y: 56.117963968623,
      }),
      new Costume("Garlic_body3", "./Garlic/costumes/Garlic_body3.svg", {
        x: 30.5,
        y: 56.10000000000002,
      }),
      new Costume("Garlic_stem1", "./Garlic/costumes/Garlic_stem1.svg", {
        x: 11.50179,
        y: 62.08713,
      }),
    ];

    this.sounds = [
      new Sound("plant", "./Garlic/sounds/plant.mp3"),
      new Sound("chompsoft", "./Garlic/sounds/chompsoft.mp3"),
      new Sound("gulp", "./Garlic/sounds/gulp.mp3"),
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
        { name: "repair garlic" },
        this.whenIReceiveRepairGarlic
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
  }

  *animate() {
    this.vars.y -= 35;
    this.effects.ghost = this.toNumber(this.vars.ghost2);
    this.effects.brightness = this.toNumber(this.vars.bright);
    if (this.compare(this.vars.hp, 333) > 0) {
      this.costume = "Garlic_body1";
    } else {
      if (this.compare(this.vars.hp, 166) > 0) {
        this.costume = "Garlic_body2";
      } else {
        this.costume = "Garlic_body3";
      }
    }
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) * 2 + 60;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.stamp();
    this.costume = "Garlic_stem1";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) * 3 + 60;
    if (this.compare(this.vars.hp, 166) > 0) {
      this.stamp();
    }
    this.costume =
      "blink " +
      this.toString(Math.round(this.toNumber(this.vars.sin) / 10) % 60);
    if (
      this.compare(Math.round(this.toNumber(this.vars.sin) / 10) % 60, 3) > 0
    ) {
      this.costume = "blink 3";
    }
    this.stamp();
    this.costume =
      "stink " +
      this.toString(Math.round(this.toNumber(this.vars.sin) / 30) % 30);
    if (
      this.compare(Math.round(this.toNumber(this.vars.sin) / 30) % 30, 4) > 0
    ) {
      this.costume = "stink 4";
    }
    this.goto(this.toNumber(this.vars.x) - 10, this.toNumber(this.vars.y) + 30);
    this.stamp();
    this.costume =
      "stink " +
      this.toString(Math.round((this.toNumber(this.vars.sin) - 150) / 30) % 30);
    if (
      this.compare(
        Math.round((this.toNumber(this.vars.sin) - 150) / 30) % 30,
        4
      ) > 0
    ) {
      this.costume = "stink 4";
    }
    this.goto(this.toNumber(this.vars.x) + 10, this.toNumber(this.vars.y) + 30);
    this.stamp();
    this.vars.y += 35;
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
        this.stage.vars.garlicGrid = this.vars.grid;
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
    this.vars.hp = 500;
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
          this.stage.vars.grid.splice(this.vars.grid - 1, 1, "garlic");
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

  *whenIReceiveRepairGarlic() {
    if (
      this.toString(this.vars.deleter) === "no" &&
      this.compare(this.vars.grid, this.stage.vars.garlicGrid) === 0
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
      "garlic"
    ) {
      this.broadcast("repair garlic");
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
        this.stage.vars.timerReset = "garlic";
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
}
