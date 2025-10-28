/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Fume extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pos", "./Fume/costumes/pos.svg", {
        x: 135,
        y: 94.50000000000004,
      }),
      new Costume("PuffShroom_puff1", "./Fume/costumes/PuffShroom_puff1.svg", {
        x: 16,
        y: 13.5,
      }),
      new Costume("PuffShroom_puff2", "./Fume/costumes/PuffShroom_puff2.svg", {
        x: 10.5,
        y: 10.5,
      }),
    ];

    this.sounds = [new Sound("puff", "./Fume/sounds/puff.mp3")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(Trigger.BROADCAST, { name: "START" }, this.whenIReceiveStart),
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
    this.vars.cos = 0;
    this.vars.ghost = 0;
  }

  *startAsClone() {
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
    yield* this.startSound("puff");
    this.x += 25;
    this.y -= 1;
    this.costume = this.random(2, 3);
    this.vars.cos = this.costumeNumber;
    this.visible = true;
    this.vars.x = this.x + this.random(50, 150);
    this.vars.y = this.y + this.random(-20, 20);
    this.vars.ghost = -100;
    while (true) {
      this.costume = "pos";
      this.x +=
        (this.toNumber(this.vars.x) - this.x) /
        (0.3 / this.toNumber(this.stage.vars.deltaTime));
      this.y +=
        (this.toNumber(this.vars.y) - this.y) /
        (0.3 / this.toNumber(this.stage.vars.deltaTime));
      yield* this.draw();
      if (this.compare(this.vars.x, 260) > 0) {
        this.deleteThisClone();
      }
      this.costume = this.vars.cos;
      this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * 200;
      if (this.compare(this.vars.ghost, 100) > 0) {
        this.deleteThisClone();
      }
      this.effects.ghost = this.toNumber(this.vars.ghost);
      yield;
    }
  }

  *draw() {}

  *whenIReceiveDeath() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveStart() {
    this.stage.vars.fumeQueueX = [];
    this.stage.vars.fumeQueueY = [];
    while (true) {
      yield* this.makeAttacks();
      yield;
    }
  }

  *makeAttacks() {
    for (let i = 0; i < this.stage.vars.fumeQueueX.length; i++) {
      this.goto(
        this.toNumber(this.itemOf(this.stage.vars.fumeQueueX, 0)),
        this.toNumber(this.itemOf(this.stage.vars.fumeQueueY, 0))
      );
      this.createClone();
      this.stage.vars.fumeQueueX.splice(0, 1);
      this.stage.vars.fumeQueueY.splice(0, 1);
    }
  }

  *whenIReceiveStopGame() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      null;
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
