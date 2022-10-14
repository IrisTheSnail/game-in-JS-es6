export default function Houm(){
    var w = window.innerWidth;
    if(w >= 617){
        return(
            <div className="mii" id="coo">
                <div className="mi" id="texte">
                    <h1 className="txt welcome">Welcome to my website!</h1>
                    <div className="txt who">

                        coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo
                        coo coo coo coo
                    </div>
                </div>
                <img className="mi cv" src="mi.png" alt="mi"></img>
            </div>
        );//<img className="mi cv" src="mi.png" alt="mi"></img>
        
    }else { //2 : we re on a tablet or a cellphone
        return(
            <div className="mii2" id="coo2">
                <img className="mi2 cv2" src="mi.png" alt="mi"></img>
                <div className="mi2" id="texte2">
                    <h1 className="txt2 welcome2">Welcome to my website!</h1>
                    <div className="txt2 who2">

                        coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo
                        coo coo coo coo
                    </div>
                </div>
            </div>
        );//<img className="mi2 cv2" src="mi.png" alt="mi"></img>
    }
}
