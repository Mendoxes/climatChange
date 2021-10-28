import React from 'react'
import change from "../change.jpg"
import ecosystem from "../ecosystem1.png"
import melt from "../melt.jpg"
import ccc from "../emission.jpg"
import Fade from 'react-reveal/Fade';
import small from "../small.jpg"
import small2 from "../small2.jpg"
import '../evidence.css';
import {useState, useCallback,useEffect} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Numbers from "./numbers"
  import couse from "../couses.jpg"
  import { useMediaQuery } from 'react-responsive'
  import DropdownButton from 'react-bootstrap/DropdownButton'
  import Dropdown from 'react-bootstrap/Dropdown'
  import axios from "axios"
  
  import { MDBInput, MDBCol, MDBBtn } from "mdbreact"; //MDB REACT bootstrap better version ;
  import Button from 'react-bootstrap/Button';
  import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


  const apiKey = "8cb23a3b-3988-415c-9218-5448e37647c8";
  const apiUrl = "http://api.airvisual.com/v2/"

//   city_ranking?key=


  
export default function Evidence() {
    // const [valueM,setValueM]=useState()
const [users,setUsers]=useState([{state: "Kabul"}])
const [pol, setPol] =useState("")
     const [check,setCheck] = useState("Afghanistan")
     const [title, setTitle] = useState('')
     const [buck,setBuck]= useState([])
     const [trym, setTrym] = useState("Kabul")
     const [cities,setCities]=useState([])
     const [city,setCity]=useState("Kabul")
     const [isok,setIsok]=useState(false)
     const [isok2,setIsok2]=useState(false)
     const [quality,setQuality] =useState("")
     const [color1, setColor1] = useState("black")
//    axios.interceptors.request.use(config=>{
//        config.headers.authorization = `Bearer ${apiKey}`;
    
//        return config
//    })


const dataMet = [
        {
            "country": "Afghanistan"
        },
        {
            "country": "Algeria"
        },
        {
            "country": "Andorra"
        },
        {
            "country": "Angola"
        },
        {
            "country": "Argentina"
        },
        {
            "country": "Armenia"
        },
        {
            "country": "Australia"
        },
        {
            "country": "Austria"
        },
        {
            "country": "Bahamas"
        },
        {
            "country": "Bahrain"
        },
        {
            "country": "Bangladesh"
        },
        {
            "country": "Belgium"
        },
        {
            "country": "Bolivia"
        },
        {
            "country": "Bosnia Herzegovina"
        },
        {
            "country": "Brazil"
        },
        {
            "country": "Brunei"
        },
        {
            "country": "Bulgaria"
        },
        {
            "country": "Canada"
        },
        {
            "country": "Chile"
        },
        {
            "country": "China"
        },
        {
            "country": "Colombia"
        },
        {
            "country": "Croatia"
        },
        {
            "country": "Cyprus"
        },
        {
            "country": "Czech Republic"
        },
        {
            "country": "Democratic Republic of the Congo"
        },
        {
            "country": "Denmark"
        },
        {
            "country": "Ecuador"
        },
        {
            "country": "Ethiopia"
        },
        {
            "country": "Finland"
        },
        {
            "country": "France"
        },
        {
            "country": "Germany"
        },
        {
            "country": "Ghana"
        },
        {
            "country": "Guatemala"
        },
        {
            "country": "Hong Kong SAR"
        },
        {
            "country": "Hungary"
        },
        {
            "country": "India"
        },
        {
            "country": "Indonesia"
        },
        {
            "country": "Iran"
        },
        {
            "country": "Iraq"
        },
        {
            "country": "Ireland"
        },
        {
            "country": "Israel"
        },
        {
            "country": "Italy"
        },
        {
            "country": "Ivory Coast"
        },
        {
            "country": "Japan"
        },
        {
            "country": "Jordan"
        },
        {
            "country": "Kazakhstan"
        },
        {
            "country": "Kosovo"
        },
        {
            "country": "Kuwait"
        },
        {
            "country": "Kyrgyzstan"
        },
        {
            "country": "Latvia"
        },
        {
            "country": "Lithuania"
        },
        {
            "country": "Luxembourg"
        },
        {
            "country": "Macao SAR"
        },
        {
            "country": "Malaysia"
        },
        {
            "country": "Malta"
        },
        {
            "country": "Mexico"
        },
        {
            "country": "Mongolia"
        },
        {
            "country": "Myanmar"
        },
        {
            "country": "Nepal"
        },
        {
            "country": "Netherlands"
        },
        {
            "country": "New Caledonia"
        },
        {
            "country": "New Zealand"
        },
        {
            "country": "Nigeria"
        },
        {
            "country": "North Macedonia"
        },
        {
            "country": "Norway"
        },
        {
            "country": "Oman"
        },
        {
            "country": "Pakistan"
        },
        {
            "country": "Palestinian Territory"
        },
        {
            "country": "Peru"
        },
        {
            "country": "Philippines"
        },
        {
            "country": "Poland"
        },
        {
            "country": "Portugal"
        },
        {
            "country": "Puerto Rico"
        },
        {
            "country": "Romania"
        },
        {
            "country": "Russia"
        },
        {
            "country": "San Marino"
        },
        {
            "country": "Serbia"
        },
        {
            "country": "Singapore"
        },
        {
            "country": "Slovakia"
        },
        {
            "country": "Slovenia"
        },
        {
            "country": "South Africa"
        },
        {
            "country": "South Korea"
        },
        {
            "country": "Spain"
        },
        {
            "country": "Sri Lanka"
        },
        {
            "country": "Svalbard and Jan Mayen"
        },
        {
            "country": "Sweden"
        },
        {
            "country": "Switzerland"
        },
        {
            "country": "Syria"
        },
        {
            "country": "Taiwan"
        },
        {
            "country": "Thailand"
        },
        {
            "country": "Turkey"
        },
        {
            "country": "U.S. Virgin Islands"
        },
        {
            "country": "USA"
        },
        {
            "country": "Uganda"
        },
        {
            "country": "Ukraine"
        },
        {
            "country": "United Arab Emirates"
        },
        {
            "country": "United Kingdom"
        },
        {
            "country": "Uzbekistan"
        },
        {
            "country": "Vietnam"
        },
        {
            "country": "Yemen"
        }
    ]
// console.log(dataMet) //list of coutries add [x].country






// var myObject = { 'a': 1, 'b': 2, 'c': 3 };

// Object.keys(myObject).map(function(key, index) {
//   myObject[key] *= 2;
// });

// console.log(myObject);
// http://api.airvisual.com/v2/states?country={{COUNTRY_NAME}}&key={


    


    const fetchData2 = useCallback(async ()=>
    {const result = await axios.get(`${apiUrl}cities?state=${trym}&country=${check}&key=${apiKey}`);
    
    setCities(result.data.data)
    
   
 
 
 
 
 
 })

    // city?city=${city}&state=${trym}&country=${check}&key=

 const fetchData3 = useCallback(async ()=>
 {const result = await axios.get(`${apiUrl}city?city=${city}&state=${trym}&country=${check}&key=${apiKey}`);
 
console.log(result.data.data.current.pollution.aqius)
 
setPol(result.data.data.current.pollution.aqius)





})




 function ok5(at){

    setTrym(at.target.innerHTML)
// console.log(at.target.innerHTML)
setIsok(true)
 }

 
 function ok6(at){

    setCity(at.target.innerHTML)
console.log(at.target.innerHTML)
 }



   const fetchData = useCallback(async ()=>
   {const result = await axios.get(`${apiUrl}states?country=${check}&key=${apiKey}`,{
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }});




   console.log(result.data.data)
  
setUsers(result.data.data)

console.log(users[0].state.length)



})




   
     const [state, setState]=useState(true);
    const [evidence,setEvidence] = useState(true)
    const [couses, setCouses]=useState(false)
    const [effects, setEffects]=useState(false)

    const isSmallScreen = useMediaQuery({ query: '(max-width: 650px)' 

   
})

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
    setEffects(false)
}

function evidenceF(){
    setEvidence(true)
    setCouses(false)
    setEffects(false)
}

function effectsF(){
    setEffects(true)
    setEvidence(false)
    setCouses(false)
}
    ok();


 const Lup = function(spam){
    const ris = []
   
    for (let i = 0 ; i<=dataMet.length -1; i++){

        for(let x = 0 ; x <=title.length;x++){
    
            
            // console.log(title)
            // console.log(dataMet[i].country)
    // console.log(title[x])
    if (dataMet[i].country.includes(title)){
        if(!ris.includes(dataMet[i].country)){
       ris.push(dataMet[i].country)}
        // console.log(dataMet[i].country)
        // return <div>{dataMet[i].country}</div>
    }
    }
        // console.log(dataMet[i].country)
    
      
    }

   
  
    
  

    return ris.map((reptile) => <option id={reptile} value={reptile}>{reptile}</option>);

    
}

const uka = [4,43,2]

const Lop = function(spam){
const hh = []
    for (const property in users) { 
        hh.push(` ${users[property].state}`);
     
      }
     return  hh.map((reptile) => <Button outline color="secondary" onClick={ok5} id={reptile}  >{reptile}</Button>)
}


const Lap = function(spam){
    const hh = []
    // console.log(cities)
        for (const property in cities) { 
            hh.push(` ${cities[property].city}`);
           
          }
          
         return  hh.map((reptile) => <Button variant="outline-primary" onClick={ok6} id={reptile}  >{reptile}</Button>)
    }
    


// const object = { a: 1, b: 2, c: 3 };

// for (const property in users) {
// //   console.log(`${property}: ${users[property].state}`);
// }

useEffect(()=>{
    fetchData();
    },[check])

    useEffect(()=>{
        fetchData2();
        },[trym])

        useEffect(()=>{
            console.log(cities)
            },[cities])

            useEffect(()=>{
                fetchData3()
                },[city])

                useEffect(() => {
                    advice()
                    
                }, [pol])



function ok4(){

    
  setCheck(document.querySelector(".form-select").value);
  setIsok2(true)
  setIsok(false)
}


function advice (){

    if (pol <= 33){
        setQuality("The air quality is: Very Good")
        setColor1("lightblue")
        console.log("ok")
       
    }
    else if(pol <=66) {
        setQuality("The air quality is: Good")
        setColor1("green")
        console.log("not ok")}

    else if (pol <= 99){

        setQuality("The air quality is: Fair")
        console.log("over")
        setColor1("lightred")
    }
    else if (pol <= 149){

        setQuality("The air quality is: Poor")
        console.log("149 poor")
        setColor1("orangered")
    }


    else if (pol <= 200){

        setQuality(" The air quality is: Very Poor")
        console.log("149 poor")
        setColor1("black")
    }

    else {
        setQuality("The air quality is: Hazard")
    }
}


    return (
        <div>
            <div className="duo">
           {!isSmallScreen&&<Fade delay={600}> <div className="main2">
<div className="commonz uno">
    <Fade delay={900}>
       <Link to="/"> <img  className="greenA" src={ecosystem}>
            </img></Link> <span className="textLogo">Climate change</span>
            </Fade></div>
{evidence&&<div style={{color:"green"}} className="commonz dos" onClick={evidenceF}>EVIDENCE</div>}
{!evidence&&<div className="commonz dos"onClick={evidenceF}>EVIDENCE</div>}

{couses&&<div style={{color:"green"}} onClick={cousesF} className="commonz tres">COUSES</div>}
{!couses&&<div onClick={cousesF} className="commonz tres">COUSES</div>}
{effects&&<div style={{color:"green"}} onClick={effectsF} className="commonz quatro">EFFECTS</div>}
{!effects&&<div  onClick={effectsF} className="commonz quatro">EFFECTS</div>}



{/* <div>{k}</div>
<Numbers></Numbers> */}


            </div></Fade>}
            {isSmallScreen&&<Fade delay={600}> <div className="main2">
<div className="commonz uno">
    <Fade delay={900}>
       <Link to="/"> <img  className="green" src={ecosystem}>
            </img></Link> <span className="textLogo">Climate change</span>
            </Fade></div>



<DropdownButton variant="dark" id="dropdown-basic-button" title="Menu">
{evidence&&<Dropdown.Item style={{color:"green"}} onClick={evidenceF}>Evidence</Dropdown.Item>}
{!evidence&&<Dropdown.Item style={{color:"blue"}} onClick={evidenceF}>Evidence</Dropdown.Item>}
{couses&&<Dropdown.Item style={{color:"green"}} onClick={cousesF}>Couses</Dropdown.Item>}
{!couses&&<Dropdown.Item style={{color:"blue"}} onClick={cousesF}>Couses</Dropdown.Item>}
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>


{/* 
{evidence&&<div style={{color:"green"}} className="commonz dos" onClick={evidenceF}>EVIDENCE</div>}
{!evidence&&<div className="commonz dos"onClick={evidenceF}>EVIDENCE</div>}

{couses&&<div style={{color:"green"}} onClick={cousesF} className="commonz tres">COUSES</div>}
{!couses&&<div onClick={cousesF} className="commonz tres">COUSES</div>}
<div  className="commonz quatro">EFFECTS</div>
<div className="commonz chinque">CONSESNSUS</div> */}

{/* <div>{k}</div>
<Numbers></Numbers> */}


            </div></Fade>}
            
            
            </div>

            {evidence&& <div className="melt">  <img className="wid"  src={melt}></img></div>}
         {evidence&&<div> <Numbers></Numbers>
          <Fade left delay={200}>  <div className="text"> Scientific evidence for warming of the climate system is unequivocal.<div className="textAut">- Intergovernmental Panel on Climate Change</div></div></Fade>

          <Fade right delay={200}>  <div className="paragraph">Earth's climate has changed throughout history. Just in the last 650,000 years there have been seven cycles of glacial advance and retreat, with the abrupt end of the last ice age about 11,700 years ago marking the beginning of the modern climate era — and of human civilization. Most of these climate changes are attributed to very small variations in Earth’s orbit that change the amount of solar energy our planet receives.</div></Fade>
            <Fade delay={200}><img className="wid" src={change}></img></Fade>
            </div>}

            {couses&&<div className="melt">  <img className="wid"  src={couse}></img>
            <div className="textOnP"> Human activities (primarily the burning of fossil fuels) have fundamentally increased the concentration of greenhouse gases in Earth’s atmosphere, warming the planet. Natural drivers, without human intervention, would push our planet toward a cooling period.</div>
            


            <div className="cousesText">
            <Fade top><p className="cousesParagraph">Scientists attribute the global warming trend 
            observed since the mid-20th century to the human expansion of the "greenhouse effect" — 
            warming that results when the atmosphere traps heat radiating from Earth toward space.</p></Fade>
            <Fade top><p className="cousesParagraph">Certain gases in the atmosphere block heat from escaping. Long-lived gases
 that remain semi-permanently in the atmosphere and do not respond physically or chemically to changes in temperature are described
  as "forcing" climate change. Gases, such as water vapor, which respond physically or chemically to changes in temperature are seen 
  as "feedbacks."</p></Fade>
  <Fade top><p className="cousesParagraph">Gases that contribute to the greenhouse effect include:</p></Fade>
            </div>
{/* <button onClick={fetchData2}>sadhjdash</button> */}
            {/* {check&&users} */}
                {/* <MDBCol md="6">
        <MDBInput onChange={event => setTitle(event.target.value)} hint="Search" type="text" containerClass="mt-0" />
        </MDBCol> */}
















<div>
{/* <input onChange={event => setTitle(event.target.value)} />
<button > sdsahjdas</button> */}
{/* <Lup></Lup> */}









{isok&&<span  style={{color: color1}}>Air quality index: {pol}</span>}
{isok&&<div>{quality}</div>}
{isok&&<div className="states">Choose City:<Lap></Lap> </div>}
              {isok2&& <div className="states">Choose Province:<Lop></Lop></div>}


<h1 style={{color:"#0000ffa3"}}> Check Air Quality all aroud the world</h1>
<Container fluid  className="p-3">
              <Row>
              
                <Col sm={8}>            
                <Form>
                  
                 
                    <Col >
                      <Form.Select  placeholder="Search anything in London" 
                      
                      >
                      <Lup onChange={ok4}  ></Lup>
                          </Form.Select>
                 
                    
                   <button  type="button" onClick={ok4} className="btn btn-warning">
                    <svg width="15px" height="15px">
                            <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                        </svg>
                    </button>
                    </Col>
                 
                </Form>
                          
                </Col>
              </Row>
            </Container>
</div>
    




       
            </div>
                
                
               
                
                }
                


                {effects&&<div> <img src={ccc}></img>
                
                
                <div>

<p className="paragraph">Global climate change has already had observable effects on the environment. Glaciers have shrunk, ice on rivers and lakes is breaking up earlier, plant and animal ranges have shifted and trees are flowering sooner.

Effects that scientists had predicted in the past would result from global climate change are now occurring: loss of sea ice, accelerated sea level rise and longer, more intense heat waves.</p>



<img style={{width:545, marginRight:30}}src={small}></img>
<img style={{width:560}}src={small2}></img>
<p className="paragraph">Scientists have high confidence that global temperatures will continue to rise for decades to come, largely due to greenhouse gases produced by human activities. The Intergovernmental Panel on Climate Change (IPCC), which includes more than 1,300 scientists from the United States and other countries, forecasts a temperature rise of 2.5 to 10 degrees Fahrenheit over the next century.

According to the IPCC, the extent of climate change effects on individual regions will vary over time and with the ability of different societal and environmental systems to mitigate or adapt to change.

The IPCC predicts that increases in global mean temperature of less than 1.8 to 5.4 degrees Fahrenheit (1 to 3 degrees Celsius) above 1990 levels will produce beneficial impacts in some regions and harmful ones in others. Net annual costs will increase over time as global temperatures increase.

"Taken as a whole," the IPCC states, "the range of published evidence indicates that the net damage costs of climate change are likely to be significant and to increase over time."</p>



<p className="paragraphB">Taken as a whole, the range of published evidence indicates that the net damage costs of climate change are likely to be significant and to increase over time.</p>

                </div>
                
                
                </div>
                
                
                
                
                }
             
            

        </div>
    )
}
