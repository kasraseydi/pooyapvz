/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("black", "./Stage/costumes/black.svg", {
        x: 247.1323369092903,
        y: 188.69006502528612,
      }),
      new Costume("day", "./Stage/costumes/day.svg", {
        x: 372.8051915241499,
        y: 180.91434825240796,
      }),
      new Costume("bowling", "./Stage/costumes/bowling.svg", {
        x: 372.80519,
        y: 180.91434999999998,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "into game" },
        this.whenIReceiveIntoGame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
    ];

    this.audioEffects.volume = 50;

    this.vars.stageLastTimer = 385.662;
    this.vars.deltaTime = 0.03299999999995862;
    this.vars.sun = 50;
    this.vars.shovelGrid = 0;
    this.vars.particleX = -98;
    this.vars.particleY = -120;
    this.vars.wallGrid = 43;
    this.vars.timerReset = "garlic";
    this.vars.sunGrid = 39;
    this.vars.potatoGrid = 39;
    this.vars.garlicGrid = 27;
    this.vars.gloomGrid = 6;
    this.vars.gatlingGrid = 42;
    this.vars.loadProgress = 100;
    this.vars.rockGrid = 16;
    this.vars.frozenFirst = "yes";
    this.vars.winterGrid = 32;
    this.vars.jalapenoLayer = 2;
    this.vars.jalaY = 60;
    this.vars.cobX = 209;
    this.vars.cobY = 56;
    this.vars.cobGrid1 = 40;
    this.vars.cobGrid2 = 41;
    this.vars.pauseCertainPlants = "no";
    this.vars.canPlant = "yes";
    this.vars.almanacPlant = "ice";
    this.vars.scrollX = -1011.167570430702;
    this.vars.gamemode = "bowling";
    this.vars.continueWaves = "yes";
    this.vars.broadcastStart = "no";
    this.vars.stopDrawingZombies = "yes";
    this.vars.pause = "no";
    this.vars.actualWaveNumber = 1;
    this.vars.volume = 50;
    this.vars.loaded = "no";
    this.vars.music = 50;
    this.vars.canPause = "yes";
    this.vars.almanacType = "plants";
    this.vars.almanacZombie = "norm";
    this.vars.maxScrollX = -1000;
    this.vars.wallnutNum = 0;
    this.vars.gridSpaceX = [
      -196, -147, -98, -49, 0, 49, 98, 147, 196, -196, -147, -98, -49, 0, 49,
      98, 147, 196, -196, -147, -98, -49, 0, 49, 98, 147, 196, -196, -147, -98,
      -49, 0, 49, 98, 147, 196, -196, -147, -98, -49, 0, 49, 98, 147, 196,
    ];
    this.vars.gridSpaceY = [
      120, 120, 120, 120, 120, 120, 120, 120, 120, 60, 60, 60, 60, 60, 60, 60,
      60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, -60, -60, -60, -60, -60, -60, -60,
      -60, -120, -120, -120, -120, -120, -120, -120, -120, -120,
    ];
    this.vars.grid = [
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
    ];
    this.vars.zombieY = ["yes", "yes", "yes", "yes", "yes"];
    this.vars.zombieGrid = [
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "zomb",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "zomb",
      "none",
      "zomb",
      "none",
      "zomb",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "zomb",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "zomb",
      "none",
      "none",
    ];
    this.vars.plantsPicked = [];
    this.vars.plants = [
      "sun",
      "pea",
      "repea",
      "three",
      "snow",
      "cabbage",
      "corn",
      "melon",
      "star",
      "cactus",
      "fume",
      "wall",
      "torch",
      "garlic",
      "spike",
      "potato",
      "ice",
      "jala",
      "blover",
      "rock",
      "twin",
      "gatling",
      "winter",
      "gloom",
      "cob",
    ];
    this.vars.gloomFumeQueueY = [];
    this.vars.gloomFumeQueueX = [];
    this.vars.firePeaQueueX = [];
    this.vars.firePeaQueueY = [];
    this.vars.peaQueueX = [];
    this.vars.peaQueueY = [];
    this.vars.cabbageQueueX = [];
    this.vars.cabbageQueueY = [];
    this.vars.melonQueueX = [];
    this.vars.melonQueueY = [];
    this.vars.winterMelonQueueX = [];
    this.vars.winterMelonQueueY = [];
    this.vars.icePeaQueueX = [];
    this.vars.icePeaQueueY = [];
    this.vars.fumeQueueX = [];
    this.vars.fumeQueueY = [];
    this.vars.firePeaQueueDrawY = [];
    this.vars.particleQueueX = [];
    this.vars.particleQueueY = [];
    this.vars.particleQueueType = [];
    this.vars.peaQueueDrawY = [];
    this.vars.cornQueueX = [];
    this.vars.cornQueueY = [];
    this.vars.butterQueueX = [];
    this.vars.butterQueueY = [];
    this.vars.sunQueueX = [];
    this.vars.sunQueueY = [];
    this.vars.zombieProgression = ["norm", "cone", "bucket"];
    this.vars.starQueueX = [];
    this.vars.starQueueY = [];
    this.vars.spikeQueueX = [];
    this.vars.spikeQueueY = [];
    this.vars.balloonY = ["no", "no", "no", "no", "no"];
    this.vars.zombies = [
      "norm",
      "cone",
      "bucket",
      "screen",
      "pole",
      "paper",
      "balloon",
      "foot",
      "digger",
    ];
  }

  *whenGreenFlagClicked() {
    this.restartTimer();
    this.vars.deltaTime = this.timer - this.toNumber(this.vars.stageLastTimer);
    this.vars.stageLastTimer = this.timer;
    while (true) {
      this.vars.deltaTime =
        this.timer - this.toNumber(this.vars.stageLastTimer);
      this.vars.stageLastTimer = this.timer;
      if (this.toString(this.vars.pause) === "yes") {
        this.vars.deltaTime = 0;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.costume = "black";
    while (true) {
      this.clearPen();
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.vars.loadProgress = 0;
    if (this.toString(this.vars.loaded) === "no") {
      this.broadcast("load game");
    } else {
      this.broadcast("menu");
      this.broadcast("menu music");
    }
  }

  *whenIReceiveIntoGame() {
    if (this.toString(this.vars.gamemode) === "bowling") {
      this.costume = "bowling";
    } else {
      this.costume = "day";
    }
  }

  *whenGreenFlagClicked4() {
    this.vars.pause = "no";
  }

  *whenGreenFlagClicked5() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.vars.volume);
      yield;
    }
  }
}
