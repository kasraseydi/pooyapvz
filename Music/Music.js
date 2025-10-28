/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Music extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Music/costumes/costume1.svg", { x: 0, y: 0 }),
    ];

    this.sounds = [
      new Sound(
        "Plants vs Zombies Soundtrack",
        "./Music/sounds/Plants vs Zombies Soundtrack.mp3"
      ),
      new Sound(
        "Plants vs Zombies Soundtrack2",
        "./Music/sounds/Plants vs Zombies Soundtrack2.mp3"
      ),
      new Sound(
        "Plants vs Zombies Soundtrack3",
        "./Music/sounds/Plants vs Zombies Soundtrack3.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "menu music" },
        this.whenIReceiveMenuMusic
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "set music volume" },
        this.whenIReceiveSetMusicVolume
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "almanac" },
        this.whenIReceiveAlmanac
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start soft" },
        this.whenIReceiveStartSoft
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "set music volume no fade" },
        this.whenIReceiveSetMusicVolumeNoFade
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "into game" },
        this.whenIReceiveIntoGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "more zombies" },
        this.whenIReceiveMoreZombies
      ),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(Trigger.BROADCAST, { name: "won" }, this.whenIReceiveWon),
    ];

    this.audioEffects.volume = 50;

    this.vars.stopSetting = "no";
    this.vars.musicSet = "none";
  }

  *whenGreenFlagClicked() {
    this.vars.musicSet = "none";
  }

  *whenIReceiveMenuMusic() {
    this.vars.stopSetting = "yes";
    this.audioEffects.volume = this.toNumber(this.stage.vars.music);
    while (!(this.compare(this.audioEffects.volume, 0.1) < 0)) {
      this.audioEffects.volume +=
        this.toNumber(this.stage.vars.deltaTime) *
        (this.toNumber(this.stage.vars.music) * 2 * -1);
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.vars.stopSetting = "no";
    this.broadcast("set music volume");
    while (true) {
      yield* this.playSoundUntilDone("Plants vs Zombies Soundtrack");
      yield;
    }
  }

  *whenIReceiveSetMusicVolume() {
    this.audioEffects.volume = 0;
    while (
      !!(this.compare(this.audioEffects.volume, this.stage.vars.music) < 0)
    ) {
      this.audioEffects.volume +=
        this.toNumber(this.stage.vars.deltaTime) *
        (this.toNumber(this.stage.vars.music) * 2);
      yield;
    }
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.music);
      if (this.toString(this.vars.stopSetting) === "yes") {
        return;
      }
      yield;
    }
  }

  *whenIReceiveAlmanac() {
    this.vars.stopSetting = "yes";
    this.audioEffects.volume = this.toNumber(this.stage.vars.music);
    while (!(this.compare(this.audioEffects.volume, 0.1) < 0)) {
      this.audioEffects.volume +=
        this.toNumber(this.stage.vars.deltaTime) *
        (this.toNumber(this.stage.vars.music) * 2 * -1);
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.vars.stopSetting = "no";
    this.broadcast("set music volume");
    while (true) {
      yield* this.playSoundUntilDone("Plants vs Zombies Soundtrack3");
      yield;
    }
  }

  *whenIReceiveStartSoft() {
    yield* this.wait(2);
    this.vars.stopSetting = "no";
    this.broadcast("set music volume no fade");
    this.audioEffects.volume = this.toNumber(this.stage.vars.music);
    while (true) {
      yield* this.playSoundUntilDone("Plants vs Zombies Soundtrack2");
      yield;
    }
  }

  *whenIReceiveSetMusicVolumeNoFade() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.music);
      if (this.toString(this.vars.stopSetting) === "yes") {
        return;
      }
      yield;
    }
  }

  *whenIReceiveIntoGame() {
    this.vars.stopSetting = "yes";
    this.audioEffects.volume = this.toNumber(this.stage.vars.music);
    while (!(this.compare(this.audioEffects.volume, 0.1) < 0)) {
      this.audioEffects.volume +=
        this.toNumber(this.stage.vars.deltaTime) *
        (this.toNumber(this.stage.vars.music) * 2 * -1);
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveMoreZombies() {
    this.vars.stopSetting = "yes";
    this.audioEffects.volume = this.toNumber(this.stage.vars.music);
    while (!(this.compare(this.audioEffects.volume, 0.1) < 0)) {
      this.audioEffects.volume +=
        this.toNumber(this.stage.vars.deltaTime) *
        (this.toNumber(this.stage.vars.music) * 2 * -1);
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveDeath() {
    this.vars.stopSetting = "yes";
    this.audioEffects.volume = this.toNumber(this.stage.vars.music);
    while (!(this.compare(this.audioEffects.volume, 0.1) < 0)) {
      this.audioEffects.volume +=
        this.toNumber(this.stage.vars.deltaTime) *
        (this.toNumber(this.stage.vars.music) * 2 * -1);
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveWon() {
    this.vars.stopSetting = "yes";
    this.audioEffects.volume = this.toNumber(this.stage.vars.music);
    while (!(this.compare(this.audioEffects.volume, 0.1) < 0)) {
      this.audioEffects.volume +=
        this.toNumber(this.stage.vars.deltaTime) *
        (this.toNumber(this.stage.vars.music) * 2 * -1);
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
