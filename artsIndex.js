let rotatingIntro = document.querySelector("#intro");
let timeCount = 0;
let x = 0
function incre(){
    if(x < 360){
        x ++;
        rotatingIntro.style.backgroundImage = "linear-gradient(" + x + "deg, rgb(18, 92, 228), rgb(224, 77, 87))";
    }
    else if(x >= 360){
        x = 0
        timeCount = 0
    }
    timeCount ++;
}
setInterval(incre, 15);