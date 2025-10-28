/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Star2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Starfruit_body", "./Star2/costumes/Starfruit_body.svg", {
        x: 52,
        y: 44,
      }),
      new Costume("blink 0", "./Star2/costumes/blink 0.svg", {
        x: 14.99616806173458,
        y: 21.042540855939507,
      }),
      new Costume("blink 1", "./Star2/costumes/blink 1.svg", {
        x: 14.99616806173458,
        y: 21.042540855939507,
      }),
      new Costume("blink 2", "./Star2/costumes/blink 2.svg", {
        x: 14.996170000000006,
        y: 21.042540000000002,
      }),
      new Costume("blink 3", "./Star2/costumes/blink 3.svg", { x: 0, y: 0 }),
      new Costume("Starfruit_stem", "./Star2/costumes/Starfruit_stem.svg", {
        x: 16.5,
        y: 48.5,
      }),
    ];

    this.sounds = [
      new Sound("plant", "./Star2/sounds/plant.mp3"),
      new Sound("chompsoft", "./Star2/sounds/chompsoft.mp3"),
      new Sound("gulp", "./Star2/sounds/gulp.mp3"),
      new Sound("throw", "./Star2/sounds/throw.mp3"),
      new Sound("throw2", "./Star2/sounds/throw2.mp3"),
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
    this.vars.layer = 0;
    this.vars.ghost2 = 0;
    this.vars.hp = 0;
    this.vars.bright = 0;
  }

  *animate() {
    this.vars.y -= 25;
    this.effects.ghost = this.toNumber(this.vars.ghost2);
    this.effects.brightness = this.toNumber(this.vars.bright);
    this.costume = "Starfruit_body";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 2 +
      this.toNumber(this.vars.size);
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x) - 1, this.toNumber(this.vars.y) + 5);
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
    this.costume = "Starfruit_stem";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 30)) * 2 +
      this.toNumber(this.vars.size);
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x) - 1, this.toNumber(this.vars.y) + 5);
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
    while (true) {
      this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * 250;
      if (this.toString(this.vars.state) === "grabbed") {
        yield* this.goto2();
        yield* this.gridPos();
      } else {
        if (this.toString(this.vars.first) === "yes") {
          yield* this.layer();
          this.stage.vars.grid.splice(this.vars.grid - 1, 1, "star");
          this.stage.vars.sun -= 100;
        }
        this.vars.first = "no";
        this.vars.timer += this.toNumber(this.stage.vars.deltaTime) * 30;
        if (this.compare(this.vars.timer, 45) > 0) {
          if (
            this.toString(
              this.itemOf(this.stage.vars.zombieY, this.vars.layer - 1)
            ) === "yes" ||
            this.toString(
              this.itemOf(
                this.stage.vars.zombieGrid,
                this.toNumber(this.vars.grid) + 8
              )
            ) === "zomb" ||
            this.toString(
              this.itemOf(
                this.stage.vars.zombieGrid,
                this.toNumber(this.vars.grid) + 17
              )
            ) === "zomb" ||
            this.toString(
              this.itemOf(
                this.stage.vars.zombieGrid,
                this.toNumber(this.vars.grid) + 26
              )
            ) === "zomb" ||
            this.toString(
              this.itemOf(
                this.stage.vars.zombieGrid,
                this.toNumber(this.vars.grid) + 35
              )
            ) === "zomb" ||
            this.toString(
              this.itemOf(
                this.stage.vars.zombieGrid,
                this.toNumber(this.vars.grid) + -10
              )
            ) === "zomb" ||
            this.toString(
              this.itemOf(
                this.stage.vars.zombieGrid,
                this.toNumber(this.vars.grid) + -19
              )
            ) === "zomb" ||
            this.toString(
              this.itemOf(
                this.stage.vars.zombieGrid,
                this.toNumber(this.vars.grid) + -28
              )
            ) === "zomb" ||
            this.toString(
              this.itemOf(
                this.stage.vars.zombieGrid,
                this.toNumber(this.vars.grid) + -37
              )
            ) === "zomb"
          ) {
            this.stage.vars.starQueueX.push(this.vars.x);
            this.stage.vars.starQueueY.push(this.vars.y);
            yield* this.startSound(this.random(4, 5));
            this.vars.size = 60;
          }
          this.vars.timer = 0;
        }
        this.vars.size +=
          (50 - this.toNumber(this.vars.size)) /
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
      "none"
    ) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield* this.startSound("plant");
      this.vars.state = "set";
    } else {
      this.stage.vars.timerReset = "star";
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
