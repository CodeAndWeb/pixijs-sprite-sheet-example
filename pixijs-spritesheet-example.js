// Create a PixiJS application
const app = new PIXI.Application({width: 960, height: 540});

// add the view that Pixi created for you to the DOM
document.body.appendChild(app.view);

// load the assets and start the scene
PIXI.Assets.load([
    "spritesheets/character.json",
    "scene/background.png"
]).then(() => {
    // initialize background image
    const background = PIXI.Sprite.from("scene/background.png");
    app.stage.addChild(background);

    // scale stage container to match the background size
    app.stage.scale.x = app.view.width / background.width;
    app.stage.scale.y = app.view.height / background.height;

    // add the middle ground from the sprite sheet
    const middleground = PIXI.Sprite.from("middleground.png");
    app.stage.addChild(middleground);

    // get the sheet json data, required for resolving animations
    const animations = PIXI.Assets.cache.get('spritesheets/character.json').data.animations;

    // create an animated sprite
    const character = PIXI.AnimatedSprite.fromFrames(animations["character/walk"]);

    // configure + start animation:
    character.animationSpeed = 1 / 6;                     // 6 fps
    character.position.set(150, background.height - 180);
    character.play();

    // Enable this to update the anchor points with each animation frame
    character.updateAnchor = true;

    // add it to the stage and render!
    app.stage.addChild(character);

    // move the character to the right, restart on the left
    app.ticker.add(delta => {
        const speed = 6;
        character.x = (character.x + speed * delta) % (background.width + 200);
    });

    // some 9-scale sprites
    const sprite9a = new PIXI.NineSlicePlane(PIXI.Texture.from("button.png"));
    sprite9a.position.set(10,10);
    sprite9a.width = 100;
    sprite9a.height = 100;
    app.stage.addChild(sprite9a);

    const sprite9b = new PIXI.NineSlicePlane(PIXI.Texture.from("button.png"));
    sprite9b.position.set(130,10);
    sprite9b.width = 200;
    sprite9b.height = 100;
    app.stage.addChild(sprite9b);

    const sprite9c = new PIXI.NineSlicePlane(PIXI.Texture.from("button.png"));
    sprite9c.position.set(10, 130);
    sprite9c.width = 100;
    sprite9c.height = 200;
    app.stage.addChild(sprite9c);

    const sprite9d = new PIXI.NineSlicePlane(PIXI.Texture.from("button.png"));
    sprite9d.position.set(130, 130);
    sprite9d.width = 200;
    sprite9d.height = 200;
    app.stage.addChild(sprite9d);
});
