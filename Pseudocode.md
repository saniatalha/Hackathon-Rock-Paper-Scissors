## **Game Rules**

You almost certainly know the rules of the game, but let's have a look at them again:

- Both players choose either rock, paper, or scissors.
- If both players choose the same item, it is a tie.
- If player 1 chooses rock and player 2 chooses paper,   
   player 2 wins because paper wraps the rock.
- If player 1 chooses rock and player 2 chooses scissors,  player 1 wins because rock breaks scissors.
- If player 1 chooses scissors and player 2 chooses paper, player 1 wins because scissors cut paper.

 

What do we want to achieve?

- We need to get the three choices in the form of images 
  from the DOM and add a click event listener to them.
- As soon as a click event is captured on either of the 
  choices (rock, paper, scissors). We run a handler function.
- The function should determine what the user selected 
  via the `id` of the item `e.target.id`
- We now need to let the computer choose either of the 
 choices by generating a random number from `0` to `2` and using an array of the choices (***rock, paper, scissors***) and the random number as an index, we can get what the computer chose.
- We now compare the user choice vs the computer choice and update the DOM.
