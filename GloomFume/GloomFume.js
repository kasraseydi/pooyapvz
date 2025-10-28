/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GloomFume extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pos", "./GloomFume/costumes/pos.svg", {
        x: 135,
        y: 94.50000000000004,
      }),
      new Costume(
        "PuffShroom_puff1",
        "./GloomFume/costumes/PuffShroom_puff1.svg",
        { x: 88.4940783333333, y: 84.49274092946243 }
      ),
      new Costume("costume1", "./GloomFume/costumes/costume1.svg", {
        x: 55.30435,
        y: 64.414235,
      }),
    ];

    this.sounds = [new Sound("puff", "./GloomFume/sounds/puff.mp3")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(Trigger.BROADCAST, { name: "START" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stop game" },
        this.whenIReceiveStopGame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = 0;
    this.vars.i = 1;
    this.vars.cos = 0;
    this.vars.ghost = 0;
  }

  *startAsClone() {
    this.y -= 12;
    this.direction += this.random(-5, 5);
    this.costume = "PuffShroom_puff1";
    this.size = 40;
    this.vars.cos = this.costumeNumber;
    this.visible = true;
    this.vars.ghost = -100;
    while (true) {
      this.costume = "pos";
      if (this.compare(this.vars.x, 260) > 0) {
        this.deleteThisClone();
      }
      this.costume = this.vars.cos;
      this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * 400;
      if (this.compare(this.vars.ghost, 100) > 0) {
        this.deleteThisClone();
      }
      this.effects.ghost = this.toNumber(this.vars.ghost);
      this.size +=
        (110 - this.size) / (0.3 / this.toNumber(this.stage.vars.deltaTime));
      yield;
    }
  }

  *whenIReceiveDeath() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveStart() {
    this.stage.vars.gloomFumeQueueX = [];
    this.stage.vars.gloomFumeQueueY = [];
    this.direction = 90;
    while (true) {
      yield* this.makeAttacks();
      yield;
    }
  }

  *makeAttacks() {
    this.vars.i = 1;
    for (let i = 0; i < this.stage.vars.gloomFumeQueueX.length; i++) {
      this.goto(
        this.toNumber(this.itemOf(this.stage.vars.gloomFumeQueueX, 0)),
        this.toNumber(this.itemOf(this.stage.vars.gloomFumeQueueY, 0))
      );
      this.direction += 45;
      this.createClone();
      this.stage.vars.gloomFumeQueueX.splice(0, 1);
      this.stage.vars.gloomFumeQueueY.splice(0, 1);
    }
  }

  *whenIReceiveStopGame() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }
}
