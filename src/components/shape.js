import React from "react";

export default class Shape {
  constructor(color) {
    this.color = "red";
  }

  drawShape() {
    console.log("drawShape Method");
  }

  calculateArea() {
    console.log("calculateArea Method of shape class");
  }
}
