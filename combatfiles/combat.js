let boxiHP = 20;
let boxiMax = 20;
let brianHP = 20;
let brianMax = 20;

let boxiBar = document.getElementById("boxiHealthFill");
let brianBar = document.getElementById("brianHealthFill");

function updateBars() {
    let boxiWidth = (boxiHP / boxiMax) * 100;
    let brianWidth = (brianHP / brianMax) * 100;

    boxiBar.style.width = boxiWidth + "%";
    brianBar.style.width = brianWidth + "%";
}

function updateHealth(who, amount) {
    if (who === "Boxi") {
        boxiHP = amount;
        if (boxiHP < 0) boxiHP = 0;
        if (boxiHP > boxiMax) boxiHP = boxiMax;
    }
    if (who === "Brian") {
        brianHP = amount;
        if (brianHP < 0) brianHP = 0;
        if (brianHP > brianMax) brianHP = brianMax;
    }
    updateBars();
}

updateBars();