export default function Header(){
    return (<div className="navBar">
                <div className="header">
                    <a href="hello" className="headings">
                    <i className="kl3 fa-house fas"></i>
                    &ensp; Hello</a>
                    <a href="path" className="headings" onClick={()=>{console.log("coo coo");}}>
                    <i className="kl3 fa-face-laugh-beam fas"></i>
                    &ensp; About me</a>
                    <a href="skills" className="headings" >
                    <i className="kl3 fa-gears fas"/>
                    &ensp; Skills</a>
                    <a href="projects" className="headings" >
                    <i className="kl3 fa-terminal fas"></i>
                    &ensp; Projects</a>
                    
                    <a className="headings" role="button" href="https://drive.google.com/file/d/1VD-Xbra7JtLILpjRI4Ddg2Ge3i60Q_fC/view?usp=sharing">
                        <i className="kl3 fa-file-lines far"/>
                        &ensp; resume
                    </a>

                    <a className="headings" role="button" href="https://github.com/IrisTheSnail">
                        <i className="kl3 fas fa-code-branch"></i>
                        &ensp; github
                    </a>

                </div>
            </div>
    );
}
