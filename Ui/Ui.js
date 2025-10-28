/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ui extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("SeedBank", "./Ui/costumes/SeedBank.png", { x: 446, y: 87 }),
      new Costume("SeedBank2", "./Ui/costumes/SeedBank2.png", {
        x: 175,
        y: 87,
      }),
      new Costume(
        "SeedChooser_Background",
        "./Ui/costumes/SeedChooser_Background.svg",
        { x: 232.5, y: 256.5 }
      ),
      new Costume("0", "./Ui/costumes/0.svg", {
        x: 5.969997406005859,
        y: 15.75,
      }),
      new Costume("1", "./Ui/costumes/1.svg", {
        x: 5.969997406005859,
        y: 15.75,
      }),
      new Costume("2", "./Ui/costumes/2.svg", {
        x: 5.969997406005859,
        y: 15.75,
      }),
      new Costume("3", "./Ui/costumes/3.svg", {
        x: 5.969997406005859,
        y: 15.75,
      }),
      new Costume("4", "./Ui/costumes/4.svg", {
        x: 5.969997406005859,
        y: 15.75,
      }),
      new Costume("5", "./Ui/costumes/5.svg", {
        x: 5.969997406005859,
        y: 15.75,
      }),
      new Costume("6", "./Ui/costumes/6.svg", {
        x: 5.969997406005859,
        y: 15.75,
      }),
      new Costume("7", "./Ui/costumes/7.svg", {
        x: 5.969997406005859,
        y: 15.75,
      }),
      new Costume("8", "./Ui/costumes/8.svg", {
        x: 5.969997406005859,
        y: 15.75,
      }),
      new Costume("9", "./Ui/costumes/9.svg", {
        x: 5.969997406005859,
        y: 15.75,
      }),
      new Costume("ShovelBank", "./Ui/costumes/ShovelBank.svg", {
        x: 35,
        y: 36,
      }),
      new Costume("Shovel", "./Ui/costumes/Shovel.svg", { x: 58, y: 62.5 }),
      new Costume("size", "./Ui/costumes/size.svg", {
        x: 420.2499999999999,
        y: 341.67139889196665,
      }),
      new Costume("packet", "./Ui/costumes/packet.svg", {
        x: 50,
        y: 70.00000499999999,
      }),
      new Costume("sun", "./Ui/costumes/sun.svg", {
        x: 50,
        y: 70.00000999999997,
      }),
      new Costume("pea", "./Ui/costumes/pea.svg", {
        x: 49.999999999999915,
        y: 70.00000000000011,
      }),
      new Costume("repea", "./Ui/costumes/repea.svg", {
        x: 49.9999949005867,
        y: 69.9999938734901,
      }),
      new Costume("wall", "./Ui/costumes/wall.svg", {
        x: 49.999999900586715,
        y: 69.99999887349011,
      }),
      new Costume("bowl", "./Ui/costumes/bowl.svg", {
        x: 49.999999900586715,
        y: 69.99999887349011,
      }),
      new Costume("explo", "./Ui/costumes/explo.svg", {
        x: 32.827424847186734,
        y: 41.73260997869008,
      }),
      new Costume("torch", "./Ui/costumes/torch.svg", {
        x: 50,
        y: 69.99999982136674,
      }),
      new Costume("twin", "./Ui/costumes/twin.svg", {
        x: 28.995478990600105,
        y: 41.256290060400005,
      }),
      new Costume("potato", "./Ui/costumes/potato.svg", { x: 50, y: 70 }),
      new Costume("garlic", "./Ui/costumes/garlic.svg", {
        x: 50,
        y: 69.99999982136674,
      }),
      new Costume("fume", "./Ui/costumes/fume.svg", {
        x: 50,
        y: 70.00000876681611,
      }),
      new Costume("gloom", "./Ui/costumes/gloom.svg", {
        x: 40.7902465312001,
        y: 45.25714271360002,
      }),
      new Costume("gatling", "./Ui/costumes/gatling.svg", {
        x: 33.42001574300002,
        y: 42.39982480896671,
      }),
      new Costume("spike", "./Ui/costumes/spike.svg", {
        x: 50.00000000000003,
        y: 70,
      }),
      new Costume("three", "./Ui/costumes/three.svg", {
        x: 50.00000000000003,
        y: 70,
      }),
      new Costume("rock", "./Ui/costumes/rock.svg", {
        x: 39.09912518840002,
        y: 19.55158156786669,
      }),
      new Costume("snow", "./Ui/costumes/snow.svg", { x: 50, y: 70 }),
      new Costume("ice", "./Ui/costumes/ice.svg", {
        x: 50,
        y: 69.99999982136674,
      }),
      new Costume("cabbage", "./Ui/costumes/cabbage.svg", {
        x: 50.000000000000114,
        y: 69.99999999999997,
      }),
      new Costume("melon", "./Ui/costumes/melon.svg", {
        x: 50.00000000000003,
        y: 70,
      }),
      new Costume("winter", "./Ui/costumes/winter.svg", {
        x: 36.76833329200008,
        y: 41.18487229200005,
      }),
      new Costume("jala", "./Ui/costumes/jala.svg", {
        x: 50.00000000000003,
        y: 70.00000000000003,
      }),
      new Costume("corn", "./Ui/costumes/corn.svg", { x: 50, y: 70 }),
      new Costume("cob", "./Ui/costumes/cob.svg", {
        x: 39.899999999999864,
        y: 32.51940379136667,
      }),
      new Costume("star", "./Ui/costumes/star.svg", { x: 50, y: 70 }),
      new Costume("cactus", "./Ui/costumes/cactus.svg", { x: 50, y: 70 }),
      new Costume("blover", "./Ui/costumes/blover.svg", { x: 50, y: 70 }),
      new Costume(
        "SeedChooser_Button glow",
        "./Ui/costumes/SeedChooser_Button glow.svg",
        { x: 78, y: 25.676172500000007 }
      ),
      new Costume(
        "SeedChooser_Button",
        "./Ui/costumes/SeedChooser_Button.svg",
        { x: 78, y: 25.676172500000007 }
      ),
      new Costume(
        "SeedChooser_Button_Disabled",
        "./Ui/costumes/SeedChooser_Button_Disabled.svg",
        { x: 78, y: 25.6762773161457 }
      ),
      new Costume("fade", "./Ui/costumes/fade.svg", { x: 253.5, y: 184 }),
      new Costume(
        "options_backtogamebutton0",
        "./Ui/costumes/options_backtogamebutton0.svg",
        { x: 58.50000000000003, y: 23 }
      ),
      new Costume("con back", "./Ui/costumes/con back.png", { x: 476, y: 79 }),
      new Costume("con front", "./Ui/costumes/con front.png", {
        x: 476,
        y: 79,
      }),
      new Costume("con fill 1", "./Ui/costumes/con fill 1.svg", {
        x: 187.83333418433313,
        y: 35.92030999249954,
      }),
      new Costume("con fill 2", "./Ui/costumes/con fill 2.svg", {
        x: 187.83333503533314,
        y: 35.920311259899535,
      }),
    ];

    this.sounds = [new Sound("shovel", "./Ui/sounds/shovel.mp3")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "into game" },
        this.whenIReceiveIntoGame
      ),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "reset timer" },
        this.whenIReceiveResetTimer
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "load game" },
        this.whenIReceiveLoadGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "seed select" },
        this.whenIReceiveSeedSelect
      ),
      new Trigger(Trigger.BROADCAST, { name: "menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start soft" },
        this.whenIReceiveStartSoft
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "into game" },
        this.whenIReceiveIntoGame2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "into game" },
        this.whenIReceiveIntoGame3
      ),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = 134;
    this.vars.y = 153;
    this.vars.i = 2;
    this.vars.clicked = "no";
    this.vars.click = "yes";
    this.vars.shovel = "no";
    this.vars.shovX = -98;
    this.vars.shovY = 0;
    this.vars.type = "delete";
    this.vars.timer = 1327.6199999999913;
    this.vars.plantType = "gatling";
    this.vars.maxCharge = 1500;
    this.vars.sunCost = 500;
    this.vars.upgrade = "yes";
    this.vars.ghost = -5.599999999999991;
    this.vars.isClone = "no";
    this.vars.i2 = 5;
    this.vars.selected = "no";
    this.vars.first = 0;
    this.vars.xDraw = 0;
    this.vars.yDraw = 0;
    this.vars.xDrawSet = 0;
    this.vars.yDrawSet = 0;
    this.vars.animation = 0;
    this.vars.mod = -1412.7299999999886;
    this.vars.plantToUpgrade = 0;
    this.vars.bright = -25;
    this.vars.wallNutTimer = 3.826999999999998;
    this.vars.wallType = 0;
  }

  *grid() {
    this.stage.vars.gridSpaceX = [];
    this.stage.vars.gridSpaceY = [];
    this.goto(-196, 120);
    for (let i = 0; i < 5; i++) {
      for (let i = 0; i < 9; i++) {
        this.stage.vars.gridSpaceX.push(this.x);
        this.stage.vars.gridSpaceY.push(this.y);
        this.x += 49;
      }
      this.x = -196;
      this.y -= 60;
    }
  }

  *resetGrid() {
    this.stage.vars.grid = [];
    this.stage.vars.zombieGrid = [];
    for (let i = 0; i < 45; i++) {
      this.stage.vars.grid.push("none");
      this.stage.vars.zombieGrid.push("none");
    }
  }

  *sun() {
    this.costume = 9;
    this.size = 60;
    this.goto(-216, 134);
    this.vars.i = 1;
    for (let i = 0; i < this.stage.vars.sun.length - 1; i++) {
      this.x -= 3.5;
    }
    for (let i = 0; i < this.stage.vars.sun.length; i++) {
      this.costume = this.letterOf(this.stage.vars.sun, this.vars.i - 1);
      this.createClone();
      this.x += 7;
      this.vars.i++;
      this.vars.animation = 0;
    }
  }

  *packet() {
    if (this.toString(this.stage.vars.gamemode) === "quick") {
      this.vars.timer = this.vars.maxCharge;
    }
    this.costume = this.vars.plantType;
    this.effects.clear();
    this.vars.bright = 0;
    if (
      this.compare(this.vars.timer, this.vars.maxCharge) < 0 ||
      this.compare(this.stage.vars.sun, this.vars.sunCost) < 0
    ) {
      this.effects.brightness = -25;
      this.vars.bright = -25;
    }
    if (this.toString(this.vars.upgrade) === "yes") {
      if (
        this.indexInArray(this.stage.vars.grid, this.vars.plantToUpgrade) +
          1 ===
        0
      ) {
        this.effects.brightness = -25;
        this.vars.bright = -25;
      }
      this.effects.color = 75;
      this.costume = "packet";
    }
    this.size = 31;
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.vars.type = "delete";
    this.createClone();
    this.effects.clear();
    if (
      this.compare(this.vars.timer, this.vars.maxCharge) < 0 ||
      this.compare(this.stage.vars.sun, this.vars.sunCost) < 0
    ) {
      this.effects.brightness = -25;
    }
    if (this.toString(this.vars.upgrade) === "yes") {
      if (
        this.indexInArray(this.stage.vars.grid, this.vars.plantToUpgrade) +
          1 ===
        0
      ) {
        this.effects.brightness = -25;
      }
      this.costume = this.vars.plantType;
      this.createClone();
    }
    this.effects.ghost = 50;
    this.effects.brightness = -100;
    this.costume = "size";
    this.size =
      31 -
      (this.toNumber(this.vars.timer) / this.toNumber(this.vars.maxCharge)) *
        31;
    this.costume = "packet";
    this.vars.type = "delete";
    if (this.compare(this.vars.timer, this.vars.maxCharge) < 0) {
      this.createClone();
    }
    this.vars.timer += this.toNumber(this.stage.vars.deltaTime) * 30;
    this.costume = "packet";
    this.effects.clear();
    this.size = 31;
    if (
      this.touching("mouse") &&
      this.toString(this.vars.clicked) === "yes" &&
      this.compare(this.stage.vars.sun, this.toNumber(this.vars.sunCost) - 1) >
        0 &&
      this.compare(this.vars.timer, this.toNumber(this.vars.maxCharge) - 1) > 0
    ) {
      if (
        this.toString(this.stage.vars.canPlant) === "yes" &&
        this.toNumber(this.vars.bright) === 0
      ) {
        this.sprites[undefined].createClone();
        this.vars.timer = 0;
      }
    }
    this.vars.type = "packet";
  }

  *shovel() {
    this.costume = "ShovelBank";
    this.effects.clear();
    this.size = 61;
    this.goto(145, 158);
    this.stage.vars.shovelGrid = 0;
    if (this.toString(this.vars.shovel) === "picking") {
      this.goto(this.mouse.x, this.mouse.y);
    }
    if (this.touching("mouse") && this.toString(this.vars.clicked) === "yes") {
      if (this.toString(this.vars.shovel) === "no") {
        this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
        yield* this.startSound("shovel");
        this.vars.shovel = "picking";
      } else {
        if (this.toString(this.vars.shovel) === "picking") {
          this.vars.shovel = "yes";
        }
      }
    }
    if (this.toString(this.vars.shovel) === "picking") {
      this.vars.shovX = Math.round(this.mouse.x / 49) * 49;
      this.vars.shovY = Math.round(this.mouse.y / 60) * 60;
      this.warp(this.gridPos)();
    }
    if (this.toString(this.vars.shovel) === "yes") {
      this.warp(this.gridPos)();
      if (
        !(
          this.toNumber(
            this.itemOf(this.stage.vars.grid, this.stage.vars.shovelGrid - 1)
          ) === 0
        ) &&
        !(
          this.toString(
            this.itemOf(this.stage.vars.grid, this.stage.vars.shovelGrid - 1)
          ) === "none"
        )
      ) {
        this.broadcast("delete plant");
      }
      this.vars.shovel = "no";
    }
    this.costume = "Shovel";
    this.size = 30;
    this.createClone();
  }

  *gridPos() {
    this.vars.i = 1;
    this.stage.vars.shovelGrid = 0;
    for (let i = 0; i < this.stage.vars.gridSpaceX.length; i++) {
      if (
        this.compare(
          this.itemOf(this.stage.vars.gridSpaceX, this.vars.i - 1),
          this.vars.shovX
        ) === 0 &&
        this.compare(
          this.itemOf(this.stage.vars.gridSpaceY, this.vars.i - 1),
          this.vars.shovY
        ) === 0
      ) {
        this.stage.vars.shovelGrid = this.vars.i;
        return;
      }
      this.vars.i++;
    }
  }

  *whenIReceiveIntoGame() {
    this.stage.vars.plantsPicked = [];
    this.vars.ghost = 100;
    while (!(this.compare(this.vars.ghost, 0) < 0)) {
      this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * -200;
      yield;
    }
    this.moveAhead();
    yield* this.grid();
    yield* this.resetGrid();
    this.stage.vars.sun = 50;
    this.vars.clicked = "no";
    this.vars.click = "yes";
    this.vars.shovel = "no";
    this.vars.type = "stay";
    this.stage.vars.pauseCertainPlants = "no";
    this.stage.vars.canPause = "no";
    this.stage.vars.broadcastStart = "yes";
    this.effects.clear();
    if (this.toString(this.stage.vars.gamemode) === "bowling") {
      this.vars.type = "menu";
      this.createClone();
      this.costume = "con back";
      this.size = 66;
      this.goto(0, 154);
      this.vars.type = "stay";
      this.createClone();
      this.vars.mod = 0;
      this.vars.wallNutTimer = -2;
      this.stage.vars.wallnutNum = 0;
      while (true) {
        this.costume = "con fill 2";
        this.size = 66;
        this.goto((this.toNumber(this.vars.mod) % 3) + -33, 154);
        this.vars.type = "delete";
        this.createClone();
        this.costume = "con fill 1";
        this.size = 66;
        this.goto((this.toNumber(this.vars.mod) % 3) + 29, 154);
        this.vars.type = "delete";
        this.createClone();
        this.costume = "con front";
        this.size = 66;
        this.goto(0, 154);
        this.vars.type = "front con";
        this.createClone();
        this.vars.mod += this.toNumber(this.stage.vars.deltaTime) * -30;
        this.vars.wallNutTimer += this.toNumber(this.stage.vars.deltaTime);
        if (this.compare(this.vars.wallNutTimer, 8) > 0) {
          this.vars.wallNutTimer = 0;
          if (this.compare(this.stage.vars.plantsPicked.length, 10) < 0) {
            this.vars.type = "wallnut";
            this.createClone();
          }
        }
        yield;
      }
    } else {
      this.costume = "SeedBank";
      this.size = 62;
      this.goto(-102, 153);
      this.createClone();
      this.costume = "SeedBank2";
      this.size = 62;
      this.goto(-14, 153);
      this.createClone();
      this.costume = "ShovelBank";
      this.size = 61;
      this.goto(145, 158);
      this.createClone();
      this.vars.timer = 0;
      this.vars.type = "menu";
      this.createClone();
      while (true) {
        if (this.toString(this.stage.vars.gamemode) === "quick") {
          this.stage.vars.sun = 999;
        }
        if (this.compare(this.stage.vars.sun, 9950) > 0) {
          this.stage.vars.sun = 9950;
        }
        this.vars.type = "delete";
        if (this.compare(this.vars.timer, 60) > 0) {
          this.moveAhead();
        }
        if (this.mouse.down) {
          if (this.toString(this.vars.click) === "yes") {
            this.vars.clicked = "yes";
          }
          this.vars.click = "no";
        } else {
          this.vars.click = "yes";
        }
        yield* this.sun();
        yield* this.shovel();
        this.vars.clicked = "no";
        this.vars.timer += this.toNumber(this.stage.vars.deltaTime) * 30;
        yield;
      }
    }
  }

  *whenIReceiveDeath() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveResetTimer() {
    if (
      this.toString(this.vars.type) === "packet" &&
      this.toString(this.vars.isClone) === "yes"
    ) {
      if (this.compare(this.vars.plantType, this.stage.vars.timerReset) === 0) {
        this.vars.timer = this.vars.maxCharge;
      }
    }
  }

  *startAsClone() {
    this.vars.isClone = "yes";
    if (this.toString(this.vars.type) === "front con") {
      this.moveAhead();
      this.visible = true;
      for (let i = 0; i < 1; i++) {
        null;
        yield;
      }
      this.deleteThisClone();
    } else {
      if (this.toString(this.vars.type) === "back bright") {
        this.effects.ghost = 50;
        this.moveBehind();
        this.visible = true;
      } else {
        if (
          this.toString(this.vars.type) === "stay" ||
          this.toString(this.vars.type) === "s bg"
        ) {
          this.visible = true;
        } else {
          if (this.toString(this.vars.type) === "delete") {
            this.visible = true;
            for (let i = 0; i < 1; i++) {
              null;
              yield;
            }
            this.deleteThisClone();
          } else {
            if (this.toString(this.vars.type) === "seed button") {
              this.visible = true;
              this.vars.clicked = "no";
              this.vars.click = "yes";
              this.vars.first = "yes";
              while (true) {
                if (this.mouse.down) {
                  if (this.toString(this.vars.click) === "yes") {
                    this.vars.clicked = "yes";
                  }
                  this.vars.click = "no";
                } else {
                  this.vars.click = "yes";
                }
                if (this.compare(this.stage.vars.plantsPicked.length, 1) < 0) {
                  this.costume = "SeedChooser_Button_Disabled";
                } else {
                  if (this.touching("mouse")) {
                    this.costume = "SeedChooser_Button glow";
                    if (this.toString(this.vars.clicked) === "yes") {
                      if (this.toString(this.vars.first) === "yes") {
                        this.broadcast("start soft");
                      }
                      this.vars.first = "no";
                    }
                  } else {
                    this.costume = "SeedChooser_Button";
                  }
                }
                this.vars.clicked = "no";
                yield;
              }
            } else {
              if (this.toString(this.vars.type) === "packet") {
                this.moveAhead();
                yield* this.recharge();
                this.vars.timer = this.vars.maxCharge;
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
                  yield* this.packet();
                  this.vars.clicked = "no";
                  yield;
                }
              } else {
                if (this.toString(this.vars.type) === "seed select") {
                  yield* this.recharge();
                  this.vars.clicked = "no";
                  this.vars.click = "yes";
                  this.vars.selected = "no";
                  this.vars.xDrawSet = this.vars.x;
                  this.vars.yDrawSet = this.vars.y;
                  this.vars.xDraw = this.vars.x;
                  this.vars.yDraw = this.vars.y;
                  while (true) {
                    if (this.mouse.down) {
                      if (this.toString(this.vars.click) === "yes") {
                        this.vars.clicked = "yes";
                      }
                      this.vars.click = "no";
                    } else {
                      this.vars.click = "yes";
                    }
                    yield* this.packetSelect();
                    this.vars.clicked = "no";
                    yield* this.getDrawPos();
                    this.vars.xDraw +=
                      (this.toNumber(this.vars.xDrawSet) -
                        this.toNumber(this.vars.xDraw)) /
                      (0.06 / this.toNumber(this.stage.vars.deltaTime));
                    this.vars.yDraw +=
                      (this.toNumber(this.vars.yDrawSet) -
                        this.toNumber(this.vars.yDraw)) /
                      (0.06 / this.toNumber(this.stage.vars.deltaTime));
                    yield;
                  }
                } else {
                  if (this.toString(this.vars.type) === "menu") {
                    this.visible = true;
                    this.vars.clicked = "no";
                    this.vars.click = "yes";
                    while (true) {
                      if (this.toString(this.stage.vars.canPause) === "no") {
                        this.visible = false;
                      } else {
                        this.visible = true;
                        if (this.mouse.down) {
                          if (this.toString(this.vars.click) === "yes") {
                            this.vars.clicked = "yes";
                          }
                          this.vars.click = "no";
                        } else {
                          this.vars.click = "yes";
                        }
                        this.costume = "options_backtogamebutton0";
                        this.size = 60;
                        this.goto(203, 167);
                        if (
                          this.touching("mouse") &&
                          this.toString(this.vars.clicked) === "yes"
                        ) {
                          if (this.toString(this.stage.vars.pause) === "no") {
                            this.stage.vars.pause = "yes";
                            this.broadcast("pause");
                          } else {
                            this.stage.vars.pause = "no";
                            this.broadcast("unpause");
                          }
                        }
                        this.vars.clicked = "no";
                      }
                      yield;
                    }
                  } else {
                    if (this.toString(this.vars.type) === "wallnut") {
                      this.moveAhead();
                      this.visible = true;
                      this.vars.clicked = "no";
                      this.vars.click = "yes";
                      this.stage.vars.wallnutNum++;
                      this.vars.i =
                        "wall" + this.toString(this.stage.vars.wallnutNum);
                      this.stage.vars.plantsPicked.push(this.vars.i);
                      this.goto(141, 154);
                      this.effects.ghost = 100;
                      this.vars.wallType = this.random(1, 4);
                      if (this.toNumber(this.vars.wallType) === 1) {
                        this.vars.wallType = 2;
                      } else {
                        this.vars.wallType = 1;
                      }
                      while (true) {
                        if (this.mouse.down) {
                          if (this.toString(this.vars.click) === "yes") {
                            this.vars.clicked = "yes";
                          }
                          this.vars.click = "no";
                        } else {
                          this.vars.click = "yes";
                        }
                        this.costume = "bowl";
                        this.size = 31;
                        this.x +=
                          this.toNumber(this.stage.vars.deltaTime) * -30;
                        if (this.compare(this.x, this.vars.x) < 0) {
                          this.x = this.toNumber(this.vars.x);
                        }
                        if (this.toNumber(this.vars.wallType) === 2) {
                          this.effects.color = 0;
                          this.vars.type = "delete";
                          this.createClone();
                          this.costume = "explo";
                          this.effects.color = 175;
                        }
                        yield* this.getX();
                        this.effects.ghost +=
                          this.toNumber(this.stage.vars.deltaTime) * -300;
                        this.costume = "bowl";
                        if (
                          this.touching("mouse") &&
                          this.toString(this.vars.clicked) === "yes"
                        ) {
                          this.stage.vars.plantsPicked.splice(
                            this.indexInArray(
                              this.stage.vars.plantsPicked,
                              this.vars.i
                            ),
                            1
                          );
                          if (this.toNumber(this.vars.wallType) === 1) {
                            this.sprites["Bowl"].createClone();
                          } else {
                            this.sprites["Explo"].createClone();
                          }
                          this.deleteThisClone();
                        }
                        if (this.toNumber(this.vars.wallType) === 2) {
                          this.costume = "explo";
                        }
                        this.vars.clicked = "no";
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

  *recharge() {
    this.vars.upgrade = "no";
    if (this.toString(this.vars.plantType) === "sun") {
      this.vars.maxCharge = 225;
      this.vars.sunCost = 50;
    } else {
      if (this.toString(this.vars.plantType) === "pea") {
        this.vars.maxCharge = 225;
        this.vars.sunCost = 100;
      } else {
        if (this.toString(this.vars.plantType) === "repea") {
          this.vars.maxCharge = 225;
          this.vars.sunCost = 200;
        } else {
          if (this.toString(this.vars.plantType) === "wall") {
            this.vars.maxCharge = 900;
            this.vars.sunCost = 50;
          } else {
            if (this.toString(this.vars.plantType) === "torch") {
              this.vars.maxCharge = 225;
              this.vars.sunCost = 175;
            } else {
              if (this.toString(this.vars.plantType) === "twin") {
                this.vars.maxCharge = 1500;
                this.vars.sunCost = 150;
                this.vars.upgrade = "yes";
                this.vars.plantToUpgrade = "sun";
              } else {
                if (this.toString(this.vars.plantType) === "potato") {
                  this.vars.maxCharge = 900;
                  this.vars.sunCost = 25;
                } else {
                  if (this.toString(this.vars.plantType) === "garlic") {
                    this.vars.maxCharge = 225;
                    this.vars.sunCost = 50;
                  } else {
                    if (this.toString(this.vars.plantType) === "fume") {
                      this.vars.maxCharge = 225;
                      this.vars.sunCost = 75;
                    } else {
                      if (this.toString(this.vars.plantType) === "gloom") {
                        this.vars.maxCharge = 1500;
                        this.vars.sunCost = 150;
                        this.vars.upgrade = "yes";
                        this.vars.plantToUpgrade = "fume";
                      } else {
                        if (this.toString(this.vars.plantType) === "gatling") {
                          this.vars.maxCharge = 1500;
                          this.vars.sunCost = 250;
                          this.vars.upgrade = "yes";
                          this.vars.plantToUpgrade = "repea";
                        } else {
                          if (this.toString(this.vars.plantType) === "spike") {
                            this.vars.maxCharge = 225;
                            this.vars.sunCost = 100;
                          } else {
                            if (
                              this.toString(this.vars.plantType) === "three"
                            ) {
                              this.vars.maxCharge = 225;
                              this.vars.sunCost = 300;
                            } else {
                              if (
                                this.toString(this.vars.plantType) === "rock"
                              ) {
                                this.vars.maxCharge = 1500;
                                this.vars.sunCost = 125;
                                this.vars.upgrade = "yes";
                                this.vars.plantToUpgrade = "spike";
                              } else {
                                if (
                                  this.toString(this.vars.plantType) === "snow"
                                ) {
                                  this.vars.maxCharge = 225;
                                  this.vars.sunCost = 175;
                                } else {
                                  if (
                                    this.toString(this.vars.plantType) === "ice"
                                  ) {
                                    this.vars.maxCharge = 2250;
                                    this.vars.sunCost = 75;
                                  } else {
                                    if (
                                      this.toString(this.vars.plantType) ===
                                      "cabbage"
                                    ) {
                                      this.vars.maxCharge = 225;
                                      this.vars.sunCost = 100;
                                    } else {
                                      if (
                                        this.toString(this.vars.plantType) ===
                                        "melon"
                                      ) {
                                        this.vars.maxCharge = 225;
                                        this.vars.sunCost = 300;
                                      } else {
                                        if (
                                          this.toString(this.vars.plantType) ===
                                          "winter"
                                        ) {
                                          this.vars.maxCharge = 1500;
                                          this.vars.sunCost = 200;
                                          this.vars.upgrade = "yes";
                                          this.vars.plantToUpgrade = "melon";
                                        } else {
                                          if (
                                            this.toString(
                                              this.vars.plantType
                                            ) === "jala"
                                          ) {
                                            this.vars.maxCharge = 1500;
                                            this.vars.sunCost = 125;
                                          } else {
                                            if (
                                              this.toString(
                                                this.vars.plantType
                                              ) === "corn"
                                            ) {
                                              this.vars.maxCharge = 225;
                                              this.vars.sunCost = 100;
                                            } else {
                                              if (
                                                this.toString(
                                                  this.vars.plantType
                                                ) === "cob"
                                              ) {
                                                this.vars.maxCharge = 1500;
                                                this.vars.sunCost = 500;
                                                this.vars.upgrade = "yes";
                                                this.vars.plantToUpgrade =
                                                  "corn";
                                              } else {
                                                if (
                                                  this.toString(
                                                    this.vars.plantType
                                                  ) === "star"
                                                ) {
                                                  this.vars.maxCharge = 225;
                                                  this.vars.sunCost = 125;
                                                } else {
                                                  if (
                                                    this.toString(
                                                      this.vars.plantType
                                                    ) === "blover"
                                                  ) {
                                                    this.vars.maxCharge = 225;
                                                    this.vars.sunCost = 100;
                                                  } else {
                                                    if (
                                                      this.toString(
                                                        this.vars.plantType
                                                      ) === "cactus"
                                                    ) {
                                                      this.vars.maxCharge = 225;
                                                      this.vars.sunCost = 125;
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
            }
          }
        }
      }
    }
  }

  *loadSeed() {
    this.vars.x = -176;
    this.vars.y = 153;
    this.vars.i = 1;
    for (let i = 0; i < this.stage.vars.plantsPicked.length; i++) {
      this.vars.plantType = this.itemOf(
        this.stage.vars.plantsPicked,
        this.vars.i - 1
      );
      this.vars.type = "packet";
      this.createClone();
      this.vars.x += 31;
      this.vars.i++;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.plants = [];
    this.stage.vars.plants.push("sun");
    this.stage.vars.plants.push("pea");
    this.stage.vars.plants.push("repea");
    this.stage.vars.plants.push("three");
    this.stage.vars.plants.push("snow");
    this.stage.vars.plants.push("cabbage");
    this.stage.vars.plants.push("corn");
    this.stage.vars.plants.push("melon");
    this.stage.vars.plants.push("star");
    this.stage.vars.plants.push("cactus");
    this.stage.vars.plants.push("fume");
    this.stage.vars.plants.push("wall");
    this.stage.vars.plants.push("torch");
    this.stage.vars.plants.push("garlic");
    this.stage.vars.plants.push("spike");
    this.stage.vars.plants.push("potato");
    this.stage.vars.plants.push("ice");
    this.stage.vars.plants.push("jala");
    this.stage.vars.plants.push("blover");
    this.stage.vars.plants.push("rock");
    this.stage.vars.plants.push("twin");
    this.stage.vars.plants.push("gatling");
    this.stage.vars.plants.push("winter");
    this.stage.vars.plants.push("gloom");
    this.stage.vars.plants.push("cob");
  }

  *whenIReceiveLoadGame() {
    this.effects.ghost = 100;
    for (let i = 0; i < 100; i++) {
      yield* this.load();
      this.stage.vars.loadProgress += 0.5;
      yield;
    }
  }

  *load() {
    for (let i = 0; i < 25; i++) {
      this.vars.type = "delete";
      this.createClone();
    }
  }

  *whenIReceiveSeedSelect() {
    if (this.toString(this.vars.type) === "packet") {
      this.deleteThisClone();
    }
    if (this.toString(this.vars.isClone) === "no") {
      if (this.toString(this.stage.vars.gamemode) === "bowling") {
        yield* this.wait(1);
        this.broadcast("start soft");
      } else {
        this.effects.clear();
        this.stage.vars.plantsPicked = [];
        this.vars.type = "s bg";
        this.stage.vars.canPlant = "no";
        this.stage.vars.canPause = "no";
        this.costume = "SeedChooser_Background";
        this.size = 55;
        this.goto(-112, -14);
        this.createClone();
        this.vars.type = "seed button";
        this.costume = "SeedChooser_Button";
        this.size = 60;
        this.goto(-112, -135);
        this.createClone();
        yield* this.loadSeedSelect();
      }
    }
  }

  *whenIReceiveMenu() {
    this.vars.ghost = 100;
    while (!(this.compare(this.vars.ghost, 0) < 0)) {
      this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * -200;
      yield;
    }
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *packetSelect() {
    if (
      this.indexInArray(this.stage.vars.plantsPicked, this.vars.plantType) +
        1 ===
      0
    ) {
      this.vars.selected = "no";
    } else {
      this.vars.selected = "yes";
    }
    if (this.toString(this.vars.selected) === "yes") {
      this.effects.brightness = -25;
    }
    this.costume = this.vars.plantType;
    if (this.toString(this.vars.upgrade) === "yes") {
      this.effects.color = 75;
      this.costume = "packet";
    }
    this.size = 31;
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.vars.type = "delete";
    this.createClone();
    this.effects.color = 0;
    if (this.toString(this.vars.upgrade) === "yes") {
      this.costume = this.vars.plantType;
      this.createClone();
    }
    this.costume = "packet";
    this.size = 31;
    if (this.touching("mouse") && this.toString(this.vars.clicked) === "yes") {
      if (this.toString(this.vars.selected) === "no") {
        if (this.compare(this.stage.vars.plantsPicked.length, 10) < 0) {
          this.stage.vars.plantsPicked.push(this.vars.plantType);
        }
      } else {
        this.stage.vars.plantsPicked.splice(
          this.indexInArray(this.stage.vars.plantsPicked, this.vars.plantType),
          1
        );
      }
    }
    this.vars.type = "seed select";
    this.effects.brightness = 0;
    if (
      !(
        this.compare(
          Math.round(this.toNumber(this.vars.xDraw)),
          this.vars.xDrawSet
        ) === 0
      ) ||
      this.toString(this.vars.selected) === "yes"
    ) {
      this.costume = this.vars.plantType;
      if (this.toString(this.vars.upgrade) === "yes") {
        this.effects.color = 75;
        this.costume = "packet";
      }
      this.size = 31;
      this.goto(this.toNumber(this.vars.xDraw), this.toNumber(this.vars.yDraw));
      this.vars.type = "delete";
      this.createClone();
      this.effects.color = 0;
      if (this.toString(this.vars.upgrade) === "yes") {
        this.costume = this.vars.plantType;
        this.createClone();
      }
      this.costume = "packet";
      this.size = 31;
      if (
        this.touching("mouse") &&
        this.toString(this.vars.clicked) === "yes"
      ) {
        this.stage.vars.plantsPicked.splice(
          this.indexInArray(this.stage.vars.plantsPicked, this.vars.plantType),
          1
        );
      }
      this.vars.type = "seed select";
      this.effects.brightness = 0;
    }
  }

  *loadSeedSelect() {
    this.vars.x = -208;
    this.vars.y = 78;
    this.vars.i = 1;
    this.vars.i2 = 1;
    for (let i = 0; i < this.stage.vars.plants.length; i++) {
      this.vars.plantType = this.itemOf(
        this.stage.vars.plants,
        this.vars.i - 1
      );
      this.vars.type = "seed select";
      this.createClone();
      this.vars.x += 32;
      this.vars.i++;
      this.vars.i2++;
      if (this.compare(this.vars.i2, 7) > 0) {
        this.vars.x = -208;
        this.vars.y -= 44;
        this.vars.i2 = 1;
      }
    }
  }

  *plantDraw() {
    this.costume = this.vars.plantType;
    if (this.toString(this.vars.upgrade) === "yes") {
      this.effects.color = 75;
      this.costume = "packet";
    }
    this.size = 31;
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.vars.type = "delete";
    this.createClone();
    this.effects.color = 0;
    if (this.toString(this.vars.upgrade) === "yes") {
      this.costume = this.vars.plantType;
      this.effects.ghost = 0;
      this.createClone();
    }
  }

  *getDrawPos() {
    this.vars.xDrawSet = this.vars.x;
    this.vars.yDrawSet = this.vars.y;
    if (
      this.compare(
        this.indexInArray(this.stage.vars.plantsPicked, this.vars.plantType) +
          1,
        0
      ) > 0
    ) {
      this.vars.xDrawSet = -176;
      this.vars.i = 1;
      this.vars.xDrawSet -= 31;
      this.vars.yDrawSet = 153;
      for (
        let i = 0;
        i <
        this.indexInArray(this.stage.vars.plantsPicked, this.vars.plantType) +
          1;
        i++
      ) {
        this.vars.xDrawSet += 31;
      }
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.plantsPicked = [];
  }

  *whenIReceiveStartSoft() {
    if (
      this.toString(this.vars.type) === "s bg" ||
      this.toString(this.vars.type) === "seed select" ||
      this.toString(this.vars.type) === "seed button" ||
      this.toString(this.vars.type) === "back bright"
    ) {
      this.deleteThisClone();
    }
    if (this.toString(this.vars.isClone) === "no") {
      if (!(this.toString(this.stage.vars.gamemode) === "bowling")) {
        yield* this.loadSeed();
      }
    }
  }

  *whenGreenFlagClicked3() {
    this.vars.isClone = "no";
  }

  *startAsClone2() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }

  *whenIReceiveIntoGame2() {
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }

  *whenIReceiveIntoGame3() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }

  *getX() {
    this.vars.x = -138;
    for (
      let i = 0;
      i < this.indexInArray(this.stage.vars.plantsPicked, this.vars.i) + 1 - 1;
      i++
    ) {
      this.vars.x += 31;
    }
  }
}
