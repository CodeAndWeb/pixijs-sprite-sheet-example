// create a Pixi application
let app = new PIXI.Application({width: 800, height: 450});

// add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

let animatedCapguy, background;

const capguyFrames = [
    "images/sprites/capguy/walk_01.png",
    "images/sprites/capguy/walk_02.png",
    "images/sprites/capguy/walk_03.png",
    "images/sprites/capguy/walk_04.png",
    "images/sprites/capguy/walk_05.png",
    "images/sprites/capguy/walk_06.png",
    "images/sprites/capguy/walk_07.png",
    "images/sprites/capguy/walk_08.png",
];

const objects = [
    "images/sprites/objects/box-a.png",
    "images/sprites/objects/box-b.png",
    "images/sprites/objects/box-open.png",
    "images/sprites/objects/bus-bench.png",
    "images/sprites/objects/crate-green-a.png",
    "images/sprites/objects/crate-green-b.png",
    "images/sprites/objects/crate-orange.png",
    "images/sprites/objects/crate-purple-a.png",
    "images/sprites/objects/crate-purple-b.png",
    "images/sprites/objects/dog-poo.png",
    "images/sprites/objects/flower-pot.png",
    "images/sprites/objects/fruit-stand.png",
    "images/sprites/objects/hydrant.png",
    "images/sprites/objects/mailbox1/hit-01.png",
    "images/sprites/objects/mailbox1/hit-02.png",
    "images/sprites/objects/mailbox1/hit-03.png",
    "images/sprites/objects/mailbox1/hit-04.png",
    "images/sprites/objects/mailbox1/hit-05.png",
    "images/sprites/objects/mailbox1/mailbox.png",
    "images/sprites/objects/mailbox2/hit-01.png",
    "images/sprites/objects/mailbox2/hit-02.png",
    "images/sprites/objects/mailbox2/hit-03.png",
    "images/sprites/objects/mailbox2/hit-04.png",
    "images/sprites/objects/mailbox2/hit-05.png",
    "images/sprites/objects/mailbox2/hit-06.png",
    "images/sprites/objects/mailbox2/hit-07.png",
    "images/sprites/objects/mailbox2/hit-08.png",
    "images/sprites/objects/mailbox2/hit-09.png",
    "images/sprites/objects/mailbox2/hit-10.png",
    "images/sprites/objects/mailbox2/hit-11.png",
    "images/sprites/objects/mailbox2/mailbox.png",
    "images/sprites/objects/manhole/hit-01.png",
    "images/sprites/objects/manhole/hit-02.png",
    "images/sprites/objects/manhole/hit-03.png",
    "images/sprites/objects/manhole/hit-04.png",
    "images/sprites/objects/manhole/hit-05.png",
    "images/sprites/objects/manhole/hit-06.png",
    "images/sprites/objects/manhole/hit-07.png",
    "images/sprites/objects/manhole/manhole.png",
    "images/sprites/objects/newspaperbox/hit-01.png",
    "images/sprites/objects/newspaperbox/hit-02.png",
    "images/sprites/objects/newspaperbox/hit-03.png",
    "images/sprites/objects/newspaperbox/hit-04.png",
    "images/sprites/objects/newspaperbox/newspaperbox.png",
    "images/sprites/objects/rain.png",
    "images/sprites/objects/storesign/hit-01.png",
    "images/sprites/objects/storesign/hit-02.png",
    "images/sprites/objects/storesign/hit-03.png",
    "images/sprites/objects/storesign/hit-04.png",
    "images/sprites/objects/storesign/hit-05.png",
    "images/sprites/objects/storesign/storesign.png",
    "images/sprites/objects/trashcan/hit-01.png",
    "images/sprites/objects/trashcan/hit-02.png",
    "images/sprites/objects/trashcan/hit-03.png",
    "images/sprites/objects/trashcan/hit-04.png",
    "images/sprites/objects/trashcan/hit-05.png",
    "images/sprites/objects/trashcan/hit-06.png",
    "images/sprites/objects/trashcan/trashcan.png",
];

// load sprite sheet image + data file, call setup() if completed
app.loader
    .add("images/sprites/background.png")
    .add(capguyFrames)
    .add(objects)
    .load(setup);


function setup() {
    let resources = app.loader.resources;

    // initialize background sprite
    background = new PIXI.Sprite(resources["images/sprites/background.png"].texture);
    app.stage.addChild(background);

    // scale stage container that it fits into the view
    app.stage.scale.x = app.view.width / background.width;
    app.stage.scale.y = app.view.height / background.height;

    // create an animated sprite
    animatedCapguy = new PIXI.AnimatedSprite.fromFrames(capguyFrames);

    // configure + start animation:
    animatedCapguy.animationSpeed = 0.167;                  // 6 fps
    animatedCapguy.position.set(0, background.height - 350); // almost bottom-left corner of the canvas
    animatedCapguy.play();

    // add it to the stage and render!
    app.stage.addChild(animatedCapguy);
    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
    animatedCapguy.x = (animatedCapguy.x + 5 * delta) % (background.width + 200);
}
