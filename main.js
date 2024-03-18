function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    model = ml5.poseNet(video ,modelLoaded);

    model.on("pose",showresult);
}

nosex = 0

nosey = 0

function showresult(result){
    console.log(result)
    nosex = result[0].pose.nose.x;
    nosey = result[0].pose.nose.y;
}


function modelLoaded(){
    console.log("poseNet is linked!!!")
}

function TakePic(){
    save("filter.png");
}

function preload(){
    crown = loadImage("crown.png");
    mustache = loadImage("mustache.png");
}

function draw(){
    image(video,0 ,0 ,300,300)
     uc =document.getElementById("dropdown").value;
      if (uc == "Clown Nose"){
        fill("red")
    stroke("red")
    circle(nosex -230, nosey -99,20)
      }

      if (uc == "mustache"){
        image(mustache, nosex -265, nosey-102, 50, 40);
    }

    if (uc == "Crown"){
        image(crown, nosex -280, nosey-255, 100, 100);
    }
    
}

