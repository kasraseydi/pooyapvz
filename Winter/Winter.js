/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Winter extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Cabbagepult_eyebrow",
        "./Winter/costumes/Cabbagepult_eyebrow.svg",
        { x: 8.036722046705506, y: 27.671068318501796 }
      ),
      new Costume(
        "Cabbagepult_head",
        "./Winter/costumes/Cabbagepult_head.svg",
        { x: 32.747853290808706, y: 40.53818771946277 }
      ),
      new Costume("blink 0", "./Winter/costumes/blink 0.svg", {
        x: 7.745454545454493,
        y: 22.4909090909091,
      }),
      new Costume("blink 1", "./Winter/costumes/blink 1.svg", {
        x: 7.75,
        y: 22.477272727272748,
      }),
      new Costume("blink 2", "./Winter/costumes/blink 2.svg", {
        x: 7.745454999999993,
        y: 22.490910000000014,
      }),
      new Costume("blink 3", "./Winter/costumes/blink 3.svg", { x: 0, y: 0 }),
      new Costume(
        "Cabbagepult_basket",
        "./Winter/costumes/Cabbagepult_basket.svg",
        { x: 82.56670220182158, y: 36.554495721591735 }
      ),
      new Costume(
        "Cabbagepult_basket2",
        "./Winter/costumes/Cabbagepult_basket2.svg",
        { x: 89.7402132920462, y: 64.78386551442209 }
      ),
      new Costume(
        "Cabbagepult_basket3",
        "./Winter/costumes/Cabbagepult_basket3.svg",
        { x: 82.5667, y: 24.546159999999986 }
      ),
      new Costume(
        "PeaShooter_frontleaf",
        "./Winter/costumes/PeaShooter_frontleaf.svg",
        { x: 46.591385, y: 17.732010000000002 }
      ),
      new Costume(
        "PeaShooter_frontleaf2",
        "./Winter/costumes/PeaShooter_frontleaf2.svg",
        { x: 46.591433615150635, y: 17.73201147874093 }
      ),
    ];

    this.sounds = [
      new Sound("plant", "./Winter/sounds/plant.mp3"),
      new Sound("chompsoft", "./Winter/sounds/chompsoft.mp3"),
      new Sound("gulp", "./Winter/sounds/gulp.mp3"),
      new Sound("throw", "./Winter/sounds/throw.mp3"),
      new Sound("throw2", "./Winter/sounds/throw2.mp3"),
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
    this.vars.sin = 16009.499999999998;
    this.vars.grid = 0;
    this.vars.i = 10;
    this.vars.state = "set";
    this.vars.first = "no";
    this.vars.timer = 49.259999999999984;
    this.vars.size = 45;
    this.vars.layer = 2;
    this.vars.ghost2 = 0;
    this.vars.hp = 300;
    this.vars.bright = 0;
    this.vars.add = 80;
    this.vars.addSet = 80;
    this.vars.throwFirst = "yes";
    this.vars.showCabbage = "yes";
  }

  *animate() {
    this.vars.y -= 38;
    this.effects.ghost = this.toNumber(this.vars.ghost2);
    this.effects.brightness = this.toNumber(this.vars.bright);
    this.costume = "Cabbagepult_basket";
    this.size = 45;
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 10 +
      (this.toNumber(this.vars.add) + 5);
    this.goto(this.toNumber(this.vars.x) + 0, this.toNumber(this.vars.y) + 22);
    this.stamp();
    if (this.toString(this.vars.showCabbage) === "yes") {
      this.costume = "Cabbagepult_basket2";
      this.direction =
        Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 5)) * 10 +
        (this.toNumber(this.vars.add) + 5);
      this.stamp();
    }
    this.costume = "Cabbagepult_basket3";
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 10 +
      (this.toNumber(this.vars.add) + 5);
    this.stamp();
    this.costume = "PeaShooter_frontleaf";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -0.5 + 45;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x) + 0, this.toNumber(this.vars.y) + 7);
    this.stamp();
    this.costume = "Cabbagepult_head";
    this.size = 60;
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -1 + 90;
    this.goto(this.toNumber(this.vars.x) + 0, this.toNumber(this.vars.y) + 0);
    this.stamp();
    this.costume =
      "blink " +
      this.toString(Math.round((this.toNumber(this.vars.sin) + 0) / 10) % 60);
    if (
      this.compare(
        Math.round((this.toNumber(this.vars.sin) + 0) / 10) % 60,
        3
      ) > 0
    ) {
      this.costume = "blink 3";
    }
    this.stamp();
    this.costume = "Cabbagepult_eyebrow";
    this.size = Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 1 + 60;
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -1 + 90;
    this.goto(this.toNumber(this.vars.x) + 0, this.toNumber(this.vars.y) + 0);
    this.stamp();
    this.costume = "PeaShooter_frontleaf2";
    this.size = Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 1 + 40;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x) + 0, this.toNumber(this.vars.y) + 0);
    this.stamp();
    this.vars.y += 38;
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
        this.stage.vars.winterGrid = this.vars.grid;
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
    this.vars.hp = 300;
    this.vars.bright = 0;
    this.vars.add = 80;
    this.vars.addSet = 80;
    this.vars.showCabbage = "yes";
    while (true) {
      this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * 250;
      if (this.toString(this.vars.state) === "grabbed") {
        yield* this.goto2();
        yield* this.gridPos();
      } else {
        if (this.toString(this.vars.first) === "yes") {
          yield* this.layer();
          this.stage.vars.grid.splice(this.vars.grid - 1, 1, "winter");
          this.stage.vars.sun -= 200;
          this.vars.throwFirst = "yes";
        }
        this.vars.first = "no";
        this.vars.timer += this.toNumber(this.stage.vars.deltaTime) * 30;
        if (this.compare(this.vars.timer, 110) > 0) {
          this.vars.timer = 0;
        } else {
          if (this.compare(this.vars.timer, 93) > 0) {
            if (
              this.toString(
                this.itemOf(this.stage.vars.zombieY, this.vars.layer - 1)
              ) === "yes"
            ) {
              if (this.toString(this.vars.throwFirst) === "yes") {
                this.stage.vars.winterMelonQueueX.push(this.vars.x);
                this.stage.vars.winterMelonQueueY.push(this.vars.y);
                this.vars.showCabbage = "no";
                yield* this.startSound(this.random(4, 5));
              }
              this.vars.throwFirst = "no";
            } else {
              this.vars.timer = 0;
            }
          } else {
            if (this.compare(this.vars.timer, 90) > 0) {
              if (
                this.toString(
                  this.itemOf(this.stage.vars.zombieY, this.vars.layer - 1)
                ) === "yes"
              ) {
                this.vars.addSet = 180;
              } else {
                this.vars.timer = 0;
              }
            } else {
              if (this.compare(this.vars.timer, 75) > 0) {
                if (
                  this.toString(
                    this.itemOf(this.stage.vars.zombieY, this.vars.layer - 1)
                  ) === "yes"
                ) {
                  this.vars.addSet = 60;
                  this.vars.sin = 0;
                } else {
                  this.vars.timer = 0;
                }
              } else {
                if (this.compare(this.vars.timer, 6) > 0) {
                  this.vars.addSet = 80;
                  this.vars.throwFirst = "yes";
                  this.vars.showCabbage = "yes";
                } else {
                  this.vars.addSet = 80;
                  this.vars.throwFirst = "yes";
                }
              }
            }
          }
        }
        this.vars.size +=
          (45 - this.toNumber(this.vars.size)) /
          (0.1 / this.toNumber(this.stage.vars.deltaTime));
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
        this.vars.add +=
          (this.toNumber(this.vars.addSet) - this.toNumber(this.vars.add)) /
          (0.06 / this.toNumber(this.stage.vars.deltaTime));
      }
      yield;
    }
  }

  *layer() {
    if (this.toNumber(this.vars.y) === 120) {
      this.vars.layer = 1;
    } else {
      if (this.toNumber(this.vars.y) === 60) {
        this.vars.layer = 2;
      } else {
        if (this.toNumber(this.vars.y) === 0) {
          this.vars.layer = 3;
        } else {
          if (this.toNumber(this.vars.y) === -60) {
            this.vars.layer = 4;
          } else {
            if (this.toNumber(this.vars.y) === -120) {
              this.vars.layer = 5;
            } else {
              null;
            }
          }
        }
      }
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
      "melon"
    ) {
      this.broadcast("replace melon");
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield* this.startSound("plant");
      this.vars.state = "set";
    } else {
      this.stage.vars.timerReset = "winter";
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
