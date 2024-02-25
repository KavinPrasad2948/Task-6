class Circle {
    constructor(radius = 1.0, colour = "red") {
      this.radius = radius;
      this.colour = colour;
    }
  
    getRadius() {
      return this.radius;
    }
    setRadius(radius) {
      this.radius = radius;
    }
    getColour() {
      return this.colour;
    }
    setColour(colour) {
      this.colour = colour;
    }
    toString() {
      return `Circle: radius=${this.radius}, colour=${this.colour}`;
    }
    getArea() {
      return ((Math.PI) * this.radius * this.radius);
    }
    getCircumference() {
      return 2 *( Math.PI) * this.radius;
    }
  }
  
  const Circle1 = new Circle(8, "black");
  const Circle2 = new Circle(3.5,"grey");
  const Circle3 = new Circle(4);
  
  console.log(Circle1.toString());
  console.log("Area of circle1 : " + Circle1.getArea());
  console.log("Circumference of circle1 : " +Circle1.getCircumference());
  console.log(Circle2.toString());
  console.log("Area of circle 2 : " + Circle2.getArea());
  console.log("Circumference of circle 2 : "+ Circle2.getCircumference());
  console.log(Circle3.toString());
  console.log("Area of circle 3 : " + Circle3.getArea());
  console.log("Circumference of circle 3 : " + Circle3.getCircumference());
  
  