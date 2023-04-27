const { Shapes } = require('./shapes');

// create base SVG file here, then append what user decides in the middle of <svg> tags
function createSVG(color, shape) {
    let svg = new Shapes(color, shape);
  
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${svg.render()}`
  }
  
module.exports = { createSVG };