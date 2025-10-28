/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gloom extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("blink 0", "./Gloom/costumes/blink 0.svg", {
        x: 31.47209000000001,
        y: 45.84615500000001,
      }),
      new Costume("blink 1", "./Gloom/costumes/blink 1.svg", {
        x: 31.47435999999999,
        y: 45.84615500000001,
      }),
      new Costume("blink 2", "./Gloom/costumes/blink 2.svg", {
        x: 31.47209000000001,
        y: 45.84615500000001,
      }),
      new Costume("blink 3", "./Gloom/costumes/blink 3.svg", { x: 0, y: 0 }),
      new Costume(
        "GloomShroom_stem3",
        "./Gloom/costumes/GloomShroom_stem3.svg",
        { x: 15.304347826088758, y: 13 }
      ),
      new Costume(
        "GloomShroom_stem2",
        "./Gloom/costumes/GloomShroom_stem2.svg",
        { x: 15.982608695652203, y: 11 }
      ),
      new Costume(
        "GloomShroom_stem1",
        "./Gloom/costumes/GloomShroom_stem1.svg",
        { x: 14.5, y: 9 }
      ),
      new Costume(
        "GloomShroom_shooter5",
        "./Gloom/costumes/GloomShroom_shooter5.svg",
        { x: 16, y: 10.5 }
      ),
      new Costume(
        "GloomShroom_shooter4",
        "./Gloom/costumes/GloomShroom_shooter4.svg",
        { x: 13.5, y: 13.5 }
      ),
      new Costume(
        "GloomShroom_shooter3",
        "./Gloom/costumes/GloomShroom_shooter3.svg",
        { x: 6.5, y: 13 }
      ),
      new Costume(
        "GloomShroom_shooter2",
        "./Gloom/costumes/GloomShroom_shooter2.svg",
        { x: 11, y: 12.5 }
      ),
      new Costume(
        "GloomShroom_shooter1",
        "./Gloom/costumes/GloomShroom_shooter1.svg",
        { x: 14.5, y: 10.5 }
      ),
      new Costume("GloomShroom_head", "./Gloom/costumes/GloomShroom_head.svg", {
        x: 55.30435,
        y: 64.41423499999996,
      }),
      new Costume("puff 0", "./Gloom/costumes/puff 0.svg", {
        x: 35.49812,
        y: 50.85933499999999,
      }),
      new Costume("puff 1", "./Gloom/costumes/puff 1.svg", {
        x: 35.48245614035082,
        y: 50.88596491228071,
      }),
      new Costume("GloomShroom_base", "./Gloom/costumes/GloomShroom_base.svg", {
        x: 35.5,
        y: 39.25,
      }),
      new Costume("col", "./Gloom/costumes/col.svg", {
        x: 66.25000000000003,
        y: 66.25000000000001,
      }),
    ];

    this.sounds = [
      new Sound("plant", "./Gloom/sounds/plant.mp3"),
      new Sound("chompsoft", "./Gloom/sounds/chompsoft.mp3"),
      new Sound("gulp", "./Gloom/sounds/gulp.mp3"),
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
    this.vars.size = 2;
    this.vars.ghost2 = 0;
    this.vars.hp = 0;
    this.vars.bright = 0;
    this.vars.firstFirst = 0;
    this.vars.times = 0;
    this.vars.fume = 0;
    this.vars.timesSet = 0;
    this.vars.shootFirst = 0;
  }

  *animate() {
    this.vars.y -= 40;
    this.effects.ghost = this.toNumber(this.vars.ghost2);
    this.effects.brightness = this.toNumber(this.vars.bright);
    this.costume = "GloomShroom_base";
    this.size = Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 1 + 56;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.stamp();
    this.costume = "GloomShroom_head";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 1)) *
        this.toNumber(this.vars.size) +
      56;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x) - 0, this.toNumber(this.vars.y) + 17);
    this.stamp();
    if (this.toString(this.vars.fume) === "no") {
      this.costume =
        "blink " +
        this.toString(Math.round(this.toNumber(this.vars.sin) / 10) % 60);
      if (
        this.compare(Math.round(this.toNumber(this.vars.sin) / 10) % 60, 3) > 0
      ) {
        this.costume = "blink 3";
      }
    } else {
      this.costume = "puff 0";
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
        this.stage.vars.gloomGrid = this.vars.grid;
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
    this.vars.timer = 0;
    this.vars.size = 2;
    this.vars.times = 1;
    this.vars.fume = "no";
    this.vars.timesSet = 1;
    while (true) {
      this.vars.sin +=
        this.toNumber(this.stage.vars.deltaTime) *
        this.toNumber(this.vars.timesSet);
      if (this.toString(this.vars.state) === "grabbed") {
        yield* this.goto2();
        yield* this.gridPos();
      } else {
        if (this.toString(this.vars.first) === "yes") {
          this.stage.vars.grid.splice(this.vars.grid - 1, 1, "gloom");
          this.stage.vars.sun -= 150;
          this.vars.firstFirst = "yes";
          this.vars.shootFirst = "yes";
        }
        this.vars.first = "no";
        this.vars.timer += this.toNumber(this.stage.vars.deltaTime) * 30;
        if (this.compare(this.vars.timer, 80) > 0) {
          this.vars.timer = 0;
        } else {
          if (this.compare(this.vars.timer, 40) > 0) {
            this.visible = true;
            this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
            this.costume = "col";
            this.size = 100;
            if (this.touching(this.sprites["Zombies"].andClones())) {
              if (Math.round(this.toNumber(this.vars.timer)) % 8 === 0) {
                if (this.toString(this.vars.shootFirst) === "yes") {
                  this.stage.vars.gloomFumeQueueX.push(this.vars.x);
                  this.stage.vars.gloomFumeQueueY.push(this.vars.y);
                }
                this.vars.shootFirst = "no";
              } else {
                this.vars.shootFirst = "yes";
              }
              this.vars.times = 750;
              this.vars.fume = "yes";
              this.vars.size = 3;
            }
            this.visible = false;
          } else {
            this.vars.size = 2;
            this.vars.times = 250;
            this.vars.fume = "no";
          }
        }
        this.vars.timesSet +=
          (this.toNumber(this.vars.times) - this.toNumber(this.vars.timesSet)) /
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
      "fume"
    ) {
      this.broadcast("replace fume");
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield* this.startSound("plant");
      this.vars.state = "set";
    } else {
      this.stage.vars.timerReset = "gloom";
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
