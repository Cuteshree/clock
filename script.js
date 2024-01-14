var hourEI = document.getElementById("hour");
var minuteEI = document.getElementById("minute");
var secondEI = document.getElementById("second");
var pmamEI = document.getElementById("pmam");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let pmam = "AM";

    if(h>12){
        h = h-12;
        pmam = "PM";

    }

    h = h<10 ? "0" + h :h;
    m = m<10 ? "0" + m :m;
    s = s<10 ? "0" + s :s;
    


    hourEI.innerText = h;
    minuteEI.innerText = m;
    secondEI.innerText = s;
    pmamEI.innerText = pmam;
    setTimeout(() => {
        updateClock();
    }, 1000);

}

updateClock();