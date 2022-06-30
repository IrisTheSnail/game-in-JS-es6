var bord = new Board();

var coor;

/* It should do the css move, cheking on the whole board, uses Board.move
 * and other stuff
 * @param   
 *
 */

var abstract;
var fail_counter = 0;

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

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    if(name === "r"){
        console.log(`Key pressed ${name} \t Key code value: ${code}`);
        bord._reset();
        update();
        fail_counter++;
        if(fail_counter == 1){
            document.getElementById('count').innerHTML = "You resetted " + fail_counter.toString() + " time.";
        }else{
            document.getElementById('count').innerHTML = "You resetted " + fail_counter.toString() + " times."; 
        }
    }
    }, false);