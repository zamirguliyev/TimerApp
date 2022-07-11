

const startStopBtn= document.querySelector('#startStopBtn')
const resetBtn= document.querySelector('#resetBtn')


let seconds = 0
let minutes = 0
let hours = 0

let loadingSeconds = 0
let loadingMinutes = 0
let loadingHours = 0


let timerInterval=null
let timerStatus= "stopped"


function stopWatch(){

    seconds++
    if(seconds/60 === 1){
        seconds=0
        minutes ++

        if(minutes/ 60 ===1){
            minutes=0
            hours++
        }
    }


    if (seconds<10) {
        loadingSeconds= "0" + seconds.toString()
    } else {
     loadingSeconds = seconds   
    }

    if (minutes<10) {
        loadingMinutes= "0" + minutes.toString()
    } else {
     loadingMinutes = minutes   
    }

    if (hours<10) {
        loadingHours= "0" + hours.toString()
    } else {
     loadingHours = hours   
    }


    let displayTimer = document.getElementById('timer').innerText = loadingHours + ":" + loadingMinutes + ":" + loadingSeconds 
}




startStopBtn.addEventListener('click',function(){
    if(timerStatus === "stopped"){
        timerInterval=window.setInterval(stopWatch,1000)
        document.getElementById('startStopBtn').innerHTML=`<i class="fa-solid fa-pause" id="pause"></i>`
        timerStatus ="started"
    }else{
        window.clearInterval(timerInterval)
        document.getElementById('startStopBtn').innerHTML= `<i class="fa-solid fa-play" id="play"></i>`
        timerStatus="stopped"
    }
})



resetBtn.addEventListener('click',function(){

    window.clearInterval(timerInterval)
    seconds=0
    minutes=0
    hours=0

    document.getElementById('timer').innerHTML = "00:00:00"

})