$(document).ready(function () {


  $("#ageinput").submit(function (event) {
    const age = parseInt($("#userage").val());
    event.preventDefault();
    if (age >= 18) {
      $('#canVote').show();
      $('#ageinput').hide();
    }
    else {
      $('#cantVote').show();
      $('#ageinput').hide();
    }
  });
});