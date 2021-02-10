import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Sidebar from "./pages/Sidebar";
import Signup from "./pages/Signup";

function App() {
  const firsthalfScreen = {
    width: "10%",
  };
  const halfScreen = {
    width: "100%",
    backgroundColor: "black",
  };
  return (
    <div className="app">
      <Router>
        <div style={firsthalfScreen}>
          <Sidebar />
        </div>
        <AnimatePresence initial={true} exitBeforeEnter>
          <div style={halfScreen}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
              {/* <Route path="/" component={Home} /> */}
            </Switch>
          </div>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
