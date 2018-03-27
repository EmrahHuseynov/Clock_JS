var saniye = document.querySelector(".saniye");
var deqiqe = document.querySelector(".deqiqe");
var saat = document.querySelector(".saat");





setInterval(function () {
    var now = new Date();
    var nowdeq = now.getMinutes() * 6;
    var nowsan = now.getSeconds() * 6;
    var nowsaat = (now.getHours() % 12) * 30+nowdeq/12 ;
    
    deqiqe.style.transform = "rotate(" + nowdeq + "deg)";
    saat.style.transform = "rotate(" + nowsaat + "deg)";
    saniye.style.transform = "rotate(" + nowsan + "deg)";
}
    , 1000)



document.u



