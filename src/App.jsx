import GlobalStyle from "./components/GlobalStyle";
import { Nav } from "./components/Nav";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { OurWork } from "./pages/OurWork";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutUs}></Route>
        <Route path="/work" component={OurWork}></Route>
        <Route path="/contact" component={ContactUs}></Route>
      </Switch>
    </div>
  );
}

export default App;
