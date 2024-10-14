console.log("The script in connected alright!");
//Declaring variables
let grids = document.querySelectorAll(".gamegrid .grid");
let cur = "X";
let display = document.querySelector(".contentgrid span");
let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let winy = "N";
let resetbutton = document.querySelector("button");
let music = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let image = document.querySelector("img");


grids.forEach(grid => {
    grid.addEventListener("click", () => {
        if (winy == "N"){
            music.play();
            console.log("You clicked on: ", grid.id);
            grid.innerHTML = cur;
            changeofcur();
            display.innerHTML = cur + `"s turn`;
            win();
        }
    }
    )
});


function changeofcur() {
    if (cur == "X") {
        cur = "Y";
    }
    else {
        cur = "X";
    }
}

function win() {
    for (wincom of arr) {
        // console.log(wincom[0], wincom[1], wincom[2]);
        // console.log(grids[arr[0][0]].innerHTML);
        // console.log(grids[wincom[0]].innerHTML, grids[wincom[1]].innerHTML, grids[wincom[2]].innerHTML);
        if (
            (grids[wincom[0]].innerHTML == "X" && grids[wincom[1]].innerHTML == "X" && grids[wincom[2]].innerHTML == "X")
            ||
            (grids[wincom[0]].innerHTML == "Y" && grids[wincom[1]].innerHTML == "Y" && grids[wincom[2]].innerHTML == "Y")
        ) {
            // console.log("someone won");
            // console.log(cur, " wins");
            changeofcur();
            display.innerHTML = cur + " wins";
            winy = "Y";
            image.style.display = "inline";
            gameover.play();
            break;
        }

    }
}

resetbutton.addEventListener("click", () => {
    winy = "N";
    grids.forEach(grid => {
        grid.innerHTML = " ";
    })
    display.innerHTML = `X"s turn`;
    cur = "X";
    image.style.display = "none";
})
