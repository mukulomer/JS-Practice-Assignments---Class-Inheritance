import React from "react";
class Shape {
  constructor(color) {
    super(color);
    this.color = "red";
  }

  drawShape() {
    console.log("drawShape Method");
  }

  calculateArea() {
    console.log("calculateArea Method of shape class");
  }
}
module.exports = Shape;
