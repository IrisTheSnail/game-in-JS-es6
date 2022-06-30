var bord = new Board();

var coor;

/* It should do the css move, cheking on the whole board, uses Board.move
 * and other stuff
 * @param   
 *
 */

var abstract;


var i=0 , j=0;
var newentity;
var concrete_bord = bord.board_state.map(
    nested => {
         str = nested.map(element => {
            coor = mapping(i, j);
            j++;
            newentity = new Entity(coor[0], coor[1], 1);
            return newentity;
        });
        i++; j=0;
        return str;
    });

element = document.getElementById("reset_button");
element.addEventListener("click", function() {
    document.getElementById("reset_button").innerHTML = "Hello World";
    console.log("how to ruin ");
});