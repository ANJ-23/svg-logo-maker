// class obtains color & shape
class Shapes {
    constructor(color, shape) {
        this.color = color;
        this.shape = shape;
    }

    // renders SVG code based on shape & color
    render() {
        if (this.shape === "circle") {
            return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
        } else if (this.shape === "square") {
            return `<rect x="50px" y="0" width="200px" height="200px" fill="${this.color}" />`;
        } else if (this.shape === "triangle") {
            return `<polygon points="150, 0  00, 200  300, 200" fill="${this.color}" />`; 
        } else {
            throw new Error("How in the world did we get here???");
        }
    }
}

module.exports = { Shapes };