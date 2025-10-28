/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spike extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pos", "./Spike/costumes/pos.svg", {
        x: 135,
        y: 94.50000000000004,
      }),
      new Costume("shadow", "./Spike/costumes/shadow.svg", { x: 15, y: 4.75 }),
      new Costume("pea", "./Spike/costumes/pea.svg", { x: 15, y: 8 }),
    ];

    this.sounds = [new Sound("pop", "./Spike/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(Trigger.BROADCAST, { name: "START" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stop game" },
        this.whenIReceiveStopGame
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = -98;
    this.vars.y = -120;
    this.vars.i = 1;
    this.vars.grid = 0;
    this.vars.gridX = 0;
    this.vars.gridY = 0;
    this.vars.yChange = 0;
  }

  *startAsClone() {
    this.vars.x += 15;
    this.vars.yChange = this.random(4, 6);
    this.vars.y += this.toNumber(this.vars.yChange);
    this.vars.y -= 15;
    this.costume = "pea";
    this.visible = true;
    while (true) {
      this.vars.x += this.toNumber(this.stage.vars.deltaTime) * 200;
      yield* this.draw();
      if (this.compare(this.vars.x, 250) > 0) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *draw() {
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y) - 20);
    this.costume = "shadow";
    this.effects.brightness = -100;
    this.effects.ghost = 50;
    this.stamp();
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.costume = "pea";
    this.effects.clear();
  }

  *startAsClone2() {
    while (true) {
      yield* this.gridPos();
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
      yield;
    }
  }

  *gridPos() {
    this.vars.i = 1;
    this.vars.gridX = Math.round(this.toNumber(this.vars.x) / 49) * 49;
    this.vars.gridY = Math.round(this.toNumber(this.vars.y) / 60) * 60;
    for (let i = 0; i < this.stage.vars.gridSpaceX.length; i++) {
      if (
        this.compare(
          this.itemOf(this.stage.vars.gridSpaceX, this.vars.i - 1),
          this.vars.gridX
        ) === 0 &&
        this.compare(
          this.itemOf(this.stage.vars.gridSpaceY, this.vars.i - 1),
          this.vars.gridY
        ) === 0
      ) {
        this.vars.grid = this.vars.i;
        return;
      }
      this.vars.i++;
    }
  }

  *whenIReceiveDeath() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveStart() {
    this.stage.vars.spikeQueueX = [];
    this.stage.vars.spikeQueueY = [];
    while (true) {
      yield* this.makeAttacks();
      yield;
    }
  }

  *makeAttacks() {
    for (let i = 0; i < this.stage.vars.spikeQueueX.length; i++) {
      this.vars.x = this.itemOf(this.stage.vars.spikeQueueX, 0);
      this.vars.y = this.itemOf(this.stage.vars.spikeQueueY, 0);
      this.createClone();
      this.stage.vars.spikeQueueX.splice(0, 1);
      this.stage.vars.spikeQueueY.splice(0, 1);
    }
  }

  *startAsClone3() {
    if (
      this.compare(this.vars.y, -130) < 0 ||
      this.compare(this.vars.y, 130) > 0
    ) {
      this.deleteThisClone();
    }
  }

  *whenIReceiveStopGame() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
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
