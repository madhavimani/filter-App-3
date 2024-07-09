function preload(){

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
}
function draw(){
    
}
function takeSnapshot(){
    
}
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yQzhiKmXS/model.json',modelloaded);


function gotResults(){
    if(error){
console.log(error)
    }
    else{
        console.log(results)

        var color
        rgb(38, 255, 157)
        rgb(139, 38, 255)
        rgb(38, 255, 251)

var color2
        rgb(68, 157, 235)
        rgb(31, 173, 126)
        rgb(133, 31, 173)

var color3
        rgb(255, 3, 3)
        rgb(252, 35, 242)
        rgb(252, 35, 118)

        update = document.getElementById("heading")
}
}

