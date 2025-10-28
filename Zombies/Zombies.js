/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Zombies extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pos", "./Zombies/costumes/pos.svg", {
        x: 312.20000000000005,
        y: 312.20000000000005,
      }),
      new Costume("col norm", "./Zombies/costumes/col norm.svg", {
        x: 24.471401028277626,
        y: 14.302377892030961,
      }),
      new Costume("Zombie_body", "./Zombies/costumes/Zombie_body.svg", {
        x: 26.5,
        y: 31.5,
      }),
      new Costume("zomb leg 1", "./Zombies/costumes/zomb leg 1.svg", {
        x: 11.139639639639654,
        y: 35.15315315315317,
      }),
      new Costume("pole leg 1", "./Zombies/costumes/pole leg 1.svg", {
        x: 6.166666666666657,
        y: 15.499999999999972,
      }),
      new Costume("foot leg 1", "./Zombies/costumes/foot leg 1.svg", {
        x: 16.25,
        y: 37.5,
      }),
      new Costume("paper leg 1", "./Zombies/costumes/paper leg 1.svg", {
        x: 4,
        y: 8.75,
      }),
      new Costume("zomb leg 2", "./Zombies/costumes/zomb leg 2.svg", {
        x: 3.1486500000000035,
        y: 2.169240000000002,
      }),
      new Costume("pole leg 2", "./Zombies/costumes/pole leg 2.svg", {
        x: 4.333333333333314,
        y: 4.5,
      }),
      new Costume("foot leg 2", "./Zombies/costumes/foot leg 2.svg", {
        x: 3.75,
        y: 4.75,
      }),
      new Costume("paper leg 2", "./Zombies/costumes/paper leg 2.svg", {
        x: 3.875,
        y: 4.25,
      }),
      new Costume("zomb foot 1", "./Zombies/costumes/zomb foot 1.svg", {
        x: 21,
        y: 10.5,
      }),
      new Costume("pole foot 1", "./Zombies/costumes/pole foot 1.svg", {
        x: 21.33950617283952,
        y: 11.333333333333343,
      }),
      new Costume("foot foot 1", "./Zombies/costumes/foot foot 1.svg", {
        x: 23.5,
        y: 10.5,
      }),
      new Costume("paper foot 1", "./Zombies/costumes/paper foot 1.svg", {
        x: 22.5,
        y: 12.5,
      }),
      new Costume("zomb arm broke", "./Zombies/costumes/zomb arm broke.svg", {
        x: 8.5,
        y: 17.5,
      }),
      new Costume("zomb arm 1", "./Zombies/costumes/zomb arm 1.svg", {
        x: 21.375,
        y: 17.5,
      }),
      new Costume("pole arm broke", "./Zombies/costumes/pole arm broke.svg", {
        x: 5,
        y: 12.5,
      }),
      new Costume("pole arm 1", "./Zombies/costumes/pole arm 1.svg", {
        x: 25.541666666666657,
        y: 12.5,
      }),
      new Costume("zomb leg 3", "./Zombies/costumes/zomb leg 3.svg", {
        x: 7.857142857142861,
        y: 22.285714285714278,
      }),
      new Costume("pole leg 3", "./Zombies/costumes/pole leg 3.svg", {
        x: 5.500000000000028,
        y: 14,
      }),
      new Costume("foot leg 3", "./Zombies/costumes/foot leg 3.svg", {
        x: 7.75,
        y: 26,
      }),
      new Costume("paper leg 3", "./Zombies/costumes/paper leg 3.svg", {
        x: 10.125,
        y: 16.5,
      }),
      new Costume("zomb leg 4", "./Zombies/costumes/zomb leg 4.svg", {
        x: 24.857125000000025,
        y: 5.142834999999991,
      }),
      new Costume("pole leg 4", "./Zombies/costumes/pole leg 4.svg", {
        x: 19.00000000000003,
        y: 5,
      }),
      new Costume("foot leg 4", "./Zombies/costumes/foot leg 4.svg", {
        x: 4.25,
        y: 3.5,
      }),
      new Costume("paper leg 4", "./Zombies/costumes/paper leg 4.svg", {
        x: 18.125,
        y: 6.5,
      }),
      new Costume("zomb foot 2", "./Zombies/costumes/zomb foot 2.svg", {
        x: 23,
        y: -14.071429999999992,
      }),
      new Costume("pole foot 2", "./Zombies/costumes/pole foot 2.svg", {
        x: 25.5,
        y: -19,
      }),
      new Costume("foot foot 2", "./Zombies/costumes/foot foot 2.svg", {
        x: 21.25,
        y: -11.75,
      }),
      new Costume("paper foot 2", "./Zombies/costumes/paper foot 2.svg", {
        x: 25.875,
        y: -7.75,
      }),
      new Costume("zomb arm 2", "./Zombies/costumes/zomb arm 2.svg", {
        x: 12.142857142857139,
        y: 12.5,
      }),
      new Costume("Zombie_head", "./Zombies/costumes/Zombie_head.svg", {
        x: 35.33333333333317,
        y: 44.16666666666666,
      }),
      new Costume(
        "Zombie_polevaulter_hair",
        "./Zombies/costumes/Zombie_polevaulter_hair.svg",
        { x: 44.16666666666674, y: 49.49999999999997 }
      ),
      new Costume("Zombie_cone1", "./Zombies/costumes/Zombie_cone1.svg", {
        x: 32.580719974293004,
        y: 79.33187957583547,
      }),
      new Costume("Zombie_cone2", "./Zombies/costumes/Zombie_cone2.svg", {
        x: 32.553324041147306,
        y: 79.3456659385653,
      }),
      new Costume("Zombie_cone3", "./Zombies/costumes/Zombie_cone3.svg", {
        x: 32.57679652198095,
        y: 79.34424510500224,
      }),
      new Costume("Zombie_bucket1", "./Zombies/costumes/Zombie_bucket1.svg", {
        x: 39.49999999999997,
        y: 68.69999999999999,
      }),
      new Costume("Zombie_bucket2", "./Zombies/costumes/Zombie_bucket2.svg", {
        x: 39.4865813377381,
        y: 68.68600330305526,
      }),
      new Costume("Zombie_bucket3", "./Zombies/costumes/Zombie_bucket3.svg", {
        x: 39.49710982658971,
        y: 68.70231213872842,
      }),
      new Costume("pole arm 2", "./Zombies/costumes/pole arm 2.svg", {
        x: 109.33333333333323,
        y: 48.5,
      }),
      new Costume("pole arm 3", "./Zombies/costumes/pole arm 3.svg", {
        x: 19.199790012299417,
        y: 1.1666699999999537,
      }),
      new Costume(
        "Zombie_polevaulter_body1",
        "./Zombies/costumes/Zombie_polevaulter_body1.svg",
        { x: 26.5, y: 30 }
      ),
      new Costume(
        "Zombie_football_upperbody",
        "./Zombies/costumes/Zombie_football_upperbody.svg",
        { x: 69.75, y: 53.5 }
      ),
      new Costume(
        "Zombie_football_upperbody3",
        "./Zombies/costumes/Zombie_football_upperbody3.svg",
        { x: 69.67973, y: 53.44703000000001 }
      ),
      new Costume("foot arm 1", "./Zombies/costumes/foot arm 1.svg", {
        x: 56.25,
        y: 2,
      }),
      new Costume("foot arm broke", "./Zombies/costumes/foot arm broke.svg", {
        x: 12.25,
        y: 0,
      }),
      new Costume("foot arm 2", "./Zombies/costumes/foot arm 2.svg", {
        x: 57.25,
        y: 10.5,
      }),
      new Costume(
        "Zombie_football_head",
        "./Zombies/costumes/Zombie_football_head.svg",
        { x: 35.07390083941888, y: 44.011522070040456 }
      ),
      new Costume(
        "Zombie_football_helmet",
        "./Zombies/costumes/Zombie_football_helmet.svg",
        { x: 40.191900953520815, y: 55.3477404299162 }
      ),
      new Costume(
        "Zombie_football_helmet2",
        "./Zombies/costumes/Zombie_football_helmet2.svg",
        { x: 40.17659943364285, y: 55.27659943364279 }
      ),
      new Costume(
        "Zombie_football_helmet3",
        "./Zombies/costumes/Zombie_football_helmet3.svg",
        { x: 40.240576779354456, y: 55.35812139776297 }
      ),
      new Costume("paper arm 2", "./Zombies/costumes/paper arm 2.svg", {
        x: 87.33333500000003,
        y: 5.333333333333314,
      }),
      new Costume(
        "Zombie_paper_madhead",
        "./Zombies/costumes/Zombie_paper_madhead.svg",
        { x: 35.16666666666666, y: 44 }
      ),
      new Costume(
        "Zombie_paper_glasses",
        "./Zombies/costumes/Zombie_paper_glasses.svg",
        { x: 37.333333333333286, y: 50.192307692307764 }
      ),
      new Costume(
        "Zombie_paper_body",
        "./Zombies/costumes/Zombie_paper_body.svg",
        { x: 27.00000000000003, y: 33.5 }
      ),
      new Costume(
        "Zombie_paper_lowerbody1",
        "./Zombies/costumes/Zombie_paper_lowerbody1.svg",
        { x: 29.5, y: 17 }
      ),
      new Costume(
        "Zombie_paper_lowerbody2",
        "./Zombies/costumes/Zombie_paper_lowerbody2.svg",
        { x: 24.5, y: 7 }
      ),
      new Costume("paper arm broke", "./Zombies/costumes/paper arm broke.svg", {
        x: 0.25,
        y: 5.875,
      }),
      new Costume("paper arm 1", "./Zombies/costumes/paper arm 1.svg", {
        x: 81.33333333333337,
        y: 15.999999999999972,
      }),
      new Costume("paper arm 3", "./Zombies/costumes/paper arm 3.svg", {
        x: 81.66666666666666,
        y: 15.6666666666668,
      }),
      new Costume("paper arm 4", "./Zombies/costumes/paper arm 4.svg", {
        x: 81.66666333333333,
        y: 15.3333333333332,
      }),
      new Costume("paper arm 5", "./Zombies/costumes/paper arm 5.svg", {
        x: 80.00000000000003,
        y: 6.000003333333211,
      }),
      new Costume(
        "Zombie_balloon_string",
        "./Zombies/costumes/Zombie_balloon_string.svg",
        { x: 33.428571428571445, y: 83.77374517374389 }
      ),
      new Costume(
        "balloon arm broke",
        "./Zombies/costumes/balloon arm broke.svg",
        { x: 8.99999833333331, y: 4.666666666666657 }
      ),
      new Costume("balloon arm 1", "./Zombies/costumes/balloon arm 1.svg", {
        x: 12.87499833333331,
        y: 4.666666666666657,
      }),
      new Costume("balloon arm 2", "./Zombies/costumes/balloon arm 2.svg", {
        x: 12.68869579989348,
        y: 0.5,
      }),
      new Costume("balloon leg 1", "./Zombies/costumes/balloon leg 1.svg", {
        x: 10.500000000000028,
        y: 6.5,
      }),
      new Costume("balloon leg 2", "./Zombies/costumes/balloon leg 2.svg", {
        x: 7.25,
        y: 8.75,
      }),
      new Costume(
        "Zombie_balloon_body1",
        "./Zombies/costumes/Zombie_balloon_body1.svg",
        { x: 22, y: 25 }
      ),
      new Costume(
        "Zombie_balloon_body2",
        "./Zombies/costumes/Zombie_balloon_body2.svg",
        { x: -6.082139999999981, y: 14.992860000000007 }
      ),
      new Costume(
        "Zombie_balloon_head",
        "./Zombies/costumes/Zombie_balloon_head.svg",
        { x: 42.599999999999994, y: 30.199996477332405 }
      ),
      new Costume("propel 0", "./Zombies/costumes/propel 0.svg", {
        x: 35.14285000000001,
        y: 36.39601647733241,
      }),
      new Costume("propel 1", "./Zombies/costumes/propel 1.svg", {
        x: 35.11864406779662,
        y: 36.40112994350281,
      }),
      new Costume(
        "Zombie_innerarm_screendoor",
        "./Zombies/costumes/Zombie_innerarm_screendoor.svg",
        { x: 38.16666666666663, y: 4 }
      ),
      new Costume("screen arm 1", "./Zombies/costumes/screen arm 1.svg", {
        x: 69.16666666666666,
        y: 24.166666666666657,
      }),
      new Costume("screen arm 2", "./Zombies/costumes/screen arm 2.svg", {
        x: 69.16666666666666,
        y: 24.166666666666657,
      }),
      new Costume("screen arm 3", "./Zombies/costumes/screen arm 3.svg", {
        x: 69.16666666666666,
        y: 24.166666666666657,
      }),
      new Costume("digger 0", "./Zombies/costumes/digger 0.svg", {
        x: 49,
        y: 36.796966069709015,
      }),
      new Costume("digger 1", "./Zombies/costumes/digger 1.svg", {
        x: 48.18489065606357,
        y: 35.73670260065853,
      }),
      new Costume("digger 2", "./Zombies/costumes/digger 2.svg", {
        x: 47.77733598409537,
        y: 47.17385651568284,
      }),
      new Costume("digger 3", "./Zombies/costumes/digger 3.svg", {
        x: 53.32007952286284,
        y: 45.84289644096066,
      }),
      new Costume("digger 4", "./Zombies/costumes/digger 4.svg", {
        x: 47.915970250234466,
        y: 41.51529397777978,
      }),
      new Costume("digger 5", "./Zombies/costumes/digger 5.svg", {
        x: 45.32730477815457,
        y: 29.011298583695208,
      }),
      new Costume("digger 6", "./Zombies/costumes/digger 6.svg", {
        x: 49,
        y: 15.999996069709027,
      }),
      new Costume("digger 7", "./Zombies/costumes/digger 7.svg", {
        x: 48.18489065606357,
        y: 16.652092600658506,
      }),
      new Costume("digger 8", "./Zombies/costumes/digger 8.svg", {
        x: 47.77733598409537,
        y: 16.978126515682845,
      }),
      new Costume("digger 9", "./Zombies/costumes/digger 9.svg", {
        x: 53.32007952286284,
        y: 15.429416440960665,
      }),
      new Costume("digger 10", "./Zombies/costumes/digger 10.svg", {
        x: 45.98409025023449,
        y: 16.489073977779782,
      }),
      new Costume("digger 11", "./Zombies/costumes/digger 11.svg", {
        x: 43.53877477815456,
        y: 15.347908583695215,
      }),
      new Costume("digger leg 1", "./Zombies/costumes/digger leg 1.svg", {
        x: 20.099999999999994,
        y: 27.900000000000006,
      }),
      new Costume("digger leg 2", "./Zombies/costumes/digger leg 2.svg", {
        x: 13.999999999999943,
        y: 5.600000000000023,
      }),
      new Costume("digger foot 1", "./Zombies/costumes/digger foot 1.svg", {
        x: 10.700000000000017,
        y: 6.499999999999972,
      }),
      new Costume(
        "digger arm broke",
        "./Zombies/costumes/digger arm broke.svg",
        { x: 19, y: 11.5 }
      ),
      new Costume("digger arm 1", "./Zombies/costumes/digger arm 1.svg", {
        x: 19.000000000000057,
        y: 11.5,
      }),
      new Costume("digger leg 3", "./Zombies/costumes/digger leg 3.svg", {
        x: 12.099999999999994,
        y: 18.5,
      }),
      new Costume("digger leg 4", "./Zombies/costumes/digger leg 4.svg", {
        x: 17.099999999999994,
        y: 3.0999999999999943,
      }),
      new Costume("digger foot 2", "./Zombies/costumes/digger foot 2.svg", {
        x: 28.400000000000006,
        y: -19.80000000000001,
      }),
      new Costume("digger arm 2", "./Zombies/costumes/digger arm 2.svg", {
        x: 13.700000000000074,
        y: 4.5999999999999375,
      }),
      new Costume(
        "Zombie_digger_body",
        "./Zombies/costumes/Zombie_digger_body.svg",
        { x: 41, y: 39.5 }
      ),
      new Costume(
        "Zombie_digger_head",
        "./Zombies/costumes/Zombie_digger_head.svg",
        { x: -2.8249999999999886, y: 70.69999999999999 }
      ),
      new Costume("Zombie_tie", "./Zombies/costumes/Zombie_tie.svg", {
        x: 13.875,
        y: 0.125,
      }),
      new Costume("icetrap", "./Zombies/costumes/icetrap.svg", {
        x: 27,
        y: 15,
      }),
    ];

    this.sounds = [
      new Sound("awooga", "./Zombies/sounds/awooga.mp3"),
      new Sound("groan", "./Zombies/sounds/groan.mp3"),
      new Sound("groan2", "./Zombies/sounds/groan2.mp3"),
      new Sound("groan4", "./Zombies/sounds/groan4.mp3"),
      new Sound("groan3", "./Zombies/sounds/groan3.mp3"),
      new Sound("groan5", "./Zombies/sounds/groan5.mp3"),
      new Sound("groan6", "./Zombies/sounds/groan6.mp3"),
      new Sound("splat", "./Zombies/sounds/splat.mp3"),
      new Sound("splat2", "./Zombies/sounds/splat2.mp3"),
      new Sound("splat3", "./Zombies/sounds/splat3.mp3"),
      new Sound("frozen", "./Zombies/sounds/frozen.mp3"),
      new Sound("melonimpact", "./Zombies/sounds/melonimpact.mp3"),
      new Sound("melonimpact2", "./Zombies/sounds/melonimpact2.mp3"),
      new Sound("ballooninflate", "./Zombies/sounds/ballooninflate.mp3"),
      new Sound("butter", "./Zombies/sounds/butter.mp3"),
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "potato mine explode" },
        this.whenIReceivePotatoMineExplode
      ),
      new Trigger(Trigger.BROADCAST, { name: "START" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "load game" },
        this.whenIReceiveLoadGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "delete" },
        this.whenIReceiveDelete
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "freeze zombies" },
        this.whenIReceiveFreezeZombies
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "START" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "jalapeno" },
        this.whenIReceiveJalapeno
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "seed select" },
        this.whenIReceiveSeedSelect
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "blover" },
        this.whenIReceiveBlover
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "into game" },
        this.whenIReceiveIntoGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start soft" },
        this.whenIReceiveStartSoft
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stop game" },
        this.whenIReceiveStopGame
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone8),
      new Trigger(Trigger.BROADCAST, { name: "bowl" }, this.whenIReceiveBowl),
      new Trigger(
        Trigger.BROADCAST,
        { name: "bowl explo" },
        this.whenIReceiveBowlExplo
      ),
    ];

    this.audioEffects.volume = 50;

    this.vars.x = 190;
    this.vars.y = -15;
    this.vars.sin = 323.29999999999995;
    this.vars.var = 0;
    this.vars.ghost = -1589845;
    this.vars.hp = 5000;
    this.vars.layer = 5;
    this.vars.i = 5;
    this.vars.grid = 0;
    this.vars.gridX = 245;
    this.vars.type = "norm";
    this.vars.bright = 0;
    this.vars.prevGrid = 0;
    this.vars.parFirst = "yes";
    this.vars.timer = 4.999999999999998;
    this.vars.startY = -120;
    this.vars.changeTimer = -0.4;
    this.vars.speed = -8;
    this.vars.maxSpeed = -8;
    this.vars.speedTimer = 0;
    this.vars.color = 0;
    this.vars.frozenTimer = 0;
    this.vars.hasPole = "yes";
    this.vars.random = 3;
    this.vars.hasPaper = "yes";
    this.vars.newsPaperHp = 5000;
    this.vars.hasScreen = "yes";
    this.vars.screenHp = 5000;
    this.vars.waves = 1;
    this.vars.waveNumber = 1;
    this.vars.repeat = 10;
    this.vars.startTimer = 25;
    this.vars.digging = 0;
    this.vars.moving = 0;
    this.vars.timed = 1.9140000000000015;
    this.vars.wait = 0;
    this.vars.waitSound = 0;
    this.vars.miniumTimer = 0.5;
  }

  *draw() {
    if (this.toString(this.vars.digging) === "yes") {
      this.vars.y -= 40;
      this.costume = "pos";
      this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
      this.direction = 90;
      this.costume =
        "digger " +
        this.toString(Math.round(this.toNumber(this.vars.sin) / 20) % 12);
      this.size = 50;
      this.stamp();
      this.vars.y += 40;
    } else {
      if (this.toString(this.vars.type) === "digger") {
        this.effects.color = this.toNumber(this.vars.color);
        this.vars.y -= 40;
        this.costume = "pos";
        this.direction =
          Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 6 + 85;
        this.goto(
          this.toNumber(this.vars.x) + 12,
          this.toNumber(this.vars.y) + 47
        );
        this.size = 60;
        this.costume = "digger arm 2";
        this.stamp();
        this.costume = "pos";
        this.size = 60;
        this.vars.var =
          Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 150 - 90)) * -4;
        if (this.compare(this.vars.var, 0) < 0) {
          this.vars.var = 0;
        }
        this.goto(
          Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 150)) * -3 +
            (this.toNumber(this.vars.x) + 1),
          this.toNumber(this.vars.var) + (this.toNumber(this.vars.y) + 24)
        );
        this.direction =
          Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -5 + 105;
        this.costume = "digger leg 4";
        this.stamp();
        this.costume = "pos";
        this.direction =
          Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -5 + 105;
        this.size = 60;
        this.costume = "digger foot 2";
        this.stamp();
        this.costume = "pos";
        this.direction =
          Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 10 + 90;
        this.size = 60;
        this.costume = "digger leg 3";
        this.stamp();
        this.costume = "pos";
        this.direction =
          Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -1 + 95;
        this.goto(
          this.toNumber(this.vars.x) + -2,
          Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) * -1 +
            (this.toNumber(this.vars.y) + 42)
        );
        this.size = 60;
        this.costume = "Zombie_digger_body";
        this.stamp();
        this.costume = "pos";
        this.size = 60;
        this.vars.var =
          Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 90)) * -2;
        if (this.compare(this.vars.var, 0) < 0) {
          this.vars.var = 0;
        }
        this.goto(
          Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -5 +
            (this.toNumber(this.vars.x) + -5),
          this.toNumber(this.vars.var) + (this.toNumber(this.vars.y) + 3)
        );
        this.direction =
          Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 + 85;
        this.costume = "digger foot 1";
        this.stamp();
        this.costume = "pos";
        this.y += 10;
        this.direction =
          Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 + 85;
        this.size = 60;
        this.costume = "digger leg 2";
        this.stamp();
        this.costume = "pos";
        this.direction =
          Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 10 + 80;
        this.size = 60;
        this.costume = "digger leg 1";
        this.stamp();
        this.costume = "pos";
        this.goto(
          this.toNumber(this.vars.x) + -3,
          Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) * -1 +
            (this.toNumber(this.vars.y) + 48)
        );
        this.direction =
          Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 2)) * -9 + 85;
        this.size = 50;
        this.costume = "digger arm 1";
        if (this.compare(this.vars.hp, 150) < 0) {
          this.costume = "digger arm broke";
        }
        this.stamp();
        this.costume = "pos";
        this.direction =
          Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -1 + 95;
        this.goto(
          this.toNumber(this.vars.x) + -2,
          Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) * -1 +
            (this.toNumber(this.vars.y) + 42)
        );
        this.size = 50;
        this.costume = "Zombie_digger_head";
        if (this.compare(this.vars.hp, 0) > 0) {
          this.stamp();
        }
        this.vars.y += 40;
      } else {
        if (
          this.toString(this.vars.type) === "norm" ||
          this.toString(this.vars.type) === "cone" ||
          this.toString(this.vars.type) === "bucket" ||
          this.toString(this.vars.type) === "screen"
        ) {
          this.effects.color = this.toNumber(this.vars.color);
          this.vars.y -= 40;
          this.costume = "pos";
          this.direction =
            Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 6 + 85;
          this.goto(
            this.toNumber(this.vars.x) + -12,
            this.toNumber(this.vars.y) + 40
          );
          this.size = 60;
          this.costume = "zomb arm 2";
          if (this.toString(this.vars.hasScreen) === "yes") {
            this.costume = "pos";
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) * -3 +
              90;
            this.y += 12;
            this.x -= 1;
            this.costume = "Zombie_innerarm_screendoor";
          }
          this.stamp();
          this.costume = "pos";
          this.size = 60;
          this.vars.var =
            Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 150 - 90)) *
            4;
          if (this.compare(this.vars.var, 0) < 0) {
            this.vars.var = 0;
          }
          this.goto(
            Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 150)) * 3 +
              (this.toNumber(this.vars.x) + 1),
            this.toNumber(this.vars.var) + (this.toNumber(this.vars.y) + 17)
          );
          this.direction =
            Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 + 85;
          this.costume = "zomb leg 4";
          this.stamp();
          this.costume = "pos";
          this.direction =
            Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 + 85;
          this.size = 60;
          this.costume = "zomb foot 2";
          this.stamp();
          this.costume = "pos";
          this.direction =
            Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -10 + 90;
          this.size = 60;
          this.costume = "zomb leg 3";
          this.stamp();
          this.costume = "pos";
          this.size = 60;
          this.vars.var =
            Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 90)) * 4;
          if (this.compare(this.vars.var, 0) < 0) {
            this.vars.var = 0;
          }
          this.goto(
            Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 +
              this.toNumber(this.vars.x),
            this.toNumber(this.vars.var) + this.toNumber(this.vars.y)
          );
          this.direction =
            Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -5 + 85;
          this.costume = "zomb foot 1";
          this.stamp();
          this.costume = "pos";
          this.y += 16;
          this.direction =
            Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -5 + 85;
          this.size = 60;
          this.costume = "zomb leg 2";
          this.stamp();
          this.costume = "pos";
          this.direction =
            Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -15 + 105;
          this.size = 60;
          this.costume = "zomb leg 1";
          this.stamp();
          this.costume = "pos";
          this.direction =
            Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -3 + 95;
          this.goto(
            this.toNumber(this.vars.x) + -2,
            Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) *
              -1 +
              (this.toNumber(this.vars.y) + 42)
          );
          this.size = 60;
          this.costume = "Zombie_body";
          this.stamp();
          this.costume = "pos";
          this.direction =
            Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -3 + 80;
          this.x -= 10;
          this.y += 8;
          this.costume = "Zombie_tie";
          this.stamp();
          if (this.toString(this.vars.hasScreen) === "yes") {
            this.costume = "pos";
            this.goto(
              this.toNumber(this.vars.x) + -9,
              Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) *
                -1 +
                (this.toNumber(this.vars.y) + 56)
            );
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 4 + 85;
            this.size = 50;
            this.costume = "Zombie_head";
            if (this.compare(this.vars.hp, 0) > 0) {
              this.stamp();
            }
            this.costume = "pos";
            this.goto(
              this.toNumber(this.vars.x) + -2,
              Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) *
                -1 +
                (this.toNumber(this.vars.y) + 50)
            );
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) * -3 +
              90;
            if (this.compare(this.vars.screenHp, 780) > 0) {
              this.costume = "screen arm 1";
            } else {
              if (this.compare(this.vars.screenHp, 390) > 0) {
                this.costume = "screen arm 2";
              } else {
                this.costume = "screen arm 3";
              }
            }
            this.stamp();
          } else {
            this.costume = "pos";
            this.goto(
              this.toNumber(this.vars.x) + 0,
              Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) *
                -1 +
                (this.toNumber(this.vars.y) + 42)
            );
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 2)) * -9 +
              85;
            this.size = 50;
            this.costume = "zomb arm 1";
            if (this.compare(this.vars.hp, 101) < 0) {
              this.costume = "zomb arm broke";
            }
            this.stamp();
            this.costume = "pos";
            this.goto(
              this.toNumber(this.vars.x) + -9,
              Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) *
                -1 +
                (this.toNumber(this.vars.y) + 56)
            );
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 4 + 85;
            this.size = 50;
            this.costume = "Zombie_head";
            if (this.compare(this.vars.hp, 0) > 0) {
              this.stamp();
            }
            if (this.toString(this.vars.type) === "cone") {
              this.costume = "pos";
              this.direction =
                Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 6 + 85;
              if (this.compare(this.vars.hp, 447) > 0) {
                this.costume = "Zombie_cone1";
              } else {
                if (this.compare(this.vars.hp, 324) > 0) {
                  this.costume = "Zombie_cone2";
                } else {
                  this.costume = "Zombie_cone3";
                }
              }
              if (this.compare(this.vars.hp, 200) > 0) {
                this.stamp();
              } else {
                if (this.toString(this.vars.parFirst) === "yes") {
                  this.stage.vars.particleQueueType.push("cone");
                  this.stage.vars.particleQueueX.push(this.vars.x);
                  this.stage.vars.particleQueueY.push(this.vars.y);
                }
                this.vars.parFirst = "no";
              }
            } else {
              if (this.toString(this.vars.type) === "bucket") {
                this.costume = "pos";
                this.direction =
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 6 +
                  85;
                if (this.compare(this.vars.hp, 934) > 0) {
                  this.costume = "Zombie_bucket1";
                } else {
                  if (this.compare(this.vars.hp, 568) > 0) {
                    this.costume = "Zombie_bucket2";
                  } else {
                    this.costume = "Zombie_bucket3";
                  }
                }
                if (this.compare(this.vars.hp, 200) > 0) {
                  this.stamp();
                } else {
                  if (this.toString(this.vars.parFirst) === "yes") {
                    this.stage.vars.particleQueueType.push("bucket");
                    this.stage.vars.particleQueueX.push(this.vars.x);
                    this.stage.vars.particleQueueY.push(this.vars.y);
                  }
                  this.vars.parFirst = "no";
                }
              }
            }
          }
          this.vars.y += 40;
        } else {
          if (this.toString(this.vars.type) === "pole") {
            this.effects.color = this.toNumber(this.vars.color);
            this.vars.y -= 40;
            this.costume = "pos";
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 6 + 85;
            this.goto(
              this.toNumber(this.vars.x) + -12,
              this.toNumber(this.vars.y) + 50
            );
            this.size = 60;
            this.costume = "pole arm 2";
            if (this.toString(this.vars.hasPole) === "no") {
              this.costume = "pole arm 3";
            }
            this.stamp();
            this.costume = "pos";
            this.size = 60;
            this.vars.var =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 150 - 90)) *
              4;
            if (this.compare(this.vars.var, 0) < 0) {
              this.vars.var = 0;
            }
            this.goto(
              Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 150)) * 3 +
                (this.toNumber(this.vars.x) + 1),
              this.toNumber(this.vars.var) + (this.toNumber(this.vars.y) + 17)
            );
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 + 85;
            this.costume = "pole leg 4";
            this.stamp();
            this.costume = "pos";
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 + 85;
            this.size = 60;
            this.costume = "pole foot 2";
            this.stamp();
            this.costume = "pos";
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -10 + 90;
            this.size = 60;
            this.costume = "pole leg 3";
            this.stamp();
            this.costume = "pos";
            this.size = 60;
            this.vars.var =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 90)) * 4;
            if (this.compare(this.vars.var, 0) < 0) {
              this.vars.var = 0;
            }
            this.goto(
              Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 +
                this.toNumber(this.vars.x),
              this.toNumber(this.vars.var) + this.toNumber(this.vars.y)
            );
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -5 + 85;
            this.costume = "pole foot 1";
            this.stamp();
            this.costume = "pos";
            this.y += 16;
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -5 + 85;
            this.size = 60;
            this.costume = "pole leg 2";
            this.stamp();
            this.costume = "pos";
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -15 + 105;
            this.size = 60;
            this.costume = "pole leg 1";
            this.stamp();
            this.costume = "pos";
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -3 + 95;
            this.goto(
              this.toNumber(this.vars.x) + -2,
              Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) *
                -1 +
                (this.toNumber(this.vars.y) + 42)
            );
            this.size = 60;
            this.costume = "Zombie_polevaulter_body1";
            this.stamp();
            this.costume = "pos";
            this.goto(
              this.toNumber(this.vars.x) + 3,
              Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) *
                -1 +
                (this.toNumber(this.vars.y) + 42)
            );
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 2)) * -9 +
              85;
            this.size = 50;
            this.costume = "pole arm 1";
            if (this.compare(this.vars.hp, 250) < 0) {
              this.costume = "pole arm broke";
            }
            this.stamp();
            this.costume = "pos";
            this.goto(
              this.toNumber(this.vars.x) + -9,
              Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) *
                -1 +
                (this.toNumber(this.vars.y) + 56)
            );
            this.direction =
              Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 4 + 85;
            this.size = 50;
            this.costume = "Zombie_head";
            if (this.compare(this.vars.hp, 0) > 0) {
              this.stamp();
            }
            this.costume = "Zombie_polevaulter_hair";
            this.stamp();
            this.vars.y += 40;
          } else {
            if (this.toString(this.vars.type) === "foot") {
              this.effects.color = this.toNumber(this.vars.color);
              this.vars.y -= 40;
              this.costume = "pos";
              this.direction =
                Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 6 + 85;
              this.goto(
                this.toNumber(this.vars.x) + -16,
                this.toNumber(this.vars.y) + 46
              );
              this.size = 60;
              this.costume = "foot arm 2";
              if (this.compare(this.vars.hp, 101) < 0) {
                this.costume = "foot arm broke";
              }
              this.stamp();
              this.costume = "pos";
              this.size = 60;
              this.vars.var =
                Math.sin(
                  this.degToRad(this.toNumber(this.vars.sin) - 150 - 90)
                ) * 4;
              if (this.compare(this.vars.var, 0) < 0) {
                this.vars.var = 0;
              }
              this.goto(
                Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 150)) *
                  3 +
                  (this.toNumber(this.vars.x) + -10),
                this.toNumber(this.vars.var) + (this.toNumber(this.vars.y) + 17)
              );
              this.direction =
                Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 + 85;
              this.costume = "foot leg 4";
              this.stamp();
              this.costume = "pos";
              this.direction =
                Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 + 85;
              this.size = 60;
              this.costume = "foot foot 2";
              this.stamp();
              this.costume = "pos";
              this.direction =
                Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -10 +
                90;
              this.size = 60;
              this.costume = "foot leg 3";
              this.stamp();
              this.costume = "pos";
              this.size = 60;
              this.vars.var =
                Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 90)) * 4;
              if (this.compare(this.vars.var, 0) < 0) {
                this.vars.var = 0;
              }
              this.goto(
                Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 +
                  this.toNumber(this.vars.x),
                this.toNumber(this.vars.var) + this.toNumber(this.vars.y)
              );
              this.direction =
                Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -5 + 85;
              this.costume = "foot foot 1";
              this.stamp();
              this.costume = "pos";
              this.y += 16;
              this.direction =
                Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -5 + 85;
              this.size = 60;
              this.costume = "foot leg 2";
              this.stamp();
              this.costume = "pos";
              this.direction =
                Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -15 +
                105;
              this.size = 60;
              this.costume = "foot leg 1";
              this.stamp();
              this.costume = "pos";
              this.direction =
                Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -3 + 95;
              this.goto(
                this.toNumber(this.vars.x) + -2,
                Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) *
                  -1 +
                  (this.toNumber(this.vars.y) + 42)
              );
              this.size = 60;
              this.costume = "Zombie_football_upperbody";
              this.stamp();
              this.costume = "pos";
              this.goto(
                this.toNumber(this.vars.x) + 5,
                Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) *
                  -1 +
                  (this.toNumber(this.vars.y) + 40)
              );
              this.direction =
                Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) *
                  -15 +
                70;
              this.size = 50;
              this.costume = "foot arm 1";
              this.stamp();
              this.costume = "pos";
              this.direction =
                Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -3 + 95;
              this.goto(
                this.toNumber(this.vars.x) + -2,
                Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) *
                  -1 +
                  (this.toNumber(this.vars.y) + 42)
              );
              this.size = 60;
              this.costume = "Zombie_football_upperbody3";
              this.stamp();
              this.costume = "pos";
              this.goto(
                this.toNumber(this.vars.x) + -9,
                Math.sin(this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)) *
                  -1 +
                  (this.toNumber(this.vars.y) + 56)
              );
              this.direction =
                Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 4 + 85;
              this.size = 50;
              this.costume = "Zombie_football_head";
              if (this.compare(this.vars.hp, 0) > 0) {
                this.stamp();
              }
              this.costume = "pos";
              this.direction =
                Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 6 + 85;
              if (this.compare(this.vars.hp, 1190) > 0) {
                this.costume = "Zombie_football_helmet";
              } else {
                if (this.compare(this.vars.hp, 730) > 0) {
                  this.costume = "Zombie_football_helmet2";
                } else {
                  this.costume = "Zombie_football_helmet3";
                }
              }
              if (this.compare(this.vars.hp, 200) > 0) {
                this.stamp();
              } else {
                if (this.toString(this.vars.parFirst) === "yes") {
                  this.stage.vars.particleQueueType.push("helmet");
                  this.stage.vars.particleQueueX.push(this.vars.x);
                  this.stage.vars.particleQueueY.push(this.vars.y);
                }
                this.vars.parFirst = "no";
              }
              this.vars.y += 40;
            } else {
              if (this.toString(this.vars.type) === "paper") {
                this.effects.color = this.toNumber(this.vars.color);
                this.vars.y -= 40;
                this.costume = "pos";
                this.goto(
                  this.toNumber(this.vars.x) + -3,
                  Math.sin(
                    this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)
                  ) *
                    -1 +
                    (this.toNumber(this.vars.y) + 54)
                );
                this.direction =
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) *
                    -5 +
                  90;
                this.size = 50;
                this.costume = "paper arm 2";
                this.stamp();
                this.costume = "pos";
                this.size = 60;
                this.vars.var =
                  Math.sin(
                    this.degToRad(this.toNumber(this.vars.sin) - 150 - 90)
                  ) * 4;
                if (this.compare(this.vars.var, 0) < 0) {
                  this.vars.var = 0;
                }
                this.goto(
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 150)) *
                    3 +
                    (this.toNumber(this.vars.x) + 0),
                  this.toNumber(this.vars.var) +
                    (this.toNumber(this.vars.y) + 17)
                );
                this.direction =
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 +
                  85;
                this.costume = "paper leg 4";
                this.stamp();
                this.costume = "pos";
                this.direction =
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 +
                  85;
                this.size = 60;
                this.costume = "paper foot 2";
                this.stamp();
                this.costume = "pos";
                this.direction =
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -10 +
                  90;
                this.size = 60;
                this.costume = "paper leg 3";
                this.stamp();
                this.costume = "pos";
                this.size = 60;
                this.vars.var =
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin) - 90)) *
                  4;
                if (this.compare(this.vars.var, 0) < 0) {
                  this.vars.var = 0;
                }
                this.goto(
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 5 +
                    (this.toNumber(this.vars.x) + 6),
                  this.toNumber(this.vars.var) + this.toNumber(this.vars.y)
                );
                this.direction =
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -5 +
                  85;
                this.costume = "paper foot 1";
                this.stamp();
                this.costume = "pos";
                this.y += 16;
                this.direction =
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -5 +
                  85;
                this.size = 60;
                this.costume = "paper leg 2";
                this.stamp();
                this.costume = "pos";
                this.direction =
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -15 +
                  105;
                this.size = 60;
                this.costume = "paper leg 1";
                this.stamp();
                this.costume = "pos";
                this.direction =
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -3 +
                  95;
                this.goto(
                  this.toNumber(this.vars.x) + -2,
                  Math.sin(
                    this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)
                  ) *
                    -1 +
                    (this.toNumber(this.vars.y) + 42)
                );
                this.size = 55;
                this.costume = "Zombie_paper_body";
                this.stamp();
                this.costume = "pos";
                this.goto(
                  this.toNumber(this.vars.x) + -3,
                  Math.sin(
                    this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)
                  ) *
                    -1 +
                    (this.toNumber(this.vars.y) + 54)
                );
                this.direction =
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) *
                    -5 +
                  90;
                this.size = 50;
                if (this.compare(this.vars.newsPaperHp, 100) > 0) {
                  this.costume = "paper arm 1";
                } else {
                  if (this.compare(this.vars.newsPaperHp, 50) > 0) {
                    this.costume = "paper arm 3";
                  } else {
                    if (this.compare(this.vars.newsPaperHp, 1) > 0) {
                      this.costume = "paper arm 4";
                    } else {
                      this.costume = "paper arm 5";
                    }
                  }
                }
                if (
                  this.compare(this.vars.hp, 101) < 0 &&
                  this.toString(this.vars.hasPaper) === "no"
                ) {
                  this.costume = "paper arm broke";
                }
                this.stamp();
                this.costume = "pos";
                this.goto(
                  this.toNumber(this.vars.x) + -9,
                  Math.sin(
                    this.degToRad(this.toNumber(this.vars.sin) * 2 - 90)
                  ) *
                    -1 +
                    (this.toNumber(this.vars.y) + 56)
                );
                this.direction =
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 4 +
                  85;
                this.size = 50;
                this.costume = "Zombie_head";
                if (this.toString(this.vars.hasPaper) === "no") {
                  this.costume = "Zombie_paper_madhead";
                }
                if (this.compare(this.vars.hp, 0) > 0) {
                  this.stamp();
                }
                this.costume = "pos";
                this.direction =
                  Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 6 +
                  85;
                this.costume = "Zombie_paper_glasses";
                this.stamp();
                this.vars.y += 40;
              } else {
                if (this.toString(this.vars.type) === "balloon") {
                  this.vars.y +=
                    Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * 3;
                  this.effects.color = this.toNumber(this.vars.color);
                  this.costume = "pos";
                  this.goto(
                    this.toNumber(this.vars.x) + -9,
                    this.toNumber(this.vars.y) + -6
                  );
                  this.direction =
                    Math.sin(
                      this.degToRad((this.toNumber(this.vars.sin) - -50) / 1)
                    ) *
                      5 +
                    85;
                  this.size = 50;
                  this.costume = "balloon arm 2";
                  this.stamp();
                  this.costume = "pos";
                  this.goto(
                    this.toNumber(this.vars.x) + 0,
                    this.toNumber(this.vars.y) + 0
                  );
                  this.direction =
                    Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) *
                      -1 +
                    90;
                  this.size = 50;
                  this.costume = "Zombie_balloon_body2";
                  this.stamp();
                  this.costume = "pos";
                  this.goto(
                    this.toNumber(this.vars.x) + 3,
                    this.toNumber(this.vars.y) + 0
                  );
                  this.direction =
                    Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) *
                      5 +
                    85;
                  this.size = 50;
                  this.costume = "balloon leg 2";
                  this.stamp();
                  this.costume = "pos";
                  this.goto(
                    this.toNumber(this.vars.x) + 13,
                    this.toNumber(this.vars.y) + -3
                  );
                  this.direction =
                    Math.sin(
                      this.degToRad((this.toNumber(this.vars.sin) - 100) / 1)
                    ) *
                      5 +
                    85;
                  this.size = 50;
                  this.costume = "balloon leg 1";
                  this.stamp();
                  this.costume = "pos";
                  this.goto(
                    this.toNumber(this.vars.x) + 6,
                    this.toNumber(this.vars.y) + 11
                  );
                  this.direction =
                    Math.sin(
                      this.degToRad(this.toNumber(this.vars.sin) / 0.5)
                    ) *
                      -1 +
                    90;
                  this.size =
                    Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) *
                      2 +
                    40;
                  this.costume = "Zombie_balloon_string";
                  this.stamp();
                  this.costume = "pos";
                  this.goto(
                    this.toNumber(this.vars.x) + 0,
                    this.toNumber(this.vars.y) + 0
                  );
                  this.direction =
                    Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) *
                      -1 +
                    90;
                  this.size = 50;
                  this.costume = "Zombie_balloon_body1";
                  this.stamp();
                  this.costume = "pos";
                  this.goto(
                    this.toNumber(this.vars.x) + 0,
                    this.toNumber(this.vars.y) + -3
                  );
                  this.direction =
                    Math.sin(
                      this.degToRad((this.toNumber(this.vars.sin) - 150) / 1)
                    ) *
                      5 +
                    85;
                  this.size = 40;
                  this.costume = "balloon arm 1";
                  if (this.compare(this.vars.hp, 51) < 0) {
                    this.costume = "balloon arm broke";
                  }
                  this.stamp();
                  this.costume = "pos";
                  this.goto(
                    this.toNumber(this.vars.x) + -3,
                    this.toNumber(this.vars.y) + 0
                  );
                  this.direction =
                    Math.sin(this.degToRad(this.toNumber(this.vars.sin) / 1)) *
                      5 +
                    85;
                  this.size = 50;
                  this.costume = "Zombie_balloon_head";
                  this.stamp();
                  this.costume = "pos";
                  this.costume =
                    "propel " +
                    this.toString(
                      Math.round(this.toNumber(this.vars.sin) / 15) % 2
                    );
                  this.stamp();
                  this.vars.y +=
                    Math.sin(this.degToRad(this.toNumber(this.vars.sin))) * -3;
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

  *startAsClone() {
    this.vars.layer = this.random(1, 5);
    if (this.toNumber(this.vars.layer) === 1) {
      this.vars.y = 120;
    } else {
      if (this.toNumber(this.vars.layer) === 2) {
        this.vars.y = 60;
      } else {
        if (this.toNumber(this.vars.layer) === 3) {
          this.vars.y = 0;
        } else {
          if (this.toNumber(this.vars.layer) === 4) {
            this.vars.y = -60;
          } else {
            if (this.toNumber(this.vars.layer) === 5) {
              this.vars.y = -120;
            } else {
              null;
            }
          }
        }
      }
    }
    yield* this.hp();
    this.vars.bright = 0;
    this.vars.parFirst = "yes";
    this.vars.speed = this.vars.maxSpeed;
    this.vars.color = 0;
    this.vars.timer = 0;
    while (true) {
      this.effects.ghost = 0;
      this.effects.brightness = this.toNumber(this.vars.bright);
      this.vars.sin +=
        this.toNumber(this.stage.vars.deltaTime) *
        (this.toNumber(this.vars.speed) * -1 * 16);
      yield* this.draw();
      if (this.toString(this.vars.digging) === "yes") {
        this.vars.x +=
          this.toNumber(this.stage.vars.deltaTime) *
          this.toNumber(this.vars.speed);
      } else {
        if (
          this.compare(this.vars.x, 220) > 0 ||
          this.toString(this.vars.type) === "balloon"
        ) {
          this.vars.x +=
            this.toNumber(this.stage.vars.deltaTime) *
            this.toNumber(this.vars.speed);
        } else {
          if (this.toString(this.vars.moving) === "yes") {
            if (
              this.toString(this.vars.type) === "pole" &&
              this.toString(this.vars.hasPole) === "yes" &&
              !(
                this.toString(
                  this.itemOf(this.stage.vars.grid, this.vars.grid - 1)
                ) === "rock"
              ) &&
              !(
                this.toString(
                  this.itemOf(this.stage.vars.grid, this.vars.grid - 1)
                ) === "none"
              ) &&
              !(
                this.toString(
                  this.itemOf(this.stage.vars.grid, this.vars.grid - 1)
                ) === "spike"
              ) &&
              !(
                this.toString(
                  this.itemOf(this.stage.vars.grid, this.vars.grid - 1)
                ) === "cob"
              )
            ) {
              yield* this.polevault();
              this.vars.hasPole = "no";
              this.vars.maxSpeed = -8;
            } else {
              if (
                this.toString(this.vars.type) === "pole" &&
                this.toString(this.vars.hasPole) === "yes" &&
                this.toString(
                  this.itemOf(this.stage.vars.grid, this.vars.grid - 1)
                ) === "cob"
              ) {
                this.vars.hasPole = "no";
                this.vars.maxSpeed = -8;
              } else {
                if (
                  this.toString(
                    this.itemOf(this.stage.vars.grid, this.vars.grid - 1)
                  ) === "none" ||
                  this.toString(
                    this.itemOf(this.stage.vars.grid, this.vars.grid - 1)
                  ) === "mine"
                ) {
                  this.vars.x +=
                    this.toNumber(this.stage.vars.deltaTime) *
                    this.toNumber(this.vars.speed);
                } else {
                  if (
                    this.toString(
                      this.itemOf(this.stage.vars.grid, this.vars.grid - 1)
                    ) === "garlic"
                  ) {
                    this.stage.vars.zombieY.splice(
                      this.vars.layer - 1,
                      1,
                      "no"
                    );
                    if (this.toNumber(this.vars.layer) === 1) {
                      this.vars.layer = 2;
                      yield* this.changeLayerDown();
                    } else {
                      if (this.toNumber(this.vars.layer) === 5) {
                        this.vars.layer = 4;
                        yield* this.changeLayerUp();
                      } else {
                        this.vars.i = this.random(1, 2);
                        if (this.toNumber(this.vars.i) === 1) {
                          this.vars.layer++;
                          yield* this.changeLayerDown();
                        } else {
                          this.vars.layer--;
                          yield* this.changeLayerUp();
                        }
                      }
                    }
                    this.stage.vars.zombieY.splice(
                      this.vars.layer - 1,
                      1,
                      "yes"
                    );
                  } else {
                    if (
                      this.toString(
                        this.itemOf(this.stage.vars.grid, this.vars.grid - 1)
                      ) === "spike"
                    ) {
                      this.vars.x +=
                        this.toNumber(this.stage.vars.deltaTime) *
                        this.toNumber(this.vars.speed);
                      this.vars.hp +=
                        this.toNumber(this.stage.vars.deltaTime) * -20;
                      if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                        this.vars.bright = 50;
                        yield* this.startSound(this.random(8, 10));
                      }
                    } else {
                      if (
                        this.toString(
                          this.itemOf(this.stage.vars.grid, this.vars.grid - 1)
                        ) === "rock"
                      ) {
                        this.vars.x +=
                          this.toNumber(this.stage.vars.deltaTime) *
                          this.toNumber(this.vars.speed);
                        this.vars.hp +=
                          this.toNumber(this.stage.vars.deltaTime) * -30;
                        if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                          this.vars.bright = 50;
                          yield* this.startSound(this.random(8, 10));
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
      yield* this.getGrid();
      this.vars.bright +=
        (0 - this.toNumber(this.vars.bright)) /
        (0.08 / this.toNumber(this.stage.vars.deltaTime));
      if (this.compare(this.vars.x, -265) < 0) {
        this.broadcast("death");
        this.deleteThisClone();
      }
      if (this.toString(this.vars.type) === "paper") {
        if (!(this.compare(this.vars.newsPaperHp, 0) > 0)) {
          this.vars.hasPaper = "no";
          this.vars.maxSpeed = -16;
        }
      }
      if (this.toString(this.vars.type) === "screen") {
        if (!(this.compare(this.vars.screenHp, 0) > 0)) {
          this.vars.hasScreen = "no";
        }
      }
      if (this.toString(this.vars.type) === "digger") {
        if (this.toString(this.vars.digging) === "yes") {
          if (this.compare(this.vars.x, -196) < 0) {
            this.vars.x = -196;
            this.vars.digging = "no";
            this.vars.maxSpeed = 0;
          }
        } else {
          this.vars.timer += this.toNumber(this.stage.vars.deltaTime) * 30;
          if (this.compare(this.vars.timer, 150) > 0) {
            this.vars.moving = "yes";
            this.vars.maxSpeed = 8;
          }
          if (this.compare(this.vars.x, 270) > 0) {
            this.vars.hp = 0;
          }
        }
      }
      yield;
    }
  }

  *startAsClone2() {
    this.vars.speedTimer = 600;
    this.vars.frozenTimer = 600;
    while (true) {
      this.visible = false;
      if (this.toString(this.stage.vars.pause) === "no") {
        if (
          this.compare(this.vars.hp, 0) > 0 &&
          this.toString(this.vars.digging) === "no"
        ) {
          this.costume = "pos";
          this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
          if (this.toString(this.vars.type) === "digger") {
            this.x += 10;
          }
          this.direction = 90;
          this.costume = "col norm";
          this.size = 100;
          this.visible = true;
          this.effects.ghost = 100;
          if (this.toString(this.vars.type) === "balloon") {
            if (this.touching(this.sprites["Spike"].andClones())) {
              this.vars.hp -= 4;
              if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                this.vars.bright = 50;
                yield* this.startSound(this.random(8, 10));
              }
            }
            if (this.touching(this.sprites["Cob"].andClones())) {
              this.vars.hp = 0;
            }
            this.visible = false;
          } else {
            if (
              this.toString(this.vars.hasPaper) === "no" &&
              this.toString(this.vars.hasScreen) === "no"
            ) {
              if (this.touching(this.sprites["Star"].andClones())) {
                this.vars.hp -= 25;
                this.vars.bright = 50;
                yield* this.startSound(this.random(8, 10));
              }
              if (
                this.touching(this.sprites["Pea"].andClones()) ||
                this.touching(this.sprites[undefined].andClones()) ||
                this.touching(this.sprites["Spike"].andClones())
              ) {
                this.vars.hp -= 20;
                this.vars.bright = 50;
                yield* this.startSound(this.random(8, 10));
              }
              if (this.touching(this.sprites["FirePea"].andClones())) {
                this.vars.speedTimer = 600;
                this.vars.hp -= 40;
                this.vars.bright = 50;
                yield* this.startSound(this.random(8, 10));
              }
              if (this.touching(this.sprites["Cabbage"].andClones())) {
                this.vars.hp -= 40;
                this.vars.bright = 50;
                yield* this.startSound(this.random(8, 10));
              }
              if (this.touching(this.sprites["Melon"].andClones())) {
                this.vars.hp -= 30;
                this.vars.bright = 50;
              }
              if (this.touching(this.sprites["Corn"].andClones())) {
                this.vars.hp -= 20;
                this.vars.bright = 50;
                yield* this.startSound(this.random(8, 10));
              }
              if (this.touching(this.sprites["Butter"].andClones())) {
                this.vars.hp -= 60;
                this.vars.bright = 50;
                this.vars.frozenTimer = 0;
                yield* this.startSound("butter");
              }
              if (this.touching(this.sprites["Fume"].andClones())) {
                this.vars.hp += this.toNumber(this.stage.vars.deltaTime) * -60;
                if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                  this.vars.bright = 50;
                  yield* this.startSound(this.random(8, 10));
                }
              }
              if (this.touching(this.sprites["GloomFume"].andClones())) {
                this.vars.hp += this.toNumber(this.stage.vars.deltaTime) * -150;
                if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                  this.vars.bright = 50;
                  yield* this.startSound(this.random(8, 10));
                }
              }
              if (this.touching(this.sprites["IcePea"].andClones())) {
                this.vars.speedTimer = 0;
                this.vars.hp -= 20;
                if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                  this.vars.bright = 50;
                  yield* this.startSound(this.random(8, 10));
                }
                if (this.toString(this.stage.vars.frozenFirst) === "yes") {
                  yield* this.startSound("frozen");
                }
                this.stage.vars.frozenFirst = "no";
              }
              if (this.touching(this.sprites["WinterMelon"].andClones())) {
                this.vars.speedTimer = 0;
                this.vars.hp -= 30;
                if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                  this.vars.bright = 50;
                }
                if (this.toString(this.stage.vars.frozenFirst) === "yes") {
                  yield* this.startSound("frozen");
                }
                this.stage.vars.frozenFirst = "no";
              }
              if (this.touching(this.sprites["Cob"].andClones())) {
                this.vars.hp = 0;
              }
            } else {
              if (this.toString(this.vars.hasPaper) === "yes") {
                if (this.touching(this.sprites["Star"].andClones())) {
                  this.vars.newsPaperHp -= 25;
                  this.vars.bright = 50;
                  yield* this.startSound(this.random(8, 10));
                }
                if (
                  this.touching(this.sprites["Pea"].andClones()) ||
                  this.touching(this.sprites[undefined].andClones()) ||
                  this.touching(this.sprites["Spike2"].andClones())
                ) {
                  this.vars.newsPaperHp -= 20;
                  this.vars.bright = 50;
                  yield* this.startSound(this.random(8, 10));
                }
                if (this.touching(this.sprites["FirePea"].andClones())) {
                  this.vars.newsPaperHp -= 40;
                  this.vars.bright = 50;
                  yield* this.startSound(this.random(8, 10));
                }
                if (this.touching(this.sprites["Cabbage"].andClones())) {
                  this.vars.hp -= 40;
                  this.vars.bright = 50;
                  yield* this.startSound(this.random(8, 10));
                }
                if (this.touching(this.sprites["Melon"].andClones())) {
                  this.vars.hp -= 30;
                  this.vars.bright = 50;
                }
                if (this.touching(this.sprites["Corn"].andClones())) {
                  this.vars.hp -= 20;
                  this.vars.bright = 50;
                  yield* this.startSound(this.random(8, 10));
                }
                if (this.touching(this.sprites["Butter"].andClones())) {
                  this.vars.hp -= 60;
                  this.vars.bright = 50;
                  this.vars.frozenTimer = 0;
                  yield* this.startSound("butter");
                }
                if (this.touching(this.sprites["Fume"].andClones())) {
                  this.vars.hp +=
                    this.toNumber(this.stage.vars.deltaTime) * -60;
                  this.vars.newsPaperHp +=
                    this.toNumber(this.stage.vars.deltaTime) * -60;
                  if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                    this.vars.bright = 50;
                    yield* this.startSound(this.random(8, 10));
                  }
                }
                if (this.touching(this.sprites["GloomFume"].andClones())) {
                  this.vars.hp +=
                    this.toNumber(this.stage.vars.deltaTime) * -150;
                  this.vars.newsPaperHp +=
                    this.toNumber(this.stage.vars.deltaTime) * -150;
                  if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                    this.vars.bright = 50;
                    yield* this.startSound(this.random(8, 10));
                  }
                }
                if (this.touching(this.sprites["IcePea"].andClones())) {
                  this.vars.newsPaperHp -= 20;
                  if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                    this.vars.bright = 50;
                    yield* this.startSound(this.random(8, 10));
                  }
                  if (this.toString(this.stage.vars.frozenFirst) === "yes") {
                    yield* this.startSound("frozen");
                  }
                  this.stage.vars.frozenFirst = "no";
                }
                if (this.touching(this.sprites["WinterMelon"].andClones())) {
                  this.vars.speedTimer = 0;
                  this.vars.hp -= 30;
                  if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                    this.vars.bright = 50;
                  }
                  if (this.toString(this.stage.vars.frozenFirst) === "yes") {
                    yield* this.startSound("frozen");
                  }
                  this.stage.vars.frozenFirst = "no";
                }
                if (this.touching(this.sprites["Cob"].andClones())) {
                  this.vars.hp = 0;
                }
              } else {
                if (this.toString(this.vars.hasScreen) === "yes") {
                  if (this.touching(this.sprites["Star"].andClones())) {
                    this.vars.screenHp -= 25;
                    this.vars.bright = 50;
                    yield* this.startSound(this.random(8, 10));
                  }
                  if (
                    this.touching(this.sprites["Pea"].andClones()) ||
                    this.touching(this.sprites[undefined].andClones()) ||
                    this.touching(this.sprites["Spike2"].andClones())
                  ) {
                    this.vars.screenHp -= 20;
                    this.vars.bright = 50;
                    yield* this.startSound(this.random(8, 10));
                  }
                  if (this.touching(this.sprites["FirePea"].andClones())) {
                    this.vars.screenHp -= 40;
                    this.vars.bright = 50;
                    yield* this.startSound(this.random(8, 10));
                  }
                  if (this.touching(this.sprites["Cabbage"].andClones())) {
                    this.vars.hp -= 40;
                    this.vars.bright = 50;
                    yield* this.startSound(this.random(8, 10));
                  }
                  if (this.touching(this.sprites["Melon"].andClones())) {
                    this.vars.hp -= 30;
                    this.vars.bright = 50;
                  }
                  if (this.touching(this.sprites["Corn"].andClones())) {
                    this.vars.hp -= 20;
                    this.vars.bright = 50;
                    yield* this.startSound(this.random(8, 10));
                  }
                  if (this.touching(this.sprites["Butter"].andClones())) {
                    this.vars.hp -= 60;
                    this.vars.bright = 50;
                    this.vars.frozenTimer = 0;
                    yield* this.startSound("butter");
                  }
                  if (this.touching(this.sprites["Fume"].andClones())) {
                    this.vars.hp +=
                      this.toNumber(this.stage.vars.deltaTime) * -60;
                    this.vars.newsPaperHp +=
                      this.toNumber(this.stage.vars.deltaTime) * -60;
                    if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                      this.vars.bright = 50;
                      yield* this.startSound(this.random(8, 10));
                    }
                  }
                  if (this.touching(this.sprites["GloomFume"].andClones())) {
                    this.vars.hp +=
                      this.toNumber(this.stage.vars.deltaTime) * -150;
                    this.vars.newsPaperHp +=
                      this.toNumber(this.stage.vars.deltaTime) * -150;
                    if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                      this.vars.bright = 50;
                      yield* this.startSound(this.random(8, 10));
                    }
                  }
                  if (this.touching(this.sprites["IcePea"].andClones())) {
                    this.vars.screenHp -= 20;
                    if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                      this.vars.bright = 50;
                      yield* this.startSound(this.random(8, 10));
                    }
                    if (this.toString(this.stage.vars.frozenFirst) === "yes") {
                      yield* this.startSound("frozen");
                    }
                    this.stage.vars.frozenFirst = "no";
                  }
                  if (this.touching(this.sprites["WinterMelon"].andClones())) {
                    this.vars.speedTimer = 0;
                    this.vars.hp -= 30;
                    if (Math.round(this.toNumber(this.vars.bright)) === 0) {
                      this.vars.bright = 50;
                    }
                    if (this.toString(this.stage.vars.frozenFirst) === "yes") {
                      yield* this.startSound("frozen");
                    }
                    this.stage.vars.frozenFirst = "no";
                  }
                  if (this.touching(this.sprites["Cob"].andClones())) {
                    this.vars.hp = 0;
                  }
                }
              }
            }
            this.costume = "pos";
            this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
            this.direction = 90;
            this.costume = "col norm";
            this.size = 100;
            this.visible = true;
            this.effects.ghost = 100;
            if (this.compare(this.vars.speedTimer, 600) < 0) {
              this.vars.speed = this.toNumber(this.vars.maxSpeed) / 2;
              this.vars.color = 100;
            } else {
              this.vars.speed = this.vars.maxSpeed;
              this.vars.color = 0;
            }
            if (this.compare(this.vars.frozenTimer, 300) < 0) {
              this.vars.speed = 0;
            }
            this.vars.speedTimer +=
              this.toNumber(this.stage.vars.deltaTime) * 30;
            this.vars.frozenTimer +=
              this.toNumber(this.stage.vars.deltaTime) * 30;
          }
        }
      }
      yield;
    }
  }

  *startAsClone3() {
    this.vars.ghost = 0;
    while (true) {
      if (!(this.compare(this.vars.hp, 0) > 0)) {
        this.visible = false;
        if (this.toString(this.vars.type) === "balloon") {
          this.stage.vars.balloonY.splice(this.vars.layer - 1, 1, "no");
        } else {
          this.stage.vars.zombieY.splice(this.vars.layer - 1, 1, "no");
          this.stage.vars.zombieGrid.splice(this.vars.prevGrid - 1, 1, "none");
          this.stage.vars.zombieGrid.splice(this.vars.grid - 1, 1, "none");
          this.stage.vars.zombieGrid.splice(
            this.toNumber(this.vars.grid) - 2,
            1,
            "none"
          );
        }
        this.deleteThisClone();
      } else {
        if (this.toString(this.vars.type) === "balloon") {
          this.stage.vars.balloonY.splice(this.vars.layer - 1, 1, "yes");
        } else {
          this.stage.vars.zombieY.splice(this.vars.layer - 1, 1, "yes");
        }
      }
      yield;
    }
  }

  *getGrid() {
    if (
      !(this.toString(this.vars.type) === "balloon") &&
      this.toString(this.vars.moving) === "yes"
    ) {
      this.vars.i = 1;
      this.vars.gridX = Math.round(this.toNumber(this.vars.x) / 49) * 49;
      for (let i = 0; i < this.stage.vars.gridSpaceX.length; i++) {
        if (
          this.compare(
            this.toNumber(
              this.itemOf(this.stage.vars.gridSpaceX, this.vars.i - 1)
            ) + 80,
            this.toNumber(this.vars.gridX) + 80
          ) === 0 &&
          this.compare(
            this.itemOf(this.stage.vars.gridSpaceY, this.vars.i - 1),
            this.vars.y
          ) === 0
        ) {
          this.vars.grid = this.vars.i;
          this.stage.vars.zombieGrid.splice(this.vars.i - 1, 1, "zomb");
          if (
            this.toString(this.vars.type) === "pole" &&
            this.toString(this.vars.hasPole) === "yes"
          ) {
            this.stage.vars.zombieGrid.splice(this.vars.i - 1, 1, "pole");
          }
          if (this.toNumber(this.vars.speed) === 0) {
            this.stage.vars.zombieGrid.splice(this.vars.i - 1, 1, "none");
          }
          if (!(this.compare(this.vars.prevGrid, this.vars.grid) === 0)) {
            this.stage.vars.zombieGrid.splice(
              this.vars.prevGrid - 1,
              1,
              "none"
            );
          }
          this.vars.prevGrid = this.vars.i;
          return;
        }
        this.vars.i++;
      }
    }
  }

  *grtid() {
    this.stage.vars.zombieY = [];
    this.stage.vars.balloonY = [];
    for (let i = 0; i < 5; i++) {
      this.stage.vars.zombieY.push("no");
      this.stage.vars.balloonY.push("no");
    }
  }

  *hp() {
    this.vars.x = 268;
    this.vars.maxSpeed = -8;
    this.vars.hasPaper = "no";
    this.vars.hasScreen = "no";
    this.vars.digging = "no";
    this.vars.moving = "yes";
    if (this.toString(this.vars.type) === "norm") {
      this.vars.hp = 200;
    } else {
      if (this.toString(this.vars.type) === "cone") {
        this.vars.hp = 570;
      } else {
        if (this.toString(this.vars.type) === "bucket") {
          this.vars.hp = 1300;
        } else {
          if (this.toString(this.vars.type) === "screen") {
            this.vars.hp = 200;
            this.vars.screenHp = 1170;
            this.vars.hasScreen = "yes";
          } else {
            if (this.toString(this.vars.type) === "pole") {
              this.vars.hp = 500;
              this.vars.maxSpeed = -16;
              this.vars.hasPole = "yes";
              this.vars.x = 318;
            } else {
              if (this.toString(this.vars.type) === "foot") {
                this.vars.hp = 1300;
                this.vars.maxSpeed = -16;
                this.vars.x = 288;
              } else {
                if (this.toString(this.vars.type) === "paper") {
                  this.vars.hp = 270;
                  this.vars.newsPaperHp = 150;
                  this.vars.hasPaper = "yes";
                  this.vars.x = 282;
                } else {
                  if (this.toString(this.vars.type) === "balloon") {
                    this.vars.x = 270;
                    this.vars.hp = 100;
                    this.vars.maxSpeed = -8;
                  } else {
                    if (this.toString(this.vars.type) === "digger") {
                      this.vars.x = 270;
                      this.vars.hp = 300;
                      this.vars.maxSpeed = -30;
                      this.vars.digging = "yes";
                      this.vars.moving = "no";
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

  *startAsClone4() {
    while (true) {
      this.vars.wait = this.random(5, 30);
      this.vars.waitSound = 0;
      while (!(this.compare(this.vars.waitSound, this.vars.wait) > 0)) {
        this.vars.waitSound += this.toNumber(this.stage.vars.deltaTime);
        yield;
      }
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield* this.startSound(this.random(2, 7));
      yield;
    }
  }

  *whenIReceivePotatoMineExplode() {
    if (this.compare(this.vars.grid, this.stage.vars.potatoGrid) === 0) {
      this.vars.hp -= 1800;
    }
  }

  *changeLayerUp() {
    this.vars.startY = this.vars.y;
    while (
      !(this.compare(this.vars.y, this.toNumber(this.vars.startY) + 59) > 0)
    ) {
      this.vars.y += this.toNumber(this.stage.vars.deltaTime) * 100;
      this.vars.x += this.toNumber(this.stage.vars.deltaTime) * -16;
      this.effects.ghost = this.toNumber(this.vars.ghost);
      this.effects.brightness = this.toNumber(this.vars.bright);
      this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * (16 * 16);
      yield* this.draw();
      yield;
    }
    this.vars.y = this.toNumber(this.vars.startY) + 60;
    this.effects.ghost = this.toNumber(this.vars.ghost);
    this.effects.brightness = this.toNumber(this.vars.bright);
    yield* this.draw();
  }

  *changeLayerDown() {
    this.vars.startY = this.vars.y;
    while (
      !(this.compare(this.vars.y, this.toNumber(this.vars.startY) - 59) < 0)
    ) {
      this.vars.y += this.toNumber(this.stage.vars.deltaTime) * -100;
      this.vars.x += this.toNumber(this.stage.vars.deltaTime) * -16;
      this.effects.ghost = this.toNumber(this.vars.ghost);
      this.effects.brightness = this.toNumber(this.vars.bright);
      this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * (16 * 16);
      yield* this.draw();
      yield;
    }
    this.vars.y = this.toNumber(this.vars.startY) - 60;
    this.effects.ghost = this.toNumber(this.vars.ghost);
    this.effects.brightness = this.toNumber(this.vars.bright);
    yield* this.draw();
  }

  *whenIReceiveStart() {
    yield* this.grtid();
    this.vars.random = 0.6;
    this.vars.timer = 30;
    this.vars.changeTimer = -4;
    this.vars.repeat = 10;
    if (this.toString(this.stage.vars.gamemode) === "hard") {
      this.vars.changeTimer = -5;
    }
    if (this.toString(this.stage.vars.gamemode) === "endless") {
      this.vars.changeTimer = -5;
    }
    this.vars.startTimer = 25;
    if (this.toString(this.stage.vars.gamemode) === "bowling") {
      this.vars.timed = 0;
      while (!(this.compare(this.vars.timed, 2) > 0)) {
        this.vars.timed += this.toNumber(this.stage.vars.deltaTime);
        yield;
      }
      this.vars.timer = 8;
      this.vars.changeTimer = -1;
      for (let i = 0; i < 50; i++) {
        yield* this.create();
        this.createClone();
        this.vars.timed = 0;
        while (!(this.compare(this.vars.timed, this.vars.timer) > 0)) {
          this.vars.timed += this.toNumber(this.stage.vars.deltaTime);
          yield;
        }
        this.vars.timer += this.toNumber(this.vars.changeTimer);
        this.vars.random += 0.6;
        this.vars.changeTimer += 0.6;
        if (this.compare(this.vars.changeTimer, -0.4) > 0) {
          this.vars.changeTimer = -0.4;
        }
        if (this.compare(this.vars.timer, 3) < 0) {
          this.vars.timer = 3;
        }
        if (
          this.compare(
            this.vars.random,
            this.stage.vars.zombieProgression.length -
              (this.stage.vars.zombieProgression.length /
                this.toNumber(this.vars.waves)) *
                (this.toNumber(this.vars.waves) -
                  this.toNumber(this.vars.waveNumber))
          ) > 0
        ) {
          this.vars.random =
            this.stage.vars.zombieProgression.length -
            (this.stage.vars.zombieProgression.length /
              this.toNumber(this.vars.waves)) *
              (this.toNumber(this.vars.waves) -
                this.toNumber(this.vars.waveNumber));
        }
        yield;
      }
      this.vars.timed = 0;
      while (!(this.compare(this.vars.timed, 5) > 0)) {
        this.vars.timed += this.toNumber(this.stage.vars.deltaTime);
        yield;
      }
      for (let i = 0; i < 10; i++) {
        while (
          !(
            this.indexInArray(this.stage.vars.zombieGrid, "zomb") + 1 === 0 &&
            this.indexInArray(this.stage.vars.balloonY, "yes") + 1 === 0 &&
            this.indexInArray(this.stage.vars.zombieY, "yes") + 1 === 0
          )
        ) {
          yield;
        }
        yield;
      }
      this.broadcast("won");
      return;
    } else {
      if (this.toString(this.stage.vars.gamemode) === "quick") {
        this.vars.timed = 0;
        while (!(this.compare(this.vars.timed, 30) > 0)) {
          this.vars.timed += this.toNumber(this.stage.vars.deltaTime);
          yield;
        }
        this.stage.vars.canPlant = "no";
        yield* this.startSound("awooga");
        this.vars.timer = 0.25;
        for (let i = 0; i < 250; i++) {
          yield* this.create();
          this.createClone();
          this.vars.timed = 0;
          while (!(this.compare(this.vars.timed, this.vars.timer) > 0)) {
            this.vars.timed += this.toNumber(this.stage.vars.deltaTime);
            yield;
          }
          this.vars.timer += this.toNumber(this.vars.changeTimer);
          this.vars.random += 0.2;
          this.vars.changeTimer += 0.5;
          if (this.compare(this.vars.changeTimer, -0.5) > 0) {
            this.vars.changeTimer = -0.5;
          }
          if (this.compare(this.vars.timer, this.vars.miniumTimer) < 0) {
            this.vars.timer = this.vars.miniumTimer;
          }
          if (
            this.compare(
              this.vars.random,
              this.stage.vars.zombieProgression.length -
                (this.stage.vars.zombieProgression.length /
                  this.toNumber(this.vars.waves)) *
                  (this.toNumber(this.vars.waves) -
                    this.toNumber(this.vars.waveNumber))
            ) > 0
          ) {
            this.vars.random =
              this.stage.vars.zombieProgression.length -
              (this.stage.vars.zombieProgression.length /
                this.toNumber(this.vars.waves)) *
                (this.toNumber(this.vars.waves) -
                  this.toNumber(this.vars.waveNumber));
          }
          yield;
        }
        this.vars.timer += 5;
        this.vars.changeTimer--;
        this.vars.repeat += 45;
        this.vars.startTimer -= 4;
        if (this.compare(this.vars.startTimer, 5) < 0) {
          this.vars.startTimer = 5;
        }
        this.vars.timed = 0;
        while (!(this.compare(this.vars.timed, 5) > 0)) {
          this.vars.timed += this.toNumber(this.stage.vars.deltaTime);
          yield;
        }
        for (let i = 0; i < 10; i++) {
          while (
            !(
              this.indexInArray(this.stage.vars.zombieGrid, "zomb") + 1 === 0 &&
              this.indexInArray(this.stage.vars.balloonY, "yes") + 1 === 0 &&
              this.indexInArray(this.stage.vars.zombieY, "yes") + 1 === 0
            )
          ) {
            yield;
          }
          yield;
        }
        this.broadcast("won");
        return;
      } else {
        if (this.toString(this.stage.vars.gamemode) === "endless") {
          while (true) {
            this.vars.timed = 0;
            while (!(this.compare(this.vars.timed, this.vars.startTimer) > 0)) {
              this.vars.timed += this.toNumber(this.stage.vars.deltaTime);
              yield;
            }
            yield* this.startSound("awooga");
            for (let i = 0; i < this.toNumber(this.vars.repeat); i++) {
              yield* this.create();
              this.createClone();
              this.vars.timed = 0;
              while (!(this.compare(this.vars.timed, this.vars.timer) > 0)) {
                this.vars.timed += this.toNumber(this.stage.vars.deltaTime);
                yield;
              }
              this.vars.timer += this.toNumber(this.vars.changeTimer);
              this.vars.random += 0.2;
              this.vars.changeTimer += 0.5;
              if (this.compare(this.vars.changeTimer, -0.5) > 0) {
                this.vars.changeTimer = -0.5;
              }
              if (this.compare(this.vars.timer, this.vars.miniumTimer) < 0) {
                this.vars.timer = this.vars.miniumTimer;
              }
              if (
                this.compare(
                  this.vars.random,
                  this.stage.vars.zombieProgression.length -
                    (this.stage.vars.zombieProgression.length /
                      this.toNumber(this.vars.waves)) *
                      (this.toNumber(this.vars.waves) -
                        this.toNumber(this.vars.waveNumber))
                ) > 0
              ) {
                this.vars.random =
                  this.stage.vars.zombieProgression.length -
                  (this.stage.vars.zombieProgression.length /
                    this.toNumber(this.vars.waves)) *
                    (this.toNumber(this.vars.waves) -
                      this.toNumber(this.vars.waveNumber));
              }
              yield;
            }
            this.vars.timer += 5;
            this.vars.changeTimer--;
            this.vars.repeat += 45;
            this.vars.startTimer -= 4;
            if (this.compare(this.vars.startTimer, 5) < 0) {
              this.vars.startTimer = 5;
            }
            this.vars.timed = 0;
            while (!(this.compare(this.vars.timed, 5) > 0)) {
              this.vars.timed += this.toNumber(this.stage.vars.deltaTime);
              yield;
            }
            for (let i = 0; i < 10; i++) {
              while (
                !(
                  this.indexInArray(this.stage.vars.zombieGrid, "zomb") + 1 ===
                    0 &&
                  this.indexInArray(this.stage.vars.balloonY, "yes") + 1 ===
                    0 &&
                  this.indexInArray(this.stage.vars.zombieY, "yes") + 1 === 0
                )
              ) {
                yield;
              }
              yield;
            }
            this.vars.waveNumber++;
            if (this.compare(this.vars.waveNumber, this.vars.waves) > 0) {
              this.vars.waveNumber = this.vars.waves;
            }
            this.stage.vars.continueWaves = "no";
            this.broadcast("more zombies");
            while (!(this.toString(this.stage.vars.continueWaves) === "yes")) {
              yield;
            }
            yield;
          }
        } else {
          for (let i = 0; i < this.toNumber(this.vars.waves); i++) {
            this.vars.timed = 0;
            while (!(this.compare(this.vars.timed, this.vars.startTimer) > 0)) {
              this.vars.timed += this.toNumber(this.stage.vars.deltaTime);
              yield;
            }
            yield* this.startSound("awooga");
            for (let i = 0; i < this.toNumber(this.vars.repeat); i++) {
              yield* this.create();
              this.createClone();
              this.vars.timed = 0;
              while (!(this.compare(this.vars.timed, this.vars.timer) > 0)) {
                this.vars.timed += this.toNumber(this.stage.vars.deltaTime);
                yield;
              }
              this.vars.timer += this.toNumber(this.vars.changeTimer);
              this.vars.random += 0.2;
              this.vars.changeTimer += 0.5;
              if (this.compare(this.vars.changeTimer, -0.5) > 0) {
                this.vars.changeTimer = -0.5;
              }
              if (this.compare(this.vars.timer, this.vars.miniumTimer) < 0) {
                this.vars.timer = this.vars.miniumTimer;
              }
              if (
                this.compare(
                  this.vars.random,
                  this.stage.vars.zombieProgression.length -
                    (this.stage.vars.zombieProgression.length /
                      this.toNumber(this.vars.waves)) *
                      (this.toNumber(this.vars.waves) -
                        this.toNumber(this.vars.waveNumber))
                ) > 0
              ) {
                this.vars.random =
                  this.stage.vars.zombieProgression.length -
                  (this.stage.vars.zombieProgression.length /
                    this.toNumber(this.vars.waves)) *
                    (this.toNumber(this.vars.waves) -
                      this.toNumber(this.vars.waveNumber));
              }
              yield;
            }
            this.vars.timer += 5;
            this.vars.changeTimer--;
            this.vars.repeat += 30;
            if (this.toString(this.stage.vars.gamemode) === "hard") {
              this.vars.repeat += 15;
            }
            this.vars.startTimer -= 5;
            if (this.compare(this.vars.startTimer, 10) < 0) {
              this.vars.startTimer = 10;
            }
            this.vars.timed = 0;
            while (!(this.compare(this.vars.timed, 5) > 0)) {
              this.vars.timed += this.toNumber(this.stage.vars.deltaTime);
              yield;
            }
            for (let i = 0; i < 10; i++) {
              while (
                !(
                  this.indexInArray(this.stage.vars.zombieGrid, "zomb") + 1 ===
                    0 &&
                  this.indexInArray(this.stage.vars.balloonY, "yes") + 1 ===
                    0 &&
                  this.indexInArray(this.stage.vars.zombieY, "yes") + 1 === 0
                )
              ) {
                yield;
              }
              yield;
            }
            if (this.compare(this.vars.waveNumber, this.vars.waves) === 0) {
              this.broadcast("won");
              return;
            } else {
              this.vars.waveNumber++;
              this.stage.vars.continueWaves = "no";
              this.broadcast("more zombies");
              while (
                !(this.toString(this.stage.vars.continueWaves) === "yes")
              ) {
                yield;
              }
            }
            yield;
          }
        }
      }
    }
  }

  *startAsClone5() {
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
    while (true) {
      if (this.compare(this.vars.hp, 0) > 0) {
        this.costume = "pos";
        this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
        if (this.toString(this.vars.type) === "digger") {
          this.x += 10;
        }
        this.direction = 90;
        this.costume = "col norm";
        this.size = 100;
        this.visible = true;
        this.effects.ghost = 100;
        if (this.touching(this.sprites["Lawnmower"].andClones())) {
          for (let i = 0; i < 1; i++) {
            null;
            yield;
          }
          this.vars.hp = 0;
        }
        if (this.touching(this.sprites["Cob"].andClones())) {
          this.vars.hp = 0;
        }
        if (this.toString(this.vars.type) === "balloon") {
          this.visible = false;
        }
        if (this.toString(this.vars.digging) === "yes") {
          this.visible = false;
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

  *whenIReceiveLoadGame() {
    for (let i = 0; i < 98; i++) {
      this.vars.type = "norm";
      this.createClone();
      this.broadcast("delete");
      this.stage.vars.loadProgress += 0.5;
      yield;
    }
    while (
      !(this.compare(this.toNumber(this.stage.vars.deltaTime) * 45, 2) < 0)
    ) {
      null;
      yield;
    }
    this.stage.vars.loadProgress++;
  }

  *whenIReceiveDelete() {
    this.deleteThisClone();
  }

  *whenIReceiveFreezeZombies() {
    this.vars.frozenTimer = 0;
  }

  *whenIReceiveStart2() {
    while (true) {
      this.stage.vars.frozenFirst = "yes";
      yield* this.wait(10);
      yield;
    }
  }

  *whenIReceiveJalapeno() {
    if (this.compare(this.vars.layer, this.stage.vars.jalapenoLayer) === 0) {
      this.vars.hp -= 1800;
    }
  }

  *polevault() {
    this.vars.startY = this.vars.y;
    while (
      !(this.compare(this.vars.y, this.toNumber(this.vars.startY) + 59) > 0)
    ) {
      this.vars.y += this.toNumber(this.stage.vars.deltaTime) * 100;
      this.vars.x += this.toNumber(this.stage.vars.deltaTime) * -45;
      this.effects.ghost = this.toNumber(this.vars.ghost);
      this.effects.brightness = this.toNumber(this.vars.bright);
      this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * (45 * 16);
      yield* this.draw();
      yield;
    }
    while (
      !(this.compare(this.vars.y, this.toNumber(this.vars.startY) + 1) < 0)
    ) {
      this.vars.y += this.toNumber(this.stage.vars.deltaTime) * -100;
      this.vars.x += this.toNumber(this.stage.vars.deltaTime) * -45;
      this.effects.ghost = this.toNumber(this.vars.ghost);
      this.effects.brightness = this.toNumber(this.vars.bright);
      this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * (45 * 16);
      yield* this.draw();
      yield;
    }
    this.vars.y = this.vars.startY;
    this.effects.ghost = this.toNumber(this.vars.ghost);
    this.effects.brightness = this.toNumber(this.vars.bright);
    yield* this.draw();
  }

  *create() {
    this.vars.type = this.itemOf(
      this.stage.vars.zombieProgression,
      this.random(1, Math.round(this.toNumber(this.vars.random))) - 1
    );
    while (!!(this.toString(this.vars.type) === "none")) {
      this.vars.type = this.itemOf(
        this.stage.vars.zombieProgression,
        this.random(1, Math.round(this.toNumber(this.vars.random))) - 1
      );
    }
  }

  *whenIReceiveSeedSelect() {
    if (!(this.toString(this.stage.vars.gamemode) === "bowling")) {
      this.vars.sin = 0;
      this.vars.hasPaper = "yes";
      this.vars.hasPole = "yes";
      this.vars.newsPaperHp = 5000;
      this.vars.screenHp = 5000;
      this.vars.hp = 5000;
      this.stage.vars.stopDrawingZombies = "no";
      while (true) {
        yield* this.drawCurrentZombies();
        this.vars.sin += this.toNumber(this.stage.vars.deltaTime) * 100;
        if (this.toString(this.stage.vars.stopDrawingZombies) === "yes") {
          return;
        }
        yield;
      }
    }
  }

  *drawCurrentZombies() {
    this.vars.i = 1;
    this.vars.x = 120;
    this.vars.y = 75;
    for (
      let i = 0;
      i <
      this.stage.vars.zombieProgression.length -
        (this.stage.vars.zombieProgression.length /
          this.toNumber(this.vars.waves)) *
          (this.toNumber(this.vars.waves) -
            this.toNumber(this.vars.waveNumber));
      i++
    ) {
      if (
        !(
          this.indexInArray(
            this.stage.vars.zombieProgression,
            this.itemOf(this.stage.vars.zombies, this.vars.i - 1)
          ) +
            1 ===
          0
        )
      ) {
        this.vars.hasScreen = "no";
        this.vars.type = this.itemOf(this.stage.vars.zombies, this.vars.i - 1);
        if (this.toString(this.vars.type) === "screen") {
          this.vars.hasScreen = "yes";
        }
        this.warp(this.draw)();
      }
      this.vars.i++;
      this.vars.x += 40;
      this.vars.y -= 20;
      if (this.compare(this.vars.x, 195) > 0) {
        this.vars.x -= 90;
        this.vars.y -= 10;
      }
    }
  }

  *whenIReceiveBlover() {
    if (this.toString(this.vars.type) === "balloon") {
      while (!(this.compare(this.vars.x, 270) > 0)) {
        this.vars.x += this.toNumber(this.stage.vars.deltaTime) * 300;
        yield;
      }
      this.stage.vars.balloonY.splice(this.vars.layer - 1, 1, "no");
      this.deleteThisClone();
    }
  }

  *whenIReceiveIntoGame() {
    this.vars.waveNumber = 1;
    if (this.toString(this.stage.vars.gamemode) === "endless") {
      this.vars.waves = 16;
      this.stage.vars.actualWaveNumber = 1;
      this.vars.miniumTimer = 0.25;
    } else {
      if (this.toString(this.stage.vars.gamemode) === "easy") {
        this.vars.waves = 2;
        this.vars.miniumTimer = 1.5;
      } else {
        if (this.toString(this.stage.vars.gamemode) === "medium") {
          this.vars.waves = 4;
          this.vars.miniumTimer = 1;
        } else {
          if (this.toString(this.stage.vars.gamemode) === "hard") {
            this.vars.waves = 6;
            this.vars.miniumTimer = 0.5;
          } else {
            if (this.toString(this.stage.vars.gamemode) === "quick") {
              this.vars.waves = 1;
              this.vars.miniumTimer = 0.25;
            } else {
              if (this.toString(this.stage.vars.gamemode) === "bowling") {
                this.vars.waves = 1;
              } else {
                null;
              }
            }
          }
        }
      }
    }
    this.stage.vars.zombieProgression = [];
    if (this.toString(this.stage.vars.gamemode) === "easy") {
      this.stage.vars.zombieProgression.push("norm");
      this.stage.vars.zombieProgression.push("cone");
      this.stage.vars.zombieProgression.push("none");
      this.stage.vars.zombieProgression.push("bucket");
      this.stage.vars.zombieProgression.push("cone");
      this.stage.vars.zombieProgression.push("bucket");
      this.stage.vars.zombieProgression.push("cone");
      this.stage.vars.zombieProgression.push("bucket");
    } else {
      if (this.toString(this.stage.vars.gamemode) === "medium") {
        this.stage.vars.zombieProgression.push("norm");
        this.stage.vars.zombieProgression.push("cone");
        this.stage.vars.zombieProgression.push("bucket");
        this.stage.vars.zombieProgression.push("screen");
        this.stage.vars.zombieProgression.push("pole");
        this.stage.vars.zombieProgression.push("paper");
        this.stage.vars.zombieProgression.push("bucket");
        this.stage.vars.zombieProgression.push("screen");
        this.stage.vars.zombieProgression.push("pole");
        this.stage.vars.zombieProgression.push("paper");
        this.stage.vars.zombieProgression.push("bucket");
        this.stage.vars.zombieProgression.push("screen");
        this.stage.vars.zombieProgression.push("pole");
        this.stage.vars.zombieProgression.push("paper");
      } else {
        if (this.toString(this.stage.vars.gamemode) === "hard") {
          this.stage.vars.zombieProgression.push("norm");
          this.stage.vars.zombieProgression.push("cone");
          this.stage.vars.zombieProgression.push("bucket");
          this.stage.vars.zombieProgression.push("screen");
          this.stage.vars.zombieProgression.push("pole");
          this.stage.vars.zombieProgression.push("paper");
          this.stage.vars.zombieProgression.push("balloon");
          this.stage.vars.zombieProgression.push("foot");
          this.stage.vars.zombieProgression.push("digger");
          this.stage.vars.zombieProgression.push("paper");
          this.stage.vars.zombieProgression.push("balloon");
          this.stage.vars.zombieProgression.push("digger");
          this.stage.vars.zombieProgression.push("foot");
          this.stage.vars.zombieProgression.push("bucket");
          this.stage.vars.zombieProgression.push("paper");
          this.stage.vars.zombieProgression.push("digger");
          this.stage.vars.zombieProgression.push("foot");
          this.stage.vars.zombieProgression.push("balloon");
          this.stage.vars.zombieProgression.push("foot");
          this.stage.vars.zombieProgression.push("balloon");
          this.stage.vars.zombieProgression.push("foot");
          this.stage.vars.zombieProgression.push("digger");
          this.stage.vars.zombieProgression.push("foot");
          this.stage.vars.zombieProgression.push("foot");
        } else {
          if (this.toString(this.stage.vars.gamemode) === "endless") {
            this.stage.vars.zombieProgression.push("norm");
            this.stage.vars.zombieProgression.push("cone");
            this.stage.vars.zombieProgression.push("bucket");
            this.stage.vars.zombieProgression.push("screen");
            this.stage.vars.zombieProgression.push("pole");
            this.stage.vars.zombieProgression.push("paper");
            this.stage.vars.zombieProgression.push("balloon");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("paper");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("bucket");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("paper");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("balloon");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("balloon");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("bucket");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("balloon");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("balloon");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("bucket");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("balloon");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("balloon");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("balloon");
            this.stage.vars.zombieProgression.push("balloon");
            this.stage.vars.zombieProgression.push("balloon");
            this.stage.vars.zombieProgression.push("balloon");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("digger");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("foot");
            this.stage.vars.zombieProgression.push("foot");
          } else {
            if (this.toString(this.stage.vars.gamemode) === "quick") {
              this.stage.vars.zombieProgression.push("norm");
              this.stage.vars.zombieProgression.push("cone");
              this.stage.vars.zombieProgression.push("bucket");
              this.stage.vars.zombieProgression.push("screen");
              this.stage.vars.zombieProgression.push("paper");
              this.stage.vars.zombieProgression.push("pole");
              this.stage.vars.zombieProgression.push("foot");
              this.stage.vars.zombieProgression.push("balloon");
              this.stage.vars.zombieProgression.push("digger");
            } else {
              if (this.toString(this.stage.vars.gamemode) === "bowling") {
                this.stage.vars.zombieProgression.push("norm");
                this.stage.vars.zombieProgression.push("cone");
                this.stage.vars.zombieProgression.push("bucket");
              } else {
                null;
              }
            }
          }
        }
      }
    }
  }

  *whenIReceiveStartSoft() {
    this.stage.vars.stopDrawingZombies = "yes";
  }

  *whenIReceiveStopGame() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *startAsClone6() {
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.zombies = [];
    this.stage.vars.zombies.push("norm");
    this.stage.vars.zombies.push("cone");
    this.stage.vars.zombies.push("bucket");
    this.stage.vars.zombies.push("screen");
    this.stage.vars.zombies.push("pole");
    this.stage.vars.zombies.push("paper");
    this.stage.vars.zombies.push("balloon");
    this.stage.vars.zombies.push("foot");
    this.stage.vars.zombies.push("digger");
  }

  *startAsClone7() {
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

  *startAsClone8() {
    this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
    while (true) {
      this.audioEffects.volume = this.toNumber(this.stage.vars.volume);
      yield;
    }
  }

  *whenIReceiveBowl() {
    if (this.touching(this.sprites["Bowl"].andClones())) {
      this.vars.hp -= 450;
    }
  }

  *whenIReceiveBowlExplo() {
    if (this.touching(this.sprites["Explo"].andClones())) {
      this.vars.hp -= 1800;
    }
  }
}
