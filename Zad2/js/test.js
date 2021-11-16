document.getElementById("box1").addEventListener("wheel", function(event) {
    el = document.getElementById("box1");
    
    console.log(event.wheelDelta);
    opac = parseFloat(el.style.opacity);
    opac += (event.wheelDelta/1200);
    el.style.opacity = opac;
    console.log(opac);
    
})

document.getElementById("box2").addEventListener("mousemove", function(event){
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("cords").innerHTML = "X: " + x + ",Y: " + y;
})

window.addEventListener("keyup", function(event){
    document.getElementById("text").innerHTML += event.key;
})

document.getElementById("box4").addEventListener("copy", function(event){
    console.log("gsdfsd");
    document.getElementById("text2").innerHTML = "Skopiowałeś mnie!";
})