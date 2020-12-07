import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Articles from "./Components/Articles";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Homepage path="/" />
        <Articles path="/articles/*" />
      </Router>
    </div>
  );
}

export default App;
