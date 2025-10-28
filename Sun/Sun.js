/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sun extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Sun3", "./Sun/costumes/Sun3.svg", { x: 58.5, y: 58 }),
      new Costume("Sun2", "./Sun/costumes/Sun2.svg", { x: 38.5, y: 39.5 }),
      new Costume("Sun1", "./Sun/costumes/Sun1.svg", { x: 18, y: 18 }),
      new Costume("col", "./Sun/costumes/col.svg", {
        x: 34.499999999999744,
        y: 34.500000000000114,
      }),
    ];

    this.sounds = [new Sound("points", "./Sun/sounds/points.mp3")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "START" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "START" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stop game" },
        this.whenIReceiveStopGame
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = -49;
    this.vars.y = -60;
    this.vars.sin = 13.929000000000002;
    this.vars.direction = 119.87999999998877;
    this.vars.state = "none";
    this.vars.yStart = 0;
    this.vars.first = "yes";
    this.vars.isClone = "no";
    this.vars.type = "sun";
    this.vars.clicked = "no";
    this.vars.click = "yes";
    this.vars.size = 50;
    this.vars.sunTimes = 0;
    this.vars.yTimes = 0;
    this.vars.wait = 15;
    this.vars.destroyTimer = 0;
    this.vars.sizeSet = 0;
  }

  *draw() {
    this.costume = "Sun3";
    this.size = this.toNumber(this.vars.size);
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 +
      this.toNumber(this.vars.size);
    this.effects.ghost =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 20 + 10;
    this.direction = this.toNumber(this.vars.direction);
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.stamp();
    this.costume = "Sun2";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 150)) * 5 +
      (this.toNumber(this.vars.size) + 10);
    this.effects.ghost = 0;
    this.direction = this.toNumber(this.vars.direction) / 1.25;
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.stamp();
    this.costume = "Sun1";
    this.size = this.toNumber(this.vars.size);
    this.direction = 90;
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.stamp();
  }

  *startAsClone() {
    this.vars.isClone = "yes";
    this.vars.first = "yes";
    if (this.toString(this.vars.type) === "fall") {
      this.vars.x = this.random(196, -196);
      this.vars.y = 160;
      this.vars.sin = 0;
      this.vars.direction = 0;
      this.vars.state = "none";
      this.vars.clicked = "no";
      this.vars.click = "yes";
      this.vars.size = 50;
      this.vars.sizeSet = 50;
      while (true) {
        if (this.mouse.down) {
          if (this.toString(this.vars.click) === "yes") {
            this.vars.clicked = "yes";
          }
          this.vars.click = "no";
        } else {
          this.vars.click = "yes";
        }
        this.costume = "col";
        this.effects.ghost = 100;
        this.visible = true;
        this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * 150;
        this.vars.direction += this.toNumber(this.stage.vars.deltaTime) * 15;
        if (this.toString(this.vars.state) === "none") {
          this.vars.y += this.toNumber(this.stage.vars.deltaTime) * -50;
          if (this.compare(this.vars.y, -120) < 0) {
            this.vars.y = -120;
          }
        }
        this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
        if (
          this.touching("mouse") &&
          this.toString(this.vars.clicked) === "yes"
        ) {
          if (this.toString(this.vars.first) === "yes") {
            yield* this.startSound("points");
          }
          this.vars.first = "no";
          this.vars.state = "collect";
        }
        if (this.toString(this.vars.state) === "collect") {
          this.vars.x +=
            (-215 - this.toNumber(this.vars.x)) /
            (0.1 / this.toNumber(this.stage.vars.deltaTime));
          this.vars.y +=
            (140 - this.toNumber(this.vars.y)) /
            (0.1 / this.toNumber(this.stage.vars.deltaTime));
          if (
            Math.round(this.toNumber(this.vars.x)) === -215 &&
            Math.round(this.toNumber(this.vars.y)) === 140
          ) {
            this.stage.vars.sun += 25;
            this.deleteThisClone();
          }
        }
        this.vars.size +=
          (this.toNumber(this.vars.sizeSet) - this.toNumber(this.vars.size)) /
          (0.25 / this.toNumber(this.stage.vars.deltaTime));
        yield* this.draw();
        this.vars.clicked = "no";
        yield;
      }
    } else {
      this.vars.sin = 0;
      this.vars.direction = 0;
      this.vars.state = "none";
      this.vars.yStart = this.vars.y;
      this.vars.clicked = "no";
      this.vars.click = "yes";
      this.vars.size = 14;
      this.vars.sunTimes = this.random(1.5, 2);
      this.vars.yTimes = this.random(40, 50);
      this.vars.sizeSet = 50;
      while (true) {
        if (this.mouse.down) {
          if (this.toString(this.vars.click) === "yes") {
            this.vars.clicked = "yes";
          }
          this.vars.click = "no";
        } else {
          this.vars.click = "yes";
        }
        this.costume = "col";
        this.effects.ghost = 100;
        this.visible = true;
        this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * 150;
        this.vars.direction += this.toNumber(this.stage.vars.deltaTime) * 15;
        if (this.toString(this.vars.state) === "none") {
          this.vars.y =
            this.toNumber(this.vars.yStart) -
            this.toNumber(this.vars.yTimes) / 2;
          this.vars.y +=
            Math.sin(
              this.degToRad(
                (this.toNumber(this.vars.sin) + 18.75) *
                  this.toNumber(this.vars.sunTimes)
              )
            ) * this.toNumber(this.vars.yTimes);
          if (
            this.compare(
              this.vars.y,
              this.toNumber(this.vars.yStart) -
                this.toNumber(this.vars.yTimes) / 2
            ) < 0
          ) {
            this.vars.state = "ready";
            this.vars.y =
              this.toNumber(this.vars.yStart) -
              this.toNumber(this.vars.yTimes) / 2;
          }
        }
        this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
        if (
          this.touching("mouse") &&
          this.toString(this.vars.clicked) === "yes"
        ) {
          if (this.toString(this.vars.first) === "yes") {
            yield* this.startSound("points");
          }
          this.vars.first = "no";
          this.vars.state = "collect";
        }
        if (this.toString(this.vars.state) === "collect") {
          this.vars.x +=
            (-215 - this.toNumber(this.vars.x)) /
            (0.1 / this.toNumber(this.stage.vars.deltaTime));
          this.vars.y +=
            (140 - this.toNumber(this.vars.y)) /
            (0.1 / this.toNumber(this.stage.vars.deltaTime));
          if (
            Math.round(this.toNumber(this.vars.x)) === -215 &&
            Math.round(this.toNumber(this.vars.y)) === 140
          ) {
            this.stage.vars.sun += 25;
            this.deleteThisClone();
          }
        }
        this.vars.size +=
          (this.toNumber(this.vars.sizeSet) - this.toNumber(this.vars.size)) /
          (0.25 / this.toNumber(this.stage.vars.deltaTime));
        yield* this.draw();
        this.vars.clicked = "no";
        yield;
      }
    }
  }

  *whenIReceiveStart() {
    if (
      !(this.toString(this.stage.vars.gamemode) === "quick") &&
      !(this.toString(this.stage.vars.gamemode) === "bowling")
    ) {
      this.vars.isClone = "no";
      this.vars.type = "none";
      while (true) {
        this.vars.wait = this.random(2, 15);
        this.vars.sin = 0;
        while (!(this.compare(this.vars.sin, this.vars.wait) > 0)) {
          if (this.toString(this.stage.vars.pauseCertainPlants) === "no") {
            this.vars.sin += this.toNumber(this.stage.vars.deltaTime);
          }
          yield;
        }
        this.vars.type = "fall";
        this.createClone();
        yield;
      }
    }
  }

  *whenIReceiveDeath() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveStart2() {
    this.stage.vars.sunQueueX = [];
    this.stage.vars.sunQueueY = [];
    while (true) {
      yield* this.makeParticles();
      yield;
    }
  }

  *makeParticles() {
    for (let i = 0; i < this.stage.vars.sunQueueX.length; i++) {
      this.vars.x = this.itemOf(this.stage.vars.sunQueueX, 0);
      this.vars.y = this.itemOf(this.stage.vars.sunQueueY, 0);
      this.vars.type = "sun";
      this.createClone();
      this.stage.vars.sunQueueX.splice(0, 1);
      this.stage.vars.sunQueueY.splice(0, 1);
    }
  }

  *whenIReceiveStopGame() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }

  *startAsClone3() {
    this.vars.destroyTimer = 0;
    while (true) {
      this.vars.destroyTimer += this.toNumber(this.stage.vars.deltaTime);
      if (this.compare(this.vars.destroyTimer, 10) > 0) {
        this.vars.sizeSet = 0;
        if (this.compare(this.vars.size, 1) < 0) {
          this.deleteThisClone();
        }
      }
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

  *whenGreenFlagClicked() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }
}
