function gettime() {
    var date = new Date();
    this.year = date.getUTCFullYear();
    this.day = date.getUTCDate();
    this.month = date.getUTCMonth();
    var hr = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if (m < 10) {
      m = "0" + m
    }
    if (s < 10) {
      s = "0" + s
    }
    document.getElementById("clock").innerHTML = year + '/' + month + '/' + day + ', ' + hr + ":" + m + ":" + s;
    setTimeout("gettime()", 100);
  }

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
  function act() {
    var lab = document.getElementById("labcp");
    var cpicker = document.getElementById("colorpicker");
    cpicker.classList.remove("colornotpicked");
    cpicker.classList.add("colorpicked");
    lab.classList.remove("colornotpicked");
    lab.classList.add("colorpicked");
    document.getElementById("ahover").style.opacity = 0;
    var destination = $('#ahover').offset();
    $('#colorpicker').css({top: destination.top+20, left: destination.left-5});
    var destination = $('#ahover').offset();
    $('#labcp').css({top: destination.top-5, left: destination.left-25});
}
function changebanner() {
    var banner = document.getElementById("bb");
    var cp = document.getElementById("colorpicker").value;
    banner.style.backgroundColor = cp;
}
function printLetterByLetter(dt, message, speed) {
    var i = 0;
    var interval = setInterval(function () {
        document.getElementById(dt).innerHTML += message.charAt(i);
        i++;
        if (i > message.length) {
            clearInterval(interval);
        }
    }, speed);
}
var speed = 1;
var msg = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";
printLetterByLetter("msg", msg, speed);

setTimeout(function () {
    printLetterByLetter("sig", "Z poważaniem, Piotr Jeka", speed);
}, speed * (msg.length - 1) * 16);