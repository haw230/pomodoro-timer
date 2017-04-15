var minutes = 24;
var seconds = 59;
var pause = false;
var takeBreak = 5;
var work = true;
var breakTimer;

function secondsFunc() {
  console.log("seconds:" + seconds);
  console.log("minutes:" + minutes);
  console.log("break minutes" + takeBreak);

  if (work === true) {
    $("#workTime").text(minutes);
    if (!pause) {
      if (minutes > -1) {
        $("#minutes").text(minutes);
      }
      if (seconds < 10) {
        $("#seconds").text("0" + seconds);
        seconds--;
      }
      if (seconds > 9) {
        $("#seconds").text(seconds);
        seconds--;
      }
      if (seconds < 0) {
        minutes--;
        seconds = 59;
      }
      if (seconds === 0 && minutes === 0) {
        work = false;
        $("#status").text("Break!");
        minutes = 24;
      }
    }
  }
  if (work === false) {
    $("#breakTime").text(takeBreak);
    if (!pause) {
      if (takeBreak > -1) {
        $("#minutes").text(takeBreak);
      }
      if (seconds < 10) {
        $("#seconds").text("0" + seconds);
        seconds--;
      }
      if (seconds > 9) {
        $("#seconds").text(seconds);
        seconds--;
      }
      if (seconds < 0) {
        takeBreak--;
        seconds = 59;
      }
      if (takeBreak === 0 && seconds === 0) {
        work = true;
        $("#status").text("Work!");
        takeBreak = 4;
      }
    }
  }

}

//setInterval(secondsFunc, 1000);
var workTimer = setInterval(secondsFunc, 1000);

$("#pause").click(function() {
  pause = true;
});
$("#start").click(function() {
  pause = false;
});
$("#moreBreak").click(function() {
  takeBreak++;
  $("#breakTime").text(takeBreak);
  if (work === false) {
    $("#minutes").text(takeBreak);
  }
});
$("#lessBreak").click(function() {
  if (takeBreak > 1) {
    takeBreak--;
    $("#breakTime").text(takeBreak);
    if (work === false) {
      $("#minutes").text(takeBreak);
    }
  }
});
$("#moreWork").click(function() {

  minutes++;
  $("#workTime").text(minutes);
  if (work === true) {
    $("#minutes").text(minutes);
  }

});
$("#lessWork").click(function() {
  if (minutes > 1) {
    minutes--;
    $("#workTime").text(minutes);
    if (work === true) {
      $("#minutes").text(minutes);
    }
  }
});