/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Three extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("PeaShooter_Head", "./Three/costumes/PeaShooter_Head.svg", {
        x: 15,
        y: 27.09523642857141,
      }),
      new Costume("blink 0", "./Three/costumes/blink 0.svg", {
        x: 5.684341886080802e-14,
        y: 11.998722785967033,
      }),
      new Costume("blink 1", "./Three/costumes/blink 1.svg", {
        x: 0,
        y: 11.995840266222984,
      }),
      new Costume("blink 2", "./Three/costumes/blink 2.svg", {
        x: 0,
        y: 11.998725000000007,
      }),
      new Costume("blink 3", "./Three/costumes/blink 3.svg", { x: 0, y: 0 }),
      new Costume(
        "PeaShooter_frontleaf",
        "./Three/costumes/PeaShooter_frontleaf.svg",
        { x: 40.4967320261438, y: 20 }
      ),
      new Costume(
        "PeaShooter_backleaf",
        "./Three/costumes/PeaShooter_backleaf.svg",
        { x: 22.388888888888914, y: 11 }
      ),
      new Costume(
        "PeaShooter_sprout",
        "./Three/costumes/PeaShooter_sprout.svg",
        { x: 16.039228421067293, y: 6.925902858725607 }
      ),
      new Costume(
        "ThreePeater_stem3",
        "./Three/costumes/ThreePeater_stem3.svg",
        { x: 35.900000000000034, y: 65.29999999999998 }
      ),
      new Costume(
        "ThreePeater_stem2",
        "./Three/costumes/ThreePeater_stem2.svg",
        { x: 30.799999999999955, y: 52.69999999999999 }
      ),
      new Costume(
        "ThreePeater_stem1",
        "./Three/costumes/ThreePeater_stem1.svg",
        { x: 22.000000000000085, y: 36.79999999999998 }
      ),
      new Costume(
        "ThreePeater_mouth",
        "./Three/costumes/ThreePeater_mouth.svg",
        { x: 9.5, y: 21.5 }
      ),
      new Costume(
        "ThreePeater_headleaf3",
        "./Three/costumes/ThreePeater_headleaf3.svg",
        { x: 9.798067692307683, y: 9.221150769230775 }
      ),
      new Costume(
        "ThreePeater_headleaf2",
        "./Three/costumes/ThreePeater_headleaf2.svg",
        { x: 11.730758846153833, y: 7.076920769230782 }
      ),
      new Costume(
        "ThreePeater_headleaf1",
        "./Three/costumes/ThreePeater_headleaf1.svg",
        { x: 10.884615384615387, y: 6.307692307692321 }
      ),
      new Costume("ThreePeater_head", "./Three/costumes/ThreePeater_head.svg", {
        x: 15,
        y: 15,
      }),
      new Costume(
        "ThreePeater_blink2",
        "./Three/costumes/ThreePeater_blink2.svg",
        { x: 5, y: 4.5 }
      ),
      new Costume(
        "ThreePeater_blink1",
        "./Three/costumes/ThreePeater_blink1.svg",
        { x: 5, y: 4.5 }
      ),
    ];

    this.sounds = [
      new Sound("plant", "./Three/sounds/plant.mp3"),
      new Sound("chompsoft", "./Three/sounds/chompsoft.mp3"),
      new Sound("gulp", "./Three/sounds/gulp.mp3"),
      new Sound("throw", "./Three/sounds/throw.mp3"),
      new Sound("throw2", "./Three/sounds/throw2.mp3"),
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
    this.costume = "PeaShooter_backleaf";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 150)) * 2 + 50;
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x) - 1, this.toNumber(this.vars.y) + 5);
    this.stamp();
    this.costume = "ThreePeater_stem3";
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 1 + 92;
    this.size = 50;
    this.goto(
      this.toNumber(this.vars.x) + 0,
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) * -1 +
        (this.toNumber(this.vars.y) + -2)
    );
    this.stamp();
    this.costume = "ThreePeater_stem1";
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 2 + 93;
    this.size = 50;
    this.goto(
      this.toNumber(this.vars.x) + 0,
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) * 1 +
        (this.toNumber(this.vars.y) + 1)
    );
    this.stamp();
    this.costume = "ThreePeater_stem2";
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -2 + 93;
    this.size = 50;
    this.goto(
      this.toNumber(this.vars.x) + 2,
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) * -1 +
        (this.toNumber(this.vars.y) + -4)
    );
    this.stamp();
    this.costume = "PeaShooter_frontleaf";
    this.direction = 90;
    this.size = Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 2 + 50;
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.stamp();
    this.costume = "ThreePeater_headleaf1";
    this.size = 60;
    this.goto(
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 1 +
        (this.toNumber(this.vars.x) + 11),
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) * 1 +
        (this.toNumber(this.vars.y) + 16)
    );
    this.x -= 6;
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -20 + 70;
    this.stamp();
    this.costume = "PeaShooter_Head";
    this.x += 6;
    this.direction = 90;
    this.size = this.toNumber(this.vars.size);
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
    this.costume = "ThreePeater_headleaf3";
    this.size = 60;
    this.goto(
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 1 +
        (this.toNumber(this.vars.x) + -13),
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) * -1 +
        (this.toNumber(this.vars.y) + 30)
    );
    this.x -= 5;
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 15 + 80;
    this.stamp();
    this.costume = "PeaShooter_Head";
    this.x += 5;
    this.direction = 90;
    this.size = this.toNumber(this.vars.size);
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
    this.costume = "ThreePeater_headleaf2";
    this.size = 60;
    this.goto(
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -1 +
        (this.toNumber(this.vars.x) + 0),
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) * -1 +
        (this.toNumber(this.vars.y) + 26)
    );
    this.x -= 5;
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 17 + 80;
    this.stamp();
    this.costume = "PeaShooter_Head";
    this.x += 5;
    this.direction = 90;
    this.size = this.toNumber(this.vars.size);
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
          this.stage.vars.grid.splice(this.vars.grid - 1, 1, "three");
          this.stage.vars.sun -= 300;
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
                this.stage.vars.zombieY,
                this.toNumber(this.vars.layer)
              )
            ) === "yes" ||
            this.toString(
              this.itemOf(
                this.stage.vars.zombieY,
                this.toNumber(this.vars.layer) - 2
              )
            ) === "yes"
          ) {
            this.stage.vars.peaQueueX.push(this.toNumber(this.vars.x) - 20);
            this.stage.vars.peaQueueY.push(this.vars.y);
            this.stage.vars.peaQueueDrawY.push(this.vars.y);
            this.stage.vars.peaQueueX.push(this.toNumber(this.vars.x) - 20);
            this.stage.vars.peaQueueY.push(this.toNumber(this.vars.y) - 60);
            this.stage.vars.peaQueueDrawY.push(this.vars.y);
            this.stage.vars.peaQueueX.push(this.toNumber(this.vars.x) - 20);
            this.stage.vars.peaQueueY.push(this.toNumber(this.vars.y) + 60);
            this.stage.vars.peaQueueDrawY.push(this.vars.y);
            yield* this.startSound(this.random(4, 5));
            this.vars.size = 55;
          }
          this.vars.timer = 0;
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
      this.stage.vars.timerReset = "three";
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
