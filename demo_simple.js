
// create a Pixi application
let app = new PIXI.Application({ width: 800, height: 450 });

// add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

const capguyFrames = [ 
    "images/sprites/capguy_01.png",
    "images/sprites/capguy_02.png",
    "images/sprites/capguy_03.png",
    "images/sprites/capguy_04.png",
    "images/sprites/capguy_05.png",
    "images/sprites/capguy_06.png",
    "images/sprites/capguy_07.png",
    "images/sprites/capguy_08.png"
];

let animatedCapguy, background;

// load all images, call setup() if completed
PIXI.loader
    .add("images/sprites/background.png")
    .add(capguyFrames)
    .load(setup);


function setup() {
    // the resources hash provided by the loader:
    let resources = PIXI.loader.resources;

    // initialize background image
    background = new PIXI.Sprite(resources["images/sprites/background.png"].texture);
    app.stage.addChild(background);

    // scale stage container that it fits into the view
    app.stage.scale.x = app.view.width / background.width;
    app.stage.scale.y = app.view.height / background.height;

    // create an animated sprite
    animatedCapguy = PIXI.extras.AnimatedSprite.fromFrames(capguyFrames);

    // configure + start animation:
    animatedCapguy.animationSpeed = 0.167;                  // 6 fps
    animatedCapguy.anchor.set(0.5, 1.0);                    // anchor of animation is bottom-center
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
