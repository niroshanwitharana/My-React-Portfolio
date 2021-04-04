import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SideNav from './components/Navbar/SideNav';
import MainSideBar from "./components/SideBar/MainSideBar";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Documents from "./components/Documents/Documents";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <SideNav /> */}
        {/* <div className="navDiv">
      </div> */}
        <div className="BodyContainer">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/documents">
              <Documents />
            </Route>
          </Switch>
          <MainSideBar />
        </div>
      </div>
    </Router>
  );
}

export default App;
