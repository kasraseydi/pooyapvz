/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Twin extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "SunFlower_double_petals",
        "./Twin/costumes/SunFlower_double_petals.svg",
        { x: 38, y: 29.5 }
      ),
      new Costume("glow", "./Twin/costumes/glow.svg", {
        x: 49.583340000000106,
        y: 49.58334000000008,
      }),
      new Costume("SunFlower_head", "./Twin/costumes/SunFlower_head.svg", {
        x: 28.5,
        y: 21.5,
      }),
      new Costume("blink 0", "./Twin/costumes/blink 0.svg", {
        x: 12.504416282642097,
        y: 12.504032258064512,
      }),
      new Costume("blink 1", "./Twin/costumes/blink 1.svg", {
        x: 12.499999999999943,
        y: 12.499999999999972,
      }),
      new Costume("blink 2", "./Twin/costumes/blink 2.svg", {
        x: 12.504414999999995,
        y: 12.50403,
      }),
      new Costume("blink 3", "./Twin/costumes/blink 3.svg", { x: 0, y: 0 }),
      new Costume(
        "PeaShooter_stalk_bottom",
        "./Twin/costumes/PeaShooter_stalk_bottom.svg",
        { x: 20.030665204678343, y: 34.90902777777757 }
      ),
      new Costume(
        "PeaShooter_stalk_bottom2",
        "./Twin/costumes/PeaShooter_stalk_bottom2.svg",
        { x: 20.030665204678343, y: 39.90777217049299 }
      ),
      new Costume(
        "PeaShooter_frontleaf",
        "./Twin/costumes/PeaShooter_frontleaf.svg",
        { x: 40.4967320261438, y: 20 }
      ),
      new Costume(
        "PeaShooter_backleaf",
        "./Twin/costumes/PeaShooter_backleaf.svg",
        { x: 22.388888888888914, y: 11 }
      ),
      new Costume(
        "TwinSunflower_stem2",
        "./Twin/costumes/TwinSunflower_stem2.svg",
        { x: 13, y: 25 }
      ),
      new Costume(
        "TwinSunflower_stem1",
        "./Twin/costumes/TwinSunflower_stem1.svg",
        { x: 14, y: 16.5 }
      ),
      new Costume(
        "TwinSunflower_leaf",
        "./Twin/costumes/TwinSunflower_leaf.svg",
        { x: 12.5, y: 9.5 }
      ),
    ];

    this.sounds = [
      new Sound("plant", "./Twin/sounds/plant.mp3"),
      new Sound("chompsoft", "./Twin/sounds/chompsoft.mp3"),
      new Sound("gulp", "./Twin/sounds/gulp.mp3"),
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
      new Trigger(Trigger.CLONE_START, this.startAsClone6),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = -196;
    this.vars.y = -60;
    this.vars.sin = 174.24999999995805;
    this.vars.ghost = 100;
    this.vars.grid = 0;
    this.vars.i = 28;
    this.vars.state = "grabbed";
    this.vars.first = "yes";
    this.vars.timer = 360;
    this.vars.maxTimer = 720;
    this.vars.flower = 0;
    this.vars.ghost2 = 0;
    this.vars.hp = 150;
    this.vars.bright = 0;
  }

  *animate() {
    this.vars.y -= 25;
    this.effects.ghost = this.toNumber(this.vars.ghost2);
    this.effects.brightness = this.toNumber(this.vars.bright);
    this.costume = "PeaShooter_backleaf";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 150)) * 2 + 50;
    this.goto(this.toNumber(this.vars.x) - 1, this.toNumber(this.vars.y) + 5);
    this.stamp();
    this.costume = "PeaShooter_stalk_bottom";
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 10 + 65;
    this.size = 50;
    this.goto(this.toNumber(this.vars.x) + 3, this.toNumber(this.vars.y) + 2);
    this.stamp();
    this.costume = "PeaShooter_stalk_bottom2";
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -10 + 100;
    this.size = 50;
    this.goto(this.toNumber(this.vars.x) + 4, this.toNumber(this.vars.y) + 3);
    this.stamp();
    this.costume = "PeaShooter_frontleaf";
    this.direction = 90;
    this.size = Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 2 + 50;
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.stamp();
    this.costume = "SunFlower_double_petals";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2)) * 2 + 45;
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 2)) * 2 + 90;
    this.goto(
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -3 +
        (this.toNumber(this.vars.x) + 6),
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) * -2 +
        (this.toNumber(this.vars.y) + 30)
    );
    this.stamp();
    this.costume = "SunFlower_head";
    this.direction = 90;
    this.size = 40;
    this.stamp();
    this.costume =
      "blink " +
      this.toString(Math.round(this.toNumber(this.vars.sin) / 10) % 60);
    if (
      this.compare(Math.round(this.toNumber(this.vars.sin) / 10) % 60, 3) > 0
    ) {
      this.costume = "blink 3";
    }
    this.size = 45;
    this.stamp();
    this.costume = "glow";
    this.effects.ghost = this.toNumber(this.vars.ghost);
    this.size = 60;
    this.stamp();
    this.costume = "SunFlower_double_petals";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2)) * 2 + 45;
    this.effects.ghost = this.toNumber(this.vars.ghost2);
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 2)) * 2 + 90;
    this.goto(
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 3 +
        (this.toNumber(this.vars.x) + -6),
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) * -2 +
        (this.toNumber(this.vars.y) + 20)
    );
    this.stamp();
    this.costume = "SunFlower_head";
    this.direction = 90;
    this.size = 40;
    this.stamp();
    this.costume =
      "blink " +
      this.toString(Math.round(this.toNumber(this.vars.sin) / 10) % 60);
    if (
      this.compare(Math.round(this.toNumber(this.vars.sin) / 10) % 60, 3) > 0
    ) {
      this.costume = "blink 3";
    }
    this.size = 45;
    this.stamp();
    this.costume = "glow";
    this.effects.ghost = this.toNumber(this.vars.ghost);
    this.size = 60;
    this.stamp();
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
        this.stage.vars.sunGrid = this.vars.grid;
        return;
      }
      this.vars.i++;
    }
  }

  *startAsClone() {
    this.vars.sin = 0;
    this.vars.state = "grabbed";
    this.vars.first = "yes";
    this.vars.timer = 360;
    this.vars.maxTimer = 720;
    this.vars.hp = 150;
    this.vars.bright = 0;
    while (true) {
      this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * 250;
      if (this.toString(this.vars.state) === "grabbed") {
        yield* this.goto2();
        yield* this.gridPos();
      } else {
        if (this.toString(this.vars.first) === "yes") {
          this.stage.vars.grid.splice(this.vars.grid - 1, 1, "twin");
          this.stage.vars.sun -= 150;
        }
        this.vars.first = "no";
        if (this.toString(this.stage.vars.pauseCertainPlants) === "no") {
          this.vars.timer += this.toNumber(this.stage.vars.deltaTime) * 30;
          if (
            this.compare(
              this.vars.timer,
              this.toNumber(this.vars.maxTimer) + 70
            ) > 0
          ) {
            this.vars.timer = 0;
          } else {
            if (
              this.compare(
                this.vars.timer,
                this.toNumber(this.vars.maxTimer) + 50
              ) > 0
            ) {
              this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * 110;
              if (this.toString(this.vars.flower) === "yes") {
                this.stage.vars.sunQueueX.push(this.toNumber(this.vars.x) + 8);
                this.stage.vars.sunQueueY.push(this.toNumber(this.vars.y) + -1);
                this.stage.vars.sunQueueX.push(this.toNumber(this.vars.x) + -8);
                this.stage.vars.sunQueueY.push(this.toNumber(this.vars.y) + 1);
              }
              this.vars.flower = "no";
            } else {
              if (this.compare(this.vars.timer, this.vars.maxTimer) > 0) {
                this.vars.ghost +=
                  this.toNumber(this.stage.vars.deltaTime) * -50;
              } else {
                this.vars.ghost = 100;
                this.vars.flower = "yes";
              }
            }
          }
        }
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
      "sun"
    ) {
      this.broadcast("replace sun");
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield* this.startSound("plant");
      this.vars.state = "set";
    } else {
      this.stage.vars.timerReset = "twin";
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

  *startAsClone6() {
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }
}
