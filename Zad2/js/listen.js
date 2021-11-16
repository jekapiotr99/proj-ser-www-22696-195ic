window.addEventListener("load", gettime());
function gettime() {
    var date = new Date();
    this.year = date.getUTCFullYear();
    this.day = date.getUTCDate();
    this.month = date.getMonth()+1;
    var hr = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s
    }
    if(document.getElementById("clock") != null) {
        document.getElementById("clock").innerHTML = year + '/' + month + '/' + day + ', ' + hr + ":" + m + ":" + s;
    }
    setTimeout("gettime()", 1000);
}

