import Details from ".//components/Details";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/details" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
