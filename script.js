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
