var status="";
function preload(){
    loadImage("picture1.jpeg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status1").innerHTMl="Status Detecting Objects";
    document.getElementById("status2").innerHTMl="Status Detecting Objects";
    document.getElementById("status3").innerHTMl="Status Detecting Objects";
    document.getElementById("status4").innerHTMl="Status Detecting Objects";
    document.getElementById("status5").innerHTMl="Status Detecting Objects";
}