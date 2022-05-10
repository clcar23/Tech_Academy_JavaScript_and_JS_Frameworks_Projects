class Shape {
    super();
    constructor(color) {
        this.color = color;
    }
    getArea() {
    };
}

class Rectangle extends Shape {
    constructor(color, height, width) {
        this.super(color);
        this.color = color;
        this.height = height;
        this.width = width;
    }
    getArea() {
        this.super.getArea();
    }
    
}

class Triangle extends Shape {
    constructor(color, base, height) {
        this.super(color);
        this.base = base;
        this.height = height;
    }
    getArea() {
        this.super.getArea();
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        this.super(color);
        this.radius = radius;
    }
    getArea() {
        this.super.getArea();
    }
}