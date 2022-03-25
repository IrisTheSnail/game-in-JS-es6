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

class Screw {
    constructor(coorx, coory, selected){

        this.coorx = coorx;
        this.coory = coory;
        this.selected = selected;
        let node = document.getElementById("ourthing");
        var clone = node.cloneNode(true);

        document.getElementById("for_shame").appendChild(clone);
        clone.style.left = coorx;
        clone.style.top = coory;
        this.screw = clone;
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
        this.screw.style.top = this.coorx;
        this.screw.style.left = this.coory;
    }

    set state(new_state){
        this.selected = new_state;
    }
    //has -- retruns a boolean: does the attribute exist?
    move(finalx, finaly) {
        //moove a screw form a place to another :3
            //made of : change_coor + animation + 
            //made of : change_coor + 
        let rs = getComputedStyle(document.querySelector(':root'));
        rs.style.setProperty('--cible-x', finalx);
        rs.style.setProperty('--cible-y', finaly);
        rs.style.setProperty('--source-x', this.coorx);
        rs.style.setProperty('--source-y', this.coory);
        
    }

}

var nail = new Screw("1000px", "100px", true);

//nail.change_coor("300px", "300px");

//ratt mossiba = new module_simula();

//-- mechanics --
// <div class="lol  bar">
//toogle : kant kayna kay7yydha, makantch, kayssn3ha 
//dispatchEvent.classList.toggle("foo");