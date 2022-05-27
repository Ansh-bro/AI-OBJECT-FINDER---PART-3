Status = "";
objects = [];

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = objects_name+ "Found";

    if (objects[i].label == objects_name) 
   {
       var synth = window.speechSynthesis;
       speak_data = objects[i].label;
   }
}

function draw()
{
    image(video,0,0,480,380);
    document.getElementById("objects_name").set
    if (Status != "") 
    {
      objectDetector.detect(gotResult);
      
      for (i =0; i < objects.length ; i++) 
      {
          document.getElementById("status").innerHTML = objects_name+ "Found";

          fill("#0A03A2");
          percent = floor(objects[i].confidence*100);
          text(objects[i].label+""+percent+"%"+objects[i].x+15,objects[i].y+15);
          noFill();
          stroke("#0A03A2");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height );
      }
    }
}

function gotResult(error,results)
{
   if (error) 
   {
       console.log(error);
   }

   console.log(results);
   objects = results
}

function modelLoaded()
{
    console.log("Model Loaded !");
    Status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}




