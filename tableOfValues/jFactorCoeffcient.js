export function jFactorCoefficient(reynoldNum, tubeLayoutAngle) {

  if (tubeLayoutAngle == 30) {
    if (Math.pow(10, 4) < reynoldNum && reynoldNum <= Math.pow(10, 5)) {
      return {
        a1: 0.321,
        a2: -0.388,
        a3: 1.45,
        a4: 0.519,
        a: 1.45 / (1 + 0.14 * Math.pow(reynoldNum, 0.519)),

        b1: 0.372,
        b2: -0.123,
        b3: 7,
        b4: 0.5
      };
    }
    if (Math.pow(10, 3) < reynoldNum && reynoldNum <= Math.pow(10, 4)) {
      return {
        a1: 0.321,
        a2: -0.388,
        a3: 1.45,
        a4: 0.519,
        a: 1.45 / (1 + 0.14 * Math.pow(reynoldNum, 0.519)),

        b1: 0.486,
        b2: -0.152,
        b3: 7,
        b4: 0.5
      };
    }
    if (Math.pow(10, 2) < reynoldNum && reynoldNum <= Math.pow(10, 3)) {
      return {
        a1: 0.593,
        a2: -0.477,
        a3: 1.45,
        a4: 0.519,
        a: 1.45 / (1 + 0.14 * Math.pow(reynoldNum, 0.519)),

        b1: 4.57,
        b2: -0.476,
        b3: 7,
        b4: 0.5
      };
    }
    if (10 < reynoldNum && reynoldNum <= Math.pow(10, 2)) {
      return {
        a1: 1.36,
        a2: -0.657,
        a3: 1.45,
        a4: 0.519,
        a: 1.45 / (1 + 0.14 * Math.pow(reynoldNum, 0.519)),

        b1: 45.1,
        b2: -0.973,
        b3: 7,
        b4: 0.5
      };
    }
    if (reynoldNum <= 10) {
      return {
        a1: 1.4,
        a2: -0.667,
        a3: 1.45,
        a4: 0.519,
        a: 1.45 / (1 + 0.14 * Math.pow(reynoldNum, 0.519)),

        b1: 48,
        b2: -1,
        b3: 7,
        b4: 0.5
      };
    }
  }

  if (tubeLayoutAngle == 60) {
    if (Math.pow(10, 4) < reynoldNum && reynoldNum <= Math.pow(10, 5)) {
      return {

        a1: 0.37,
        a2: -0.396,
        a3: 1.93,
        a4: 0.5,
        a: 1.93 / (1 + 0.14 * Math.pow(reynoldNum, 0.5)),

        b1: 0.303,
        b2: -0.126,
        b3: 6.59,
        b4: 0.52
      };
    }
    if (Math.pow(10, 3) < reynoldNum && reynoldNum <= Math.pow(10, 4)) {
      return {
        a1: 0.37,
        a2: -0.396,
        a3: 1.93,
        a4: 0.5,
        a: 1.93 / (1 + 0.14 * Math.pow(reynoldNum, 0.5)),

        b1: 0.333,
        b2: -0.136,
        b3: 6.59,
        b4: 0.52
      };
    }
    if (Math.pow(10, 2) < reynoldNum && reynoldNum <= Math.pow(10, 3)) {
      return {
        a1: 0.73,
        a2: -0.5,
        a3: 1.93,
        a4: 0.5,
        a: 1.93 / (1 + 0.14 * Math.pow(reynoldNum, 0.5)),

        b1: 3.5,
        b2: -0.476,
        b3: 6.59,
        b4: 0.52
      };
    }
    if (10 < reynoldNum && reynoldNum <= Math.pow(10, 2)) {
      return {
        a1: 0.498,
        a2: -0.656,
        a3: 1.93,
        a4: 0.5,
        a: 1.93 / (1 + 0.14 * Math.pow(reynoldNum, 0.5)),

        b1: 26.2,
        b2: -0.913,
        b3: 6.59,
        b4: 0.52
      };
    }
    if (reynoldNum <= 10) {
      return {
        a1: 1.55,
        a2: -0.667,
        a3: 1.93,
        a4: 0.5,
        a: 1.93 / (1 + 0.14 * Math.pow(reynoldNum, 0.5)),

        b1: 32,
        b2: -1,
        b3: 6.59,
        b4: 0.52
      };
    }
  }
  if (tubeLayoutAngle == 90) {
    if (Math.pow(10, 4) < reynoldNum && reynoldNum <= Math.pow(10, 5)) {
      return {
        a1: 0.37,
        a2: -0.395,
        a3: 1.187,
        a4: 0.37,
        a: 1.187 / (1 + 0.14 * Math.pow(reynoldNum, 0.37)),

        b1: 0.391,
        b2: -0.148,
        b3: 6.3,
        b4: 0.378
      };
    }
    if (Math.pow(10, 3) < reynoldNum && reynoldNum <= Math.pow(10, 4)) {
      return {
        a1: 0.107,
        a2: -0.266,
        a3: 1.187,
        a4: 0.37,
        a: 1.187 / (1 + 0.14 * Math.pow(reynoldNum, 0.37)),

        b1: 0.0815,
        b2: 0.022,
        b3: 6.3,
        b4: 0.378
      };
    }
    if (Math.pow(10, 2) < reynoldNum && reynoldNum <= Math.pow(10, 3)) {
      return {
        a1: 0.408,
        a2: -0.46,
        a3: 1.187,
        a4: 0.37,
        a: 1.187 / (1 + 0.14 * Math.pow(reynoldNum, 0.37)),

        b1: 6.09,
        b2: -0.602,
        b3: 6.3,
        b4: 0.378
      };
    }
    if (10 < reynoldNum && reynoldNum <= Math.pow(10, 2)) {
      return {
        a1: 0.9,
        a2: -0.631,
        a3: 1.187,
        a4: 0.37,
        a: 1.187 / (1 + 0.14 * Math.pow(reynoldNum, 0.37)),

        b1: 32.1,
        b2: -0.963,
        b3: 6.3,
        b4: 0.378
      };
    }
    if (reynoldNum <= 10) {
      return {
        a1: 0.97,
        a2: -0.667,
        a3: 1.187,
        a4: 0.37,
        a: 1.187 / (1 + 0.14 * Math.pow(reynoldNum, 0.37)),

        b1: 35,
        b2: -1,
        b3: 6.3,
        b4: 0.378
      };
    }
  }
}
