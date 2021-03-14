import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Articles from "./Components/Articles";
import { Router } from "@reach/router";
import ArticlePage from "./Components/ArticlePage.jsx";

import UserState from './Context/UserState'
function App() {
  return (
    <div className="App">
      <UserState>
      <Header />
      <Router>
        <Homepage path="/" />
        <Articles path="/articles/" />
        <ArticlePage path="/articles/:article_id" />
      </Router>
      </UserState>
    </div>
  );
}

export default App;
