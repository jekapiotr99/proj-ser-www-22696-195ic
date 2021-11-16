function act() {
    var lab = document.getElementById("labcp");
    var cpicker = document.getElementById("colorpicker");
    cpicker.classList.remove("colornotpicked");
    cpicker.classList.add("colorpicked");
    lab.classList.remove("colornotpicked");
    lab.classList.add("colorpicked");
    document.getElementById("ahover").style.opacity = 0;
    var destination = $('#ahover').offset();
    $('#colorpicker').css({ top: destination.top + 20, left: destination.left - 5 });
    var destination = $('#ahover').offset();
    $('#labcp').css({ top: destination.top - 5, left: destination.left - 25 });
  }
  function changebanner() {
    var banner = document.getElementById("bb");
    var cp = document.getElementById("colorpicker").value;
    banner.style.backgroundColor = cp;
  }