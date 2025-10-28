/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stuffs extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("StartReady", "./Stuffs/costumes/StartReady.svg", {
        x: 150,
        y: 66.5,
      }),
      new Costume("StartSet", "./Stuffs/costumes/StartSet.svg", {
        x: 150,
        y: 66.5,
      }),
      new Costume("StartPlant", "./Stuffs/costumes/StartPlant.svg", {
        x: 150,
        y: 66.5,
      }),
      new Costume("death", "./Stuffs/costumes/death.svg", { x: 282, y: 234 }),
      new Costume("grave", "./Stuffs/costumes/grave.svg", { x: 365, y: 280 }),
      new Costume("tree", "./Stuffs/costumes/tree.svg", { x: 238, y: 340 }),
      new Costume("back", "./Stuffs/costumes/back.svg", { x: 360, y: 175 }),
      new Costume(
        "SelectorScreen_WoodSign1",
        "./Stuffs/costumes/SelectorScreen_WoodSign1.png",
        { x: 293, y: 150 }
      ),
      new Costume(
        "SelectorScreen_StartAdventure_Highlight",
        "./Stuffs/costumes/SelectorScreen_StartAdventure_Highlight.svg",
        { x: 170, y: 73 }
      ),
      new Costume(
        "SelectorScreen_StartAdventure_Button1",
        "./Stuffs/costumes/SelectorScreen_StartAdventure_Button1.svg",
        { x: 170, y: 73 }
      ),
      new Costume(
        "SelectorScreen_Leaves",
        "./Stuffs/costumes/SelectorScreen_Leaves.svg",
        { x: 120, y: 31 }
      ),
      new Costume(
        "SelectorScreen_Leaf5",
        "./Stuffs/costumes/SelectorScreen_Leaf5.svg",
        { x: 12.5, y: 18.5 }
      ),
      new Costume(
        "SelectorScreen_Leaf4",
        "./Stuffs/costumes/SelectorScreen_Leaf4.svg",
        { x: 16, y: 22.5 }
      ),
      new Costume(
        "SelectorScreen_Leaf3",
        "./Stuffs/costumes/SelectorScreen_Leaf3.svg",
        { x: 24.5, y: 33 }
      ),
      new Costume(
        "SelectorScreen_Leaf2",
        "./Stuffs/costumes/SelectorScreen_Leaf2.svg",
        { x: 17, y: 16.5 }
      ),
      new Costume(
        "SelectorScreen_Leaf1",
        "./Stuffs/costumes/SelectorScreen_Leaf1.svg",
        { x: 20, y: 20.5 }
      ),
      new Costume(
        "SelectorScreen_key_shadow",
        "./Stuffs/costumes/SelectorScreen_key_shadow.svg",
        { x: 90.5, y: 55 }
      ),
      new Costume(
        "SelectorScreen_Cloud7",
        "./Stuffs/costumes/SelectorScreen_Cloud7.svg",
        { x: 105.5, y: 36.5 }
      ),
      new Costume(
        "SelectorScreen_Cloud6",
        "./Stuffs/costumes/SelectorScreen_Cloud6.svg",
        { x: 38, y: 22 }
      ),
      new Costume(
        "SelectorScreen_Cloud5",
        "./Stuffs/costumes/SelectorScreen_Cloud5.svg",
        { x: 217, y: 72 }
      ),
      new Costume(
        "SelectorScreen_Cloud4",
        "./Stuffs/costumes/SelectorScreen_Cloud4.svg",
        { x: 119.5, y: 45.5 }
      ),
      new Costume(
        "SelectorScreen_Cloud2",
        "./Stuffs/costumes/SelectorScreen_Cloud2.svg",
        { x: 76, y: 60.5 }
      ),
      new Costume(
        "SelectorScreen_Cloud1",
        "./Stuffs/costumes/SelectorScreen_Cloud1.svg",
        { x: 110, y: 103 }
      ),
      new Costume(
        "SelectorScreen_BG",
        "./Stuffs/costumes/SelectorScreen_BG.svg",
        { x: 50, y: 37.5 }
      ),
      new Costume(
        "SelectorScreen_almanac_shadow",
        "./Stuffs/costumes/SelectorScreen_almanac_shadow.svg",
        { x: 90.5, y: 55 }
      ),
      new Costume(
        "SelectorScreen_almanac_key_shadow",
        "./Stuffs/costumes/SelectorScreen_almanac_key_shadow.svg",
        { x: 90.5, y: 55 }
      ),
      new Costume("loading", "./Stuffs/costumes/loading.svg", {
        x: 47.049983978271484,
        y: 15.75,
      }),
      new Costume("LoadBar_dirt", "./Stuffs/costumes/LoadBar_dirt.svg", {
        x: 152.75,
        y: 26.5,
      }),
      new Costume("LoadBar_grass", "./Stuffs/costumes/LoadBar_grass.svg", {
        x: 157,
        y: 16.5,
      }),
      new Costume("SodRollCap", "./Stuffs/costumes/SodRollCap.svg", {
        x: 36.50000000000003,
        y: 35.5,
      }),
      new Costume("sod mask", "./Stuffs/costumes/sod mask.svg", {
        x: -0.5,
        y: 58.66665999999999,
      }),
      new Costume(
        "Pvz_logo_stacked_rgb",
        "./Stuffs/costumes/Pvz_logo_stacked_rgb.svg",
        { x: 710.5, y: 424 }
      ),
      new Costume("side mask", "./Stuffs/costumes/side mask.svg", {
        x: -209.5,
        y: 190,
      }),
      new Costume("fade", "./Stuffs/costumes/fade.svg", { x: 254, y: 189.5 }),
      new Costume("zombatar_bg", "./Stuffs/costumes/zombatar_bg.svg", {
        x: 400,
        y: 300,
      }),
      new Costume(
        "zombatar_mainmenuback_highlight",
        "./Stuffs/costumes/zombatar_mainmenuback_highlight.svg",
        { x: 105, y: 24.5 }
      ),
      new Costume("Almanac", "./Stuffs/costumes/Almanac.svg", { x: 40, y: 40 }),
      new Costume("what", "./Stuffs/costumes/what.svg", { x: 162, y: 248.5 }),
      new Costume("easy", "./Stuffs/costumes/easy.svg", { x: 162, y: 248.5 }),
      new Costume("medium", "./Stuffs/costumes/medium.svg", {
        x: 162,
        y: 248.4999996296296,
      }),
      new Costume("hard", "./Stuffs/costumes/hard.svg", { x: 162, y: 248.5 }),
      new Costume("endless", "./Stuffs/costumes/endless.svg", {
        x: 162,
        y: 248.5,
      }),
      new Costume("quick", "./Stuffs/costumes/quick.svg", { x: 162, y: 248.5 }),
      new Costume("bowling", "./Stuffs/costumes/bowling.svg", {
        x: 162,
        y: 248.5,
      }),
      new Costume("drag", "./Stuffs/costumes/drag.svg", {
        x: 64.00997924804685,
        y: 15.981249999999989,
      }),
      new Costume(
        "output-onlinepngtools (4)",
        "./Stuffs/costumes/output-onlinepngtools (4).svg",
        { x: 211.5, y: 249 }
      ),
      new Costume("back to game", "./Stuffs/costumes/back to game.svg", {
        x: 181.16975,
        y: -131.89659999999998,
      }),
      new Costume("back to game2", "./Stuffs/costumes/back to game2.svg", {
        x: 181.16975,
        y: -131.89659999999998,
      }),
      new Costume("button_middle", "./Stuffs/costumes/button_middle.svg", {
        x: 105,
        y: 23,
      }),
      new Costume(
        "options_sliderslot",
        "./Stuffs/costumes/options_sliderslot.svg",
        { x: 106.55405249999967, y: 15.981249999999989 }
      ),
      new Costume(
        "options_sliderknob2",
        "./Stuffs/costumes/options_sliderknob2.svg",
        { x: 11, y: 14.5 }
      ),
      new Costume(
        "SelectorScreen_Options3",
        "./Stuffs/costumes/SelectorScreen_Options3.svg",
        { x: 40.66666666666666, y: 12.666666666666686 }
      ),
      new Costume(
        "SelectorScreen_Options1",
        "./Stuffs/costumes/SelectorScreen_Options1.svg",
        { x: 40.5, y: 15.5 }
      ),
      new Costume(
        "SelectorScreen_Options2",
        "./Stuffs/costumes/SelectorScreen_Options2.svg",
        { x: 40.5, y: 15.5 }
      ),
      new Costume("thumbnail", "./Stuffs/costumes/thumbnail.svg", {
        x: 241.84183109784198,
        y: 181.3813733233815,
      }),
      new Costume("generatedtext2", "./Stuffs/costumes/generatedtext2.svg", {
        x: 234,
        y: 13.75,
      }),
      new Costume("generatedtext", "./Stuffs/costumes/generatedtext.svg", {
        x: 228.9152485819153,
        y: 13.072571302266738,
      }),
    ];

    this.sounds = [
      new Sound("readysetplant", "./Stuffs/sounds/readysetplant.mp3"),
      new Sound("scream", "./Stuffs/sounds/scream.mp3"),
      new Sound("chompsoft", "./Stuffs/sounds/chompsoft.mp3"),
      new Sound("hugewave", "./Stuffs/sounds/hugewave.mp3"),
      new Sound("losemusic", "./Stuffs/sounds/losemusic.mp3"),
      new Sound("gravebutton", "./Stuffs/sounds/gravebutton.mp3"),
      new Sound("buttonclick", "./Stuffs/sounds/buttonclick.mp3"),
      new Sound("bleep", "./Stuffs/sounds/bleep.mp3"),
      new Sound("pause", "./Stuffs/sounds/pause.mp3"),
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "death" },
        this.whenIReceiveDeath2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "death" },
        this.whenIReceiveDeath3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start soft" },
        this.whenIReceiveStartSoft
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start soft" },
        this.whenIReceiveStartSoft2
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "load game" },
        this.whenIReceiveLoadGame
      ),
      new Trigger(Trigger.BROADCAST, { name: "menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gamemode select" },
        this.whenIReceiveGamemodeSelect
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "into game" },
        this.whenIReceiveIntoGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "seed select" },
        this.whenIReceiveSeedSelect
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "almanac" },
        this.whenIReceiveAlmanac
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "more zombies" },
        this.whenIReceiveMoreZombies
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "more zombies" },
        this.whenIReceiveMoreZombies2
      ),
      new Trigger(Trigger.BROADCAST, { name: "pause" }, this.whenIReceivePause),
      new Trigger(
        Trigger.BROADCAST,
        { name: "options" },
        this.whenIReceiveOptions
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "delete options" },
        this.whenIReceiveDeleteOptions
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "unpause" },
        this.whenIReceiveUnpause
      ),
      new Trigger(Trigger.BROADCAST, { name: "won" }, this.whenIReceiveWon),
      new Trigger(Trigger.BROADCAST, { name: "won" }, this.whenIReceiveWon2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];

    this.audioEffects.volume = 50;

    this.vars.ghost = 105.600000000004;
    this.vars.cos = 0;
    this.vars.type = "sound slider";
    this.vars.i = 0;
    this.vars.x = 122;
    this.vars.y = -120;
    this.vars.first = "no";
    this.vars.isClone = "no";
    this.vars.times = 15;
    this.vars.clicked = "no";
    this.vars.click = "yes";
    this.vars.momentum = 0;
    this.vars.scrollXSet = 0;
    this.vars.clicker = 0;
  }

  *whenIReceiveDeath() {
    this.visible = true;
    this.costume = "death";
    this.size = 1000;
    this.effects.clear();
    while (true) {
      this.size +=
        (50 - this.size) / (0.04 / this.toNumber(this.stage.vars.deltaTime));
      this.goto(this.random(-1, 1), this.random(-1, 1));
      yield;
    }
  }

  *whenIReceiveDeath2() {
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
    yield* this.startSound("scream");
  }

  *whenIReceiveDeath3() {
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
    yield* this.startSound("losemusic");
    yield* this.startSound("chompsoft");
    yield* this.wait(0.9);
    yield* this.startSound("chompsoft");
    yield* this.wait(0.9);
    yield* this.playSoundUntilDone("chompsoft");
    yield* this.wait(1);
    this.broadcast("menu");
    this.broadcast("menu music");
    this.broadcast("stop game");
  }

  *whenIReceiveStartSoft() {
    this.effects.clear();
    this.visible = false;
    yield* this.wait(0.1);
    this.visible = true;
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume) * 2;
    yield* this.startSound("readysetplant");
    this.costume = "StartReady";
    this.size = 4;
    this.vars.times = 1500;
    yield* this.wait(0.6);
    this.costume = "StartSet";
    this.size = 4;
    this.vars.times = 1500;
    yield* this.wait(0.6);
    this.costume = "StartPlant";
    this.size = 4;
    this.vars.times = 2000;
    if (this.toString(this.stage.vars.broadcastStart) === "yes") {
      this.broadcast("START");
    }
    this.stage.vars.broadcastStart = "no";
    this.stage.vars.continueWaves = "yes";
    this.stage.vars.pauseCertainPlants = "no";
    this.vars.ghost = -100;
    this.stage.vars.canPlant = "yes";
    this.stage.vars.canPause = "yes";
    while (true) {
      this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * 150;
      this.effects.ghost = this.toNumber(this.vars.ghost);
      if (this.compare(this.vars.ghost, 100) > 0) {
        this.visible = false;
        /* TODO: Implement stop other scripts in sprite */ null;
        return;
      }
      yield;
    }
  }

  *whenIReceiveStartSoft2() {
    this.costume = "StartReady";
    this.size = 100;
    this.vars.times = 15;
    while (true) {
      this.size +=
        this.toNumber(this.stage.vars.deltaTime) *
        this.toNumber(this.vars.times);
      this.vars.times +=
        (15 - this.toNumber(this.vars.times)) /
        (0.04 / this.toNumber(this.stage.vars.deltaTime));
      yield;
    }
  }

  *startAsClone() {
    this.effects.clear();
    this.visible = true;
    this.vars.isClone = "yes";
    if (this.toString(this.vars.type) === "sound slider") {
      this.moveAhead();
      this.visible = true;
      this.costume = "options_sliderknob2";
      this.size = 60;
      this.goto(0, 25);
      this.vars.clicked = "no";
      this.vars.click = "yes";
      while (true) {
        this.goto(
          this.toNumber(this.stage.vars.volume) * 1.6 -
            (this.toNumber(this.stage.vars.volume) * 1.6) / 2,
          25
        );
        this.x -= 17;
        if (this.touching("mouse") && this.mouse.down) {
          this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
          yield* this.startSound("bleep");
          while (!!this.mouse.down) {
            this.x = this.mouse.x;
            if (this.compare(this.x, 100 * 1.6 - (100 * 1.6) / 2 - 17) > 0) {
              this.x = 100 * 1.6 - (100 * 1.6) / 2 - 17;
            }
            if (this.compare(this.x, 0 * 1.6 - (0 * 1.6) / 2 - 17) < 0) {
              this.x = 0 * 1.6 - (0 * 1.6) / 2 - 17;
            }
            this.x += 17;
            this.stage.vars.volume = this.x / 1.6 + this.x / 1.6 / 1;
            this.x -= 17;
            if (this.toNumber(this.stage.vars.volume) === 0) {
              this.stage.vars.volume = 0.01;
            }
            yield;
          }
        }
        yield;
      }
    } else {
      if (this.toString(this.vars.type) === "music slider") {
        this.moveAhead();
        this.visible = true;
        this.costume = "options_sliderknob2";
        this.size = 60;
        this.goto(0, 45);
        this.vars.clicked = "no";
        this.vars.click = "yes";
        while (true) {
          this.goto(
            this.toNumber(this.stage.vars.music) * 1.6 -
              (this.toNumber(this.stage.vars.music) * 1.6) / 2,
            45
          );
          this.x -= 17;
          if (this.touching("mouse") && this.mouse.down) {
            this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
            yield* this.startSound("bleep");
            while (!!this.mouse.down) {
              this.x = this.mouse.x;
              if (this.compare(this.x, 100 * 1.6 - (100 * 1.6) / 2 - 17) > 0) {
                this.x = 100 * 1.6 - (100 * 1.6) / 2 - 17;
              }
              if (this.compare(this.x, 0 * 1.6 - (0 * 1.6) / 2 - 17) < 0) {
                this.x = 0 * 1.6 - (0 * 1.6) / 2 - 17;
              }
              this.x += 17;
              this.stage.vars.music = this.x / 1.6 + this.x / 1.6 / 1;
              this.x -= 17;
              yield;
            }
          }
          yield;
        }
      } else {
        if (this.toString(this.vars.type) === "main menu") {
          this.moveAhead();
          this.visible = true;
          this.costume = "button_middle";
          this.size = 50;
          this.goto(0, -40);
          this.vars.clicked = "no";
          this.vars.click = "yes";
          while (true) {
            if (this.touching("mouse")) {
              this.effects.brightness = 10;
            } else {
              this.effects.brightness = 0;
            }
            if (this.mouse.down) {
              if (this.toString(this.vars.click) === "yes") {
                this.vars.clicked = "yes";
              }
              this.vars.click = "no";
            } else {
              this.vars.click = "yes";
            }
            if (
              this.touching("mouse") &&
              this.toString(this.vars.clicked) === "yes"
            ) {
              this.stage.vars.pause = "no";
              this.broadcast("stop game");
              this.broadcast("menu");
              this.broadcast("menu music");
              return;
            }
            this.vars.clicked = "no";
            yield;
          }
        } else {
          if (this.toString(this.vars.type) === "ok") {
            this.moveAhead();
            this.visible = true;
            this.costume = "back to game2";
            this.size = 50;
            this.goto(0, 0);
            this.vars.clicked = "no";
            this.vars.click = "yes";
            while (true) {
              if (this.touching("mouse")) {
                this.effects.brightness = 10;
              } else {
                this.effects.brightness = 0;
              }
              if (this.mouse.down) {
                if (this.toString(this.vars.click) === "yes") {
                  this.vars.clicked = "yes";
                }
                this.vars.click = "no";
              } else {
                this.vars.click = "yes";
              }
              if (
                this.touching("mouse") &&
                this.toString(this.vars.clicked) === "yes"
              ) {
                this.audioEffects.volume = this.toNumber(
                  this.stage.vars.volume
                );
                yield* this.startSound("gravebutton");
                this.broadcast("delete options");
              }
              this.vars.clicked = "no";
              yield;
            }
          } else {
            if (this.toString(this.vars.type) === "back to") {
              this.moveAhead();
              this.visible = true;
              this.costume = "back to game";
              this.size = 50;
              this.goto(0, 0);
              this.vars.clicked = "no";
              this.vars.click = "yes";
              while (true) {
                if (this.touching("mouse")) {
                  this.effects.brightness = 10;
                } else {
                  this.effects.brightness = 0;
                }
                if (this.mouse.down) {
                  if (this.toString(this.vars.click) === "yes") {
                    this.vars.clicked = "yes";
                  }
                  this.vars.click = "no";
                } else {
                  this.vars.click = "yes";
                }
                if (
                  this.touching("mouse") &&
                  this.toString(this.vars.clicked) === "yes"
                ) {
                  this.stage.vars.pause = "no";
                  this.broadcast("unpause");
                }
                this.vars.clicked = "no";
                yield;
              }
            } else {
              if (this.toString(this.vars.type) === "menu bg") {
                this.moveAhead();
                this.visible = true;
                this.costume = "output-onlinepngtools (4)";
                this.size = 50;
                this.goto(0, 0);
              } else {
                if (this.toString(this.vars.type) === "delete") {
                  for (let i = 0; i < 1; i++) {
                    null;
                    yield;
                  }
                  this.deleteThisClone();
                } else {
                  if (this.toString(this.vars.type) === "bg") {
                    this.moveBehind();
                  } else {
                    if (this.toString(this.vars.type) === "sod") {
                      while (true) {
                        this.goto(
                          -110 +
                            (this.toNumber(this.stage.vars.loadProgress) /
                              100) *
                              235,
                          -80 -
                            (this.toNumber(this.stage.vars.loadProgress) /
                              100) *
                              13
                        );
                        this.size =
                          60 -
                          (this.toNumber(this.stage.vars.loadProgress) / 100) *
                            40;
                        this.direction =
                          (this.toNumber(this.stage.vars.loadProgress) / 100) *
                          600;
                        if (
                          this.toNumber(this.stage.vars.loadProgress) === 100
                        ) {
                          this.deleteThisClone();
                        }
                        yield;
                      }
                    } else {
                      if (this.toString(this.vars.type) === "sod mask") {
                        while (true) {
                          this.goto(
                            -110 +
                              (this.toNumber(this.stage.vars.loadProgress) /
                                100) *
                                235,
                            -95
                          );
                          if (
                            this.toNumber(this.stage.vars.loadProgress) === 100
                          ) {
                            this.deleteThisClone();
                          }
                          yield;
                        }
                      } else {
                        if (
                          this.toString(this.vars.type) === "menu background"
                        ) {
                          while (true) {
                            this.x +=
                              (this.toNumber(this.vars.x) - this.x) /
                              (0.2 / this.toNumber(this.stage.vars.deltaTime));
                            this.y +=
                              (this.toNumber(this.vars.y) - this.y) /
                              (0.2 / this.toNumber(this.stage.vars.deltaTime));
                            yield;
                          }
                        } else {
                          if (this.toString(this.vars.type) === "menu button") {
                            this.vars.first = "yes";
                            this.vars.clicked = "no";
                            this.vars.click = "yes";
                            while (true) {
                              if (this.mouse.down) {
                                if (this.toString(this.vars.click) === "yes") {
                                  this.vars.clicked = "yes";
                                }
                                this.vars.click = "no";
                              } else {
                                this.vars.click = "yes";
                              }
                              this.x +=
                                (this.toNumber(this.vars.x) - this.x) /
                                (0.2 /
                                  this.toNumber(this.stage.vars.deltaTime));
                              this.y +=
                                (this.toNumber(this.vars.y) - this.y) /
                                (0.2 /
                                  this.toNumber(this.stage.vars.deltaTime));
                              if (this.touching("mouse")) {
                                this.costume =
                                  "SelectorScreen_StartAdventure_Highlight";
                                if (
                                  this.toString(this.vars.clicked) === "yes"
                                ) {
                                  if (
                                    this.toString(this.vars.first) === "yes"
                                  ) {
                                    this.broadcast("gamemode select");
                                    this.audioEffects.volume = this.toNumber(
                                      this.stage.vars.volume
                                    );
                                    yield* this.startSound("gravebutton");
                                  }
                                  this.vars.first = "no";
                                }
                              } else {
                                this.costume =
                                  "SelectorScreen_StartAdventure_Button1";
                              }
                              this.vars.clicked = "no";
                              yield;
                            }
                          } else {
                            if (this.toString(this.vars.type) === "options") {
                              this.vars.first = "yes";
                              this.costume = "SelectorScreen_Options1";
                              this.vars.clicked = "no";
                              this.vars.click = "yes";
                              while (true) {
                                if (this.mouse.down) {
                                  if (
                                    this.toString(this.vars.click) === "yes"
                                  ) {
                                    this.vars.clicked = "yes";
                                  }
                                  this.vars.click = "no";
                                } else {
                                  this.vars.click = "yes";
                                }
                                this.costume = "easy";
                                this.x +=
                                  (this.toNumber(this.vars.x) - this.x) /
                                  (0.2 /
                                    this.toNumber(this.stage.vars.deltaTime));
                                this.y +=
                                  (this.toNumber(this.vars.y) - this.y) /
                                  (0.2 /
                                    this.toNumber(this.stage.vars.deltaTime));
                                this.costume = "SelectorScreen_Options3";
                                if (this.touching("mouse")) {
                                  this.costume = "SelectorScreen_Options2";
                                  if (
                                    this.toString(this.vars.clicked) === "yes"
                                  ) {
                                    if (
                                      this.toString(this.vars.first) === "yes"
                                    ) {
                                      this.broadcast("options");
                                      this.audioEffects.volume = this.toNumber(
                                        this.stage.vars.volume
                                      );
                                      yield* this.startSound("gravebutton");
                                    }
                                    this.vars.first = "no";
                                  }
                                } else {
                                  this.costume = "SelectorScreen_Options1";
                                }
                                this.vars.clicked = "no";
                                yield;
                              }
                            } else {
                              if (this.toString(this.vars.type) === "almanac") {
                                this.vars.first = "yes";
                                this.costume = "Almanac";
                                this.vars.clicked = "no";
                                this.vars.click = "yes";
                                while (true) {
                                  if (this.mouse.down) {
                                    if (
                                      this.toString(this.vars.click) === "yes"
                                    ) {
                                      this.vars.clicked = "yes";
                                    }
                                    this.vars.click = "no";
                                  } else {
                                    this.vars.click = "yes";
                                  }
                                  this.costume = "easy";
                                  this.x +=
                                    (this.toNumber(this.vars.x) - this.x) /
                                    (0.2 /
                                      this.toNumber(this.stage.vars.deltaTime));
                                  this.y +=
                                    (this.toNumber(this.vars.y) - this.y) /
                                    (0.2 /
                                      this.toNumber(this.stage.vars.deltaTime));
                                  this.costume = "Almanac";
                                  if (this.touching("mouse")) {
                                    this.effects.brightness = 20;
                                    if (
                                      this.toString(this.vars.clicked) === "yes"
                                    ) {
                                      if (
                                        this.toString(this.vars.first) === "yes"
                                      ) {
                                        this.broadcast("almanac");
                                        this.audioEffects.volume =
                                          this.toNumber(this.stage.vars.volume);
                                        yield* this.startSound("buttonclick");
                                      }
                                      this.vars.first = "no";
                                    }
                                  } else {
                                    this.effects.brightness = 0;
                                  }
                                  this.vars.clicked = "no";
                                  yield;
                                }
                              } else {
                                if (
                                  this.toString(this.vars.type) ===
                                  "back button"
                                ) {
                                  this.vars.first = "yes";
                                  this.vars.clicked = "no";
                                  this.vars.click = "yes";
                                  while (true) {
                                    if (this.mouse.down) {
                                      if (
                                        this.toString(this.vars.click) === "yes"
                                      ) {
                                        this.vars.clicked = "yes";
                                      }
                                      this.vars.click = "no";
                                    } else {
                                      this.vars.click = "yes";
                                    }
                                    if (this.touching("mouse")) {
                                      this.effects.ghost = 0;
                                      if (
                                        this.toString(this.vars.clicked) ===
                                        "yes"
                                      ) {
                                        if (
                                          this.toString(this.vars.first) ===
                                          "yes"
                                        ) {
                                          this.broadcast("menu");
                                          this.audioEffects.volume =
                                            this.toNumber(
                                              this.stage.vars.volume
                                            );
                                          yield* this.startSound("bleep");
                                        }
                                        this.vars.first = "no";
                                      }
                                    } else {
                                      this.effects.ghost = 100;
                                    }
                                    this.vars.clicked = "no";
                                    yield;
                                  }
                                } else {
                                  if (
                                    this.toString(this.vars.type) === "what"
                                  ) {
                                    this.vars.first = "yes";
                                    this.vars.cos = this.costume.name;
                                    this.vars.clicked = "no";
                                    this.vars.click = "no";
                                    this.vars.clicker = 15;
                                    while (true) {
                                      this.costume = "fade";
                                      this.size = 100;
                                      this.goto(
                                        this.toNumber(this.stage.vars.scrollX) +
                                          this.toNumber(this.vars.x),
                                        this.toNumber(this.vars.y)
                                      );
                                      this.costume = this.vars.cos;
                                      this.size =
                                        40 - Math.abs(0 - this.x) / 30;
                                      this.visible = true;
                                      yield;
                                    }
                                  } else {
                                    if (
                                      this.toString(this.vars.type) ===
                                      "game button"
                                    ) {
                                      this.vars.first = "yes";
                                      this.vars.cos = this.costume.name;
                                      this.vars.clicked = "no";
                                      this.vars.click = "no";
                                      this.vars.clicker = 15;
                                      while (true) {
                                        if (this.mouse.down) {
                                          this.vars.clicker +=
                                            this.toNumber(
                                              this.stage.vars.deltaTime
                                            ) * 30;
                                          this.vars.click = "yes";
                                        }
                                        if (!this.mouse.down) {
                                          if (
                                            this.toString(this.vars.click) ===
                                            "yes"
                                          ) {
                                            if (
                                              this.compare(
                                                this.vars.clicker,
                                                4
                                              ) < 0
                                            ) {
                                              this.vars.clicked = "yes";
                                            }
                                          }
                                          this.vars.click = "no";
                                          this.vars.clicker = 0;
                                        }
                                        this.costume = "fade";
                                        this.size = 100;
                                        this.goto(
                                          this.toNumber(
                                            this.stage.vars.scrollX
                                          ) + this.toNumber(this.vars.x),
                                          this.toNumber(this.vars.y)
                                        );
                                        this.costume = this.vars.cos;
                                        this.size =
                                          40 - Math.abs(0 - this.x) / 30;
                                        if (this.touching("mouse")) {
                                          this.effects.brightness = 10;
                                          if (
                                            this.toString(this.vars.clicked) ===
                                            "yes"
                                          ) {
                                            if (
                                              this.toString(this.vars.first) ===
                                              "yes"
                                            ) {
                                              this.stage.vars.gamemode =
                                                this.vars.cos;
                                              this.broadcast("into game");
                                              this.audioEffects.volume =
                                                this.toNumber(
                                                  this.stage.vars.volume
                                                );
                                              yield* this.startSound(
                                                "buttonclick"
                                              );
                                            }
                                            this.vars.first = "no";
                                          }
                                        } else {
                                          this.effects.brightness = 0;
                                        }
                                        this.vars.clicked = "no";
                                        yield;
                                      }
                                    } else {
                                      if (
                                        this.toString(this.vars.type) ===
                                        "scroll"
                                      ) {
                                        this.visible = false;
                                        this.goto(0, 0);
                                        this.vars.momentum = 0;
                                        while (true) {
                                          if (this.mouse.down) {
                                            this.x = this.mouse.x;
                                            while (!!this.mouse.down) {
                                              this.stage.vars.scrollX +=
                                                this.mouse.x - this.x;
                                              this.vars.momentum =
                                                (this.mouse.x - this.x) * 45;
                                              this.x = this.mouse.x;
                                              this.stage.vars.scrollX +=
                                                this.toNumber(
                                                  this.stage.vars.deltaTime
                                                ) *
                                                (this.toNumber(
                                                  this.vars.momentum
                                                ) *
                                                  2);
                                              this.vars.scrollXSet =
                                                Math.round(
                                                  this.toNumber(
                                                    this.stage.vars.scrollX
                                                  ) / 200
                                                ) * 200;
                                              if (
                                                this.compare(
                                                  this.vars.scrollXSet,
                                                  0
                                                ) > 0
                                              ) {
                                                this.vars.scrollXSet = 0;
                                              }
                                              if (
                                                this.compare(
                                                  this.vars.scrollXSet,
                                                  this.stage.vars.maxScrollX
                                                ) < 0
                                              ) {
                                                this.vars.scrollXSet =
                                                  this.stage.vars.maxScrollX;
                                              }
                                              this.stage.vars.scrollX +=
                                                this.toNumber(
                                                  this.stage.vars.deltaTime
                                                ) *
                                                (this.toNumber(
                                                  this.vars.momentum
                                                ) *
                                                  2) *
                                                -1;
                                              yield;
                                            }
                                          }
                                          this.stage.vars.scrollX +=
                                            this.toNumber(
                                              this.stage.vars.deltaTime
                                            ) *
                                            this.toNumber(this.vars.momentum);
                                          this.stage.vars.scrollX +=
                                            (this.toNumber(
                                              this.vars.scrollXSet
                                            ) -
                                              this.toNumber(
                                                this.stage.vars.scrollX
                                              )) /
                                            (0.1 /
                                              this.toNumber(
                                                this.stage.vars.deltaTime
                                              ));
                                          this.vars.momentum +=
                                            (0 -
                                              this.toNumber(
                                                this.vars.momentum
                                              )) /
                                            (0.2 /
                                              this.toNumber(
                                                this.stage.vars.deltaTime
                                              ));
                                          yield;
                                        }
                                      } else {
                                        if (
                                          this.toString(this.vars.type) ===
                                          "drag"
                                        ) {
                                          this.visible = true;
                                          while (!!this.mouse.down) {
                                            yield;
                                          }
                                          while (!this.mouse.down) {
                                            yield;
                                          }
                                          this.deleteThisClone();
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
        }
      }
    }
  }

  *whenIReceiveLoadGame() {
    this.vars.type = "stay";
    this.costume = "side mask";
    this.size = 100;
    this.goto(0, 0);
    this.createClone();
    this.costume = "Pvz_logo_stacked_rgb";
    this.size = 20;
    this.goto(0, 80);
    this.createClone();
    this.costume = "LoadBar_dirt";
    this.size = 80;
    this.goto(0, -110);
    this.createClone();
    this.costume = "loading";
    this.size = 80;
    this.goto(0, -110);
    this.createClone();
    this.costume = "LoadBar_grass";
    this.size = 80;
    this.goto(1, -90);
    this.createClone();
    this.vars.type = "sod mask";
    this.costume = "sod mask";
    this.size = 100;
    this.goto(-100, -95);
    this.createClone();
    this.vars.type = "sod";
    this.costume = "SodRollCap";
    this.size = 60;
    this.goto(-100, -95);
    this.createClone();
    this.vars.i = 0;
    while (!(this.compare(this.stage.vars.loadProgress, 99.9) > 0)) {
      null;
      yield;
    }
    this.stage.vars.loadProgress = 100;
    this.stage.vars.loaded = "yes";
    this.broadcast("menu");
    this.broadcast("menu music");
  }

  *whenIReceiveMenu() {
    if (this.toString(this.vars.isClone) === "yes") {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.vars.ghost = 100;
      while (!(this.compare(this.vars.ghost, 0) < 0)) {
        this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * -200;
        yield;
      }
      this.deleteThisClone();
    } else {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.vars.ghost = 100;
      this.goto(0, 0);
      this.costume = "fade";
      this.moveAhead();
      this.size = 100;
      this.visible = true;
      while (!(this.compare(this.vars.ghost, 0) < 0)) {
        this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * -200;
        this.effects.ghost = this.toNumber(this.vars.ghost);
        yield;
      }
      this.broadcast("stop game");
      this.vars.type = "menu background";
      this.costume = "SelectorScreen_BG";
      this.size = 480;
      this.goto(0, 0);
      this.vars.x = 0;
      this.vars.y = 0;
      this.createClone();
      this.costume = "back";
      this.size = 60;
      this.goto(0, -48);
      this.vars.x = 0;
      this.vars.y = -38;
      this.createClone();
      this.costume = "tree";
      this.size = 60;
      this.goto(-100, -25);
      this.vars.x = -100;
      this.vars.y = 24;
      this.createClone();
      this.costume = "grave";
      this.size = 60;
      this.goto(21, -200);
      this.vars.x = 21;
      this.vars.y = -12;
      this.createClone();
      this.vars.type = "menu button";
      this.costume = "SelectorScreen_StartAdventure_Button1";
      this.size = 60;
      this.goto(100, -88);
      this.vars.x = 100;
      this.vars.y = 100;
      this.createClone();
      this.vars.type = "almanac";
      this.costume = "easy";
      this.size = 80;
      this.goto(-30, -298);
      this.vars.x = -30;
      this.vars.y = -110;
      this.createClone();
      this.vars.type = "options";
      this.costume = "easy";
      this.size = 60;
      this.goto(120, -308);
      this.vars.x = 122;
      this.vars.y = -120;
      this.createClone();
      this.vars.ghost = 0;
      this.goto(0, 0);
      this.costume = "fade";
      this.moveAhead();
      this.size = 100;
      this.visible = true;
      while (!(this.compare(this.vars.ghost, 100) > 0)) {
        this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * 200;
        this.effects.ghost = this.toNumber(this.vars.ghost);
        yield;
      }
      this.visible = false;
    }
  }

  *whenGreenFlagClicked() {
    this.vars.isClone = "no";
    this.visible = false;
  }

  *whenIReceiveGamemodeSelect() {
    if (this.toString(this.vars.isClone) === "yes") {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.vars.ghost = 100;
      while (!(this.compare(this.vars.ghost, 0) < 0)) {
        this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * -200;
        yield;
      }
      this.deleteThisClone();
    } else {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.vars.ghost = 100;
      this.goto(0, 0);
      this.costume = "fade";
      this.moveAhead();
      this.size = 100;
      this.visible = true;
      while (!(this.compare(this.vars.ghost, 0) < 0)) {
        this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * -200;
        this.effects.ghost = this.toNumber(this.vars.ghost);
        yield;
      }
      this.vars.type = "bg";
      this.costume = "zombatar_bg";
      this.size = 60;
      this.goto(0, 0);
      this.createClone();
      this.vars.type = "back button";
      this.costume = "zombatar_mainmenuback_highlight";
      this.size = 60;
      this.goto(-10, -151);
      this.createClone();
      yield* this.gamemodes();
      this.vars.ghost = 0;
      this.goto(0, 0);
      this.costume = "fade";
      this.moveAhead();
      this.size = 100;
      this.visible = true;
      while (!(this.compare(this.vars.ghost, 100) > 0)) {
        this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * 200;
        this.effects.ghost = this.toNumber(this.vars.ghost);
        yield;
      }
      this.visible = false;
    }
  }

  *whenIReceiveIntoGame() {
    if (this.toString(this.vars.isClone) === "yes") {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.vars.ghost = 100;
      while (!(this.compare(this.vars.ghost, 0) < 0)) {
        this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * -200;
        yield;
      }
      this.deleteThisClone();
    } else {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.vars.ghost = 100;
      this.goto(0, 0);
      this.costume = "fade";
      this.moveAhead();
      this.size = 100;
      this.visible = true;
      while (!(this.compare(this.vars.ghost, 0) < 0)) {
        this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * -200;
        this.effects.ghost = this.toNumber(this.vars.ghost);
        yield;
      }
      /* TODO: Implement stop other scripts in sprite */ null;
      this.moveAhead();
      this.broadcast("seed select");
      this.moveAhead();
      this.vars.ghost = 0;
      this.goto(0, 0);
      this.costume = "fade";
      this.moveAhead();
      this.size = 100;
      this.visible = true;
      while (!(this.compare(this.vars.ghost, 100) > 0)) {
        this.moveAhead();
        this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * 200;
        this.effects.ghost = this.toNumber(this.vars.ghost);
        yield;
      }
      this.visible = false;
    }
  }

  *whenIReceiveSeedSelect() {
    for (let i = 0; i < 3; i++) {
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveAlmanac() {
    if (this.toString(this.vars.isClone) === "yes") {
      this.vars.ghost = 100;
      while (!(this.compare(this.vars.ghost, 0) < 0)) {
        this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * -200;
        yield;
      }
      this.deleteThisClone();
    } else {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.vars.ghost = 100;
      this.goto(0, 0);
      this.costume = "fade";
      this.moveAhead();
      this.size = 100;
      this.visible = true;
      while (!(this.compare(this.vars.ghost, 0) < 0)) {
        this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * -200;
        this.effects.ghost = this.toNumber(this.vars.ghost);
        yield;
      }
      /* TODO: Implement stop other scripts in sprite */ null;
      this.moveAhead();
      this.vars.ghost = 0;
      this.goto(0, 0);
      this.costume = "fade";
      this.moveAhead();
      this.size = 100;
      this.visible = true;
      while (!(this.compare(this.vars.ghost, 100) > 0)) {
        this.moveAhead();
        this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * 200;
        this.effects.ghost = this.toNumber(this.vars.ghost);
        yield;
      }
      this.visible = false;
    }
  }

  *gamemodes() {
    this.vars.type = "what";
    this.costume = "what";
    this.size = 40;
    this.vars.x = -600;
    this.vars.y = 20;
    this.createClone();
    this.vars.type = "game button";
    this.stage.vars.scrollX = 0;
    this.stage.vars.maxScrollX = 200;
    this.costume = "easy";
    this.size = 40;
    this.vars.x = 0;
    this.vars.y = 20;
    for (let i = 0; i < 6; i++) {
      this.createClone();
      this.vars.x += 200;
      this.stage.vars.maxScrollX -= 200;
      this.costumeNumber++;
    }
    this.vars.type = "what";
    this.costume = "what";
    this.size = 40;
    this.vars.x += 400;
    this.createClone();
    this.vars.type = "scroll";
    this.createClone();
    this.costume = "drag";
    this.size = 100;
    this.goto(0, 160);
    this.vars.type = "drag";
    this.createClone();
  }

  *whenIReceiveMoreZombies() {
    this.costume = "generatedtext2";
    this.size = 100;
    this.vars.times = 15;
    while (true) {
      this.size +=
        this.toNumber(this.stage.vars.deltaTime) *
        this.toNumber(this.vars.times);
      this.vars.times +=
        (15 - this.toNumber(this.vars.times)) /
        (0.04 / this.toNumber(this.stage.vars.deltaTime));
      yield;
    }
  }

  *whenIReceiveMoreZombies2() {
    this.effects.clear();
    this.visible = false;
    yield* this.wait(0.1);
    this.visible = true;
    this.costume = "generatedtext2";
    this.size = 4;
    this.vars.times = 1000;
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
    yield* this.startSound("hugewave");
    this.vars.ghost = -100;
    this.stage.vars.canPlant = "no";
    this.stage.vars.canPause = "no";
    this.stage.vars.pauseCertainPlants = "yes";
    while (true) {
      this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * 100;
      this.effects.ghost = this.toNumber(this.vars.ghost);
      if (this.compare(this.vars.ghost, 100) > 0) {
        this.broadcast("seed select");
        this.visible = false;
        /* TODO: Implement stop other scripts in sprite */ null;
        return;
      }
      yield;
    }
  }

  *whenIReceivePause() {
    if (this.toString(this.vars.isClone) === "no") {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield* this.startSound("pause");
      this.vars.type = "menu bg";
      this.createClone();
      this.vars.type = "back to";
      this.createClone();
      this.vars.type = "main menu";
      this.createClone();
      this.vars.type = "music slider";
      this.createClone();
      this.vars.type = "sound slider";
      this.createClone();
    }
  }

  *whenIReceiveOptions() {
    if (this.toString(this.vars.isClone) === "no") {
      this.vars.type = "menu bg";
      this.createClone();
      this.vars.type = "ok";
      this.createClone();
      this.vars.type = "music slider";
      this.createClone();
      this.vars.type = "sound slider";
      this.createClone();
    } else {
      this.vars.first = "no";
    }
  }

  *whenIReceiveDeleteOptions() {
    if (this.toString(this.vars.isClone) === "yes") {
      this.vars.first = "yes";
      if (
        this.toString(this.vars.type) === "menu bg" ||
        this.toString(this.vars.type) === "ok" ||
        this.toString(this.vars.type) === "music slider" ||
        this.toString(this.vars.type) === "sound slider"
      ) {
        this.deleteThisClone();
      }
    }
  }

  *startAsClone2() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }

  *whenIReceiveUnpause() {
    this.deleteThisClone();
  }

  *whenIReceiveWon() {
    this.effects.clear();
    this.visible = false;
    yield* this.wait(0.1);
    this.visible = true;
    this.costume = "generatedtext";
    this.size = 4;
    this.vars.times = 1000;
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
    yield* this.startSound("hugewave");
    this.vars.ghost = -100;
    this.stage.vars.canPlant = "no";
    this.stage.vars.canPause = "no";
    while (true) {
      this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * 100;
      this.effects.ghost = this.toNumber(this.vars.ghost);
      if (this.compare(this.vars.ghost, 100) > 0) {
        this.broadcast("menu");
        this.broadcast("menu music");
        this.broadcast("stop game");
        this.visible = false;
        return;
      }
      yield;
    }
  }

  *whenIReceiveWon2() {
    this.costume = "generatedtext2";
    this.size = 100;
    this.vars.times = 15;
    while (true) {
      this.size +=
        this.toNumber(this.stage.vars.deltaTime) *
        this.toNumber(this.vars.times);
      this.vars.times +=
        (15 - this.toNumber(this.vars.times)) /
        (0.04 / this.toNumber(this.stage.vars.deltaTime));
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
