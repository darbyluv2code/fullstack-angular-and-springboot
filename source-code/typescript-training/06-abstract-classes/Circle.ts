import { Shape } from './Shape';

export class Circle extends Shape {

    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }

    constructor(theX: number, theY: number,
                private _radius: number) {

        super(theX, theY);
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(value: number) {
        this._radius = value;
    }

    getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }

}