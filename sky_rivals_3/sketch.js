var bg_img, bg_img_play;
var playbutton, aboutbutton;
var health = 300, max_health = 300;
var gameState = 'wait';
var jet,jet_img;


function preload() {

    bg_img = loadImage("assets/sky_rivals.gif");
    bg_img_play = loadImage("assets/sky_bg.jpg");
    jet_img = loadImage("assets/jet.png")

}

function setup() {

    createCanvas(900, 700);
    //playbutton = createButton('Play');
    playbutton = createImg("assets/play_button.png");
    playbutton.position(440, 563);
    playbutton.size(140, 140);
    //playbutton.class("customButton")
    playbutton.hide();

    aboutbutton = createImg("assets/about.png");
    aboutbutton.position(10,10);
    aboutbutton.size(60,60);
    aboutbutton.hide();
 
    jet=createSprite(100,200);
    jet.addImage(jet_img);
    jet.scale =0.5;
    jet.visible = false;

   
}

function draw() {

    if (gameState == "wait") {
        //createCanvas(windowWidth, windowHeight);
        background(bg_img);
        playbutton.show()
        aboutbutton.show()
    }

    // arrow function =>
    // ()=>{write the entire task here}
    playbutton.mousePressed(() => {
        playbutton.hide();
        aboutbutton.hide();
        gameState = "play";
    })

    aboutbutton.mousePressed(() => {
        playbutton.hide();
        aboutbutton.hide();
        gameState = "about";

    })

    if (gameState == "about") {
        aboutgame();
    }

    if (gameState == "play") {

        background(bg_img_play);
        jet.visible = true;
        
        healthlevel1();
    }

    drawSprites();
}


function aboutgame() {

    swal({
        title: "About Game === How to Play!!",
        text: "Fly powerful fighter jets, battle in the sky and win by shooting your enemies !!",
        textAlign: "center",
        imageUrl: "assets/sky_rivals.gif",
        imageSize: "200x200",
        confirmButton: "Lets Kill the Enemy!!",
        confirmButtonColor: "brown",
    },
        function () {
            gameState = "wait"
        }

    )


}


function healthlevel1() {

    stroke("lightgreen")
    strokeWeight(7)
    noFill()
    rectMode(CENTER)
    rect(755, 50, 200, 20)

    noStroke()
    fill("green")
    rectMode(CENTER)
    rect(755, 50, map(health, 0, max_health, 0, 200), 20)

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}