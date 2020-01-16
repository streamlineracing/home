



var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d");
var img = document.createElement("img");
img.setAttribute('src' , "https://www.formula1.com/content/fom-website/en/teams/Renault/_jcr_content/teamCar.img.jpg");


ctx.drawImage(img, 100,500, 150, 75)

var x = 100

function driveCar(){
  x+=100;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img,x,500,200,100);

  if(x>1750){
    clearInterval(myInt);
    canvas.style.visibility = "hidden";
  }
    
}

var myInt = setInterval(driveCar, 50)

