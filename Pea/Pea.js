/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pea extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pos", "./Pea/costumes/pos.svg", {
        x: 135,
        y: 94.50000000000004,
      }),
      new Costume("shadow", "./Pea/costumes/shadow.svg", {
        x: 12,
        y: 7.4090400000000045,
      }),
      new Costume("pea", "./Pea/costumes/pea.png", { x: 24, y: 24 }),
    ];

    this.sounds = [new Sound("pop", "./Pea/sounds/pop.wav")];

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

    this.vars.x = 29;
    this.vars.y = 60;
    this.vars.i = 1;
    this.vars.grid = 0;
    this.vars.gridX = 0;
    this.vars.gridY = 0;
    this.vars.drawY = 0;
    this.vars.yChange = 0;
  }

  *startAsClone() {
    this.vars.x += 25;
    this.vars.yChange = this.random(4, 6);
    this.vars.y += this.toNumber(this.vars.yChange);
    this.vars.drawY += this.toNumber(this.vars.yChange);
    this.costume = "pea";
    this.visible = true;
    while (true) {
      this.vars.x += this.toNumber(this.stage.vars.deltaTime) * 200;
      this.vars.drawY +=
        (this.toNumber(this.vars.y) - this.toNumber(this.vars.drawY)) /
        (0.4 / this.toNumber(this.stage.vars.deltaTime));
      yield* this.draw();
      if (this.compare(this.vars.x, 250) > 0) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *draw() {
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.drawY) - 35);
    this.costume = "shadow";
    this.effects.brightness = -100;
    this.effects.ghost = 50;
    this.stamp();
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.drawY));
    this.costume = "pea";
    this.effects.clear();
  }

  *startAsClone2() {
    while (true) {
      yield* this.gridPos();
      if (this.toString(this.stage.vars.pause) === "no") {
        if (
          this.toString(
            this.itemOf(this.stage.vars.grid, this.vars.grid - 1)
          ) === "torch"
        ) {
          this.stage.vars.firePeaQueueX.push(this.vars.x);
          this.stage.vars.firePeaQueueY.push(this.vars.y);
          this.stage.vars.firePeaQueueDrawY.push(this.vars.drawY);
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["Zombies"].andClones())) {
          /* TODO: Implement stop other scripts in sprite */ null;
          for (let i = 0; i < 1; i++) {
            while (!(this.toString(this.stage.vars.pause) === "no")) {
              yield;
            }
            yield;
          }
          this.stage.vars.particleQueueType.push("pea");
          this.stage.vars.particleQueueX.push(this.vars.x);
          this.stage.vars.particleQueueY.push(this.vars.drawY);
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
    this.stage.vars.peaQueueX = [];
    this.stage.vars.peaQueueY = [];
    this.stage.vars.peaQueueDrawY = [];
    while (true) {
      yield* this.makeAttacks();
      yield;
    }
  }

  *makeAttacks() {
    for (let i = 0; i < this.stage.vars.peaQueueX.length; i++) {
      this.vars.x = this.itemOf(this.stage.vars.peaQueueX, 0);
      this.vars.y = this.itemOf(this.stage.vars.peaQueueY, 0);
      this.vars.drawY = this.itemOf(this.stage.vars.peaQueueDrawY, 0);
      this.createClone();
      this.stage.vars.peaQueueX.splice(0, 1);
      this.stage.vars.peaQueueY.splice(0, 1);
      this.stage.vars.peaQueueDrawY.splice(0, 1);
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
