const {
  pow
} = require('sp-math')
/**
 * 
 * @param {Number} cd 两相流泄漏系数，取 0. 8
 * @param {Number} area 裂口面积
 * @param {Number} p0 两相混合物的压力 1． 0 × 10^6 Pa
 * @param {Number} p1 临界压力 0. 5 × 10^6 Pa;
 * @param {Number} p2 两相混合物的平均密度
 */
const calcSpeed = (cd = 0.8, area = 0, p0 = 1e6, p1 = 0.5e6, p2 = 0) => {
  return cd * area * pow(2 * p2 * (p0 - p1), 0.5)
}
console.log(calcSpeed(0.8, 5.589e-5, 1e6, 0.5e6, 15.55))
module.exports.default = module.exports = calcSpeed