/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class FirePea extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pos", "./FirePea/costumes/pos.svg", {
        x: 135,
        y: 94.50000000000004,
      }),
      new Costume("shadow", "./FirePea/costumes/shadow.svg", {
        x: 12,
        y: 7.4090400000000045,
      }),
      new Costume("FirePea", "./FirePea/costumes/FirePea.svg", {
        x: 19,
        y: 19.000004999999987,
      }),
      new Costume("flame 0", "./FirePea/costumes/flame 0.svg", {
        x: 57.402895,
        y: 18.28878499999999,
      }),
      new Costume("flame 1", "./FirePea/costumes/flame 1.svg", {
        x: 54.779889999999995,
        y: 19.51630499999999,
      }),
      new Costume("flame 2", "./FirePea/costumes/flame 2.svg", {
        x: 55.61412999999999,
        y: 17.467389999999995,
      }),
      new Costume("flame 3", "./FirePea/costumes/flame 3.svg", {
        x: 57.402885000000026,
        y: 18.28878499999999,
      }),
    ];

    this.sounds = [new Sound("firepea", "./FirePea/sounds/firepea.mp3")];

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
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = 80.00000000000091;
    this.vars.y = 5;
    this.vars.direction = 0;
    this.vars.sin = 0;
    this.vars.drawY = -6.600821535954466;
  }

  *startAsClone() {
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
    yield* this.startSound("firepea");
    this.vars.direction = this.random(1, 360);
    this.costume = "pea";
    this.visible = true;
    while (true) {
      this.vars.x += this.toNumber(this.stage.vars.deltaTime) * 200;
      this.vars.drawY +=
        (this.toNumber(this.vars.y) - this.toNumber(this.vars.drawY)) /
        (0.4 / this.toNumber(this.stage.vars.deltaTime));
      yield* this.draw();
      this.vars.direction += this.toNumber(this.stage.vars.deltaTime) * 400;
      this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * 15;
      if (this.compare(this.vars.x, 265) > 0) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *draw() {
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.drawY) - 35);
    this.direction = 90;
    this.costume = "shadow";
    this.effects.brightness = -100;
    this.effects.ghost = 50;
    this.stamp();
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.drawY));
    this.direction = 90;
    this.costume =
      "flame " + this.toString(Math.round(this.toNumber(this.vars.sin)) % 4);
    this.effects.clear();
    this.stamp();
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.drawY));
    this.direction = this.toNumber(this.vars.direction);
    this.costume = "FirePea";
    this.effects.clear();
  }

  *startAsClone2() {
    while (true) {
      if (this.toString(this.stage.vars.pause) === "no") {
        if (this.touching(this.sprites["Zombies"].andClones())) {
          /* TODO: Implement stop other scripts in sprite */ null;
          for (let i = 0; i < 1; i++) {
            while (!(this.toString(this.stage.vars.pause) === "no")) {
              yield;
            }
            yield;
          }
          this.stage.vars.particleQueueType.push("fire pea");
          this.stage.vars.particleQueueX.push(this.vars.x);
          this.stage.vars.particleQueueY.push(this.vars.drawY);
          this.deleteThisClone();
        }
      }
      yield;
    }
  }

  *whenIReceiveDeath() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveStart() {
    this.stage.vars.firePeaQueueX = [];
    this.stage.vars.firePeaQueueY = [];
    this.stage.vars.firePeaQueueDrawY = [];
    while (true) {
      yield* this.makeAttacks();
      yield;
    }
  }

  *makeAttacks() {
    for (let i = 0; i < this.stage.vars.firePeaQueueX.length; i++) {
      this.vars.x = this.itemOf(this.stage.vars.firePeaQueueX, 0);
      this.vars.y = this.itemOf(this.stage.vars.firePeaQueueY, 0);
      this.vars.drawY = this.itemOf(this.stage.vars.firePeaQueueDrawY, 0);
      this.createClone();
      this.stage.vars.firePeaQueueX.splice(0, 1);
      this.stage.vars.firePeaQueueY.splice(0, 1);
      this.stage.vars.firePeaQueueDrawY.splice(0, 1);
    }
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

  *whenGreenFlagClicked() {
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
