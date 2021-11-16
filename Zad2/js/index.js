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

var btn = document.getElementById("ahover");
function changeC() {
    if(btn.classList.contains("rainbow")){
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    btn.style.color = color;
    btn.style.borderColor = color;
    setTimeout("changeC()", 550);
    }
}
btn.addEventListener("mouseover", function() {
    btn.classList.add("rainbow");
    changeC();
})
btn.addEventListener("mouseout", function() {
    btn.classList.remove("rainbow");
    btn.style.color = "white";
})
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
btn.addEventListener("click", function() {
    btnColor = btn.style.color;
    rgb = btnColor.replace(/[^\d,]/g, '').split(',');
    document.getElementById("colorpicker").value = rgbToHex(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));
})

document.addEventListener('keypress', function (event) {
    if (event.key === 'S') {
      console.log("arrowd")
    }
    const anchor = document.getElementById('btnhref');
    anchor.click();
  });