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

    backgroundSprite = new Sprite(img, 0, 71, 413, 250);

    foregroundSprite = new Sprite(img, 149, 58, 234, 19);

    megamanSprite = [
        new Sprite(img, 51, 15, 26, 23),
        new Sprite(img, 7, 7, 28, 23),
        new Sprite(img, 7, 7, 28, 23)
    ];
    
    topCoralSprite = new Sprite(img, 211, 7, 52, 50);
    bottomCoralSprite = new Sprite(img, 211, 7, 52, 50);

    textSprites = {
        floppyFish: new Sprite(img, 59, 114, 96, 22),
        gameOver: new Sprite(img, 0, 58, 94, 29),
        getReady: new Sprite(img, 59, 155, 87, 22)
    };

    topCoralSprite = new Sprite(img, 211, 7, 52, 50);
    bottomCoralSprite = new Sprite(img, 211, 7, 52, 50);


    okButtonSprite = new Sprite(img, 267, 0, 130, 18);

    scoreSprite = new Sprite(img, 138, 56, 113, 58);
    splashScreenSprite = new Sprite(img, 0, 114, 59, 49);

}





