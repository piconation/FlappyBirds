/**
 * Created by mattpowell on 6/14/16.
 */

var megamanSprite;
var backgroundSprite;

function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x * 2;
    this.y = y * 2;
    this.width = width * 2;
    this.height = height * 2;
}

Sprite.prototype.draw = function (renderingContext, x, y) {
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
};

function initiateSprites(img) {
    megamanSprite = [
        new Sprite(img, 176, 33, 16, 13),
        new Sprite(img, 176, 58, 12, 10),
        new Sprite(img, 176, 83, 14, 10)
    ];
    
    backgroundSprite = new Sprite(img, 0, 0, 338, 0);
    backgroundSprite.color = "#692121"; //sets background color
}
