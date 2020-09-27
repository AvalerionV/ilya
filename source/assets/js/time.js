async function time() {
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1) + "/" + currentdate.getFullYear() + " - " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    $(".current-dt").html(datetime); 
}

async function rotateA() {
    $(".dt").removeClass("a-rotate").addClass("b-rotate")
}

async function rotateB() {
    $(".dt").removeClass("b-rotate").addClass("c-rotate")
}

async function rotateC() {
    $(".dt").removeClass("c-rotate").addClass("a-rotate")
}

async function rotate() {
    if($(".dt").hasClass("a-rotate")) {
        rotateA();
    } else if ($(".dt").hasClass("b-rotate")) {
        rotateB();       
    } else {
        rotateC();
    }
}

window.setInterval(function(){
  time(); rotate();
}, 1000);
