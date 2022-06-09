// var nodee = document.getElementById("ourthing");
// var clone = nodee.cloneNode(true);

// document.getElementById("for_shame").appendChild(clone);

// clone.style.top = "600px";

//clone wlla create???

var counter = 0;

class Screw {
    constructor(coorx, coory, selected){

        this.coorx = coorx; 
        this.coory = coory;
        this.selected = selected;
        let node = document.getElementById("ourthing");
        var clone = node.cloneNode(true);
        counter++;
        clone.id = 'ourthing' + counter;

        document.getElementById("for_shame").appendChild(clone);
        clone.style.left = coorx + 'px';
        clone.style.top = coory + 'px';
        this.screw = clone;
        clone.style.postion = "absolute";

    }

    get coordinates(){
        let pair = [this.coorx, this.coory];
        return pair;
    }

    get state(){
        return this.selected;
    }

    change_coor(coorx, coory){
        this.coorx = coorx;
        this.coory = coory;
        // document.getElementById(this.screw).style.top = coorx;
        // document.getElementById(this.screw).style.left = coory;
        this.screw.style.top = this.coorx + 'px';
        this.screw.style.left = this.coory + 'px';
    }

    set state(new_state){
        this.selected = new_state;
    }

    //has -- retruns a boolean: does the attribute exist?

    move() {
        var deplace = this.screw;
        var this_coorx = this.coorx;
        var this_coory = this.coory;
        var id = null;
        clearInterval(id);
        var finalx = 30;
        var finaly = 30;
        id = setInterval(move_(finalx, finaly), 50000);
        function move_(finalx, finaly){
            if((finalx == this_coorx) && (finaly == this_coory)){
                clearInterval(id);
            }else{
                if(finalx < this_coorx){
                    this_coorx--;
                    deplace.style.left = this_coorx+'px';
                }
                if(finalx > this_coorx){
                    this_coorx++;
                    deplace.style.left = this_coorx+'px';
                }
                if(finaly < this_coory){
                    this_coory--;
                    deplace.style.top = this_coory+'px';
                }
                if(finaly > this_coory){
                    this_coory++;
                    deplace.style.top = this_coory+'px';
                }
            }
        }
    }
}


//-- mechanics --
// <div class="lol bar">
//toogle : kant kayna kay7yydha, makantch, kayssn3ha
//dispatchEvent.classList.toggle("foo");