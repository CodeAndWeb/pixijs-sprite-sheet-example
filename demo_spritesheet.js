// Create a PixiJS application
const app = new PIXI.Application({width: 960, height: 540});

// add the view that Pixi created for you to the DOM
document.body.appendChild(app.view);

// load the assets and start the scene
PIXI.Assets.load([
    "scene/background.png",
    "scene/middleground.png",
    "spritesheets/character.json"
]).then(() => {
    // initialize background image
    const background = PIXI.Sprite.from("scene/background.png");
    app.stage.addChild(background);

    // add the middle ground
    const middleground = PIXI.Sprite.from("scene/middleground.png");
    app.stage.addChild(middleground);

    // scale stage container to match the background size
    app.stage.scale.x = app.view.width / background.width;
    app.stage.scale.y = app.view.height / background.height;

    // get the sheet json data, required for resolving animations
    const animations = PIXI.Assets.cache.get('spritesheets/character.json').data.animations;

    // create an animated sprite
    const character = PIXI.AnimatedSprite.fromFrames(animations["character/walk"]);

    // configure + start animation:
    character.animationSpeed = 1 / 6;                     // 6 fps
    character.position.set(150, background.height - 180); // almost bottom-left corner of the canvas
    character.play();

    // Enable this to update the anchor points with each animation frame
    character.updateAnchor = true;

    // add it to the stage and render!
    app.stage.addChild(character);

    app.ticker.add(delta => {
        const speed = 6;
        character.x = (character.x + speed * delta) % (background.width + 200);
    });
});
