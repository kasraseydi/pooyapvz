/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Potato extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("blink 0", "./Potato/costumes/blink 0.svg", {
        x: 10.96918500000001,
        y: 4.810769999999991,
      }),
      new Costume("blink 1", "./Potato/costumes/blink 1.svg", {
        x: 11,
        y: 4.785705000000007,
      }),
      new Costume("blink 2", "./Potato/costumes/blink 2.svg", {
        x: 10.96918500000001,
        y: 4.810769999999991,
      }),
      new Costume("blink 3", "./Potato/costumes/blink 3.svg", {
        x: 11,
        y: 4.7499850000000094,
      }),
      new Costume("PotatoMine_stem", "./Potato/costumes/PotatoMine_stem.svg", {
        x: 22.5,
        y: 8.5,
      }),
      new Costume("unarmed rock", "./Potato/costumes/unarmed rock.svg", {
        x: 24.25,
        y: 3.899999999999892,
      }),
      new Costume("armed rock", "./Potato/costumes/armed rock.svg", {
        x: 46.5,
        y: -4.000000000000028,
      }),
      new Costume(
        "PotatoMine_mashed",
        "./Potato/costumes/PotatoMine_mashed.svg",
        { x: 66, y: 46.5 }
      ),
      new Costume("light 0", "./Potato/costumes/light 0.svg", {
        x: 21.888888888888857,
        y: 23,
      }),
      new Costume("light 1", "./Potato/costumes/light 1.svg", {
        x: 12.888888888888857,
        y: 14,
      }),
      new Costume("PotatoMine_body", "./Potato/costumes/PotatoMine_body.svg", {
        x: 50.5,
        y: 33,
      }),
    ];

    this.sounds = [
      new Sound("plant", "./Potato/sounds/plant.mp3"),
      new Sound("chompsoft", "./Potato/sounds/chompsoft.mp3"),
      new Sound("gulp", "./Potato/sounds/gulp.mp3"),
      new Sound("potato_mine", "./Potato/sounds/potato_mine.mp3"),
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
    this.vars.armed = 0;
  }

  *animate() {
    this.vars.y -= 25;
    if (this.toString(this.vars.armed) === "no") {
      this.effects.ghost = this.toNumber(this.vars.ghost2);
      this.effects.brightness = this.toNumber(this.vars.bright);
      this.costume = "PotatoMine_stem";
      this.size =
        Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 2 + 60;
      this.direction = 90;
      this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
      this.stamp();
      this.costume = "unarmed rock";
      this.size = 65;
      this.stamp();
      this.costume = "light 1";
      this.size =
        Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 2 + 55;
      this.direction = 90;
      this.goto(
        this.toNumber(this.vars.x),
        Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 1 +
          (this.toNumber(this.vars.y) + 10)
      );
      this.stamp();
    } else {
      this.effects.ghost = this.toNumber(this.vars.ghost2);
      this.effects.brightness = this.toNumber(this.vars.bright);
      this.costume = "PotatoMine_body";
      this.size =
        Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 2 + 50;
      this.direction = 90;
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
      this.costume = "armed rock";
      this.size = 65;
      this.stamp();
      this.costume =
        "light " +
        this.toString(Math.round(this.toNumber(this.vars.sin) / 100) % 2);
      this.size =
        Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 2 + 55;
      this.direction = 90;
      this.goto(
        this.toNumber(this.vars.x),
        Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 1 +
          (this.toNumber(this.vars.y) + 18)
      );
      this.stamp();
    }
    this.vars.y += 25;
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
    this.vars.hp = 200;
    this.vars.bright = 0;
    this.vars.armed = "yes";
    while (true) {
      this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * 250;
      if (this.toString(this.vars.state) === "grabbed") {
        yield* this.goto2();
        yield* this.gridPos();
      } else {
        if (this.toString(this.vars.first) === "yes") {
          this.vars.armed = "no";
          this.stage.vars.grid.splice(this.vars.grid - 1, 1, "mine");
          this.stage.vars.sun -= 25;
          this.vars.firstFirst = "yes";
        }
        this.vars.first = "no";
        if (
          this.toString(
            this.itemOf(this.stage.vars.zombieGrid, this.vars.grid - 1)
          ) === "zomb" &&
          this.toString(this.vars.armed) === "yes"
        ) {
          yield* this.finalGrid();
          this.stage.vars.particleX = this.vars.x;
          this.stage.vars.particleY = this.vars.y;
          this.broadcast("potato mine explode");
          this.stage.vars.grid.splice(this.vars.grid - 1, 1, "none");
          yield* this.startSound("potato_mine");
          this.stage.vars.particleQueueType.push("mashed");
          this.stage.vars.particleQueueX.push(this.vars.x);
          this.stage.vars.particleQueueY.push(this.vars.y);
          this.stage.vars.particleQueueType.push("potato");
          this.stage.vars.particleQueueX.push(this.vars.x);
          this.stage.vars.particleQueueY.push(this.vars.y);
          this.deleteThisClone();
        }
        this.vars.bright = 0;
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
          if (this.compare(this.vars.timer, 450) > 0) {
            this.vars.armed = "yes";
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
      this.stage.vars.timerReset = "potato";
      this.broadcast("reset timer");
      this.deleteThisClone();
    }
  }

  *whenGreenFlagClicked() {
    this.vars.grid = 0;
  }

  *finalGrid() {
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
        this.stage.vars.potatoGrid = this.vars.grid;
        return;
      }
      this.vars.i++;
    }
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
