//global variable to only print the minute once
var printed = false;

function setup() {
  createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
  
  background(225);
  textSize(32);
  fill(180);
  let from = color(135, 206, 235);
  let to = color(25, 25, 112);
  let col = lerpColor(from, to, .04);

  
  var sec = second();
  var min = minute();
  var hr = hour(); 
  /* // Allow for testing of various times
  var sec = 55; 
  var min = 55; 
  var hr = 23; */

  /* prints the minute every minute */
  if (sec == 30 && printed == false){ 
    console.log(min);
    printed = true;
  }
  if (sec == 59){ 
    printed = false; 
  }
  
  // The hour determines the color for the second and minute dots   
  for (let k=0; k < hr; k++){
    let col = determineColor(k); 
    drawHour(k, col); 
    for (let i = 0; i < sec; i++){ 
      drawSecond(i, col)
    }
    for (let j=0; j < min; j++){ 
      drawMinute(j, col)
    }

  }

}
function drawSecond(i, col){ 
  noStroke();
  fill(col);
  if (i < 15){
  ellipse(10+i*25, 10, 10, 10);
  }
  else if (i< 30){ 
    ellipse(10+15*25, 10+(i-15)*25, 10, 10);
  }
  else if (i<45){ 
   ellipse(10+(15-i%30)*25, 10+15*25, 10, 10);
  }
  else if (i<61){
   ellipse(10, 10+(15-i%45)*25, 10,10); 
  }
}

function drawMinute(i, col){ 
  noStroke();
  fill(col);
  if (i < 15){
  ellipse(30+i*22, 30, 15, 15);
  }
  else if (i< 30){ 
    ellipse(30+15*22, 30+(i-15)*22, 15, 15);
  }
  else if (i<45){ 
   ellipse(30+(15-i%30)*22, 30+15*22, 15, 15);
  }
  else if (i<61){
   ellipse(30, 30+(15-i%45)*22, 15,15); 
  }
  
}

function drawHour(i, col){ 
  noStroke();
  fill(col);
  if (i < 4){
  ellipse(70+i*60, 70, 40, 40);
  }
  else if (i< 8){ 
    ellipse(70+4*60, 70+(i-4)*60, 40, 40);
  }
  else if (i<12){ 
   ellipse(70+(4-i%8)*60, 70+4*60, 40, 40);
  }
  else if (i<16){
   ellipse(70, 70+(4-i%12)*60, 40,40); 
  }
    else if (i<19){
   ellipse(70+(i-15)*60, 70+60, 40,40); 
  }
    else if (i<21){
   ellipse(70+3*60, 70+(i-17)*60, 40,40); 
  }
    else if(i<23){
      ellipse(70+(3-i%20)*60, 70+3*60, 40, 40);
    }
  
}
function determineColor(i){
  let from = color(135, 206, 235);
  let to = color(25, 25, 112);
  let col = lerpColor(from, to, i*.06);
  return col;
}
