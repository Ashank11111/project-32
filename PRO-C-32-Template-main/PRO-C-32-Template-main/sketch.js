const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour
var bg = "sunrise1.png";

function preload() {
    getBackgroundImg()
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
 if(backgroundImg)
background(backgroundImg)
    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
 var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
 var responseJson = await response.json()
    // write code slice the datetime
 var datetime = responseJson.datetime

    // add conditions to change the background images from sunrise to sunset
 var hour = datetime.slice(11,13);

    //load the image in backgroundImg variable here
if(hour>=04 && hour<=06){
bg = "sunrise1.png";
}
else if(hour>=06 && hour<=08){
    bg = "sunrise2.png"
}
else if (hour>=23 && hour==0){
    bg = "sunset10.png"
}
else if (hour==0 && hour<=03){
    bg = "sunset11.png"
}
else {
    bg = "sunset12.png"
}
backgroundImg = loadImage(bg)
}
