import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHeader from "./components/header/MainHeader";
import Main from "./pages/Main";
import Contents from "./pages/Contents";

function App() {
  return (
    <Router>
      <Route component={MainHeader} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/contents" component={Contents} />
      </Switch>
    </Router>
  );
}

export default App;
