
import React from 'react'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrackVisibility from 'react-on-screen';
import { height } from 'dom-helpers';
import FadeIn from 'react-fade-in'
import RenderIfVisible from 'react-render-if-visible'
import Fade from 'react-reveal/Fade';



export default function Hero() {

const [fade1, setFade1] = useState(true)

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
        setTimeout(function(){  document.querySelector(".scroling").scrollIntoView({ block: "end",behavior: 'smooth' }) }, 6000);
       
      }
    
    
    return (
      <div>
        <div className="stoper">
              
            <img className="absolute" src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5fe74d45a9c2a2d204db2948%2F0x0.jpg"></img>
      
          
          
            <div className="fadeMe">     <img className="relative" src="https://live.staticflickr.com/3712/14294653894_62fc3498b7_b.jpg"></img></div>
           {!state&&<div className="fadeMeIn">     <img className="relative" src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5fe74d45a9c2a2d204db2948%2F0x0.jpg"></img></div>}
            
        </div>
        {state&&<div className="middle">
        <TypeWriter content={sample_content} style={divStyle} speed={300} />
        <Button onClick={()=>setState(false)} className="ok" variant="outline-success" size="lg" >Keep it alive</Button>
      
        </div>}
      
{/* <div ></div> */}
<Fade >
      <div className="scroling"> 
      <div  className="scroling2">
     
      
       
      {fade1&& <div className="common third"> <Fade delay={399}><h1 onMouseEnter ={()=>setFade1(false)} className="fonts"> Evidence</h1></Fade>
        
        {!fade1&&<Fade ><h1  onMouseLeave={()=>setFade1(true)} className="fonts2"> How do we know climate change is real?</h1></Fade>}
        
        </div>}
        
        {!fade1&&<div className="common third2"><Fade ><h1  onMouseLeave={()=>setFade1(true)} className="fonts2"> How do we know climate change is real?</h1></Fade></div>}
        
        <div  className="common first"><Fade delay={599}><h1 className="fonts"> How?</h1></Fade></div>
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
          
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </Fade>



</div>
    )
}