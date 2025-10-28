/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cob extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pos", "./Cob/costumes/pos.svg", {
        x: 135,
        y: 94.50000000000004,
      }),
      new Costume("CobCannon_cob", "./Cob/costumes/CobCannon_cob.svg", {
        x: 160.40000000000003,
        y: 39.39999999999998,
      }),
      new Costume("aof", "./Cob/costumes/aof.svg", {
        x: 78.99999999999997,
        y: 79.00000000000004,
      }),
    ];

    this.sounds = [new Sound("explosion", "./Cob/sounds/explosion.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stop game" },
        this.whenIReceiveStopGame
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = 0;
    this.vars.y = 0;
    this.vars.move = 519.6500000000007;
  }

  *startAsClone() {
    this.costume = "CobCannon_cob";
    this.size = 46;
    this.vars.x = this.stage.vars.cobX;
    this.vars.y = this.stage.vars.cobY;
    this.direction = 180;
    this.vars.move = 800;
    this.visible = false;
    while (true) {
      if (this.compare(this.vars.move, 0) < 0) {
        yield* this.startSound("explosion");
        this.costume = "aof";
        this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
        this.size = 100;
        this.visible = true;
        this.effects.ghost = 100;
        this.stage.vars.particleQueueType.push("cob");
        this.stage.vars.particleQueueX.push(this.vars.x);
        this.stage.vars.particleQueueY.push(this.vars.y);
        yield* this.pop();
        for (let i = 0; i < 2; i++) {
          while (!(this.toString(this.stage.vars.pause) === "no")) {
            yield;
          }
          yield;
        }
        this.deleteThisClone();
      }
      this.vars.move += this.toNumber(this.stage.vars.deltaTime) * -350;
      yield* this.draw();
      yield;
    }
  }

  *draw() {
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.y += this.toNumber(this.vars.move);
    this.costume = "CobCannon_cob";
    this.stamp();
  }

  *pop() {
    for (let i = 0; i < 10; i++) {
      this.stage.vars.particleQueueType.push("pop");
      this.stage.vars.particleQueueX.push(this.vars.x);
      this.stage.vars.particleQueueY.push(this.vars.y);
    }
  }

  *whenIReceiveDeath() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
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

  *startAsClone4() {
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }
}
