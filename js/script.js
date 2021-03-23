// Funzioni

function dropdownon1() {
  $('#showlist1').mouseenter(function() {
    $('#myDropdown1').show("show");
  });

}

function dropdownon2() {
  $('#showlist2').mouseenter(function() {
    $('#myDropdown2').show("show");
  });

}

function dropdownon3() {
  $('#showlist3').mouseenter(function() {
    $('#myDropdown3').show("show");
  });

}

function dropdownon4() {
  $('#showlist4').mouseenter(function() {
    $('#myDropdown4').show("show");
  });

}


function init() {
  dropdownon1()
  dropdownon2()
  dropdownon3()
  dropdownon4()
}

// JQUERY
$(document).ready(init);
