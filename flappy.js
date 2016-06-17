/**
 * Created by mattpowell on 6/13/16.
 */

var megaman;
var ground;
var currentState;
var width;
var height;

var states = {
    Splash: 0,
    Game: 1,
    Score: 2
};

function main() {
    windowSetup();
    canvasSetup();

    currentState = states.Splash; //Game begins at the splash screen.

    document.body.appendChild(canvas); //append the canvas we've created to the body element in our html doc.

    megaman = new Megaman();
    //ground = new Ground();

    loadGraphics();
}

function windowSetup() {
    //retrieve the width and height of the window.
    width = window.innerWidth;
    height = window.innerHeight;
    var inputEvent = "touchstart";
    //set the width and height if we are on a display with a width > 500px (i.e. - a desktop or tablet)
    if (width >= 500) {
        width = 380;
        height = 430;
        inputEvent = "mousedown";
    }
    //create a listener on the input event.
    document.addEventListener(inputEvent, onpress);
}

function canvasSetup() {
    canvas = document.createElement("canvas");
    canvas.style.border = "15px solid #5bb58f";
    canvas.width = width;
    canvas.height = height;
    renderingContext = canvas.getContext("2d");
}

function onpress(evt) {
    switch (currentState) {

        case states.Splash: // Start the game and update the fish velocity.
            currentState = states.Game;
            megaman.jump();
            break;

        case states.Game: // The game is in progress. Update fish velocity.
            megaman.jump();
            break;

        case states.Score: // Change from score to splash state if event within okButton bounding box
            // Get event position
            var mouseX = evt.offsetX, mouseY = evt.offsetY;

            if (mouseX == null || mouseY == null) {
                mouseX = evt.touches[0].clientX;
                mouseY = evt.touches[0].clientY;
            }

            // Check if within the okButton
            if (okButton.x < mouseX && mouseX < okButton.x + okButton.width &&
                okButton.y < mouseY && mouseY < okButton.y + okButton.height
            ) {
                //console.log('click');
                ground.reset();
                currentState = states.Splash;
                score = 0;
            }
            break;
    }
}

//creates instance of megaman

function Megaman() {
    this.x = 140;
    this.y = 0;

    this.frame = 0;
    this.velocity = 0;
    this.animation = [0, 1, 2, 1];  //animation sequence

    this.rotation = 0;
    this.radius = 12;

    this.gravity = 0.25;
    this._jump = 4.6;

    //makes megaman jump

    this.jump = function () {
        this.velocity = -this.jump;
    };

    //update megaman animation and position of megaman

    this.update = function () {
        //plays animation twice as fast during the actual game
        var n = currentState === states.Splash ? 10 : 5;

        this.frame += frames % n === 0 ? 1: 0;
        this.frame %= this.animation.length;

        if (currentState === states.Splash) {
            this.updateIdleMegaman();
        } else { //game state
            this.updatePlayingMegaman();
        }
    };

    //runs megaman through it's idle animation

    this.updateIdleMegaman = function () {
        this.y = height - 280 + 5 * Math.cos(frames / 10);
        this.rotation = 0;
    };

    // draws Megaman to canvas with renderingContext, which is the context used for drawing

    this.draw = function (renderingContext) {
        renderingContext.save();

        // translate and rotate renderingContext coordinate system

        renderingContext.translate(this.x, this.y);
        renderingContext.rotate(this.rotation);

        var n = this.animation(this.frame);

        // draws megaman with center in origin

        megamanSprite[n].draw(renderingContext, -megamanSprite[n].width / 2, -megamanSprite[n].height / 2);

        renderingContext.restore();
    };
}

function loadGraphics() {
    //initiates graphics and ok button
    var img = new Image();
    img.src = "mmsheet2.png";
    img.onload = function () {
        initiateSprites(this);
        renderingContext.fillStyle = backgroundSprite.color;
        renderingContext.fillRect(0, 0, width, height);
        backgroundSprite.draw(renderingContext, 0, height - backgroundSprite.height);
        backgroundSprite.draw(renderingContext, backgroundSprite.width, height - backgroundSprite.height); //sets background color
        megamanSprite[0].draw(renderingContext, 5, 5, 142, 50);

        /* Turned off temporarily
            okButton = {
            x: (width - okButtonSprite.width) / 2,
            y: height - 200,
            width: okButtonSprite.width,
            height: okButtonSprite.height
        };*/

        gameLoop();
    };
}

// this updates and renders all sprites before the window repaints

function gameLoop() {
    update();
    render();
    window.requestAnimationFrame(gameLoop); // this is the work horse that keeps calling gameLoop. It's a callback.
    //concole.log('swim');
}

function render() {
    // draws background color and items
    // renderingContext.fillRect(0, 0, width, height);

    // draws background sprites
    backgroundSprite.draw(renderingContext, 0, height - backgroundSprite.height);
    backgroundSprite.draw(renderingContext, backgroundSprite.width, height - backgroundSprite.height);

    // corals.draw(renderingContext);
    megaman.draw(renderingContext);
}




























