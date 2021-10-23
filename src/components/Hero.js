
import React from 'react'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrackVisibility from 'react-on-screen';
import { height } from 'dom-helpers';
import FadeIn from 'react-fade-in'
import RenderIfVisible from 'react-render-if-visible'
import Fade from 'react-reveal/Fade';
import logo from "../warning.png"
import hot from "../hot.png"
import tsunami from "../tsunami.png"
import arctic from "../arctic.png"
import hope from "../hope.jpg"

export default function Hero() {

const [fade1, setFade1] = useState(true)
const [fade2, setFade2] = useState(true)

  const VisibilitySensor = require('react-visibility-sensor');



    const ComponentToTrack = ({ isVisible }) => {
        const style = {
          opacity: isVisible ? 1 : 0,
        height: 900,
        };
      
        return <div style={style} className="scroling2"><div  className="common first"></div>
        <div className="common second"></div>
        <div className="common third"></div></div>
    }


    // function MyComponent (props) {
    //   return (
    //     <VisibilitySensor>
    //       {({isVisible}) =>
    //         <div>I am {isVisible ? 'visible' : 'invisible'}</div>
    //       }
    //     </VisibilitySensor>
    //   );
    // }

  const [state,setState]=useState(true);
  
    const TypeWriter = ({content="",speed=1000})=>{
    const [displayedContent, setDisplayedContent] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    /*Create a new setInterval and store its id*/
    const animKey = setInterval(() => {
      setIndex((index) => {
        /*This setState function will set the index
        to index+1 if there is more content otherwise
        it will destory this animation*/
      
        if (index >= content.length - 1) {
          clearInterval(animKey);
          
          return index;
        }
        return index + 1;
      });
    }, speed);
  }, []);

  useEffect(() => {
    setDisplayedContent((displayedContent)=>displayedContent + content[index]) 
  }, [index])

  // useEffect(()=>{

  //   setState("ok")
    
  //     },[])

  return <pre className="type-writer">{displayedContent}</pre>;
};

const sample_content = `We have
One World
 `;

  
    const divStyle = {
        color: 'blue',
  
      };

      if (!state){
        setTimeout(function(){  document.querySelector(".text-on-image").scrollIntoView({ block: "end",behavior: 'smooth' }) }, 6000);
       
      }
    
    
    return (
      <div>
        <div className="stoper">
              
            <img className="absolute" src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5fe74d45a9c2a2d204db2948%2F0x0.jpg"></img>
      
          
          
            <div className="fadeMe">     <img className="relative" src="https://live.staticflickr.com/3712/14294653894_62fc3498b7_b.jpg"></img></div>
           {!state&&<div className="fadeMeIn">     <img className="relative dRelative" src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5fe74d45a9c2a2d204db2948%2F0x0.jpg"></img></div>}
            
        </div>
        {state&&<div className="middle">
        <TypeWriter content={sample_content} style={divStyle} speed={300} />
        <Button onClick={()=>setState(false)} className="ok" variant="outline-success" size="lg" >Keep it alive</Button>
      
        </div>}
      
{/* <div ></div> */}

<div className="info"> 

<div className="small">


  <div className="smaller1">Carbon dioxide:</div>

<img className="smallerIMG" src={logo} alt="Logo" />
  <div className="smaller2">417</div>

  <div className="smaller3">parts per milion</div>
</div>
<div className="small">


  <div className="smaller1">Global Temperature risen:</div>
  <img className="smallerIMG" src={hot} alt="Logo" />
  <div className="smaller2">1.8C</div>
  <div className="smaller3">since 1880</div>
</div>
<div className="small">


  <div className="smaller1">Sea level risen:</div>
  <img className="smallerIMG" src={tsunami} alt="Logo" />
  <div className="smaller2">3.4</div>
  <div className="smaller3">minimeters per year</div>
</div>
<div className="small">


  <div className="smaller1">Arctic ice decreased:</div>
  <img className="smallerIMG" src={arctic} alt="Logo" />
  <div className="smaller2">13.2</div>
  <div className="smaller3">percent per decade</div>
</div>
</div>
<Fade >
      <div className="scroling"> 
      <div  className="scroling2">
     
      
       
      {fade1&& <div className="common third"> <Fade delay={99}><h1 onMouseEnter ={()=>setFade1(false)} className="fonts"> Evidence</h1></Fade>
        
       
        
        </div>}
        
        {!fade1&&<div className="common third2"><Fade ><h1  onMouseLeave={()=>setFade1(true)} className="fonts2"> How do we know climate change is real?</h1></Fade></div>}
        
        {fade2&&<div  className="common first" onMouseEnter ={()=>setFade2(false)}><Fade delay={129}><h1  className="fonts"> How?</h1></Fade></div>}

        {!fade2&&<div  className="common first2" onMouseLeave={()=>setFade2(true)} ><Fade delay={99}><h1  className="fonts2">What can be done to solve climate change?</h1></Fade></div>}
        <div className="common second"><Fade delay={999}><h1 className="fonts"> What if?</h1></Fade></div>
        </div>

 
      </div>
      </Fade>
  
      {/* <RenderIfVisible defaultHeight="20" visibleOffset="20">
      <FadeIn delay="499">
<div style={{marginTop:500, height: 600}}>noooooooooooo</div>
</FadeIn>
      </RenderIfVisible> */}


<Fade>{/*Using Zoom Effect*/}
          <header className="App-header">
            <div className="head-text">
       <img className="smallerIMG2" src={hope} alt="ok"></img>
     <Fade>  <div className="text-on-image"> There is still hope</div></Fade>
       </div>

       </header>
        </Fade>



</div>
    )
}
