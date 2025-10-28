/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Star extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pos", "./Star/costumes/pos.svg", {
        x: 135,
        y: 94.50000000000004,
      }),
      new Costume("shadow", "./Star/costumes/shadow.svg", {
        x: 12,
        y: 7.4090400000000045,
      }),
      new Costume("pea", "./Star/costumes/pea.svg", {
        x: 16.733167082294244,
        y: 17.649625935162106,
      }),
    ];

    this.sounds = [new Sound("pop", "./Star/sounds/pop.wav")];

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

    this.vars.x = -147;
    this.vars.y = 0;
    this.vars.i = 1;
    this.vars.grid = 0;
    this.vars.gridX = 0;
    this.vars.gridY = 0;
    this.vars.direction = -90;
    this.vars.turn = 0;
  }

  *startAsClone() {
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.direction = this.toNumber(this.vars.direction);
    this.move(10);
    this.vars.x = this.x;
    this.vars.y = this.y;
    this.costume = "pea";
    this.visible = true;
    this.vars.turn = 0;
    this.vars.y -= 18;
    while (true) {
      this.costume = "pos";
      this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
      this.direction = this.toNumber(this.vars.direction);
      this.move(this.toNumber(this.stage.vars.deltaTime) * 200);
      this.vars.x = this.x;
      this.vars.y = this.y;
      yield* this.draw();
      if (
        this.compare(this.vars.x, 250) > 0 ||
        this.compare(this.vars.x, -250) < 0
      ) {
        this.deleteThisClone();
      }
      if (
        this.compare(this.vars.y, -190) < 0 ||
        this.compare(this.vars.y, 190) > 0
      ) {
        this.deleteThisClone();
      }
      this.vars.turn += this.toNumber(this.stage.vars.deltaTime) * 200;
      yield;
    }
  }

  *draw() {
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y) - 17);
    this.direction = 90;
    this.costume = "shadow";
    this.effects.brightness = -100;
    this.effects.ghost = 50;
    this.stamp();
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.direction = this.toNumber(this.vars.turn);
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
          this.stage.vars.particleQueueType.push("star");
          this.stage.vars.particleQueueX.push(this.vars.x);
          this.stage.vars.particleQueueY.push(this.vars.y);
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
    this.stage.vars.starQueueX = [];
    this.stage.vars.starQueueY = [];
    while (true) {
      yield* this.makeAttacks();
      yield;
    }
  }

  *makeAttacks() {
    for (let i = 0; i < this.stage.vars.starQueueX.length; i++) {
      this.vars.x = this.itemOf(this.stage.vars.starQueueX, 0);
      this.vars.y = this.itemOf(this.stage.vars.starQueueY, 0);
      this.vars.direction = 60;
      this.createClone();
      this.vars.direction = 120;
      this.createClone();
      this.vars.direction = 0;
      this.createClone();
      this.vars.direction = 180;
      this.createClone();
      this.vars.direction = -90;
      this.createClone();
      this.stage.vars.starQueueX.splice(0, 1);
      this.stage.vars.starQueueY.splice(0, 1);
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
