// const current_rotation = 0;

// document.querySelector(".doliprane").addEventListener('click', function(){
//     current_rotation +=90;
//     document.querySelector(".doliprane").style.transform = 'doliprane(' + current_rotation + 'deg)';
// });

// canvas width=600px height=600px

function draw() {
    var canvas = document.getElementById('tri_grid');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.moveTo(0, 0);
        
        ctx.beginPath();
        
        ctx.moveTo(300, 25);
        ctx.lineTo(300, 25);
        ctx.lineTo(563, 580);
        ctx.lineTo(37, 580);
        ctx.lineTo(300, 25);
        ctx.linewidth = 300;
        ctx.fillStyle = "brown";
        ctx.fill();
        ctx.moveTo(300, 0);
        ctx.lineTo(20, 590);
        ctx.lineTo(580, 590);
        ctx.lineTo(300, 0);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.linewidth = 100;
        ctx.strokeStyle = "#000";
        ctx.stroke();
        ctx.moveTo(300, 120);
        ctx.arc(300, 120, 40, 0, 2*Math.PI, true);
        ctx.moveTo(300, 540);
        ctx.arc(300, 540, 40, 0, 2*Math.PI, true);
        ctx.moveTo(300, 330);
        ctx.arc(300, 330, 40, 0, 2*Math.PI, true);
        ctx.moveTo(250, 225); //y=225
        ctx.arc(250, 225, 40, 0, 2*Math.PI, true);
        ctx.moveTo(350, 225); //y=225
        ctx.arc(350, 225, 40, 0, 2*Math.PI, true);
        ctx.moveTo(200, 330); //x=200 - y=330 
        ctx.arc(200, 330, 40, 0, 2*Math.PI, true);
        ctx.moveTo(400, 330); //x=400 - y=330
        ctx.arc(400, 330, 40, 0, 2*Math.PI, true);
        ctx.moveTo(150, 435); //x=150 - y=435
        ctx.arc(150, 435, 40, 0, 2*Math.PI, true);
        ctx.moveTo(250, 435); //x=150 - y=435
        ctx.arc(250, 435, 40, 0, 2*Math.PI, true);
        ctx.moveTo(350, 435); //x=150 - y=435
        ctx.arc(350, 435, 40, 0, 2*Math.PI, true);
        ctx.moveTo(450, 435); //x=150 - y=435
        ctx.arc(450, 435, 40, 0, 2*Math.PI, true);
        ctx.moveTo(150, 435); //x=150 - y=435
        ctx.arc(150, 435, 40, 0, 2*Math.PI, true);
        ctx.moveTo(100, 540); //x=100 - y=540
        ctx.arc(100, 540, 40, 0, 2*Math.PI, true);
        ctx.moveTo(200, 540); //x=100 - y=540
        ctx.arc(200, 540, 40, 0, 2*Math.PI, true);
        ctx.moveTo(400, 540); //x=100 - y=540
        ctx.arc(400, 540, 40, 0, 2*Math.PI, true);
        ctx.moveTo(500, 540); //x=100 - y=540
        ctx.arc(500, 540, 40, 0, 2*Math.PI, true);
        ctx.fillStyle = "#777777";
        ctx.fill();
    }
}

draw();

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

class Entity {
    constructor(coorx, coory, selected){
        var newdiv = document.createElement("div"); //mhm hada morbba3
        newdiv.classList.add("entity");
        newdiv.style.top = coory + "px";
        newdiv.style.left = coorx + "px";
        document.getElementById("for_shame").appendChild(newdiv);

        this.selected = selected; //1 : if pleine, nail - the initial state
        //2 : if pleine, nail, selected
        //3 : if empty
        var crop = document.getElementById("crop");
        newdiv.classList.add("doliprane");
        newdiv.appendChild(crop);
        this.element = newdiv;        
    }

    change_state(new_state){
        this.selected = new_state;
        if(new_state == 2) {
            this.element.style.backgroundColor = "blue";

        }
        if(new_state == 3){
            this.element
        }

    }
    
}

// 1 : 
var newentity = new Entity(435, 150, 1);
newentity.change_state()