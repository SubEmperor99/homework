const guessstatus = document.querySelector(".status")
const score = document.querySelector(".score")
const confirmguess = document.querySelector(".confirm")
const guessflag = document.querySelector(".guessflag")
const lines = document.querySelectorAll("line")
let correct = 0
let wrong = 0
const correctaudio = new Audio("correct.mp3")
const incorrectaudio = new Audio("incorrect.mp3")


class Flag {
    constructor(country, colour_1, colour_2, colour_3) {
        this.country = country
        this.colour_1 = colour_1
        this.colour_2 = colour_2
        this.colour_3 = colour_3
    }
}


const countries = [
    new Flag("austria", "red", "white", "red"),
    new Flag("germany", "black", "red", "yellow"),
    new Flag("armania", "red", "blue", "yellow"),
    new Flag("bulgaria", "white", "green", "red"),
    new Flag("estonia", "blue", "black", "white"),
    new Flag("gabon", "green", "yellow", "blue"),
    new Flag("hungaria", "red", "white", "green"),
    new Flag("russia", "white", "blue", "red"),
    new Flag("netherlands", "red", "white", "blue"),
    new Flag("luxembourg", "red", "white", "light blue"),
    new Flag("yemen", "red", "white", "black"),
    new Flag("sudan", "red", "white", "black"),
    new Flag("sierra leone", "green", "white", "blue"),
    new Flag("botswana", "light blue", "black", "light blue"),
    new Flag("azerbaijan", "blue", "red", "green"),
    new Flag("uzbekistan", "blue", "white", "green"),
    new Flag("thailand", "red", "white", "blue"),
    new Flag("laos", "red", "blue", "red"),
    new Flag("gambia", "red", "blue", "green"),
    new Flag("zambia", "green", "red", "black")
]



let currentflag = countries[Math.floor(Math.random() * countries.length)]
lines[0].style.stroke = currentflag.colour_1
lines[1].style.stroke = currentflag.colour_2
lines[2].style.stroke = currentflag.colour_3


const newflag = function () {
    currentflag = countries[Math.floor(Math.random() * countries.length)]
    lines[0].style.stroke = currentflag.colour_1
    lines[1].style.stroke = currentflag.colour_2
    lines[2].style.stroke = currentflag.colour_3

}

confirmguess.onclick = function () {
    if (!guessflag.value) {
        guessstatus.innerHTML = "Make a Guess!"
    }
    else if (guessflag.value === currentflag.country) {
        guessstatus.innerHTML = "You Guessed Correct!"
        correct += 1
        score.innerHTML = `Correct: ${correct} Wrong: ${wrong}`
        newflag()
        correctaudio.play()

    }
    else {
        guessstatus.innerHTML = "Incorrect!"
        wrong += 1
        score.innerHTML = `Correct: ${correct} Wrong: ${wrong}`
        incorrectaudio.play()

    }
    guessflag.value = ""
    guessflag.focus()
}