function setup()
{
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
  console.log("modelLoaded");
  status=true;
  objectDetector.detect(img,gotResult);
}

function gotResult(error, results)
{
  if(error)
  {
    console.log(error);
  }
  console.log(results);
  object = results;
}
img="";
status="";
object= [];
function preload()
{
  img=loadImage("dog_cat.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 420);

    if(status!=""){
      for(i=0; i<object.length; i++) {
        document.getElementById("status").innerHTML = "Status = Object Detected";
        fill("#05ffbc");
        percent=floor(object[i].confidence * 100);
        text(object[i].label + " " + percent + "%", object[i].x + 20, object[i].y + 20);
        noFill();
    stroke("#05ffbc");
    rect(object[i].x , object[i].y , object[i].width , object[i].height);
      }
    }
  }