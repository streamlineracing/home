var counter = document.getElementById("scrollingcount")
var total_Centi_seconds = 0
var maxTime = 5
var lastNumber = 50000

setInterval(setTime, 100)

function setTime() {
  ++total_Centi_seconds;
  if (total_Centi_seconds / 7 < maxTime)
  counter.innerHTML = parseInt(total_Centi_seconds /7 / maxTime * lastNumber);
  else
  counter.innerHTML = lastNumber;
  
}

var targetDate = new Date(2021,6,17,00,00,00,00);
var date = new Date();

var yearLabel = document.getElementById("countdown");
yearLabel.innerHTML = targetDate.getFullYear() - date.getFullYear();

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

