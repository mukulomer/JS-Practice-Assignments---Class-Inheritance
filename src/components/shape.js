// declare class
class Shape {
  constructor(color) {
    this.color = "red";
  }
  drawShape() {
    console.log("draw somthing");
  }
  calculateArea() {
    console.log("calculate area of shape");
  }
}
// export class using module.exports
module.exports = Shape;
