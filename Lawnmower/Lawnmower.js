/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lawnmower extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pos", "./Lawnmower/costumes/pos.svg", { x: 97.5, y: 97.5 }),
      new Costume("col", "./Lawnmower/costumes/col.svg", {
        x: 1.7000000000005002,
        y: 8.100000000000193,
      }),
      new Costume(
        "LawnMower_wheelshine",
        "./Lawnmower/costumes/LawnMower_wheelshine.svg",
        { x: 13, y: 13 }
      ),
      new Costume(
        "LawnMower_wheelpiece",
        "./Lawnmower/costumes/LawnMower_wheelpiece.svg",
        { x: 13.5, y: 13 }
      ),
      new Costume(
        "LawnMower_wheel2",
        "./Lawnmower/costumes/LawnMower_wheel2.svg",
        { x: 13, y: 13 }
      ),
      new Costume(
        "LawnMower_wheel1",
        "./Lawnmower/costumes/LawnMower_wheel1.svg",
        { x: 12.5, y: 13 }
      ),
      new Costume("LawnMower_body", "./Lawnmower/costumes/LawnMower_body.svg", {
        x: 68.99999999999997,
        y: 57.900000000000006,
      }),
    ];

    this.sounds = [new Sound("lawnmower", "./Lawnmower/sounds/lawnmower.mp3")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "into game" },
        this.whenIReceiveIntoGame
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stop game" },
        this.whenIReceiveStopGame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = -237;
    this.vars.y = 180;
    this.vars.direction = 90;
    this.vars.sin = 8188.000000000033;
    this.vars.drive = 0;
    this.vars.set = 0;
    this.vars.first = 0;
    this.vars.times = 0;
    this.vars.deltaTimes = 0;
  }

  *draw() {
    this.vars.y -= 23;
    this.effects.ghost = 0;
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x) + -2, this.toNumber(this.vars.y) + -2);
    this.costume = "LawnMower_wheel1";
    this.size = 50;
    this.direction = this.toNumber(this.vars.direction);
    this.stamp();
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x) + 18, this.toNumber(this.vars.y) + -2);
    this.costume = "LawnMower_wheel2";
    this.size = 50;
    this.direction = this.toNumber(this.vars.direction);
    this.stamp();
    this.costume = "pos";
    this.goto(this.toNumber(this.vars.x) + 8, this.toNumber(this.vars.y) + -8);
    this.costume = "LawnMower_body";
    this.size = 45;
    this.direction =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) *
        this.toNumber(this.vars.times) +
      90;
    this.stamp();
    this.costume = "pos";
    this.goto(
      this.toNumber(this.vars.x) + -4,
      this.toNumber(this.vars.y) + -14
    );
    this.costume = "LawnMower_wheel1";
    this.size = 50;
    this.direction = this.toNumber(this.vars.direction);
    this.stamp();
    this.costume = "pos";
    this.goto(
      this.toNumber(this.vars.x) + 16,
      this.toNumber(this.vars.y) + -14
    );
    this.costume = "LawnMower_wheel2";
    this.size = 50;
    this.direction = this.toNumber(this.vars.direction);
    this.stamp();
    this.vars.y += 23;
  }

  *startAsClone() {
    this.vars.sin = 0;
    this.vars.drive = 0;
    this.vars.set = 0;
    this.vars.times = 1;
    this.vars.deltaTimes = 250;
    while (true) {
      this.vars.sin +=
        this.toNumber(this.stage.vars.deltaTime) *
        this.toNumber(this.vars.deltaTimes);
      yield* this.draw();
      this.vars.drive +=
        (this.toNumber(this.vars.set) - this.toNumber(this.vars.drive)) /
        (0.8 / this.toNumber(this.stage.vars.deltaTime));
      this.vars.x +=
        this.toNumber(this.stage.vars.deltaTime) *
        this.toNumber(this.vars.drive);
      if (this.toNumber(this.vars.set) === 200) {
        this.vars.direction += this.toNumber(this.stage.vars.deltaTime) * 600;
      }
      if (this.compare(this.vars.x, 260) > 0) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveIntoGame() {
    if (!(this.toString(this.stage.vars.gamemode) === "quick")) {
      yield* this.create();
    }
  }

  *startAsClone2() {
    this.vars.first = "yes";
    while (true) {
      this.effects.ghost = 100;
      this.visible = true;
      this.costume = "col";
      this.size = 100;
      this.direction = 90;
      this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
      if (this.touching(this.sprites["Zombies"].andClones())) {
        if (this.toString(this.vars.first) === "yes") {
          yield* this.startSound("lawnmower");
        }
        this.vars.deltaTimes = 350;
        this.vars.times = 3;
        this.vars.set = 250;
        this.vars.first = "no";
      }
      yield;
    }
  }

  *create() {
    this.vars.x = -237;
    this.vars.y = -120;
    for (let i = 0; i < 5; i++) {
      this.createClone();
      this.vars.y += 60;
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

  *whenGreenFlagClicked() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }
}
