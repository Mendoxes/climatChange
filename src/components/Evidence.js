import React from 'react'
import change from "../change.jpg"
import ecosystem from "../ecosystem1.png"
import melt from "../melt.jpg"
import Fade from 'react-reveal/Fade';
import '../evidence.css';
import {useState} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Numbers from "./numbers"
  import couse from "../couses.jpg"



export default function Evidence() {
    const [state, setState]=useState(true);
    const [evidence,setEvidence] = useState(true)
    const [couses, setCouses]=useState(false)

let k = [];
    function ok () {

        for (let i = 1880 ; i <=2020 ; i ++){
            
            // k.push("import " +"z"+ i +" from "+ "`../temp/"+ i+".jpg `;")
            // k.push("z"+i+",")
        }
        
    }
function cousesF(){
    setEvidence(false)
    setCouses(true)
}

function evidenceF(){
    setEvidence(true)
    setCouses(false)
}
    ok();
    return (
        <div>
            <div className="duo">
            <Fade delay={600}> <div className="main2">
<div className="commonz uno">
    <Fade delay={900}>
       <Link to="/"> <img  className="green" src={ecosystem}>
            </img></Link> <span className="textLogo">Climate change</span>
            </Fade></div>
{evidence&&<div style={{color:"green"}} className="commonz dos" onClick={evidenceF}>EVIDENCE</div>}
{!evidence&&<div className="commonz dos"onClick={evidenceF}>EVIDENCE</div>}

{couses&&<div style={{color:"green"}} onClick={cousesF} className="commonz tres">COUSES</div>}
{!couses&&<div onClick={cousesF} className="commonz tres">COUSES</div>}
<div  className="commonz quatro">EFFECTS</div>
<div className="commonz chinque">CONSESNSUS</div>

{/* <div>{k}</div>
<Numbers></Numbers> */}


            </div></Fade></div>

            {evidence&& <div className="melt">  <img className="wid"  src={melt}></img></div>}
         {evidence&&<div> <Numbers></Numbers>
          <Fade left delay={200}>  <div className="text"> Scientific evidence for warming of the climate system is unequivocal.<div className="textAut">- Intergovernmental Panel on Climate Change</div></div></Fade>

          <Fade right delay={200}>  <div className="paragraph">Earth's climate has changed throughout history. Just in the last 650,000 years there have been seven cycles of glacial advance and retreat, with the abrupt end of the last ice age about 11,700 years ago marking the beginning of the modern climate era — and of human civilization. Most of these climate changes are attributed to very small variations in Earth’s orbit that change the amount of solar energy our planet receives.</div></Fade>
            <Fade delay={200}><img className="wid" src={change}></img></Fade>
            </div>}

            {couses&&<div className="melt">  <img className="wid"  src={couse}></img>
            <div className="textOnP"> Human activities (primarily the burning of fossil fuels) have fundamentally increased the concentration of greenhouse gases in Earth’s atmosphere, warming the planet. Natural drivers, without human intervention, would push our planet toward a cooling period.</div>
            
            </div>
                
                
                
                
                
                }
        </div>
    )
}
