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



export default function Evidence() {
    const [state, setState]=useState(true);
    return (
        <div>
            <div className="duo">
            <Fade delay={600}> <div className="main2">
<div className="commonz uno">
    <Fade delay={900}>
       <Link to="/"> <img  className="green" src={ecosystem}>
            </img></Link> <span className="textLogo">Climate change</span>
            </Fade></div>
{state&&<div style={{color:"green"}} className="commonz dos">EVIDENCE</div>}
{!state&&<div className="commonz dos">EVIDENCE</div>}

<div className="commonz tres">COUSES</div>
<div className="commonz quatro">EFFECTS</div>
<div className="commonz chinque">CONSESNSUS</div>



            </div></Fade></div>

          <div className="melt">  <img className="wid"  src={melt}></img></div>
          <Fade left delay={200}>  <div className="text"> Scientific evidence for warming of the climate system is unequivocal.<div className="textAut">- Intergovernmental Panel on Climate Change</div></div></Fade>

          <Fade right delay={200}>  <div className="paragraph">Earth's climate has changed throughout history. Just in the last 650,000 years there have been seven cycles of glacial advance and retreat, with the abrupt end of the last ice age about 11,700 years ago marking the beginning of the modern climate era — and of human civilization. Most of these climate changes are attributed to very small variations in Earth’s orbit that change the amount of solar energy our planet receives.</div></Fade>
            <Fade delay={200}><img className="wid" src={change}></img></Fade>
            
        </div>
    )
}
