// Funzioni

function dropDownOn() {

  var activeDrop= $("li");
  activeDrop.hover(function(){

    $(".dropOn").removeClass("show");
    $(this).find(".dropOn").addClass("show");
  });

}

function dropDownOff() {

  $("body").click(function(){

    $(this).find(".dropOn").removeClass("show");
  });

}



function init() {
  dropDownOn();
  dropDownOff();
}

// JQUERY
$(document).ready(init);
