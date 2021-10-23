
import './App.css';
import Hero from "./components/Hero"
import Evidence from "./components/Evidence"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
      <Route exact path="/">
 <Hero></Hero>
 </Route>

 <Route path="/evidence">
   <Evidence></Evidence>
    </Route>
 </Router>
    </div>
  );
}

export default App;
