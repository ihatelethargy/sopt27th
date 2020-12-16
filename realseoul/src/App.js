import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Main} />
      </Router>
    </div>
  );
}

export default App;
