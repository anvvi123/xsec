img = "";
status = "";
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function preload()
{
    img = loadImage('dog_cat.jpg');
}
function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#E6E6FA");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF69B4");
    rect(30, 60, 450, 350 );
    fill("#E6E6FA");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF69B4");
    rect(300, 90, 270, 320 );``
}
function modelLoaded()
{
console.log("Model Loaded")
status = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}