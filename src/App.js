import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alerts from "./Components/Alerts";
import Login from "./Components/login/Login";
import SignUp from "./signup/SignUp";
import MarketMovers from "./Components/marketMovers/MarketMovers";
import Pricing from "./Components/pricing/Pricing";
import FAQ from "./Components/faq/FAQ";
import Questions from "./Components/faq/Questions";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/alerts" component={Alerts} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/marketmovers" component={MarketMovers} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/faq" component={FAQ} />
        <Route path="/questions" component={Questions} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
