// Create a PixiJS application
const app = new PIXI.Application({width: 800, height: 450});

// add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

const spriteSheetName = usePng8 ? "spritesheets/spritesheet-png8.json" : "spritesheets/spritesheet.json";

// load sprite sheet image + data file, call setup() if completed
PIXI.Assets.load([
    spriteSheetName
]).then((textures) => {

    // the sprite sheet we've just loaded:
    const sheet = textures[spriteSheetName];

    // initialize background sprite
    const background = new PIXI.Sprite(sheet.textures["background.png"]);
    app.stage.addChild(background);

    // scale stage container that it fits into the view
    app.stage.scale.x = app.view.width / background.width;
    app.stage.scale.y = app.view.height / background.height;

    // create an animated sprite
    const animatedCapguy = new PIXI.AnimatedSprite(sheet.animations["capguy/walk"]);

    // configure + start animation:
    animatedCapguy.animationSpeed = 1 / 6;                   // 6 fps
    animatedCapguy.position.set(0, background.height - 100); // almost bottom-left corner of the canvas
    animatedCapguy.play();

    // Enable this to update the anchor points with each animation frame
    // animatedCapguy.updateAnchor = true;

    // add it to the stage and render!
    app.stage.addChild(animatedCapguy);

    // move the animated sprite to the right, reset to the left when it reaches the end
    app.ticker.add(delta => {
        animatedCapguy.x = (animatedCapguy.x + 5 * delta) % (background.width + 200);
    });
});
