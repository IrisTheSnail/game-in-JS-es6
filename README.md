# game-in-JS-es6
rows = 5
columns = 10 (9 without the dialogue column)


		! 1  2  3  4  5  6  7  8  9

		1 N  N  N  N  Y  N  N  N  N

		!

		2 N  N  N  Y  N  Y  N  N  N

		!

		3 N  N  Y  N  Y  N  Y  N  N  

		!

		4 N  Y  N  Y  N  Y  N  Y  N 

		!

		5 Y  N  Y  N  Y  N  Y  N  Y 

Rules : 

The goal is to have only one nail in the board at the end.

One move is permitted : to make a nail "jump" above another into a hole, in any direction you choose (a part la verticale).

   +   +   .   =====>   .   .   +
    -____->

The player will remove the first nail, creating the first hole.

Then they have to play along using the move described above.

"One variable for removing the first nail."

"I should make the *select* function correctly, one that will work for all buttons."

"In the *select* function :
	
	The selected nail should turn blue ==> a variable to see if there's a selected one, to proceed.
	
	if there is a selected nail : 
	
		wait for the player to select the hole, it should be a hole.
	
		there must be a nail between the first selcted nail, and the selected hole, if it isn't the case.... some kind of reminder of the rules of the game (I should figure out how to make a window pop up....) 
		
		the nail in-between should disappear, leaving a hole in there.

	
When no other moves are possible : (===> Well this means I need to make a separate function to check this)
	
	if there is one nail left in the board : print("well done or sth...")
	
	else : print("Guess u should reset")

	
	====> sth that can count the number of nails left
		

There is two kinds of variables : local ones and global ones, if a variable is created inside of a function, it dies once we are out of it, which makes it *local*.

Global variables are the ones that the computer remembers as well as its value even when we are out of the loops concerned.

To make a variable global even if it is created inside of a function, you first write a line that introduces the variable, then you assign the value wanted to it,

like this :

  |def sth_sth(stuff) : 
  |	global variable
  |	variable = some value



_____________________________________________________________________________________________________________________________________________-


three cases : 

	+	+	+    : rows_difference == 0 ; columns_difference == 2



	 ________________
	| +		 |
	|		 |
	|		 |
 	|	 +	 |   : rows_difference == 1 ; columns_difference == 1
	|		 |
	|		 |
 	|		+|
        |________________|

	 ________________
	| 		+|
	|		 |
	|		 |
 	|	 +	 |   : rows_difference == 1 ; columns_difference == 1
	|		 |
	|		 |
 	|+		 |
        |________________|






 
