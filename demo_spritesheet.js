
// create a Pixi application
let app = new PIXI.Application({ width: 800, height: 450 });

// add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

let animatedCapguy, background;

// load sprite sheet image + data file, call setup() if completed
PIXI.loader
    .add("images/spritesheet.json")
    .load(setup);


function setup() {
    // the sprite sheet we've just loaded:
    let sheet = PIXI.loader.resources["images/spritesheet.json"].spritesheet;

    // initialize background sprite
    background = new PIXI.Sprite(sheet.textures["background.png"]);
    app.stage.addChild(background);

    // scale stage container that it fits into the view
    app.stage.scale.x = app.view.width / background.width;
    app.stage.scale.y = app.view.height / background.height;

    // create an animated sprite
    animatedCapguy = new PIXI.extras.AnimatedSprite(sheet.animations["capguy"]);

    // configure + start animation:
    animatedCapguy.animationSpeed = 0.167;                  // 6 fps
    animatedCapguy.position.set(0, background.height - 50); // almost bottom-left corner of the canvas
    animatedCapguy.play();

    // add it to the stage and render!
    app.stage.addChild(animatedCapguy);
    animate();
}

function animate() {
  requestAnimationFrame(animate);
  animatedCapguy.position.x = (animatedCapguy.x + 10) % (background.width + 200);
}
