## Card Game

## Technologies

This application is built with:
- Javascript

And tested with:
- Jasmine

## How to use

- Clone this repo
- Once the repo has been cloned, go to project root
- Open SpecRunner.html to run the tests
- Open index.html in Chrome and use the console

**Useful information:**

The init.js is loaded when the index.html page is opened, and it recreates the following conditions:

- Creates a deck of 52 cards, comprised of 4 suits (hearts, clubs, spades and diamonds) each with 13 values (Ace, two, three, four, five, six, seven, eight, nine, ten, jack, queen and king)
- There are four players waiting to play around a table
- The deck arrives in perfect sequence (so, ace of hearts is at the bottom, two of hearts is next, etc. all the way up to king of diamonds on the top)
- The deck that, is in sequence, is shuffled so that no two cards are still in sequence.
- Seven cards are then dealt to each player (one card to the each player, then a second card to each player, and so on)

![printout_example](https://image.ibb.co/f0Zv2v/Screen_Shot_2017_07_12_at_23_38_53.png)


To clear this and start fresh, create a new instance of the AppController:

```
appController = new Controller();
```

## Approach

I began by spending some time visualising the structure of the application.  I also broke up the task into small user stories, and initially just focussed on the core functionality of the application specified in the instructions.  

### User stories for features
```
Core Game

As a player
So that I can participate in the game
I would like to be able to add myself a player

As a player
So that my friends can join in the game
I would like to be able to add my multiple friends as players

As a player
So that we can prepare for a game
I would like a fresh deck of cards in perfect sequence

As a player
So that we can have a fair game
I would like to be able to shuffle the cards properly so that no two cards appear in sequence

As a player
So that we can begin the game
I would like to be able to deal out the cards to all the players

As a player
So that I can keep track of what cards I have
I would like to be able to look at my current held cards


Extra Functionality / Better Extensibility

As a player
So that I can use my cool new custom card deck
I would like to be able to specify what type of deck we’re using

As a player
So that I can try new shuffling techniques
I would like to be able to specify which shuffling method I want to do

As a player
So that I can know who I am playing against
I would like to be able to specify a name for each participating player

As a player
So that I can check how many people are currently involved in this game
I would like to be able to check how many players are currently playing

As a player
So that I can play a different type of game
I would like to be able to specify how many cards are to be dealt to each player
```

Afterwards, I added some extra user stories which I felt would lend itself to a more functional and modular / extensible application.  Below is a basic sketch of how I wanted the application to be designed.

![ScreenShot](https://image.ibb.co/mV7Xhv/20170712_220101.jpg)

I debated how many different classes seemed logical for the different components of the application, and I knew early on that I wanted to keep these models separate from each other.  I eventually decided that it made more sense for me to follow an MVC type structure, where the controller would be responsible for delegating / calling upon the models to carry out the task and deal with the more complex logic.  Given that this was designed to be a command line application, I have no intention to implement the ‘view’ component of the MVC structure.  However, I feel designing the application in this way, would allow a front-end to be added in the future without much fuss.

Now that I was happy with how the application would be structured, I began by setting up the Jasmine testing suite, and then writing a small test to check for whether the Player class existed.  This small test failed, and I then moved on to making it pass, before then moving onto the next test.  This is the same approach I used throughout the whole project.

## Struggles & Successes

- ### Testing the Deck class:

Testing my loop created a correct set of cards was not something I could do without separating any reliability on the Card class.  The createDeck method returned an array of Card objects, which I could not find a way of testing directly.  I felt the most sensible solution was to create an algorithm within a specHelper file that would convert the array of objects to a simple array or arrays containing values, which can then easily be compared to another converted array to determine if the order is correct.  The reason I have listed this as a struggle as I’m still not completely satisfied this is the correct way of going about testing something like this.

- ### Implementing the shuffling:

I implemented the shuffling function based on the Fisher–Yates Shuffle technique, which, starting from the back, goes through each index and swaps it with a random number from a pool that gets smaller on the subsequent loops.  Making sure no two cards were still in sequence was where I spent some time trying a couple of different solutions.   

- Creating a new array to deal with order

- Validating after every move that something wasn’t moving into a sequence (r), or moving back into a sequence (i):

Neither of these were successful and I eventually decided that manually moving cards that fell back into sequence seemed to be inconsistent with a ‘random’ shuffle.  I decided to add an extra integer property to each card that would allow me to keep track of its original position in the deck.  Using this, the deck of cards will be checked after each shuffle to make sure nothing was in sequence, and if it was, the shuffle will be performed again.  My main concerns about this are the efficiency of potentially performing the shuffle repeatedly but, given the size of the deck array, I felt this was not much of a problem for this specific use case.  It also had the upside, at least in my mind, that nothing was being manually moved around during the shuffle.

- ### Thoroughly tested all components

- ### Isolated the testing for the models and controller with doubles

- ### Frequent small commits to Github which allowed me to follow a structured and incremental approach to designing the application
