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

    backgroundSprite = new Sprite(img, 0, 0, 472, 342);

    foregroundSprite = new Sprite(img, 0, 650, 943, 84);

    megamanSprite = [
        new Sprite(img, -176, -375, 16, 11),
        new Sprite(img, -176, -400, 13, 11),
        new Sprite(img, -176, -425, 16, 11)
    ];
    
    topCoralSprite = new Sprite(img, 621, 845, 16, 32);

    bottomCoralSprite = new Sprite(img, 621, 845, 16, 32);

}





