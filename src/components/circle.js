var Shape = require("./Shape");

class Circle extends Shape {
  calculateArea() {
    console.log("calculateArea Method of circle class");
  }
}
module.exports = Circle;
