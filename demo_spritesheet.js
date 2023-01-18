// Create a PixiJS application
const app = new PIXI.Application({width: 960, height: 540});

// add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

// load sprite sheet image + data file, call setup() if completed
PIXI.Assets.load([
    "spritesheets/spritesheet.json",
    "scene/background.png",
    "scene/middleground.png",
]).then(() => {

    // initialize background sprite
    const background = PIXI.Sprite.from("scene/background.png");
    app.stage.addChild(background);

    // scale stage container that it fits into the view
    app.stage.scale.x = app.view.width / background.width;
    app.stage.scale.y = app.view.height / background.height;

    // add some midground
    const foreground = PIXI.Sprite.from("scene/middleground.png");
    app.stage.addChild(foreground);

    // get the sheet json data, required for resolving animations
    const animations = PIXI.Assets.cache.get('spritesheets/spritesheet.json').data.animations;

    // create an animated sprite
    const character = PIXI.AnimatedSprite.fromFrames(animations["character"]);

    // configure + start animation:
    character.animationSpeed = 1 / 6;                     // 6 fps
    character.position.set(150, background.height - 180); // almost bottom-left corner of the canvas
    character.play();

    // Enable this to update the anchor points with each animation frame
    // animatedCapguy.updateAnchor = true;

    // add it to the stage and render!
    app.stage.addChild(character);

    // move the animated sprite to the right, reset to the left when it reaches the end
    app.ticker.add(delta => {
        character.x = (character.x + 6 * delta) % (background.width + 200);
    });
});
