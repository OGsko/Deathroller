//Todo in JS
//-The roll logic is working but very primitive. So the thing is now to restrict
//the chatfunction to just take /roll, or to just allow normal strings and if you type /roll
//it just type it out.
//-Get the economy thing working. Just do the first step in this: give the player a fixed amount and they should 
//play with that. But fix the bet, win, loss thing so it works in /roll
//-Look over the code and the functions on the web page. See what is wonky and needs to polish.

const goldCounter = document.querySelector(".gold")
const mainChat = document.querySelector(".leftChat")
const logChat = document.querySelector(".rightChat")
const chatInput = document.getElementById("chatInput")

let playerGold = 10000 

const goldDisplay = document.createElement("p")
updateGoldReserve()

goldCounter.appendChild(goldDisplay)

//function for the gold on the screen updates
function updateGoldReserve(){
    goldDisplay.textContent =  playerGold
}

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startRoll()
        cleanInput()
    }
})

function startRoll (){
    const inputtedValue = chatInput.value
    const numberOnly = inputtedValue.replace(/\D/g, "")
    const newRoll = Math.floor (Math.random() * numberOnly) + 1
    const rollInChat = document.createElement("p")
    rollInChat.textContent = `player rolls ${newRoll} (1 - ${numberOnly})`
    mainChat.appendChild(rollInChat)
    
    if(newRoll === 1) {
        createInLogChat ()
    }
}

function createInLogChat(){
    const d = new Date() //The date func isnt working correctly!!!!!! Test in webbrowser
    let time = d.getTime()
    const result = document.createElement("p")
    result.textContent = `[${time}]You lost x gold`
    logChat.appendChild(result)
}

function cleanInput() {
    chatInput.value = ""
}