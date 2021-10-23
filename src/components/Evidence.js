import React from 'react'
import change from "../change.jpg"
import ecosystem from "../ecosystem1.png"
import melt from "../melt.jpg"
import Fade from 'react-reveal/Fade';
import '../evidence.css';
import {useState} from "react"



export default function Evidence() {
    const [state, setState]=useState(true);
    return (
        <div>
           <Fade delay={300}> <div className="main">
<div className="commonz uno">
    <Fade delay={900}>
        <img  className="green" src={ecosystem}>
            </img>
            </Fade></div>
{state&&<div style={{color:"green"}} className="commonz dos">EVIDENCE</div>}
{!state&&<div className="commonz dos">EVIDENCE</div>}

<div className="commonz tres">COUSES</div>
<div className="commonz quatro">EFFECTS</div>
<div className="commonz chinque">CONSESNSUS</div>



            </div></Fade>
            <img className="melt" src={melt}></img>
            <div className="text"> Scientific evidence for warming of the climate system is unequivocal.</div>
            <Fade delay={400}><img src={change}></img></Fade>
            ok
        </div>
    )
}
