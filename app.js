var cpu = document.getElementById("cpu");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var boxSet = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
var boxIDSet = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];

var turn = 0;
var cpuOn = 0;
var turnCount = 0;
var gameOver = 0;
var nextBox;
var allClear = 0;
var drawFix = 0;

function reset() {
  for (var i=0; i<boxSet.length; i++) {
    boxSet[i].innerHTML = "&nbsp;";
    boxIDSet = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];
    turnCount = 0;
    drawFix = 0;
  }
}

$('.col').click(function() {
  current = this;
  
  if (current.innerHTML == "&nbsp;" && turn == 0) {
    current.innerHTML = "X";
    turn = 1;
    turnCount++;
    boxIDSet.splice(boxIDSet.indexOf(current.id), 1)
    allClear = 1;
  } else if (current.innerHTML == "&nbsp;" && turn == 1) {
    current.innerHTML = "O";
    turn = 0;
    turnCount++;
    boxIDSet.splice(boxIDSet.indexOf(current.id), 1)
    allClear = 1;
  }
  
  if (cpuOn == 1 && allClear == 1 && drawFix == 0) {
    nextBox = boxIDSet[Math.floor(Math.random()*boxIDSet.length)];
    nextBox = document.getElementById(nextBox);
    if (turn == 1) {
      nextBox.innerHTML = "O";
      turnCount++;
      boxIDSet.splice(boxIDSet.indexOf(nextBox.id), 1)
      turn = 0;
      allClear = 0;$('#choice').click(function() {
  if(choice.innerHTML == "PRESS TO START WITH O") {
    choice.innerHTML = "PRESS TO START WITH X";
    turn = 1;
    reset();
  } else if (choice.innerHTML = "PRESS TO START WITH X") {
    choice.innerHTML = "PRESS TO START WITH O";
    turn = 0;
    reset();
  }
});
    } else if (turn == 0) {
      nextBox.innerHTML = "X";
      turnCount++;
      boxIDSet.splice(boxIDSet.indexOf(nextBox.id), 1)
      turn = 1;
      allClear = 0;
    }
    if (turnCount == 8) {
      drawFix = 1;
    }
  }
  
  var win1 = box1.innerHTML+box2.innerHTML+box3.innerHTML;
  var win2 = box4.innerHTML+box5.innerHTML+box6.innerHTML;
  var win2 = box4.innerHTML+box5.innerHTML+box6.innerHTML;
  var win3 = box7.innerHTML+box8.innerHTML+box9.innerHTML;
  var win4 = box1.innerHTML+box4.innerHTML+box7.innerHTML;
  var win5 = box2.innerHTML+box5.innerHTML+box8.innerHTML;
  var win6 = box3.innerHTML+box6.innerHTML+box9.innerHTML;
  var win7 = box1.innerHTML+box5.innerHTML+box9.innerHTML;
  var win8 = box3.innerHTML+box5.innerHTML+box7.innerHTML;
  var winSet = [win1, win2, win3, win4, win5, win6, win7, win8];
  
  if (winSet.indexOf("XXX") != -1) {
    alert("X Wins!");
    reset();
    gameOver = 1;
  } else if (winSet.indexOf("OOO") != -1) {
    alert("O Wins!");
    reset();
    game0ver = 1;
  }
  
  if (turnCount == 9 && gameOver != 1) {
    alert("It's a Draw!");
    reset();
  }
  
  gameOver = 0;
});

$('#cpu').click(function() {
  if(cpu.innerHTML == "PRESS TO PLAY AGAINST CPU") {
    cpu.innerHTML = "PRESS TO PLAY AGAINST HUMAN";
    cpuOn = 1;
    reset();
  } else if (cpu.innerHTML = "PRESS TO PLAY AGAINST HUMAN") {
    cpu.innerHTML = "PRESS TO PLAY AGAINST CPU";
    cpuOn = 0;
    reset();
  }
});

$('#choice').click(function() {
  if(choice.innerHTML == "PRESS TO START WITH O") {
    choice.innerHTML = "PRESS TO START WITH X";
    turn = 1;
    reset();
  } else if (choice.innerHTML = "PRESS TO START WITH X") {
    choice.innerHTML = "PRESS TO START WITH O";
    turn = 0;
    reset();
  }
});
