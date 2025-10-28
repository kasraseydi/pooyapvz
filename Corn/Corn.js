/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Corn extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pos", "./Corn/costumes/pos.svg", {
        x: 135,
        y: 94.50000000000004,
      }),
      new Costume(
        "Cabbagepult_cabbage",
        "./Corn/costumes/Cabbagepult_cabbage.svg",
        { x: 10.5, y: 11 }
      ),
      new Costume(
        "Cabbagepult_cabbage2",
        "./Corn/costumes/Cabbagepult_cabbage2.svg",
        { x: 24.5, y: 25 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(Trigger.BROADCAST, { name: "START" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stop game" },
        this.whenIReceiveStopGame
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = -49;
    this.vars.y = -120;
    this.vars.zombieX = 100;
    this.vars.startX = 0;
    this.vars.startY = 0;
    this.vars.pointInBetween = 50;
    this.vars.deltaTimes = 0;
  }

  *startAsClone() {
    this.vars.x -= 8;
    this.vars.y += 22;
    this.costume = "Cabbagepult_cabbage";
    this.size = 70;
    this.visible = true;
    yield* this.getZombie();
    this.vars.startX = this.vars.x;
    this.vars.startY = this.vars.y;
    this.vars.deltaTimes = Math.abs(
      this.toNumber(this.vars.zombieX) - this.toNumber(this.vars.startX)
    );
    while (true) {
      if (this.compare(this.vars.x, 265) > 0) {
        this.deleteThisClone();
      }
      this.direction += this.toNumber(this.stage.vars.deltaTime) * 200;
      if (
        this.compare(this.vars.x, this.toNumber(this.vars.zombieX) + 10) < 0
      ) {
        this.vars.x +=
          this.toNumber(this.stage.vars.deltaTime) *
          this.toNumber(this.vars.deltaTimes);
        if (
          this.compare(this.vars.x, this.toNumber(this.vars.zombieX) + 10) > 0
        ) {
          this.vars.x = this.toNumber(this.vars.zombieX) + 10;
        }
      } else {
        this.vars.x = this.vars.zombieX;
        this.deleteThisClone();
      }
      this.vars.pointInBetween =
        this.toNumber(this.vars.startX) +
        (this.toNumber(this.vars.zombieX) - this.toNumber(this.vars.startX)) /
          2;
      this.vars.y =
        ((Math.abs(
          this.toNumber(this.vars.pointInBetween) -
            this.toNumber(this.vars.startX)
        ) +
          Math.abs(
            this.toNumber(this.vars.pointInBetween) - this.toNumber(this.vars.x)
          )) /
          (Math.abs(
            this.toNumber(this.vars.pointInBetween) -
              this.toNumber(this.vars.startX)
          ) *
            (Math.abs(
              this.toNumber(this.vars.pointInBetween) -
                this.toNumber(this.vars.startX)
            ) *
              0.01))) *
        (Math.abs(
          this.toNumber(this.vars.pointInBetween) -
            this.toNumber(this.vars.startX)
        ) -
          Math.abs(
            this.toNumber(this.vars.pointInBetween) - this.toNumber(this.vars.x)
          ));
      this.vars.y += this.toNumber(this.vars.startY);
      yield* this.draw();
      yield;
    }
  }

  *draw() {
    if (this.compare(this.vars.y, this.toNumber(this.vars.startY) + 10) < 0) {
      this.costume = "pos";
      this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
      this.costume = "Cabbagepult_cabbage";
    } else {
      this.costume = "pos";
      this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
      this.costume = "Cabbagepult_cabbage";
      this.stamp();
    }
  }

  *startAsClone2() {
    while (true) {
      if (this.compare(this.vars.y, this.toNumber(this.vars.startY) + 10) < 0) {
        this.visible = true;
        if (this.toString(this.stage.vars.pause) === "no") {
          if (this.touching(this.sprites["Zombies"].andClones())) {
            /* TODO: Implement stop other scripts in sprite */ null;
            for (let i = 0; i < 1; i++) {
              while (!(this.toString(this.stage.vars.pause) === "no")) {
                yield;
              }
              yield;
            }
            this.deleteThisClone();
          }
        }
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveDeath() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *getZombie() {
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.visible = true;
    while (!(this.compare(this.x, 265) > 0)) {
      this.costume = "pos";
      this.x += 10;
      this.costume = "Cabbagepult_cabbage2";
      if (this.touching(this.sprites["Zombies"].andClones())) {
        this.vars.zombieX = this.x;
        this.vars.zombieX += 4;
        return;
      }
    }
    this.vars.zombieX = 240;
  }

  *whenIReceiveStart() {
    this.stage.vars.cornQueueX = [];
    this.stage.vars.cornQueueY = [];
    while (true) {
      yield* this.makeAttacks();
      yield;
    }
  }

  *makeAttacks() {
    for (let i = 0; i < this.stage.vars.cornQueueX.length; i++) {
      this.vars.x = this.itemOf(this.stage.vars.cornQueueX, 0);
      this.vars.y = this.itemOf(this.stage.vars.cornQueueY, 0);
      this.createClone();
      this.stage.vars.cornQueueX.splice(0, 1);
      this.stage.vars.cornQueueY.splice(0, 1);
    }
  }

  *whenIReceiveStopGame() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *startAsClone3() {
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
