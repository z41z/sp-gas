const {pow} = require('sp-math')
/**
 * 
 * @param {Number} radius 
 */
const calcArea = (radius = 0)=>{
  return Math.PI*pow(radius,2)
}

module.exports.default = module.exports = calcArea