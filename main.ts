

class Point {

    constructor(public x: number, public y: number) {

    }
}

abstract class Shape {
    P: Point;
    Color: string;
    constructor(p: Point, color: string) {
        this.P = p;
        this.Color = color;
    }
    abstract drow(): void;//must overriden
}


//let ss = new Shape(new Point(2,3) , 'Red');
class Circule extends Shape {
    Radious: number;
    constructor(x: number, y: number, color: string, r: number) {
        super(new Point(x, y), color);
        this.Radious = r;
    }
    drow(): void {

        let circle = document.getElementById("circle") as any;

        circle.setAttribute("cx", this.P.x.toString());

        circle.setAttribute("cy", this.P.y.toString());

        circle.setAttribute("fill", this.Color);

        circle.setAttribute("r", this.Radious.toString());


    }
}

let c = new Circule(1000, 500, 'gray', 250);

c.drow();