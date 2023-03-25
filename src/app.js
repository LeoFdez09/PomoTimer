let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');
let button = document.getElementById("start");

let workTime = 25;
let breakTime = 5;

let seconds = '00';


window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

function menu() {
    document.getElementById('tasks').style.transform
}


let compr = 0;

function comprobar() {
    if(compr === 0) {
        compr++
        start()
    } else {
        compr++
    }
}


function start() {
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    //change the time
    seconds = 59;
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    let breakCount = 0;

    //countdown
    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;


        //start
        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes -1;
            if(workMinutes === -1){
                if(breakCount % 2 === 0){
                    alert("PUlSA 'ACEPTAR' PARA INICIAR EL DESCANSO")
                    workMinutes = breakMinutes;
                    breakCount++
                    workTittle.classList.remove("active");
                    breakTittle.classList.add("active");
                } else {
                    workMinutes = workTime;
                    breakCount++
                    breakTittle.classList.remove("active");
                    workTittle.classList.add("active");
                }
            }
            seconds = 59;
        }
    }

    setInterval(timerFunction, 1000); //1000 = 1s
}

