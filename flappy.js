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
    canvas.style.border = "15px solid #blue";
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

function Megaman() {
    this.x = 140;
    this.y = 0;

    this.draw = function (renderingContext) {
        
    }
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
        };

        gameLoop();*/
    }
}






















