/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Melon extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pos", "./Melon/costumes/pos.svg", {
        x: 135,
        y: 94.50000000000004,
      }),
      new Costume("Melonpult_melon", "./Melon/costumes/Melonpult_melon.svg", {
        x: 27.5,
        y: 24,
      }),
      new Costume("splash", "./Melon/costumes/splash.svg", {
        x: 102.5,
        y: 102.5,
      }),
    ];

    this.sounds = [
      new Sound("melonimpact", "./Melon/sounds/melonimpact.mp3"),
      new Sound("melonimpact2", "./Melon/sounds/melonimpact2.mp3"),
    ];

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
      new Trigger(Trigger.CLONE_START, this.startAsClone6),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = 0;
    this.vars.y = -60;
    this.vars.zombieX = 100;
    this.vars.startX = 0;
    this.vars.startY = 0;
    this.vars.pointInBetween = 50;
    this.vars.deltaTimes = 0;
  }

  *startAsClone() {
    this.vars.x += 0;
    this.vars.y += 12;
    this.costume = "Melonpult_melon";
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
      if (this.compare(this.vars.x, this.vars.zombieX) < 0) {
        this.vars.x +=
          this.toNumber(this.stage.vars.deltaTime) *
          this.toNumber(this.vars.deltaTimes);
        if (this.compare(this.vars.x, this.vars.zombieX) > 0) {
          this.vars.x = this.vars.zombieX;
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
      this.costume = "Melonpult_melon";
    } else {
      this.costume = "pos";
      this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
      this.costume = "Melonpult_melon";
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
            this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
            yield* this.startSound(this.random(1, 2));
            yield* this.melon();
            this.effects.ghost = 100;
            this.costume = "splash";
            this.size = 75;
            this.y -= 10;
            for (let i = 0; i < 1; i++) {
              while (!(this.toString(this.stage.vars.pause) === "no")) {
                yield;
              }
              yield;
            }
            this.costume = "splash";
            this.size = 20;
            this.y -= 10;
            for (let i = 0; i < 2; i++) {
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
      this.costume = "Melonpult_melon";
      if (this.touching(this.sprites["Zombies"].andClones())) {
        this.vars.zombieX = this.x;
        this.vars.zombieX += 4;
        return;
      }
    }
    this.vars.zombieX = 240;
  }

  *whenIReceiveStart() {
    this.stage.vars.melonQueueX = [];
    this.stage.vars.melonQueueY = [];
    while (true) {
      yield* this.makeAttacks();
      yield;
    }
  }

  *makeAttacks() {
    for (let i = 0; i < this.stage.vars.melonQueueX.length; i++) {
      this.vars.x = this.itemOf(this.stage.vars.melonQueueX, 0);
      this.vars.y = this.itemOf(this.stage.vars.melonQueueY, 0);
      this.createClone();
      this.stage.vars.melonQueueX.splice(0, 1);
      this.stage.vars.melonQueueY.splice(0, 1);
    }
  }

  *melon() {
    for (let i = 0; i < 10; i++) {
      this.stage.vars.particleQueueType.push("melon");
      this.stage.vars.particleQueueX.push(this.vars.x);
      this.stage.vars.particleQueueY.push(this.vars.y);
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

  *startAsClone6() {
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }
}
