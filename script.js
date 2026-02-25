//Todo in JS
//-Restrict the input to just take /rolls for the calculation becouse now you should just typ in the number and it works anyway, 
//You should also restrict the player to just type the right number in /roll so you cant cheat. This maybe is a work for the betValue
//function, and/or some more stricted rules in the main function.

//-Look over the code and the functions on the web page. See what is wonky and needs to polish.
//_____________________________________
//todo when the core works as intended:
//-Make it turnbased so you should play against the computer. This is important becouse the program do not have a point becouse you 
//allways gonna loose lol

//-Get local storage to work for the gold. This do not need to be so complicated tho. But do this when the core works.

//-When the most part of this is done, start to edit the how-to.html so it fits the theme and a tutorial. Maybe link in uberdanger video xD
//_____________________________________
//Some polish things to consider: 
//-When you fil up the chat div, it doesnt scroll down it just creates the scroll weel. This is maybe just a CSS thing i do not remember.




const goldCounter = document.querySelector(".gold")
const mainChat = document.querySelector(".leftChat")
const logChat = document.querySelector(".rightChat")
const chatInput = document.getElementById("chatInput")

let playerGold = 10000 //goldreserve
let newGame = true //controlls if the game it should create a new game
let bet = null //a bet varible for later use when the game starts, then the value changes to the first thing you write

const goldDisplay = document.createElement("p") //just creates the gold reserve on the page
updateGoldReserve() 

goldCounter.appendChild(goldDisplay)

//function for the gold on the screen updates
function updateGoldReserve(){
    goldDisplay.textContent =  playerGold
}

//eventlistener for the enter button, it runs the main function and clean the input
chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startRoll()
        cleanInput()
    }
})

//This is the main logic of the game. It starts to check if there is a new game. If it is (and the bet is accepteble)
//it takes the first bet and create text to indicate that it is a new game. Then it looks if the bet is lower then the goldreserve, if
//it is it types it out, and if the bet is valuble then the game starts. It takes the bet you put in and randomize a output between your 
//input and 1. Then you go back and forth intill the output hits 1. Then the game is over and you loose the bet.
function startRoll (){
    const numberOnly = betValue ()
    if(newGame === true && numberOnly < playerGold){
        bet = betValue()
        const newGameChat = document.createElement("p")
        newGameChat.textContent = `========New game started! Your bet is ${bet} gold========`
        mainChat.appendChild(newGameChat)

    } 
        if (numberOnly > playerGold){
        const errorMessage = document.createElement("p")
        errorMessage.textContent = `Your bet (${numberOnly}g) is to high for your gold value of ${playerGold}`
        mainChat.appendChild(errorMessage)
    } else {
        newGame = false
        const newRoll = Math.floor (Math.random() * numberOnly) + 1
        const rollInChat = document.createElement("p")
        rollInChat.textContent = `player rolls ${newRoll} (1 - ${numberOnly})`
        mainChat.appendChild(rollInChat)
        
        if(newRoll === 1) {
            createInLogChat ()
            playerGold = playerGold - bet
            updateGoldReserve()
            createInLogChat()
            newGame = true
            bet = null
        }
    }
}

//This is for when the game ends. Is says how much you lost, and win in the future
function createInLogChat(){
    const numberOnly = betValue()
    const d = new Date() //The date func isnt working correctly!!!!!! Test in webbrowser
    let time = d.getTime()
    const result = document.createElement("p")
    result.textContent = `[${time}]You lost ${bet} gold`
    logChat.appendChild(result)
}

//Just a clean input function. Should be utilized more maybe?
function cleanInput() {
    chatInput.value = ""
}


//This takes the /roll x and takes away the /roll to just a number and returns it. 
//This function is very nessecary for the whole logic with the game and economy calculations.
function betValue (){
    const inputtedValue = chatInput.value
    const numberOnly = inputtedValue.replace(/\D/g, "")
    return numberOnly
}
