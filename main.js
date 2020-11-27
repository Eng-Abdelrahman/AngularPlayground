"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var Shape = /** @class */ (function () {
    function Shape(p, color) {
        this.P = p;
        this.Color = color;
    }
    return Shape;
}());
//let ss = new Shape(new Point(2,3) , 'Red');
var Circule = /** @class */ (function (_super) {
    __extends(Circule, _super);
    function Circule(x, y, color, r) {
        var _this = _super.call(this, new Point(x, y), color) || this;
        _this.Radious = r;
        return _this;
    }
    Circule.prototype.drow = function () {
        var circle = document.getElementById("circle");
        circle.setAttribute("cx", this.P.x.toString());
        circle.setAttribute("cy", this.P.y.toString());
        circle.setAttribute("fill", this.Color);
        circle.setAttribute("r", this.Radious.toString());
    };
    return Circule;
}(Shape));
var c = new Circule(1000, 500, 'gray', 250);
c.drow();
