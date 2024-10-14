//Initializing Varibles
let music = new Audio("songs/1.mp3");
let songnames = ["Legion", "Cartel", "They Mad", "Plug Walk", "Song Title", "Safety Dance", "Back It Up", "Name1", "Name2", "True Love"];
let songs = [

    "songs/1.mp3",
    "songs/2.mp3",
    "songs/3.mp3",
    "songs/4.mp3",
    "songs/5.mp3",
    "songs/6.mp3",
    "songs/7.mp3",
    "songs/8.mp3",
    "songs/9.mp3",
    "songs/10.mp3"

]
let i;
let gifcon = document.querySelector(".bottom img");
let songNameIdentifier = document.querySelector(".bottom span");


// for playing songs from main content 
let allSongButtons = document.querySelectorAll(".container .songlist .song .play .songPlay");
allSongButtons = [].slice.call(allSongButtons);
let allSongButtonsI = document.querySelectorAll(".container .songlist .song .play .songPlay i");
allSongButtonsI = [].slice.call(allSongButtonsI);

allSongButtons.forEach((button) => {
    i = 0;
    button.addEventListener("click", () => {
        i = allSongButtons.indexOf(button);
        // console.log(i);
        if (allSongButtonsI[i].className == "fa-solid fa-2x fa-pause") {
            allSongButtonsI[i].className = "fa-solid fa-2x fa-play";
            // console.log("Hello");
            music.pause();
            gifcon.style.display = "none";
        }
        else {
            allSongButtonsI[i].className = "fa-solid fa-2x fa-pause";
            music = new Audio(songs[i]);
            music.play();
            // #rangebar update
            let rangebar = document.getElementById("rangebar")
            music.addEventListener("timeupdate", () => {
                // console.log("timeupdate");
                var progress = parseInt((music.currentTime / music.duration) * 1000);
                // console.log(progress);
                rangebar.value = progress;
            })
            gifcon.style.display = "block";
            songNameIdentifier.innerHTML = songnames[i];
            songNameIdentifier.style.display = "inline";
        };
        bottomPlayFunc();
        console.log(i);
    })
});


// for playing songs from the bottom bar
let bottomPlay = document.querySelector(".bottom #play i");

//Bottom bar event listeners
bottomPlay.addEventListener("click", () => {   //Modified bottomPlayFunc
    if (bottomPlay.className == "fa-solid fa-2x fa-pause") {
        bottomPlay.className = "fa-solid fa-2x fa-play";
        allSongButtonsI[i].className = "fa-solid fa-2x fa-play";
        music.pause();
        gifcon.style.display = "none";
    }
    else {
        bottomPlay.className = "fa-solid fa-2x fa-pause";
        allSongButtonsI[i].className = "fa-solid fa-2x fa-pause";
        music.play();
        // #rangebar update
        let rangebar = document.getElementById("rangebar")
        music.addEventListener("timeupdate", () => {
            // console.log("timeupdate");
            var progress = parseInt((music.currentTime / music.duration) * 1000);
            // console.log(progress);
            rangebar.value = progress;
        })
        gifcon.style.display = "inline";
    };
});

function bottomPlayFunc() {
    if (bottomPlay.className == "fa-solid fa-2x fa-pause") {
        bottomPlay.className = "fa-solid fa-2x fa-play";
        // music.pause();
    }
    else {
        bottomPlay.className = "fa-solid fa-2x fa-pause";
        // music.play();

    };
}

let next = document.querySelector(".bottom .play #next");
let nexti = document.querySelector(".bottom .play #next i");
next.addEventListener("click", () => {
    i++;
    if (allSongButtonsI[i].className == "fa-solid fa-2x fa-pause") {
        allSongButtonsI[i].className = "fa-solid fa-2x fa-play";
        // console.log("Hello");
        music.pause();
        gifcon.style.display = "none";
    }
    else {
        allSongButtonsI[i].className = "fa-solid fa-2x fa-pause";
        music = new Audio(songs[i]);
        music.play();
        // #rangebar update
        let rangebar = document.getElementById("rangebar")
        music.addEventListener("timeupdate", () => {
            // console.log("timeupdate");
            var progress = parseInt((music.currentTime / music.duration) * 1000);
            // console.log(progress);
            rangebar.value = progress;
        })
        gifcon.style.display = "block";
        songNameIdentifier.innerHTML = songnames[i];
        songNameIdentifier.style.display = "inline";
    };
    bottomPlayFunc();
    console.log(i);
})

let prev = document.querySelector(".bottom .play #previous");
let previ = document.querySelector(".bottom .play #previous i");
prev.addEventListener("click", () => {
    i--;
    if (allSongButtonsI[i].className == "fa-solid fa-2x fa-pause") {
        allSongButtonsI[i].className = "fa-solid fa-2x fa-play";
        // console.log("Hello");
        music.pause();
        gifcon.style.display = "none";
    }
    else {
        allSongButtonsI[i].className = "fa-solid fa-2x fa-pause";
        music = new Audio(songs[i]);
        music.play();
        // #rangebar update
        let rangebar = document.getElementById("rangebar")
        music.addEventListener("timeupdate", () => {
            // console.log("timeupdate");
            var progress = parseInt((music.currentTime / music.duration) * 1000);
            // console.log(progress);
            rangebar.value = progress;
        })
        gifcon.style.display = "block";
        songNameIdentifier.innerHTML = songnames[i];
        songNameIdentifier.style.display = "inline";
    };
    bottomPlayFunc();
    console.log(i);
})
