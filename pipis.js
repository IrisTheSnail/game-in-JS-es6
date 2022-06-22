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

var sth_selected = 0; //boolean to see if sth is selected in the board;
var coor_of_selected;   //coordinated of selected nail if one is selected, 
                        //is undefined when nothing is selected
var direction = 0; //the theoretical direction explianed in the comments in board.js 


class Entity {    
    constructor(coorx, coory, selected){
        this.coorx = coorx;
        this.coory = coory;
        var newdiv = document.createElement("div"); //mhm hada morbba3
        newdiv.classList.add("entity");
        newdiv.style.top = coory + "px";
        newdiv.style.left = coorx + "px";
        document.getElementById("for_shame").appendChild(newdiv);

        this.selected = selected; //1 : if pleine, nail - the initial state
        //2 : if pleine, nail, selected
        //3 : if empty
        var child = document.createElement("div");
        child.classList.add("crop");
        newdiv.classList.add("doliprane");
        newdiv.appendChild(child);
        this.element = newdiv;  
        newdiv.addEventListener("click", () => {this._concrete_move();});
        return this;
    }
    //lets not copy stuff, it gets messy, lets create everything from JS

    change_state(new_state){
        sth_selected = 1;
        this.selected = new_state;
        if(new_state == 2) {
            this.element.style.backgroundColor = "#e6a312";
            this.element.firstElementChild.style = "border-top : 10px solid #704700;\n" //hada l mghlo9
            + "border-right : 10px solid #704700;\n" //hada l mghlo9
            + "border-left : 10px solid #FDB201;\n" //hada l mfto7
            + "border-bottom : 10px solid #FDB201"; //hada l mfto7
            console.log("seeeelected");
            return 0;
        }
        if(new_state == 3){
            this.element.classList.remove("doliprane");
            this.element.removeChild(this.element.children[0]);
            console.log("eeeeeerased");
            sth_selected = 0;
            return 0;
        }
        return 1;
    }
    
    /* @private
    */
    _concrete_move(){
        if(bord.game_state == bord.GameState.INITIAL){
            this.change_state(3);
            let abstract = mapping(this.coorx, this.coory);
            bord.initial_move(abstract[0], abstract[1]);
            return 0;
        }

        if(bord.game_state == bord.GameState.MIDGAME){
            //is there anything selected in that damned bord??
            
            if(sth_selected == 0){
                this.change_state(2); //affects sth_selected
                console.log("yeeee midgaaaaame and nothing is selected");
                coor_of_selected = mapping(this.coorx, this.coory);
            }else{
                let abstract = mapping(this.coorx, this.coory);

                //diffrerence == the_clicked hole MINUS the_selected(in yellow)
                console.log(abstract, coor_of_selected);
                
                let difference = [abstract[0] - coor_of_selected[0], abstract[1] - coor_of_selected[1]];
                console.log(difference);
                if(difference[0] == 0 && difference[1] == 2) {direction = 1;}
                if(difference[0] == 0 && difference[1] == -2) {direction = -1;}
                if(difference[0] == 2 && difference[1] == 0) {direction = 2;}
                if(difference[0] == -2 && difference[1] == 0) {direction = -2;}
                if(difference[0] == 2 && difference[1] == 2) {direction = 3;}
                if(difference[0] == -2 && difference[1] == -2) {
                    console.log("direction = -3");
                    direction = -3;
                }
                
                console.log(direction);
                bord.move(coor_of_selected[0], coor_of_selected[1], direction);
                //now the update...
                
            }
        }
        return 1;
    }

    update(){
        
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5-i+1; j++){
                let dis = mapping(this.coorx, this.coory);
                if()
            }
    }
}


/* you give this function a pair in theory, it give you the equivalent pair in pixels
 * and vice versa
 * 
 */
function mapping(x, y){ //x : row|left //y : column|top
    if(y>x) console.log("ya 9lbtihoum ya rak ghalt ga3 f chi w7da");
    
    if(x<5 && y<5 && x>=0 && y>=0){
        if(x==0&&y==0) return [487, 92];
        if(x==1&&y==0) return [437, 197];
        if(x==1&&y==1) return [537, 197];
        if(x==2&&y==0) return [387, 302];
        if(x==2&&y==1) return [487, 302];
        if(x==2&&y==2) return [587, 302];
        if(x==3&&y==0) return [337, 407];
        if(x==3&&y==1) return [437, 407];
        if(x==3&&y==2) return [537, 407];
        if(x==3&&y==3) return [637, 407];
        if(x==4&&y==0) return [287, 512];
        if(x==4&&y==1) return [387, 512];
        if(x==4&&y==2) return [487, 512];
        if(x==4&&y==3) return [587, 512];
        if(x==4&&y==4) return [687, 512];
    }

    if(x>=287 && x<=687 && y>=92 && y<=512){
        if(x==487 && y==92) return [0, 0];
        if(x==437 && y==197) return [1, 0];
        if(x==537 && y==197) return [1, 1];
        if(x==387 && y==302) return [2, 0];
        if(x==487 && y==302) return [2, 1];
        if(x==587 && y==302) return [2, 2];
        if(x==337 && y==407) return [3, 0];
        if(x==437 && y==407) return [3, 1];
        if(x==537 && y==407) return [3, 2];
        if(x==637 && y==407) return [3, 3];
        if(x==287 && y==512) return [4, 0];
        if(x==387 && y==512) return [4, 1];
        if(x==487 && y==512) return [4, 2];
        if(x==587 && y==512) return [4, 3];
        if(x==687 && y==512) return [4, 4];
    }

}

/* It should do the css move, cheking on the whole board, uses Board.move
 * and other stuff
 * @param   
 *
 */


