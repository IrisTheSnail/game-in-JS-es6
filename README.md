#puzzle
##HOW MANY TIME YOU WILL HAVE TO RESET THE PUZZLE BOARD?

Rules : 

The goal is to have only one nail in the board at the end.

Your first move is to take at nail out of the board.
 
then, you keep removing nails but accoding to a rule. 

You can make a nail "jump" above another into a hole, in any direction you choose (expect vertically).

![alt text](https://github.com/IrisTheSnail/game-in-JS-es6/blob/master/demo/image.jpg?raw=true)



You have to play along using the move described above.

You keep playing till there is no possible move left, in this case, **there should be only one nail left in the board** 

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






 
