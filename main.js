function setup() {
    canvas = createCanvas(450,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(450,350);
}

function start() {
    objectDetector =  ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Object : Detecting video...";
 }

 status = "";

 function modelLoaded() {
    console.log("Model Loaded!");
   status = true;
}

function draw() {
    image(video,0,0,450,350);
}
