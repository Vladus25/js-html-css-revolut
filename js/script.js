// Funzioni

function dropDownOn() {

  var hide = $("li");
  hide.hover(function(){

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
