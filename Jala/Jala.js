/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Jala extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Jalapeno_mouth", "./Jala/costumes/Jalapeno_mouth.svg", {
        x: 17.52158,
        y: 50.067155000000014,
      }),
      new Costume("Jalapeno_eye1", "./Jala/costumes/Jalapeno_eye1.svg", {
        x: 24.348479999999995,
        y: 68.09089500000002,
      }),
      new Costume("Jalapeno_eye2", "./Jala/costumes/Jalapeno_eye2.svg", {
        x: 0.5182900000000075,
        y: 60.28786500000001,
      }),
      new Costume("Jalapeno_body", "./Jala/costumes/Jalapeno_body.svg", {
        x: 29.499999999999886,
        y: 88.3322836773295,
      }),
      new Costume("costume1", "./Jala/costumes/costume1.svg", {
        x: 29.5,
        y: 88.332255,
      }),
    ];

    this.sounds = [
      new Sound("plant", "./Jala/sounds/plant.mp3"),
      new Sound("chompsoft", "./Jala/sounds/chompsoft.mp3"),
      new Sound("gulp", "./Jala/sounds/gulp.mp3"),
      new Sound("jalapeno", "./Jala/sounds/jalapeno.wav"),
      new Sound("reverse_explosion", "./Jala/sounds/reverse_explosion.mp3"),
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "delete plant" },
        this.whenIReceiveDeletePlant
      ),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stop game" },
        this.whenIReceiveStopGame
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(Trigger.CLONE_START, this.startAsClone6),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = -196;
    this.vars.y = -120;
    this.vars.sin = 842.9999999999998;
    this.vars.grid = 0;
    this.vars.i = 37;
    this.vars.state = "grabbed";
    this.vars.first = "yes";
    this.vars.timer = 0;
    this.vars.size = 45;
    this.vars.layer = 0;
    this.vars.ghost2 = 0;
    this.vars.hp = 10;
    this.vars.bright = 0;
    this.vars.firstFirst = 0;
    this.vars.deleter = "yes";
    this.vars.add = 0;
  }

  *animate() {
    this.vars.y -= 40;
    this.effects.ghost = this.toNumber(this.vars.ghost2);
    this.effects.brightness = this.toNumber(this.vars.bright);
    this.effects.fisheye =
      this.toNumber(this.vars.add) * (this.toNumber(this.vars.add) * 20);
    this.costume = "Jalapeno_body";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) * 1 +
      (50 + this.toNumber(this.vars.add) * 4);
    this.direction = 90;
    this.goto(
      this.toNumber(this.vars.x) +
        this.random(
          this.toNumber(this.vars.add) * -1,
          this.toNumber(this.vars.add)
        ),
      this.toNumber(this.vars.y) +
        this.random(
          this.toNumber(this.vars.add) * -1,
          this.toNumber(this.vars.add)
        )
    );
    this.stamp();
    this.costume = "Jalapeno_eye1";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) * 1 +
      (50 + this.toNumber(this.vars.add) * 4);
    this.direction = 90;
    this.goto(
      this.toNumber(this.vars.x) +
        this.random(
          this.toNumber(this.vars.add) * -1,
          this.toNumber(this.vars.add)
        ),
      this.toNumber(this.vars.y) +
        this.random(
          this.toNumber(this.vars.add) * -1,
          this.toNumber(this.vars.add)
        )
    );
    this.stamp();
    this.costume = "Jalapeno_eye2";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) * 1 +
      (50 + this.toNumber(this.vars.add) * 4);
    this.direction = 90;
    this.goto(
      this.toNumber(this.vars.x) +
        this.random(
          this.toNumber(this.vars.add) * -1,
          this.toNumber(this.vars.add)
        ),
      this.toNumber(this.vars.y) +
        this.random(
          this.toNumber(this.vars.add) * -1,
          this.toNumber(this.vars.add)
        )
    );
    this.stamp();
    this.costume = "Jalapeno_mouth";
    this.size =
      Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) * 1 +
      (50 + this.toNumber(this.vars.add) * 4);
    this.direction = 90;
    this.goto(
      this.toNumber(this.vars.x) +
        this.random(
          this.toNumber(this.vars.add) * -1,
          this.toNumber(this.vars.add)
        ),
      this.toNumber(this.vars.y) +
        this.random(
          this.toNumber(this.vars.add) * -1,
          this.toNumber(this.vars.add)
        )
    );
    this.stamp();
    this.vars.y += 40;
  }

  *gridPos() {
    this.vars.i = 1;
    for (let i = 0; i < this.stage.vars.gridSpaceX.length; i++) {
      if (
        this.compare(
          this.itemOf(this.stage.vars.gridSpaceX, this.vars.i - 1),
          this.vars.x
        ) === 0 &&
        this.compare(
          this.itemOf(this.stage.vars.gridSpaceY, this.vars.i - 1),
          this.vars.y
        ) === 0
      ) {
        this.vars.grid = this.vars.i;
        return;
      }
      this.vars.i++;
    }
  }

  *startAsClone() {
    this.vars.sin = 0;
    this.vars.state = "grabbed";
    this.vars.first = "yes";
    this.vars.timer = 0;
    this.vars.size = 45;
    this.vars.hp = 10;
    this.vars.bright = 0;
    this.vars.deleter = "yes";
    this.vars.add = 0;
    while (true) {
      this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * 1000;
      if (this.toString(this.vars.state) === "grabbed") {
        yield* this.goto2();
        yield* this.gridPos();
      } else {
        if (this.toString(this.vars.first) === "yes") {
          yield* this.layer();
          this.vars.deleter = "no";
          this.stage.vars.grid.splice(this.vars.grid - 1, 1, "jala");
          this.stage.vars.sun -= 75;
          this.vars.firstFirst = "yes";
          yield* this.startSound("reverse_explosion");
        }
        this.vars.first = "no";
        if (
          this.toString(
            this.itemOf(this.stage.vars.zombieGrid, this.vars.grid - 1)
          ) === "zomb"
        ) {
          this.vars.hp += this.toNumber(this.stage.vars.deltaTime) * -30;
          this.vars.bright +=
            (0 - this.toNumber(this.vars.bright)) /
            (0.2 / this.toNumber(this.stage.vars.deltaTime));
          if (Math.round(this.toNumber(this.vars.bright)) === 0) {
            this.vars.bright = 50;
            yield* this.startSound("chompsoft");
          }
        } else {
          this.vars.bright = 0;
        }
        if (this.compare(this.vars.grid, this.stage.vars.shovelGrid) === 0) {
          this.vars.bright = 30;
        }
        this.vars.ghost2 = 0;
        yield* this.animate();
        if (this.compare(this.vars.hp, 1) < 0) {
          this.stage.vars.grid.splice(this.vars.grid - 1, 1, "none");
          yield* this.startSound("gulp");
          this.deleteThisClone();
        }
        if (this.toString(this.stage.vars.pauseCertainPlants) === "no") {
          this.vars.timer += this.toNumber(this.stage.vars.deltaTime) * 30;
          this.vars.add += this.toNumber(this.stage.vars.deltaTime) * 1.8;
          if (this.compare(this.vars.timer, 32) > 0) {
            this.stage.vars.jalapenoLayer = this.vars.layer;
            this.stage.vars.jalaY = this.vars.y;
            yield* this.startSound("jalapeno");
            this.stage.vars.grid.splice(this.vars.grid - 1, 1, "none");
            this.broadcast("jalapeno");
            this.deleteThisClone();
          }
        }
      }
      yield;
    }
  }

  *goto2() {
    this.vars.ghost2 = 50;
    this.vars.x = this.mouse.x;
    this.vars.y = this.mouse.y;
    this.vars.x = Math.round(this.toNumber(this.vars.x) / 49) * 49;
    this.vars.y = Math.round(this.toNumber(this.vars.y) / 60) * 60;
    if (this.compare(this.vars.y, 120) > 0) {
      this.vars.y = 120;
    }
    if (this.compare(this.vars.y, -120) < 0) {
      this.vars.y = -120;
    }
    if (this.compare(this.vars.x, 196) > 0) {
      this.vars.x = 196;
    }
    if (this.compare(this.vars.x, -196) < 0) {
      this.vars.x = -196;
    }
    this.warp(this.animate)();
    this.vars.ghost2 = 0;
    this.vars.x = this.mouse.x;
    this.vars.y = this.mouse.y;
    this.warp(this.animate)();
    this.vars.x = this.mouse.x;
    this.vars.y = this.mouse.y;
    this.vars.x = Math.round(this.toNumber(this.vars.x) / 49) * 49;
    this.vars.y = Math.round(this.toNumber(this.vars.y) / 60) * 60;
    if (this.compare(this.vars.y, 120) > 0) {
      this.vars.y = 120;
    }
    if (this.compare(this.vars.y, -120) < 0) {
      this.vars.y = -120;
    }
    if (this.compare(this.vars.x, 196) > 0) {
      this.vars.x = 196;
    }
    if (this.compare(this.vars.x, -196) < 0) {
      this.vars.x = -196;
    }
  }

  *whenIReceiveDeletePlant() {
    if (this.compare(this.vars.grid, this.stage.vars.shovelGrid) === 0) {
      yield* this.startSound("plant");
      this.stage.vars.grid.splice(this.vars.grid - 1, 1, "none");
      this.deleteThisClone();
    }
  }

  *whenIReceiveDeath() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (!!this.mouse.down) {
      yield;
    }
    while (!this.mouse.down) {
      yield;
    }
    if (
      this.toString(this.itemOf(this.stage.vars.grid, this.vars.grid - 1)) ===
      "none"
    ) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield* this.startSound("plant");
      this.vars.state = "set";
    } else {
      this.stage.vars.timerReset = "jala";
      this.broadcast("reset timer");
      this.deleteThisClone();
    }
  }

  *layer() {
    if (this.toNumber(this.vars.y) === 120) {
      this.vars.layer = 1;
    } else {
      if (this.toNumber(this.vars.y) === 60) {
        this.vars.layer = 2;
      } else {
        if (this.toNumber(this.vars.y) === 0) {
          this.vars.layer = 3;
        } else {
          if (this.toNumber(this.vars.y) === -60) {
            this.vars.layer = 4;
          } else {
            if (this.toNumber(this.vars.y) === -120) {
              this.vars.layer = 5;
            } else {
              null;
            }
          }
        }
      }
    }
  }

  *whenGreenFlagClicked() {
    this.vars.grid = 0;
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

  *whenGreenFlagClicked2() {
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
