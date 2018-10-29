
// create a Pixi application
let app = new PIXI.Application({ width: 800, height: 450 });

// add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

let animatedCapguy, background;

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

const objects = [
    "images/sprites/objects/manhole/Manhole_01.png",
    "images/sprites/objects/manhole/Manhole_02.png",
    "images/sprites/objects/manhole/Manhole_03.png",
    "images/sprites/objects/manhole/Manhole_07.png",
    "images/sprites/objects/manhole/Manhole_06.png",
    "images/sprites/objects/manhole/Manhole_04.png",
    "images/sprites/objects/manhole/Manhole_05.png",
    "images/sprites/objects/manhole/Manhole_08.png",
    "images/sprites/objects/newspaperbox/NewspaperBox_04.png",
    "images/sprites/objects/newspaperbox/NewspaperBox_01.png",
    "images/sprites/objects/newspaperbox/NewspaperBox_02.png",
    "images/sprites/objects/newspaperbox/NewspaperBox_03.png",
    "images/sprites/objects/Box1.png",
    "images/sprites/objects/Box3.png",
    "images/sprites/objects/Box2.png",
    "images/sprites/objects/Bus Bench.png",
    "images/sprites/objects/Fruitstand0001.png",
    "images/sprites/objects/mailbox2/Mailbox20028.png",
    "images/sprites/objects/mailbox2/Mailbox20015.png",
    "images/sprites/objects/mailbox2/Mailbox20001.png",
    "images/sprites/objects/mailbox2/Mailbox20017.png",
    "images/sprites/objects/mailbox2/Mailbox20034.png",
    "images/sprites/objects/mailbox2/Mailbox20020.png",
    "images/sprites/objects/mailbox2/Mailbox20022.png",
    "images/sprites/objects/mailbox2/Mailbox20026.png",
    "images/sprites/objects/mailbox2/Mailbox20032.png",
    "images/sprites/objects/mailbox2/Mailbox20024.png",
    "images/sprites/objects/mailbox2/Mailbox20030.png",
    "images/sprites/objects/storesign/StoreSign_01.png",
    "images/sprites/objects/storesign/StoreSign_02.png",
    "images/sprites/objects/storesign/StoreSign_03.png",
    "images/sprites/objects/storesign/StoreSign_04.png",
    "images/sprites/objects/storesign/StoreSign_05.png",
    "images/sprites/objects/Flower Pot 20001.png",
    "images/sprites/objects/Crate01.png",
    "images/sprites/objects/Crate02.png",
    "images/sprites/objects/Crate03.png",
    "images/sprites/objects/Dogpoo.png",
    "images/sprites/objects/mailbox1/Mailbox10028.png",
    "images/sprites/objects/mailbox1/Mailbox10001.png",
    "images/sprites/objects/mailbox1/Mailbox10070.png",
    "images/sprites/objects/mailbox1/Mailbox10040.png",
    "images/sprites/objects/mailbox1/Mailbox10019.png",
    "images/sprites/objects/Crate04.png",
    "images/sprites/objects/Crate05.png",
    "images/sprites/objects/Rain.png",
    "images/sprites/objects/trashcan/Trashcan_06.png",
    "images/sprites/objects/trashcan/Trashcan_04.png",
    "images/sprites/objects/trashcan/Trashcan_05.png",
    "images/sprites/objects/trashcan/Trashcan_01.png",
    "images/sprites/objects/trashcan/Trashcan_02.png",
    "images/sprites/objects/trashcan/Trashcan_03.png",
    "images/sprites/objects/Hydrant0001.png",
];

// load sprite sheet image + data file, call setup() if completed
PIXI.loader
    .add("images/sprites/background.png")
    .add(capguyFrames)
    .add(objects)
    .load(setup);


function setup() {
    let resources = PIXI.loader.resources;

    // initialize background sprite
    background = new PIXI.Sprite(resources["images/sprites/background.png"].texture);
    app.stage.addChild(background);

    // scale stage container that it fits into the view
    app.stage.scale.x = app.view.width / background.width;
    app.stage.scale.y = app.view.height / background.height;

    // create an animated sprite
    animatedCapguy = new PIXI.extras.AnimatedSprite.fromFrames(capguyFrames);

    // configure + start animation:
    animatedCapguy.animationSpeed = 0.167;                  // 6 fps
    animatedCapguy.position.set(0, background.height - 350); // almost bottom-left corner of the canvas
    animatedCapguy.play();

    // add it to the stage and render!
    app.stage.addChild(animatedCapguy);
    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
    animatedCapguy.x = (animatedCapguy.x + 5*delta) % (background.width + 200);
}
