var Shape = require("./shape");
// declare class
class Circle extends Shape {
  calculateArea() {
    console.log("calculate area of circle");
  }
}
module.exports = Circle;
