# Deathroller
## info about the project
This personal side project written in HTML,CSS and javascript is a simulation of a thing in the game World of Warcraft called deathroll. In the game, you use the command /roll in the chat to get a random number. 
The deathrolling is when you and another player bets with ingame curency and you go back and forth typing /roll the number your opponent got, and in the end someone gets a 1, and that is the loser of the game.

Here is a youtube video by the contentcreater UberDanger that kind of sets the tone for what deathrolling is: https://www.youtube.com/watch?v=jrJap2Kx-qs 

-My vision is to have you play against the computer, where you bet the gold in your goldreserve, and you go back and forth intil you or the computer hits 0. If you win, you get more gold in your reserve, and if you lose you lose the gold you were betting. 

## Current state
### ===2026-02-26===
The game isnt stable yet for playing right now, it got the basic fetures were you roll the amount of gold you want to bet and the game starts, and when the game is done, you get a message in the log chat (to the right) how much you lose, and it takes that away from your fixed gold reserve (10 000 gold when you refresh the site). You do not play against the computer yet, so you can only lose (lol) and it does not have restricts what to type in the chat, so it is possible to just write a higher number then you actually should. The only restriction that is working right now is that you cant bet a higher number then what your gold reserve is. It is also many bugs that i should work on.


## Visions and upcomming features
Here is were i should put the vision of the game, and the features i want to include in the future.

### Get the core game to work properly
I want to get the game to work as i intended it to be. It isnt the most optimized game idea, but it is becouse the idea of the whole game is to simulate the deathroll activity in WoW as much as i should possibly develop it to be. The core that is missing is:
- Get the whole apponent feature to work, so the game isnt pointless becouse you allways lose if you do not play against the computer.
- The ability to save the game outside the session you are in. This is possible with local storage that should save your progress even when you refresh the page, and maybe get a "start a new game" option to clear your whole gold reserve.
- Some minor features that restricts the chat inputs so to game is going as intended.

### Progression system 
I have plans to maybe implement some form of progression system apart from just the gold win/lose cycle. It should be like a levling system were you get xp for quests or something. This thought isnt very clear on how this should manifest, but it levels up the whole point of the game.

### Some sort of shop with ingame currency
I want to impement some sort of shop, maybe simulate vendors or the player driven auction house in WoW were you can buy items. I do not know exactly what the items you buy should do in game but it is a fun thought that i should expand on when the state of the project is ready for this.

### Online play
This is really a long shot, and i do not know how complicated this should be to implement, and i do not have the skill for this type of development yet. But the idea is insead of playing against the computer you should do /rolls against other players. Might scrap this idea i later tho, becouse i do not know if it is a point to implement this in the game at all. Maybe if i do it, then you should have one instance of the game is against the computer and the other online, so you seperate the progression. This should maybe require a log in function, and that requires backend to... 
