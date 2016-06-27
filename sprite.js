/**
 * Created by mattpowell on 6/14/16.
 */

var megamanSprite,
    backgroundSprite,
    foregroundSprite,
    topCoralSprite,
    bottomCoralSprite,
    textSprites,
    scoreSprite,
    splashScreenSprite,
    okButtonSprite,
    smallNumberSprite,
    largeNumberSprite;

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
        new Sprite(img, 351, 750, 32, 21),
        new Sprite(img, 351, 800, 26, 21),
        new Sprite(img, 351, 850, 31, 21)
    ];

    backgroundSprite = new Sprite(img, 0, 0, 943, 600);
    backgroundSprite.color = "#692121";

    foregroundSprite = new Sprite(img, 0, 650, 943, 84);
    //foregroundSprite.color = "#692121";

}





