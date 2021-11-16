function sendForm() {
    var formNode = document.getElementById('formNode');
    while (formNode.firstChild) {
      formNode.removeChild(formNode.lastChild);
    }
    var main = document.getElementById("mainNode");
    main.classList.add("formFade");
    setTimeout(function () {
      main.style.backgroundColor = "transparent";
      main.classList.remove("shadow");
      main.classList.remove("d-flex");
      main.removeChild(formNode);
      var div = document.createElement("div");
      main.appendChild(div);
      var head2 = document.createElement("h2");
      div.classList.add("text-center");
      div.classList.add("align-center");
      div.style.padding = "10%";
      head2.innerHTML = "Wysłano Zgłoszenie!";
      head2.style.fontSize = "52px";
      head2.style.fontFamily = "Lobster";
      div.appendChild(head2);
      main.classList.remove("formFade");
      var img = document.createElement("img");
      img.classList.add("justify-center");
      img.src = "https://www.iconpacks.net/icons/2/free-sent-email-icon-2579-thumb.png";
      div.appendChild(img);
    }, 2000);
  
}

