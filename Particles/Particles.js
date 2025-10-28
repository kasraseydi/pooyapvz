/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Particles extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pos", "./Particles/costumes/pos.svg", {
        x: 110.5,
        y: 110.5,
      }),
      new Costume("pea 0", "./Particles/costumes/pea 0.png", { x: 16, y: 17 }),
      new Costume("pea 1", "./Particles/costumes/pea 1.png", { x: 21, y: 23 }),
      new Costume("pea 2", "./Particles/costumes/pea 2.png", { x: 23, y: 24 }),
      new Costume("pea 3", "./Particles/costumes/pea 3.png", { x: 15, y: 22 }),
      new Costume("snow pea 0", "./Particles/costumes/snow pea 0.png", {
        x: 14,
        y: 15,
      }),
      new Costume("snow pea 1", "./Particles/costumes/snow pea 1.png", {
        x: 19,
        y: 22,
      }),
      new Costume("snow pea 2", "./Particles/costumes/snow pea 2.png", {
        x: 21,
        y: 22,
      }),
      new Costume("snow pea 3", "./Particles/costumes/snow pea 3.png", {
        x: 13,
        y: 20,
      }),
      new Costume("cone", "./Particles/costumes/cone.svg", {
        x: 29.49999999999997,
        y: 28.5,
      }),
      new Costume("bucket", "./Particles/costumes/bucket.svg", {
        x: 30.99999999999997,
        y: 33.5,
      }),
      new Costume(
        "PotatoMine_mashed",
        "./Particles/costumes/PotatoMine_mashed.svg",
        { x: 66, y: 46.5 }
      ),
      new Costume(
        "ExplosionSpudow",
        "./Particles/costumes/ExplosionSpudow.svg",
        { x: 100, y: 100 }
      ),
      new Costume("fire 8", "./Particles/costumes/fire 8.svg", {
        x: 49.92948717948704,
        y: 118.33974358974356,
      }),
      new Costume("fire 7", "./Particles/costumes/fire 7.svg", {
        x: 50.7307692307692,
        y: 106.65384615384613,
      }),
      new Costume("fire 6", "./Particles/costumes/fire 6.svg", {
        x: 51.532051282051185,
        y: 89.0128205128205,
      }),
      new Costume("fire 5", "./Particles/costumes/fire 5.svg", {
        x: 52.41559829059835,
        y: 86.36574074074065,
      }),
      new Costume("fire 4", "./Particles/costumes/fire 4.svg", {
        x: 54.73717948717942,
        y: 81.48076923076937,
      }),
      new Costume("fire 3", "./Particles/costumes/fire 3.svg", {
        x: 54.25641025641042,
        y: 58.243589743589865,
      }),
      new Costume("fire 2", "./Particles/costumes/fire 2.svg", {
        x: 54.89743589743608,
        y: 59.3653846153845,
      }),
      new Costume("fire 1", "./Particles/costumes/fire 1.svg", {
        x: 56.33974358974359,
        y: 49.91025641025635,
      }),
      new Costume("fire 0", "./Particles/costumes/fire 0.svg", {
        x: 56.49999999999997,
        y: 43.5,
      }),
      new Costume("jala fire 5", "./Particles/costumes/jala fire 5.svg", {
        x: 56.5,
        y: 43.5,
      }),
      new Costume("jala fire 4", "./Particles/costumes/jala fire 4.svg", {
        x: 56.5,
        y: 43.5,
      }),
      new Costume("jala fire 3", "./Particles/costumes/jala fire 3.svg", {
        x: 56.5,
        y: 43.5,
      }),
      new Costume("jala fire 2", "./Particles/costumes/jala fire 2.svg", {
        x: 56.5,
        y: 43.5,
      }),
      new Costume("jala fire 1", "./Particles/costumes/jala fire 1.svg", {
        x: 56.5,
        y: 43.5,
      }),
      new Costume("jala fire 0", "./Particles/costumes/jala fire 0.svg", {
        x: 56.5,
        y: 43.5,
      }),
      new Costume(
        "Cornpult_butter_splat",
        "./Particles/costumes/Cornpult_butter_splat.svg",
        { x: 26, y: 24.5 }
      ),
      new Costume("melon 0", "./Particles/costumes/melon 0.png", {
        x: 28,
        y: 34,
      }),
      new Costume("melon 1", "./Particles/costumes/melon 1.png", {
        x: 32,
        y: 32,
      }),
      new Costume("melon 2", "./Particles/costumes/melon 2.png", {
        x: 33,
        y: 34,
      }),
      new Costume("melon 3", "./Particles/costumes/melon 3.png", {
        x: 31,
        y: 33,
      }),
      new Costume("melon 4", "./Particles/costumes/melon 4.png", {
        x: 28,
        y: 27,
      }),
      new Costume("melon 5", "./Particles/costumes/melon 5.png", {
        x: 23,
        y: 23,
      }),
      new Costume("melon 6", "./Particles/costumes/melon 6.png", {
        x: 19,
        y: 22,
      }),
      new Costume("melon 7", "./Particles/costumes/melon 7.png", {
        x: 15,
        y: 15,
      }),
      new Costume("melon 8", "./Particles/costumes/melon 8.png", {
        x: 9,
        y: 10,
      }),
      new Costume("BlastMark", "./Particles/costumes/BlastMark.svg", {
        x: 100.66666666666669,
        y: 89.33333333333334,
      }),
      new Costume("pop 0", "./Particles/costumes/pop 0.png", { x: 11, y: 11 }),
      new Costume("pop 1", "./Particles/costumes/pop 1.png", { x: 14, y: 13 }),
      new Costume("pop 2", "./Particles/costumes/pop 2.png", { x: 20, y: 20 }),
      new Costume("pop 3", "./Particles/costumes/pop 3.png", { x: 21, y: 24 }),
      new Costume("pop 4", "./Particles/costumes/pop 4.png", { x: 27, y: 30 }),
      new Costume(
        "Zombie_football_helmet3",
        "./Particles/costumes/Zombie_football_helmet3.svg",
        { x: 40.240576779354456, y: 55.35812139776297 }
      ),
      new Costume("star 0", "./Particles/costumes/star 0.png", {
        x: 16,
        y: 17,
      }),
      new Costume("star 1", "./Particles/costumes/star 1.png", {
        x: 21,
        y: 23,
      }),
      new Costume("star 2", "./Particles/costumes/star 2.png", {
        x: 23,
        y: 24,
      }),
      new Costume("star 3", "./Particles/costumes/star 3.png", {
        x: 15,
        y: 22,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(Trigger.BROADCAST, { name: "START" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "jalapeno" },
        this.whenIReceiveJalapeno
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stop game" },
        this.whenIReceiveStopGame
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = 0;
    this.vars.y = 0;
    this.vars.cos = -9;
    this.vars.startY = 74.453833871;
    this.vars.sin = 132.000000000005;
    this.vars.ghost = 0;
    this.vars.isClone = "no";
    this.vars.type = "none";
    this.vars.animation = 0;
    this.vars.mod = 0;
    this.vars.times = 0;
    this.vars.turn = 0;
  }

  *startAsClone() {
    this.vars.isClone = "yes";
    this.direction = 90;
    this.visible = true;
    this.vars.startY = this.y;
    if (this.toString(this.vars.type) === "cob") {
      this.costume = "BlastMark";
      this.size = 60;
      this.vars.ghost = -400;
      while (true) {
        this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * 400;
        this.effects.ghost = this.toNumber(this.vars.ghost);
        if (this.compare(this.vars.ghost, 100) > 0) {
          this.deleteThisClone();
        }
        yield;
      }
    } else {
      if (this.toString(this.vars.type) === "mashed") {
        this.y -= 20;
        this.costume = "PotatoMine_mashed";
        this.vars.ghost = -400;
        while (true) {
          this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * 400;
          this.effects.ghost = this.toNumber(this.vars.ghost);
          if (this.compare(this.vars.ghost, 100) > 0) {
            this.deleteThisClone();
          }
          yield;
        }
      } else {
        if (this.toString(this.vars.type) === "potato") {
          this.costume = "ExplosionSpudow";
          this.vars.ghost = 0;
          while (true) {
            this.size += this.toNumber(this.stage.vars.deltaTime) * 50;
            this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * 150;
            this.effects.ghost = this.toNumber(this.vars.ghost);
            if (this.compare(this.vars.ghost, 100) > 0) {
              this.deleteThisClone();
            }
            yield;
          }
        } else {
          if (this.toString(this.vars.type) === "pea") {
            this.costume = this.random(2, 5);
            this.size = 60;
            this.vars.ghost = 0;
            this.direction = this.random(1, 360);
            while (true) {
              this.size += this.toNumber(this.stage.vars.deltaTime) * 100;
              this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * 300;
              this.effects.ghost = this.toNumber(this.vars.ghost);
              if (this.compare(this.vars.ghost, 100) > 0) {
                this.deleteThisClone();
              }
              yield;
            }
          } else {
            if (this.toString(this.vars.type) === "star") {
              this.costume = this.random(46, 49);
              this.size = 60;
              this.vars.ghost = 0;
              this.direction = this.random(1, 360);
              while (true) {
                this.size += this.toNumber(this.stage.vars.deltaTime) * 100;
                this.vars.ghost +=
                  this.toNumber(this.stage.vars.deltaTime) * 300;
                this.effects.ghost = this.toNumber(this.vars.ghost);
                if (this.compare(this.vars.ghost, 100) > 0) {
                  this.deleteThisClone();
                }
                yield;
              }
            } else {
              if (this.toString(this.vars.type) === "cone") {
                this.vars.sin = 0;
                this.x -= 15;
                this.vars.startY += 75;
                for (let i = 0; i < 20; i++) {
                  this.costume = "pos";
                  this.direction +=
                    this.toNumber(this.stage.vars.deltaTime) * 250;
                  this.x += this.toNumber(this.stage.vars.deltaTime) * 150;
                  this.y =
                    Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 30 +
                    this.toNumber(this.vars.startY);
                  this.vars.sin +=
                    this.toNumber(this.stage.vars.deltaTime) * 200;
                  this.effects.ghost += 5;
                  this.costume = "cone";
                  this.size = 60;
                  yield;
                }
                this.deleteThisClone();
              } else {
                if (this.toString(this.vars.type) === "bucket") {
                  this.vars.sin = 0;
                  this.x -= 15;
                  this.vars.startY += 75;
                  for (let i = 0; i < 20; i++) {
                    this.costume = "pos";
                    this.direction +=
                      this.toNumber(this.stage.vars.deltaTime) * 250;
                    this.x += this.toNumber(this.stage.vars.deltaTime) * 150;
                    this.y =
                      Math.sin(this.degToRad(this.toNumber(this.vars.sin))) *
                        30 +
                      this.toNumber(this.vars.startY);
                    this.vars.sin +=
                      this.toNumber(this.stage.vars.deltaTime) * 200;
                    this.effects.ghost += 5;
                    this.costume = "bucket";
                    this.size = 60;
                    yield;
                  }
                  this.deleteThisClone();
                } else {
                  if (this.toString(this.vars.type) === "helmet") {
                    this.vars.sin = 0;
                    this.x -= 15;
                    this.vars.startY += 75;
                    for (let i = 0; i < 20; i++) {
                      this.costume = "pos";
                      this.direction +=
                        this.toNumber(this.stage.vars.deltaTime) * 250;
                      this.x += this.toNumber(this.stage.vars.deltaTime) * 150;
                      this.y =
                        Math.sin(this.degToRad(this.toNumber(this.vars.sin))) *
                          30 +
                        this.toNumber(this.vars.startY);
                      this.vars.sin +=
                        this.toNumber(this.stage.vars.deltaTime) * 200;
                      this.effects.ghost += 5;
                      this.costume = "Zombie_football_helmet3";
                      this.size = 60;
                      yield;
                    }
                    this.deleteThisClone();
                  } else {
                    if (this.toString(this.vars.type) === "snow pea") {
                      this.costume = this.random(6, 9);
                      this.size = 60;
                      this.vars.ghost = 0;
                      this.direction = this.random(1, 360);
                      while (true) {
                        this.size +=
                          this.toNumber(this.stage.vars.deltaTime) * 100;
                        this.vars.ghost +=
                          this.toNumber(this.stage.vars.deltaTime) * 300;
                        this.effects.ghost = this.toNumber(this.vars.ghost);
                        if (this.compare(this.vars.ghost, 100) > 0) {
                          this.deleteThisClone();
                        }
                        yield;
                      }
                    } else {
                      if (this.toString(this.vars.type) === "fire pea") {
                        this.costume = "fire 0";
                        this.size = 30;
                        this.vars.cos = 0;
                        this.direction = 90;
                        while (true) {
                          this.costume =
                            "fire " +
                            this.toString(
                              Math.round(this.toNumber(this.vars.cos))
                            );
                          this.vars.cos +=
                            this.toNumber(this.stage.vars.deltaTime) * 30;
                          if (this.compare(this.vars.cos, 8) > 0) {
                            this.deleteThisClone();
                          }
                          yield;
                        }
                      } else {
                        if (this.toString(this.vars.type) === "jala") {
                          this.costume = "fire 0";
                          this.size = 50;
                          this.direction = 90;
                          this.vars.animation = "jala fire ";
                          this.vars.mod = 6;
                          this.vars.times = 15;
                          while (true) {
                            this.costume =
                              this.toString(this.vars.animation) +
                              this.toString(
                                Math.round(this.toNumber(this.vars.cos)) %
                                  this.toNumber(this.vars.mod)
                              );
                            this.vars.cos +=
                              this.toNumber(this.stage.vars.deltaTime) *
                              this.toNumber(this.vars.times);
                            if (
                              this.toString(this.vars.animation) ===
                              "jala fire "
                            ) {
                              if (this.compare(this.vars.cos, 20) > 0) {
                                this.vars.cos = 0;
                                this.vars.animation = "fire ";
                                this.vars.mod = 9;
                                this.vars.times = 30;
                              }
                            } else {
                              if (this.compare(this.vars.cos, 8) > 0) {
                                this.deleteThisClone();
                              }
                            }
                            yield;
                          }
                        } else {
                          if (this.toString(this.vars.type) === "butter") {
                            this.costume = "Cornpult_butter_splat";
                            this.size = 50;
                            this.direction = 90;
                            this.vars.cos = 0;
                            this.x += 5;
                            this.y += 10;
                            while (true) {
                              this.vars.cos +=
                                this.toNumber(this.stage.vars.deltaTime) * 30;
                              if (this.compare(this.vars.cos, 300) > 0) {
                                this.deleteThisClone();
                              }
                              if (
                                !this.touching(
                                  this.sprites["Zombies"].andClones()
                                )
                              ) {
                                this.deleteThisClone();
                              }
                              yield;
                            }
                          } else {
                            if (this.toString(this.vars.type) === "melon") {
                              this.costume = this.random(30, 38);
                              this.size = 50;
                              this.vars.turn = this.random(-300, 300);
                              this.vars.x = this.x + this.random(-50, 50);
                              this.vars.y = this.y + this.random(-50, 50);
                              while (true) {
                                this.x +=
                                  (this.toNumber(this.vars.x) - this.x) /
                                  (0.2 /
                                    this.toNumber(this.stage.vars.deltaTime));
                                this.y +=
                                  (this.toNumber(this.vars.y) - this.y) /
                                  (0.2 /
                                    this.toNumber(this.stage.vars.deltaTime));
                                this.direction +=
                                  this.toNumber(this.stage.vars.deltaTime) *
                                  this.toNumber(this.vars.turn);
                                this.vars.ghost +=
                                  this.toNumber(this.stage.vars.deltaTime) *
                                  300;
                                this.effects.ghost = this.toNumber(
                                  this.vars.ghost
                                );
                                if (this.compare(this.vars.ghost, 100) > 0) {
                                  this.deleteThisClone();
                                }
                                yield;
                              }
                            } else {
                              if (
                                this.toString(this.vars.type) === "winter melon"
                              ) {
                                this.costume = this.random(30, 38);
                                this.effects.color = 50;
                                this.size = 50;
                                this.vars.turn = this.random(-300, 300);
                                this.vars.x = this.x + this.random(-50, 50);
                                this.vars.y = this.y + this.random(-50, 50);
                                while (true) {
                                  this.x +=
                                    (this.toNumber(this.vars.x) - this.x) /
                                    (0.2 /
                                      this.toNumber(this.stage.vars.deltaTime));
                                  this.y +=
                                    (this.toNumber(this.vars.y) - this.y) /
                                    (0.2 /
                                      this.toNumber(this.stage.vars.deltaTime));
                                  this.direction +=
                                    this.toNumber(this.stage.vars.deltaTime) *
                                    this.toNumber(this.vars.turn);
                                  this.vars.ghost +=
                                    this.toNumber(this.stage.vars.deltaTime) *
                                    300;
                                  this.effects.ghost = this.toNumber(
                                    this.vars.ghost
                                  );
                                  if (this.compare(this.vars.ghost, 100) > 0) {
                                    this.deleteThisClone();
                                  }
                                  yield;
                                }
                              } else {
                                if (this.toString(this.vars.type) === "pop") {
                                  this.costume = this.random(40, 44);
                                  this.size = 50;
                                  this.vars.turn = this.random(-300, 300);
                                  this.vars.x = this.x + this.random(-75, 75);
                                  this.vars.y = this.y + this.random(-75, 75);
                                  while (true) {
                                    this.x +=
                                      (this.toNumber(this.vars.x) - this.x) /
                                      (0.2 /
                                        this.toNumber(
                                          this.stage.vars.deltaTime
                                        ));
                                    this.y +=
                                      (this.toNumber(this.vars.y) - this.y) /
                                      (0.2 /
                                        this.toNumber(
                                          this.stage.vars.deltaTime
                                        ));
                                    this.direction +=
                                      this.toNumber(this.stage.vars.deltaTime) *
                                      this.toNumber(this.vars.turn);
                                    this.vars.ghost +=
                                      this.toNumber(this.stage.vars.deltaTime) *
                                      300;
                                    this.effects.ghost = this.toNumber(
                                      this.vars.ghost
                                    );
                                    if (
                                      this.compare(this.vars.ghost, 100) > 0
                                    ) {
                                      this.deleteThisClone();
                                    }
                                    yield;
                                  }
                                } else {
                                  null;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *whenGreenFlagClicked() {
    this.vars.isClone = "no";
    this.vars.type = "none";
  }

  *whenIReceiveDeath() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveStart() {
    this.stage.vars.particleQueueX = [];
    this.stage.vars.particleQueueY = [];
    this.stage.vars.particleQueueType = [];
    while (true) {
      yield* this.makeParticles();
      yield;
    }
  }

  *makeParticles() {
    for (let i = 0; i < this.stage.vars.particleQueueX.length; i++) {
      this.goto(
        this.toNumber(this.itemOf(this.stage.vars.particleQueueX, 0)),
        this.toNumber(this.itemOf(this.stage.vars.particleQueueY, 0))
      );
      this.vars.type = this.itemOf(this.stage.vars.particleQueueType, 0);
      this.createClone();
      this.stage.vars.particleQueueType.splice(0, 1);
      this.stage.vars.particleQueueX.splice(0, 1);
      this.stage.vars.particleQueueY.splice(0, 1);
    }
  }

  *jala() {
    this.goto(-196, this.toNumber(this.stage.vars.jalaY) - 20);
    this.vars.cos = 0;
    for (let i = 0; i < 9; i++) {
      this.vars.type = "jala";
      this.createClone();
      this.x += 49;
      this.vars.cos--;
    }
  }

  *whenIReceiveJalapeno() {
    if (this.toString(this.vars.isClone) === "no") {
      yield* this.jala();
    }
  }

  *whenIReceiveStopGame() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *startAsClone2() {
    for (let i = 0; i < 1; i++) {
      null;
      yield;
    }
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }
}
