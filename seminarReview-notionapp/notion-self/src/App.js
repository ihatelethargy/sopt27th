import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHeader from "./components/header/MainHeader";
import Main from "./pages/main/Main";
import Member from "./pages/member/Member";

function App({ history, match }) {
  console.log(match);
  return (
    <>
      <div className="App">
        <Router>
          <Route component={MainHeader} />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/members" component={Member} />
            <Router path="*">
              <h1>Error 404</h1>
            </Router>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
