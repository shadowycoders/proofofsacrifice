import Landing from "./pages/Landing";
import Main from "./pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Landing />
        {/* <Main /> */}
      </Switch>
    </Router>
  );
}

export default App;
