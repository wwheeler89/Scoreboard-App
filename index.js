let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")
let homePoints = 0
let guestPoints = 0
// resetH = document.getElementById("resetHome")
// resetG = document.getElementById("resetGuest")


function addH1() {
    homePoints += 1
    homeScoreEl.textContent = homePoints
}

function addH2() {
    homePoints += 2
    homeScoreEl.textContent = homePoints
}

function addH3() {
    homePoints += 3
    homeScoreEl.textContent = homePoints
}

function addG1() {
    guestPoints += 1
    guestScoreEl.textContent = guestPoints
}

function addG2() {
    guestPoints += 2
    guestScoreEl.textContent = guestPoints
}

function addG3() {
    guestPoints += 3
    guestScoreEl.textContent = guestPoints
}

function resetHome() {
   homePoints = 0
    homeScoreEl.textContent = homePoints
}

function resetGuest() {
    guestPoints = 0
    guestScoreEl.textContent = guestPoints
}