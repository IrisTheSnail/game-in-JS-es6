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
        nested.map(element => {
            coor = mapping(i, j);
            j++;
            newentity = new Entity(coor[0], coor[1], 1); 
        });
        i++; j=0;
    });

