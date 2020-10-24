export default class Shape {
  color;

  constructor() {
    this.color = "red";
  }

  drawShape() {
    console.log("drawShape Method");
  }

  calculateArea() {
    console.log("calculateArea Method of shape class");
  }
}
