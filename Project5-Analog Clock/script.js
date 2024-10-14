let ans = "y";

// Updating digital time
let digihtml = document.querySelector(".time")
function updateTime(){
    if (ans == "y"){
        var date = new Date();
        digihtml.textContent ="Time: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }   
}
setInterval(updateTime, 1000);

//Updating Analog Clock
let secondsarm = document.querySelector(".clock #secondsarm"); 
let minutessarm = document.querySelector(".clock #minutesarm"); 
let hoursarm = document.querySelector(".clock #hoursarm"); 
function updateClock(){
    if (ans == "y"){
        var date = new Date();
        var seconds = date.getSeconds();
        var minutes = date.getMinutes();
        var hours = date.getHours();
        secondsarm.style.transform = `rotate(${seconds*6}deg)`;
        minutessarm.style.transform = `rotate(${minutes*6}deg)`;
        hoursarm.style.transform = `rotate(${hours*30 + minutes*0.5}deg)`;
    };
};
setInterval(updateClock, 1000);

//Play/Stop Button
let button = document.querySelector("button");
button.addEventListener("click", () => {
    ans = ans == "y"? "n":"y";
    console.log(ans);
})



