import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Temperature from "./pages/Temperature/Temperature";
import Humidity from "./pages/Humidity/Humidity";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>  

          <Route path="/temperature">
            <Temperature/>
          </Route>  

          <Route path="/humidity">
            <Humidity/>
          </Route> 

        </Switch>  
      </div>
    </Router>
  );
}

export default App;
