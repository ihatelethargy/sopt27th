import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHeader from "./components/header/MainHeader";
import Main from "./pages/Main";
import ContentsList from "./pages/ContentsList";

function App() {
  return (
    <Router>
      <Route component={MainHeader} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/contents" component={ContentsList} />
      </Switch>
    </Router>
  );
}

export default App;
