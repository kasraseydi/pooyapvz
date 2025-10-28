/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Almanac extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("packet", "./Almanac/costumes/packet.svg", {
        x: 50,
        y: 70.00000499999999,
      }),
      new Costume("sun", "./Almanac/costumes/sun.svg", {
        x: 50,
        y: 70.00000999999997,
      }),
      new Costume("pea", "./Almanac/costumes/pea.svg", {
        x: 49.999999999999915,
        y: 70.00000000000011,
      }),
      new Costume("repea", "./Almanac/costumes/repea.svg", {
        x: 49.9999949005867,
        y: 69.9999938734901,
      }),
      new Costume("wall", "./Almanac/costumes/wall.svg", {
        x: 49.999999900586715,
        y: 69.99999887349011,
      }),
      new Costume("torch", "./Almanac/costumes/torch.svg", {
        x: 50,
        y: 69.99999982136674,
      }),
      new Costume("twin", "./Almanac/costumes/twin.svg", {
        x: 28.995478990600105,
        y: 41.256290060400005,
      }),
      new Costume("potato", "./Almanac/costumes/potato.svg", { x: 50, y: 70 }),
      new Costume("garlic", "./Almanac/costumes/garlic.svg", {
        x: 50,
        y: 69.99999982136674,
      }),
      new Costume("fume", "./Almanac/costumes/fume.svg", {
        x: 50,
        y: 70.00000876681611,
      }),
      new Costume("gloom", "./Almanac/costumes/gloom.svg", {
        x: 40.7902465312001,
        y: 45.25714271360002,
      }),
      new Costume("gatling", "./Almanac/costumes/gatling.svg", {
        x: 33.42001574300002,
        y: 42.39982480896671,
      }),
      new Costume("spike", "./Almanac/costumes/spike.svg", {
        x: 50.00000000000003,
        y: 70,
      }),
      new Costume("three", "./Almanac/costumes/three.svg", {
        x: 50.00000000000003,
        y: 70,
      }),
      new Costume("rock", "./Almanac/costumes/rock.svg", {
        x: 39.09912518840002,
        y: 19.55158156786669,
      }),
      new Costume("snow", "./Almanac/costumes/snow.svg", {
        x: 50.00000000000003,
        y: 70.00000000000003,
      }),
      new Costume("ice", "./Almanac/costumes/ice.svg", {
        x: 50,
        y: 69.99999982136674,
      }),
      new Costume("cabbage", "./Almanac/costumes/cabbage.svg", {
        x: 50.000000000000114,
        y: 69.99999999999997,
      }),
      new Costume("melon", "./Almanac/costumes/melon.svg", {
        x: 50.00000000000003,
        y: 70,
      }),
      new Costume("winter", "./Almanac/costumes/winter.svg", {
        x: 36.76833329200008,
        y: 41.18487229200005,
      }),
      new Costume("jala", "./Almanac/costumes/jala.svg", {
        x: 50.00000000000003,
        y: 70.00000000000003,
      }),
      new Costume("corn", "./Almanac/costumes/corn.svg", { x: 50, y: 70 }),
      new Costume("cob", "./Almanac/costumes/cob.svg", {
        x: 39.899999999999864,
        y: 32.51940379136667,
      }),
      new Costume("star", "./Almanac/costumes/star.svg", { x: 50, y: 70 }),
      new Costume("cactus", "./Almanac/costumes/cactus.svg", { x: 50, y: 70 }),
      new Costume("blover", "./Almanac/costumes/blover.svg", { x: 50, y: 70 }),
      new Costume(
        "Almanac_PlantBack",
        "./Almanac/costumes/Almanac_PlantBack.svg",
        { x: 400, y: 300 }
      ),
      new Costume("sun desc", "./Almanac/costumes/sun desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("pea desc", "./Almanac/costumes/pea desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("repea desc", "./Almanac/costumes/repea desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("wall desc", "./Almanac/costumes/wall desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("potato desc", "./Almanac/costumes/potato desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("snow desc", "./Almanac/costumes/snow desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("fume desc", "./Almanac/costumes/fume desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("ice desc", "./Almanac/costumes/ice desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("three desc", "./Almanac/costumes/three desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("jala desc", "./Almanac/costumes/jala desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("spike desc", "./Almanac/costumes/spike desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("torch desc", "./Almanac/costumes/torch desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("cactus desc", "./Almanac/costumes/cactus desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("blover desc", "./Almanac/costumes/blover desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("star desc", "./Almanac/costumes/star desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("cabbage desc", "./Almanac/costumes/cabbage desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("corn desc", "./Almanac/costumes/corn desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("garlic desc", "./Almanac/costumes/garlic desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("melon desc", "./Almanac/costumes/melon desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("gatling desc", "./Almanac/costumes/gatling desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("twin desc", "./Almanac/costumes/twin desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("gloom desc", "./Almanac/costumes/gloom desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("winter desc", "./Almanac/costumes/winter desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("rock desc", "./Almanac/costumes/rock desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume("cob desc", "./Almanac/costumes/cob desc.svg", {
        x: 162,
        y: 242,
      }),
      new Costume(
        "Almanac_GroundDay",
        "./Almanac/costumes/Almanac_GroundDay.svg",
        { x: 100, y: 100 }
      ),
      new Costume(
        "Almanac_CloseButton",
        "./Almanac/costumes/Almanac_CloseButton.svg",
        { x: 44.5, y: 13 }
      ),
      new Costume(
        "Almanac_CloseButtonHighlight",
        "./Almanac/costumes/Almanac_CloseButtonHighlight.svg",
        { x: 44.5, y: 13 }
      ),
      new Costume("zombies", "./Almanac/costumes/zombies.svg", {
        x: 82,
        y: 14.347907288818362,
      }),
      new Costume(
        "zombies highlight",
        "./Almanac/costumes/zombies highlight.svg",
        { x: 82, y: 14.347905762939462 }
      ),
      new Costume("plants", "./Almanac/costumes/plants.svg", {
        x: 82,
        y: 14.200002288818354,
      }),
      new Costume(
        "plants highlight",
        "./Almanac/costumes/plants highlight.svg",
        { x: 82, y: 14.200000762939453 }
      ),
      new Costume(
        "Almanac_ZombieBack",
        "./Almanac/costumes/Almanac_ZombieBack.svg",
        { x: 400, y: 300 }
      ),
      new Costume(
        "Almanac_GroundNight",
        "./Almanac/costumes/Almanac_GroundNight.svg",
        { x: 100, y: 100 }
      ),
      new Costume("norm", "./Almanac/costumes/norm.svg", { x: 38, y: 38 }),
      new Costume("cone", "./Almanac/costumes/cone.svg", { x: 38, y: 38 }),
      new Costume("bucket", "./Almanac/costumes/bucket.svg", { x: 38, y: 38 }),
      new Costume("screen", "./Almanac/costumes/screen.svg", {
        x: 38.00000306306299,
        y: 38.000003333333325,
      }),
      new Costume("pole", "./Almanac/costumes/pole.svg", {
        x: 38.00000347181012,
        y: 38,
      }),
      new Costume("paper", "./Almanac/costumes/paper.svg", { x: 38, y: 38 }),
      new Costume("foot", "./Almanac/costumes/foot.svg", { x: 38, y: 38 }),
      new Costume("balloon", "./Almanac/costumes/balloon.svg", {
        x: 38.000000660660675,
        y: 37.99999522677669,
      }),
      new Costume("digger", "./Almanac/costumes/digger.svg", { x: 38, y: 38 }),
      new Costume("norm desc", "./Almanac/costumes/norm desc.svg", {
        x: 162,
        y: 248.5,
      }),
      new Costume("cone desc", "./Almanac/costumes/cone desc.svg", {
        x: 162,
        y: 248.5,
      }),
      new Costume("bucket desc", "./Almanac/costumes/bucket desc.svg", {
        x: 162,
        y: 248.5,
      }),
      new Costume("screen desc", "./Almanac/costumes/screen desc.svg", {
        x: 162,
        y: 248.5,
      }),
      new Costume("pole desc", "./Almanac/costumes/pole desc.svg", {
        x: 162,
        y: 248.5,
      }),
      new Costume("paper desc", "./Almanac/costumes/paper desc.svg", {
        x: 162,
        y: 248.5,
      }),
      new Costume("foot desc", "./Almanac/costumes/foot desc.svg", {
        x: 162,
        y: 248.5,
      }),
      new Costume("balloon desc", "./Almanac/costumes/balloon desc.svg", {
        x: 162,
        y: 248.5,
      }),
      new Costume("digger desc", "./Almanac/costumes/digger desc.svg", {
        x: 162,
        y: 248.5,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Almanac/sounds/pop.wav"),
      new Sound("bleep", "./Almanac/sounds/bleep.mp3"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "almanac" },
        this.whenIReceiveAlmanac
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "almanac" },
        this.whenIReceiveAlmanac2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];

    this.audioEffects.volume = 50;

    this.vars.isClone = "no";
    this.vars.ghost = -5.599999999998317;
    this.vars.type = "delete";
    this.vars.clicked = "no";
    this.vars.click = "yes";
    this.vars.x = -132;
    this.vars.y = -34;
    this.vars.upgrade = "no";
    this.vars.plantType = "ice";
    this.vars.i = 10;
    this.vars.i2 = 2;
    this.vars.first = "yes";
    this.vars.zombieType = "digger";
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.vars.isClone = "no";
  }

  *whenIReceiveAlmanac() {
    if (this.toString(this.vars.isClone) === "no") {
      this.vars.ghost = 100;
      while (!(this.compare(this.vars.ghost, 0) < 0)) {
        this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * -200;
        yield;
      }
      this.costume = "Almanac_PlantBack";
      this.goto(0, 0);
      this.size = 60;
      this.vars.type = "stay";
      this.createClone();
      yield* this.loadSeed();
      yield* this.loadZomb();
      this.visible = true;
      this.stage.vars.almanacType = "plants";
      this.stage.vars.almanacPlant = "sun";
      this.stage.vars.almanacZombie = "norm";
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
        yield* this.almanacChange();
        yield* this.view();
        this.effects.clear();
        yield* this.desc();
        this.goto(-70, -164);
        this.costume = "Almanac_CloseButton";
        this.size = 80;
        if (this.touching("mouse")) {
          this.costume = "Almanac_CloseButtonHighlight";
          if (this.toString(this.vars.clicked) === "yes") {
            if (this.toString(this.vars.first) === "yes") {
              this.broadcast("menu");
              this.broadcast("menu music");
              yield* this.startSound("bleep");
            }
            this.vars.first = "no";
          }
        }
        this.vars.clicked = "no";
        yield;
      }
    }
  }

  *startAsClone() {
    this.vars.isClone = "yes";
    if (this.toString(this.vars.type) === "stay") {
      this.visible = true;
      while (true) {
        if (this.toString(this.stage.vars.almanacType) === "plants") {
          this.costume = "Almanac_PlantBack";
        } else {
          this.costume = "Almanac_ZombieBack";
        }
        yield;
      }
    } else {
      if (this.toString(this.vars.type) === "delete") {
        this.visible = true;
        for (let i = 0; i < 1; i++) {
          null;
          yield;
        }
        this.deleteThisClone();
      } else {
        if (this.toString(this.vars.type) === "seed") {
          this.vars.clicked = "no";
          this.vars.click = "yes";
          yield* this.upgrade();
          while (true) {
            if (this.toString(this.stage.vars.almanacType) === "plants") {
              if (this.mouse.down) {
                if (this.toString(this.vars.click) === "yes") {
                  this.vars.clicked = "yes";
                }
                this.vars.click = "no";
              } else {
                this.vars.click = "yes";
              }
              yield* this.packet();
            }
            this.vars.clicked = "no";
            yield;
          }
        } else {
          if (this.toString(this.vars.type) === "zomb") {
            this.vars.clicked = "no";
            this.vars.click = "yes";
            while (true) {
              if (this.toString(this.stage.vars.almanacType) === "zombies") {
                if (this.mouse.down) {
                  if (this.toString(this.vars.click) === "yes") {
                    this.vars.clicked = "yes";
                  }
                  this.vars.click = "no";
                } else {
                  this.vars.click = "yes";
                }
                yield* this.zomb();
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

  *packet() {
    this.costume = this.vars.plantType;
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.size = 30;
    if (this.toString(this.vars.upgrade) === "yes") {
      this.effects.color = 75;
      this.costume = "packet";
      this.effects.brightness = 0;
      if (this.touching("mouse")) {
        this.effects.brightness = 10;
      }
    }
    this.vars.type = "delete";
    this.createClone();
    if (this.toString(this.vars.upgrade) === "yes") {
      this.effects.color = 0;
      this.costume = this.vars.plantType;
      this.createClone();
    }
    this.costume = "packet";
    this.effects.brightness = 0;
    if (this.touching("mouse")) {
      this.effects.brightness = 10;
    }
    if (this.touching("mouse") && this.toString(this.vars.clicked) === "yes") {
      if (
        !(this.compare(this.stage.vars.almanacPlant, this.vars.plantType) === 0)
      ) {
        yield* this.startSound("bleep");
      }
      this.stage.vars.almanacPlant = this.vars.plantType;
    }
  }

  *upgrade() {
    this.vars.upgrade = "no";
    if (
      this.toString(this.vars.plantType) === "twin" ||
      this.toString(this.vars.plantType) === "gatling" ||
      this.toString(this.vars.plantType) === "gloom" ||
      this.toString(this.vars.plantType) === "cob" ||
      this.toString(this.vars.plantType) === "rock" ||
      this.toString(this.vars.plantType) === "winter"
    ) {
      this.vars.upgrade = "yes";
    }
  }

  *loadSeed() {
    this.vars.x = -209;
    this.vars.y = 104;
    this.vars.i = 1;
    this.vars.i2 = 1;
    for (let i = 0; i < this.stage.vars.plants.length; i++) {
      this.vars.plantType = this.itemOf(
        this.stage.vars.plants,
        this.vars.i - 1
      );
      this.vars.type = "seed";
      this.createClone();
      this.vars.x += 31;
      this.vars.i++;
      this.vars.i2++;
      if (this.compare(this.vars.i2, 8) > 0) {
        this.vars.x = -209;
        this.vars.y -= 47;
        this.vars.i2 = 1;
      }
    }
  }

  *whenIReceiveMenu() {
    this.vars.ghost = 100;
    while (!(this.compare(this.vars.ghost, 0) < 0)) {
      this.vars.ghost += this.toNumber(this.stage.vars.deltaTime) * -200;
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }

  *whenIReceiveAlmanac2() {
    if (this.toString(this.vars.isClone) === "no") {
      while (true) {
        this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
        yield;
      }
    }
  }

  *almanacChange() {
    if (this.toString(this.stage.vars.almanacType) === "plants") {
      this.goto(-170, -164);
      this.costume = "zombies";
      this.size = 80;
      if (this.touching("mouse")) {
        this.costume = "zombies highlight";
        if (this.toString(this.vars.clicked) === "yes") {
          this.stage.vars.almanacType = "zombies";
          this.costume = "plants";
          yield* this.startSound("bleep");
        }
      }
      this.vars.type = "delete";
      this.createClone();
    } else {
      if (this.toString(this.stage.vars.almanacType) === "zombies") {
        this.goto(-170, -164);
        this.costume = "plants";
        this.size = 80;
        if (this.touching("mouse")) {
          this.costume = "plants highlight";
          if (this.toString(this.vars.clicked) === "yes") {
            this.stage.vars.almanacType = "plants";
            this.costume = "zombies";
            yield* this.startSound("bleep");
          }
        }
        this.vars.type = "delete";
        this.createClone();
      } else {
        null;
      }
    }
  }

  *desc() {
    if (this.toString(this.stage.vars.almanacType) === "plants") {
      this.goto(130, -18);
      this.costume = this.toString(this.stage.vars.almanacPlant) + " desc";
      this.size = 60;
      this.vars.type = "delete";
      this.createClone();
    } else {
      if (this.toString(this.stage.vars.almanacType) === "zombies") {
        this.goto(130, -18);
        this.costume = this.toString(this.stage.vars.almanacZombie) + " desc";
        this.size = 60;
        this.vars.type = "delete";
        this.createClone();
      } else {
        null;
      }
    }
  }

  *view() {
    if (this.toString(this.stage.vars.almanacType) === "plants") {
      this.goto(130, 55);
      this.costume = "Almanac_GroundDay";
      this.size = 60;
      this.vars.type = "delete";
      this.createClone();
      this.vars.plantType = this.stage.vars.almanacPlant;
      this.warp(this.upgrade)();
      if (this.toString(this.vars.upgrade) === "yes") {
        this.goto(130, 71);
        this.costume = "packet";
        this.size = 60;
        this.vars.type = "delete";
        this.effects.color = 75;
        this.createClone();
        this.costume = this.stage.vars.almanacPlant;
        this.effects.clear();
        this.createClone();
      } else {
        this.goto(130, 71);
        this.costume = this.stage.vars.almanacPlant;
        this.size = 60;
        this.vars.type = "delete";
        this.createClone();
      }
    } else {
      if (this.toString(this.stage.vars.almanacType) === "zombies") {
        this.goto(130, 45);
        this.costume = "Almanac_GroundNight";
        this.size = 60;
        this.vars.type = "delete";
        this.createClone();
        this.goto(130, 45);
        this.costume = this.stage.vars.almanacZombie;
        this.size = 150;
        this.vars.type = "delete";
        this.createClone();
      } else {
        null;
      }
    }
  }

  *loadZomb() {
    this.vars.x = -194;
    this.vars.y = 90;
    this.vars.i = 1;
    this.vars.i2 = 1;
    for (let i = 0; i < this.stage.vars.zombies.length; i++) {
      this.vars.zombieType = this.itemOf(
        this.stage.vars.zombies,
        this.vars.i - 1
      );
      this.vars.type = "zomb";
      this.createClone();
      this.vars.x += 62;
      this.vars.i++;
      this.vars.i2++;
      if (this.compare(this.vars.i2, 4) > 0) {
        this.vars.x = -194;
        this.vars.y -= 62;
        this.vars.i2 = 1;
      }
    }
  }

  *zomb() {
    this.costume = this.vars.zombieType;
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
    this.size = 80;
    this.effects.brightness = 0;
    if (this.touching("mouse")) {
      this.effects.brightness = 10;
    }
    if (this.touching("mouse") && this.toString(this.vars.clicked) === "yes") {
      if (
        !(
          this.compare(this.stage.vars.almanacZombie, this.vars.zombieType) ===
          0
        )
      ) {
        yield* this.startSound("bleep");
      }
      this.stage.vars.almanacZombie = this.vars.zombieType;
    }
    this.vars.type = "delete";
    this.createClone();
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }
}
