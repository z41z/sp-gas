/**
 * 用于连续泄漏型
 */
const {
  pow
} = require('sp-math')

/**
 * 
 * @param {Number} radius 开口半径
 */
const calcArea = (radius = 0) => {
  return Math.PI * pow(radius, 2)
}

/**
 * Q0
 * @param {Number} cd 两相流泄漏系数，取 0. 8
 * @param {Number} area 裂口面积
 * @param {Number} p0 两相混合物的压力 1． 0 × 10^6 Pa
 * @param {Number} p1 临界压力 0. 5 × 10^6 Pa;
 * @param {Number} p2 两相混合物的平均密度
 * @example calcSpeed(area = 0, p2 = 0)
 */
const calcSpeed = (area = 0, p2 = 0, p0 = 1e6, p1 = 0.5e6, cd = 0.8) => {
  return cd * area * pow(2 * p2 * (p0 - p1), 0.5)
}

/**
 * p2
 * @param {*} p1 气体在25摄氏度,标准大气压下密度
 * @param {*} p2 气体液化密度
 * @param {*} f 
 */
const calcAvgDensity = (p1, p2, f) => {
  return 1 / (f / p1 + ((1 - f) / p2));
}

/**
 * f
 * @param {} cp 两相混合物比定压热容
 * @param {*} t 两相混合物温度
 * @param {*} t0 液体沸点温度
 * @param {*} h  液体汽化热
 */
const f = (cp, t, t0, h) => {
  return (cp * (transCtoK(t) - transCtoK(t0)) / h)
}

/**
 * 摄氏度转开耳文
 * @param {Number} c 摄氏度
 */
const transCtoK = (c) => {
  return c + 273.15
}

/**
 * 摄氏度转开耳文
 * @param {Number} c 摄氏度
 */
const transKtoC = (k) => {
  return k - 273.15
}
/**
 * 
 * @param {*} u 风速
 * @param {*} c 临界浓度
 * @param {*} r 开口半径
 * @param {*} p1 气体在25摄氏度,标准大气压下密度
 * @param {*} p2 气体液化密度
 * @param {*} cp 两相混合物比定压热容
 * @param {*} t 两相混合物温度
 * @param {*} t0 液体沸点温度
 * @param {*} h 液体汽化热
 */
const calcGasRadius = (u, c, r, p1, p2, cp, t, t0, h) => {
  let area = calcArea(r);
  let f0 = f(cp, transCtoK(t), transCtoK(t0), h);
  let avg = calcAvgDensity(p1, p2, f0);
  let q = calcSpeed(area, avg) / 2;
  const pow0 = 1 / 1.878805;
  return pow((q * 1e6) / (c * u * Math.PI * 0.03584799274), pow0)
}

let result = calcGasRadius(1.6, 180, .1, 3.17, 1393, 0.957, transKtoC(298), transKtoC(239), 280)
console.log(result)

module.exports.default = module.exports = calcGasRadius