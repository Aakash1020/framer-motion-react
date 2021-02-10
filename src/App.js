import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sidebar from "./pages/Sidebar";
import Signup from "./pages/Signup";

function App() {
  const firsthalfScreen = {
    width: "10%",
  };
  const halfScreen = {
    width: "100%",
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
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/profile" component={Home} />
            </Switch>
          </div>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
