$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["activity", "season", "food", "vacationActivity", "animal"];
    var userAnswer = 0;

    blanks.forEach(function(blank) {
      userAnswer += parseInt($("select#" + blank).val());
    });

    if (userAnswer <= 5) {
      $("#city").show();
    }
    else if (userAnswer === 6 || userAnswer >= 8 && userAnswer <= 10) {
      $("#mountain").show();
    }
    else if (userAnswer === 11 || userAnswer >= 13) {
      $("#beach").show();
    }
    else if (userAnswer === 7 || userAnswer === 12) {
      $("#combo").show();
    }

    event.preventDefault();
  });

  $("#redoCity").click(function() {
    location.reload();
  });

  $("#redoMtn").click(function() {
    location.reload();
  });

  $("#redoBeach").click(function() {
    location.reload();
  });

  $("#redoCombo").click(function() {
    location.reload();
  });

});
