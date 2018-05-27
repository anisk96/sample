$(function() {

  var player1 = true;
  var player2 = false;

  var p1 = 0;
  var p2 = 0;

  var winner = null;
  var state = null;
  var final = null;

  $('#mula').html("Start");
  $('.lagi').hide();

  $("#mula").click(function() {
    countUp();
    $('#mula').hide();
    $('.lagi').show();
    $(".button").click(function(){
      if(player1){
        $(this).addClass("X");
        $('.X').text("X");
        p1 = $(this).text();
        player1 = false;
        player2 = true;
      }else {
        $(this).addClass("O");
        $('.O').text("O");
        p2 = $(this).text();
        player1 = true;
        player2 = false;
      }
      judge();
      if(final != null) {
        alert(final);
      }
    });
  });

  function judge(){


   b1 = $('#btn01').text();
   b2 = $('#btn02').text();
   b3 = $('#btn03').text();
   b4 = $('#btn04').text();
   b5 = $('#btn05').text();
   b6 = $('#btn06').text();
   b7 = $('#btn07').text();
   b8 = $('#btn08').text();
   b9 = $('#btn09').text();

    if(b1===p1 && b2===p1 && b3===p1 ||
       b4===p1 && b5===p1 && b6===p1 ||
       b7===p1 && b8===p1 && b9===p1 ||
       b1===p1 && b5===p1 && b9===p1 ||
       b3===p1 && b5===p1 && b7===p1 ||
       b1===p1 && b4===p1 && b7===p1 ||
       b2===p1 && b5===p1 && b8===p1 ||
       b3===p1 && b6===p1 && b9===p1 ){
      winner = "Player1 ";
      state = "win";
    }else if(b1===p2 && b2===p2 && b3===p2 ||
       b4===p2 && b5===p2 && b6===p2 ||
       b7===p2 && b8===p2 && b9===p2 ||
       b1===p2 && b5===p2 && b9===p2 ||
       b3===p2 && b5===p2 && b7===p2 ||
       b1===p2 && b4===p2 && b7===p2 ||
       b2===p2 && b5===p2 && b8===p2 ||
       b3===p2 && b6===p2 && b9===p2 ){
        winner = "Player2 ";
        state = "win";
    }else if((b1===p1||b1===p2) && (b2===p1||b2===p2) && (b3===p1||b3===p2)
      && (b4===p1||b4===p2) && (b5===p1||b5===p2) && (b6===p1||b6===p2)
      && (b7===p1||b7===p2) && (b8===p1||b8===p2) && (b9===p1||b9===p2)) {
      state = "Draw";
      winner = "";
    }
    if ( winner != null && state != null){
      final = winner + state + " at " + time;
    }
  }

  var min = 0;
  var sec = 0;
  var miliSec = 0 ;
  var strM, strS, strMS;
  var time = 0;

  function countUp() {
    miliSec++;
    if(miliSec == 100){
      sec++;
      miliSec = 0;
      if(sec == 60){
        min++;
        sec = 0;
      }
    }

    strMS=miliSec;
    strM=min;
    strS=sec;

    time = strM + ":" + strS + ":" + strMS;
    setTimeout(countUp, 9.2);
  }
});
