// Create a PixiJS application
const app = new PIXI.Application({width: 800, height: 450});

// Add the PixiJS application's canvas to the HTML document
document.body.appendChild(app.view);

// Define an array of file paths to the images for the Capguy sprite animation
const capguyFrames = [
    "sprites/capguy/walk_01.png",
    "sprites/capguy/walk_02.png",
    "sprites/capguy/walk_03.png",
    "sprites/capguy/walk_04.png",
    "sprites/capguy/walk_05.png",
    "sprites/capguy/walk_06.png",
    "sprites/capguy/walk_07.png",
    "sprites/capguy/walk_08.png",
];

// Define an array of file paths to the images for the various objects in the game
const objects = [
    "sprites/objects/box-a.png",
    "sprites/objects/box-b.png",
    "sprites/objects/box-open.png",
    "sprites/objects/bus-bench.png",
    "sprites/objects/crate-green-a.png",
    "sprites/objects/crate-green-b.png",
    "sprites/objects/crate-orange.png",
    "sprites/objects/crate-purple-a.png",
    "sprites/objects/crate-purple-b.png",
    "sprites/objects/dog-poo.png",
    "sprites/objects/flower-pot.png",
    "sprites/objects/fruit-stand.png",
    "sprites/objects/hydrant.png",
    "sprites/objects/mailbox1/hit-01.png",
    "sprites/objects/mailbox1/hit-02.png",
    "sprites/objects/mailbox1/hit-03.png",
    "sprites/objects/mailbox1/hit-04.png",
    "sprites/objects/mailbox1/hit-05.png",
    "sprites/objects/mailbox1/mailbox.png",
    "sprites/objects/mailbox2/hit-01.png",
    "sprites/objects/mailbox2/hit-02.png",
    "sprites/objects/mailbox2/hit-03.png",
    "sprites/objects/mailbox2/hit-04.png",
    "sprites/objects/mailbox2/hit-05.png",
    "sprites/objects/mailbox2/hit-06.png",
    "sprites/objects/mailbox2/hit-07.png",
    "sprites/objects/mailbox2/hit-08.png",
    "sprites/objects/mailbox2/hit-09.png",
    "sprites/objects/mailbox2/hit-10.png",
    "sprites/objects/mailbox2/hit-11.png",
    "sprites/objects/mailbox2/mailbox.png",
    "sprites/objects/manhole/hit-01.png",
    "sprites/objects/manhole/hit-02.png",
    "sprites/objects/manhole/hit-03.png",
    "sprites/objects/manhole/hit-04.png",
    "sprites/objects/manhole/hit-05.png",
    "sprites/objects/manhole/hit-06.png",
    "sprites/objects/manhole/hit-07.png",
    "sprites/objects/manhole/manhole.png",
    "sprites/objects/newspaperbox/hit-01.png",
    "sprites/objects/newspaperbox/hit-02.png",
    "sprites/objects/newspaperbox/hit-03.png",
    "sprites/objects/newspaperbox/hit-04.png",
    "sprites/objects/newspaperbox/newspaperbox.png",
    "sprites/objects/rain.png",
    "sprites/objects/storesign/hit-01.png",
    "sprites/objects/storesign/hit-02.png",
    "sprites/objects/storesign/hit-03.png",
    "sprites/objects/storesign/hit-04.png",
    "sprites/objects/storesign/hit-05.png",
    "sprites/objects/storesign/storesign.png",
    "sprites/objects/trashcan/hit-01.png",
    "sprites/objects/trashcan/hit-02.png",
    "sprites/objects/trashcan/hit-03.png",
    "sprites/objects/trashcan/hit-04.png",
    "sprites/objects/trashcan/hit-05.png",
    "sprites/objects/trashcan/hit-06.png",
    "sprites/objects/trashcan/trashcan.png",
];

// load sprite sheet image + data file, call setup() if completed
PIXI.Assets.load([
    "sprites/background.png",
    ...capguyFrames,
    ...objects
]).then((textures) => {

    // initialize background sprite
    const background = new PIXI.Sprite(textures["sprites/background.png"]);
    app.stage.addChild(background);

    // scale stage container that it fits into the view
    app.stage.scale.x = app.view.width / background.width;
    app.stage.scale.y = app.view.height / background.height;

    // create an animated sprite
    const frames = capguyFrames.map((frame) => textures[frame]);
    const animatedCapguy = new PIXI.AnimatedSprite(frames);

    // configure + start animation:
    animatedCapguy.animationSpeed = 1 / 6;                   // 6 fps
    animatedCapguy.position.set(0, background.height - 350); // almost bottom-left corner of the canvas
    animatedCapguy.play();

    // add it to the stage and render!
    app.stage.addChild(animatedCapguy);

    // move the animated sprite to the right, reset to the left when it reaches the end
    app.ticker.add(delta => {
        animatedCapguy.x = (animatedCapguy.x + 5 * delta) % (background.width + 200);
    });
});
