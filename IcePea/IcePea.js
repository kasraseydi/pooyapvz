/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class IcePea extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pos", "./IcePea/costumes/pos.svg", {
        x: 135,
        y: 94.50000000000004,
      }),
      new Costume("shadow", "./IcePea/costumes/shadow.svg", {
        x: 12,
        y: 7.4090400000000045,
      }),
      new Costume("pea", "./IcePea/costumes/pea.svg", { x: 14, y: 14 }),
      new Costume("snow 0", "./IcePea/costumes/snow 0.svg", {
        x: 26.045436363636384,
        y: 8.65909181818185,
      }),
      new Costume("snow 1", "./IcePea/costumes/snow 1.svg", {
        x: 27.52270818181819,
        y: 9.374989999999997,
      }),
      new Costume("snow 2", "./IcePea/costumes/snow 2.svg", {
        x: 28.978634999999997,
        y: 10.193180000000012,
      }),
      new Costume("snow 3", "./IcePea/costumes/snow 3.svg", {
        x: 29.886349545454465,
        y: 10.193181818181813,
      }),
      new Costume("snow 4", "./IcePea/costumes/snow 4.svg", {
        x: 30.79544045454537,
        y: 9.716700501309077,
      }),
      new Costume("SnowFlakes", "./IcePea/costumes/SnowFlakes.png", {
        x: 60,
        y: 20,
      }),
      new Costume(
        "SnowPea_particles",
        "./IcePea/costumes/SnowPea_particles.png",
        { x: 25, y: 7 }
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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = -147;
    this.vars.y = 0;
    this.vars.direction = 0;
    this.vars.sin = 4097.853999998906;
  }

  *startAsClone() {
    this.vars.x += 25;
    this.vars.y += 5;
    this.vars.direction = this.random(1, 360);
    this.costume = "pea";
    this.visible = true;
    while (true) {
      this.vars.x += this.toNumber(this.stage.vars.deltaTime) * 200;
      yield* this.draw();
      this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * 10;
      if (this.compare(this.vars.x, 265) > 0) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *draw() {
    this.effects.clear();
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y) - 35);
    this.direction = 90;
    this.costume = "shadow";
    this.effects.brightness = -100;
    this.effects.ghost = 50;
    this.stamp();
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x) - 7, this.toNumber(this.vars.y));
    this.direction = 90;
    this.costume =
      "snow " + this.toString(Math.round(this.toNumber(this.vars.sin)) % 5);
    this.effects.clear();
    this.stamp();
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.direction = 90;
    this.costume = "pea";
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
          this.stage.vars.particleQueueType.push("snow pea");
          this.stage.vars.particleQueueX.push(this.vars.x);
          this.stage.vars.particleQueueY.push(this.vars.y);
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

  *makeAttacks() {
    for (let i = 0; i < this.stage.vars.icePeaQueueX.length; i++) {
      this.vars.x = this.itemOf(this.stage.vars.icePeaQueueX, 0);
      this.vars.y = this.itemOf(this.stage.vars.icePeaQueueY, 0);
      this.createClone();
      this.stage.vars.icePeaQueueX.splice(0, 1);
      this.stage.vars.icePeaQueueY.splice(0, 1);
    }
  }

  *whenIReceiveStart() {
    this.stage.vars.icePeaQueueX = [];
    this.stage.vars.icePeaQueueY = [];
    while (true) {
      yield* this.makeAttacks();
      yield;
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
