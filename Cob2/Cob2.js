/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cob2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("blink 0", "./Cob2/costumes/blink 0.svg", {
        x: -26.5,
        y: 37.669725,
      }),
      new Costume("blink 1", "./Cob2/costumes/blink 1.svg", {
        x: -26.428104575163445,
        y: 37.660130718954264,
      }),
      new Costume("blink 2", "./Cob2/costumes/blink 2.svg", {
        x: -26.5,
        y: 37.669725,
      }),
      new Costume("blink 3", "./Cob2/costumes/blink 3.svg", { x: 0, y: 0 }),
      new Costume("CobCannon_wheel", "./Cob2/costumes/CobCannon_wheel.svg", {
        x: 33.5,
        y: 36,
      }),
      new Costume("CobCannon_log", "./Cob2/costumes/CobCannon_log.svg", {
        x: 89,
        y: 20.5,
      }),
      new Costume("CobCannon_husk1", "./Cob2/costumes/CobCannon_husk1.svg", {
        x: 24.83332999999999,
        y: 59.66664500000002,
      }),
      new Costume("CobCannon_husk2", "./Cob2/costumes/CobCannon_husk2.svg", {
        x: -44.16665666666654,
        y: 46.666666666666686,
      }),
      new Costume("CobCannon_cob", "./Cob2/costumes/CobCannon_cob.svg", {
        x: 18.666674999999998,
        y: 47.333325,
      }),
      new Costume("tail", "./Cob2/costumes/tail.svg", {
        x: 54.5,
        y: 15.499995000000013,
      }),
      new Costume("col", "./Cob2/costumes/col.svg", {
        x: 19.49999999999983,
        y: 8.750000000000028,
      }),
      new Costume("CobCannon_target", "./Cob2/costumes/CobCannon_target.svg", {
        x: 36.47900763358783,
        y: 29.351145038167942,
      }),
    ];

    this.sounds = [
      new Sound("plant", "./Cob2/sounds/plant.mp3"),
      new Sound("chompsoft", "./Cob2/sounds/chompsoft.mp3"),
      new Sound("gulp", "./Cob2/sounds/gulp.mp3"),
      new Sound("coblaunch", "./Cob2/sounds/coblaunch.mp3"),
      new Sound("shoop", "./Cob2/sounds/shoop.mp3"),
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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(Trigger.CLONE_START, this.startAsClone6),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = -196;
    this.vars.y = -120;
    this.vars.sin = 157.49999999985675;
    this.vars.grid = 0;
    this.vars.i = 37;
    this.vars.state = "grabbed";
    this.vars.first = "yes";
    this.vars.timer = 0;
    this.vars.size = 45;
    this.vars.ghost2 = 0;
    this.vars.hp = 500;
    this.vars.bright = 0;
    this.vars.firstFirst = 0;
    this.vars.deleter = "yes";
    this.vars.direction = 90;
    this.vars.cob = "yes";
    this.vars.cobState = 0;
    this.vars.clicked = 0;
    this.vars.click = 0;
    this.vars.directionSet = 90;
    this.vars.cobMove = 0;
    this.vars.cobMoveChange = 0;
    this.vars.cobShow = "yes";
    this.vars.selectedX = 0;
    this.vars.selectedY = 0;
    this.vars.cobSize = 0;
    this.vars.shoopFirst = 0;
    this.vars.type = "normal";
  }

  *animate() {
    this.vars.y -= 35;
    this.effects.ghost = this.toNumber(this.vars.ghost2);
    this.effects.brightness = this.toNumber(this.vars.bright);
    this.costume = "CobCannon_wheel";
    this.size = 46;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x) + 5, this.toNumber(this.vars.y) + 25);
    this.stamp();
    this.costume = "CobCannon_wheel";
    this.size = 46;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x) + 45, this.toNumber(this.vars.y) + 25);
    this.stamp();
    this.costume = "CobCannon_log";
    this.size = 46;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x) + 25, this.toNumber(this.vars.y) + 20);
    this.stamp();
    this.costume = "CobCannon_husk2";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 10)) * 1 +
      this.toNumber(this.vars.size);
    this.direction = this.toNumber(this.vars.direction);
    this.goto(this.toNumber(this.vars.x) + -6, this.toNumber(this.vars.y) + 20);
    this.stamp();
    if (this.toString(this.vars.cobShow) === "yes") {
      this.costume = "CobCannon_cob";
      this.size =
        Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 30)) * 1 +
        (this.toNumber(this.vars.size) - this.toNumber(this.vars.cobSize));
      this.direction = this.toNumber(this.vars.direction);
      this.goto(
        this.toNumber(this.vars.x) + -6,
        this.toNumber(this.vars.y) + 20
      );
      this.move(this.toNumber(this.vars.cobMove));
      if (this.toString(this.vars.cobState) === "target") {
        this.effects.brightness += 40;
      }
      this.stamp();
      if (this.toString(this.vars.cobState) === "target") {
        this.effects.brightness -= 40;
      }
    }
    this.costume = "CobCannon_husk1";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 1 +
      this.toNumber(this.vars.size);
    this.direction = this.toNumber(this.vars.direction);
    this.goto(this.toNumber(this.vars.x) + -6, this.toNumber(this.vars.y) + 20);
    this.stamp();
    this.costume = "tail";
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 3 +
      this.toNumber(this.vars.direction);
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
    this.costume = "CobCannon_log";
    this.size = 46;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x) + 20, this.toNumber(this.vars.y) + 8);
    this.stamp();
    this.costume = "CobCannon_wheel";
    this.size = 46;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x) + -4, this.toNumber(this.vars.y) + 8);
    this.stamp();
    this.costume = "CobCannon_wheel";
    this.size = 46;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x) + 40, this.toNumber(this.vars.y) + 8);
    this.stamp();
    this.vars.y += 35;
    if (this.toString(this.vars.cobState) === "target") {
      this.effects.ghost = 0;
      this.costume = "CobCannon_target";
      this.size = 70;
      this.direction = 90;
      this.goto(this.mouse.x, this.mouse.y);
      this.vars.selectedX = this.x;
      this.vars.selectedY = this.y;
      this.vars.type = "delete";
      this.createClone();
      this.vars.type = "normal";
    }
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
        this.stage.vars.cobGrid1 = this.vars.grid;
        this.stage.vars.cobGrid2 = this.toNumber(this.vars.grid) + 1;
        return;
      }
      this.vars.i++;
    }
  }

  *startAsClone() {
    if (this.toString(this.vars.type) === "delete") {
      this.visible = true;
      for (let i = 0; i < 1; i++) {
        null;
        yield;
      }
      this.deleteThisClone();
    } else {
      this.vars.sin = 0;
      this.vars.state = "grabbed";
      this.vars.first = "yes";
      this.vars.timer = 0;
      this.vars.size = 45;
      this.vars.hp = 500;
      this.vars.bright = 0;
      this.vars.deleter = "yes";
      this.vars.direction = 90;
      this.vars.directionSet = 90;
      this.vars.cobMove = 0;
      this.vars.cobShow = "yes";
      this.visible = true;
      this.vars.cob = "yes";
      this.vars.cobSize = 0;
      while (true) {
        this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * 250;
        if (this.toString(this.vars.state) === "grabbed") {
          yield* this.goto2();
          yield* this.gridPos();
        } else {
          if (this.toString(this.vars.first) === "yes") {
            this.vars.deleter = "no";
            this.stage.vars.grid.splice(this.vars.grid - 1, 1, "cob");
            this.stage.vars.grid.splice(
              this.toNumber(this.vars.grid),
              1,
              "cob"
            );
            this.stage.vars.sun -= 500;
            this.vars.firstFirst = "yes";
            this.vars.cobState = "down";
            this.vars.clicked = "no";
            this.vars.click = "no";
            this.vars.shoopFirst = "no";
          }
          this.vars.first = "no";
          if (this.toString(this.vars.cobState) === "fire") {
            this.vars.timer += this.toNumber(this.stage.vars.deltaTime) * 30;
            if (this.compare(this.vars.timer, 60) > 0) {
              this.vars.directionSet = 90;
              this.vars.cobShow = "no";
              this.vars.cobState = "recharge";
              this.vars.timer = 0;
            } else {
              if (this.compare(this.vars.timer, 32) > 0) {
                this.vars.size +=
                  (46 - this.toNumber(this.vars.size)) /
                  (0.2 / this.toNumber(this.stage.vars.deltaTime));
              } else {
                if (this.compare(this.vars.timer, 30) > 0) {
                  this.vars.cobMoveChange = 350;
                  this.vars.size +=
                    (55 - this.toNumber(this.vars.size)) /
                    (0.1 / this.toNumber(this.stage.vars.deltaTime));
                  if (this.toString(this.vars.firstFirst) === "yes") {
                    yield* this.startSound("coblaunch");
                    this.stage.vars.cobX = this.vars.selectedX;
                    this.stage.vars.cobY = this.vars.selectedY;
                    this.sprites["Cob"].createClone();
                  }
                  this.vars.firstFirst = "no";
                } else {
                  if (this.compare(this.vars.timer, 20) > 0) {
                    this.vars.size +=
                      (40 - this.toNumber(this.vars.size)) /
                      (0.2 / this.toNumber(this.stage.vars.deltaTime));
                  } else {
                    this.vars.directionSet = 0;
                  }
                }
              }
            }
          } else {
            if (this.toString(this.vars.cobState) === "recharge") {
              this.vars.size +=
                (46 - this.toNumber(this.vars.size)) /
                (0.2 / this.toNumber(this.stage.vars.deltaTime));
              this.vars.cobSize = 46;
              this.vars.shoopFirst = "yes";
              if (this.toString(this.stage.vars.pauseCertainPlants) === "no") {
                this.vars.timer +=
                  this.toNumber(this.stage.vars.deltaTime) * 30;
              }
              this.vars.cobMove = 0;
              this.vars.cobMoveChange = 0;
              if (this.compare(this.vars.timer, 1080) > 0) {
                this.vars.cobState = "down";
                this.vars.cobShow = "yes";
                this.vars.firstFirst = "yes";
              }
            } else {
              if (this.toString(this.vars.shoopFirst) === "yes") {
                yield* this.startSound("shoop");
              }
              this.vars.size +=
                (46 - this.toNumber(this.vars.size)) /
                (0.2 / this.toNumber(this.stage.vars.deltaTime));
              this.vars.cobSize +=
                (0 - this.toNumber(this.vars.cobSize)) /
                (0.13 / this.toNumber(this.stage.vars.deltaTime));
              this.vars.timer = 0;
              this.vars.firstFirst = "yes";
              this.vars.shoopFirst = "no";
            }
          }
          this.vars.direction +=
            (this.toNumber(this.vars.directionSet) -
              this.toNumber(this.vars.direction)) /
            (0.2 / this.toNumber(this.stage.vars.deltaTime));
          this.vars.cobMove +=
            this.toNumber(this.stage.vars.deltaTime) *
            this.toNumber(this.vars.cobMoveChange);
          if (
            this.toString(
              this.itemOf(this.stage.vars.zombieGrid, this.vars.grid - 1)
            ) === "zomb" ||
            this.toString(
              this.itemOf(
                this.stage.vars.zombieGrid,
                this.toNumber(this.vars.grid)
              )
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
          if (
            this.compare(this.vars.grid, this.stage.vars.shovelGrid) === 0 ||
            this.compare(
              this.toNumber(this.vars.grid) + 1,
              this.stage.vars.shovelGrid
            ) === 0
          ) {
            this.vars.bright = 30;
          }
          this.vars.ghost2 = 0;
          yield* this.animate();
          if (this.compare(this.vars.hp, 1) < 0) {
            this.stage.vars.grid.splice(this.vars.grid - 1, 1, "none");
            this.stage.vars.grid.splice(
              this.toNumber(this.vars.grid),
              1,
              "none"
            );
            yield* this.startSound("gulp");
            this.deleteThisClone();
          }
          yield* this.cob();
          this.vars.clicked = "no";
        }
        this.effects.ghost = 100;
        yield;
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
    if (
      this.compare(this.vars.grid, this.stage.vars.shovelGrid) === 0 ||
      this.compare(
        this.toNumber(this.vars.grid) + 1,
        this.stage.vars.shovelGrid
      ) === 0
    ) {
      yield* this.startSound("plant");
      this.stage.vars.grid.splice(this.vars.grid - 1, 1, "none");
      this.stage.vars.grid.splice(this.toNumber(this.vars.grid), 1, "none");
      this.deleteThisClone();
    }
  }

  *whenIReceiveDeath() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *startAsClone2() {
    if (!(this.toString(this.vars.type) === "delete")) {
      while (!!this.mouse.down) {
        yield;
      }
      while (!this.mouse.down) {
        yield;
      }
      if (
        this.toString(this.itemOf(this.stage.vars.grid, this.vars.grid - 1)) ===
          "corn" &&
        this.toString(
          this.itemOf(this.stage.vars.grid, this.toNumber(this.vars.grid))
        ) === "corn" &&
        this.compare(this.vars.x, 196) < 0
      ) {
        this.broadcast("replace corn");
        this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
        yield* this.startSound("plant");
        this.vars.state = "set";
      } else {
        this.stage.vars.timerReset = "cob";
        this.broadcast("reset timer");
        this.deleteThisClone();
      }
    }
  }

  *cob() {
    this.effects.ghost = 100;
    this.costume = "col";
    this.size = 100;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    if (this.toString(this.stage.vars.pauseCertainPlants) === "no") {
      if (this.mouse.down) {
        if (this.toString(this.vars.click) === "yes") {
          this.vars.clicked = "yes";
        }
        this.vars.click = "no";
      } else {
        this.vars.click = "yes";
      }
      if (
        this.touching("mouse") &&
        this.toString(this.vars.clicked) === "yes"
      ) {
        if (this.toString(this.vars.cobState) === "down") {
          this.vars.cobState = "target";
        } else {
          if (this.toString(this.vars.cobState) === "target") {
            this.vars.cobState = "down";
          } else {
            null;
          }
        }
      } else {
        if (this.toString(this.vars.clicked) === "yes") {
          if (this.toString(this.vars.cobState) === "target") {
            this.vars.cobState = "fire";
          } else {
            null;
          }
        }
      }
    } else {
      if (this.toString(this.vars.cobState) === "target") {
        this.vars.cobState = "down";
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

  *whenGreenFlagClicked2() {
    this.vars.type = "normal";
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

  *whenGreenFlagClicked3() {
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
