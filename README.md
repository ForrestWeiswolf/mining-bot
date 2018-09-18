## General note

This is very, severely unfinished, since I wasn't feeling well and was not able to make it through all four hours even. But here's what I've got in the 2.5 hours I managed to stick with it for. (Plus a few minutes adding this note after the fact - I hope that's okay under the circumstances)

## Architecture

Requests to the API are handled by functions in endpoints.js, using axios. These are pure functions, and deal with any steps such as stringifying coordinates for move. 

The Bot class has instance methods to move, scan, claim, etc., and keeps track of state. If I want to move the bot, for example, I won't need to input it's callsign to be passed to the API - Bot.move handles that.

All of these methods return promises, since they involve requests to a server. Some of them check that the type / value of the arguments are correct, but I didn't have enought time to be thourough with that.


## Strategy

I didn't quite get to implement this - at the moment the bot just moves one space and claims, which I just did for testing purposes. My plan was to have the bot follow some arbitrary course, claiming and mining as it went, but for it to avoid areas it had already scanned. Not an optimal strategy, but easy to implement - I was planning for the four-hour time limit - and better than chance. Possible refinements could have been to not spend an action claiming in areas with few/low value nodes and to avoid areas that had already been mined by other bot
