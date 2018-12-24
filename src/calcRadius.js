/**
 * 氯气扩散半径估算与应急处置.工业安全与环保 2006年第32卷第8期
 * @param {*} v 蒸汽体积
 * @param {*} c 危险质量分数值：致死9e-2,重伤1.8e-5,轻伤3.5e-7
 */
const calcRadius = (v = 0, c = 0) => {
  return Math.pow((v / c) / (2 * Math.PI / 3), 1 / 3);
}
/**
 * @param {*} w 氯液质量
 * @param {*} c 液体比热容
 * @param {*} t 室温
 * @param {*} t0 液体沸点
 * @param {*} m 相对分子质量
 * @param {*} q 介质汽化热
 */
const calcV = (w = 0, c = 0, t = 0, t0 = 0, m = 0, q = 0) => {
  return (22.4 * w * c * (t - t0) / (m * q)) * (273 + t0) / 273;
}

/**
 * 
 * @param {*} m 质量
 * @param {*} c 危险质量分数值：致死9e-2,重伤1.8e-5,轻伤3.5e-7
 * @param {*} t 室温
 */
const calcTestCl = (m, t) => {
  let r0 = calcRadius(calcV(m, 0.96, t, -34, 71, 289), 9e-4);
  let r1 = calcRadius(calcV(m, 0.96, t, -34, 71, 289), 1.8e-5);
  let r2 = calcRadius(calcV(m, 0.96, t, -34, 71, 289), 3.5e-7);
  return {
    r0,
    r1,
    r2
  }
}

module.exports.default = module.exports = calcTestCl