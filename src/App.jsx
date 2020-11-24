import GlobalStyle from "./components/GlobalStyle";
import { Nav } from "./components/Nav";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { OurWork } from "./pages/OurWork";
import { Switch, Route } from "react-router-dom";
import { MovieDetail } from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutUs}></Route>
        <Route exact path="/work" component={OurWork}></Route>
        <Route exact path="/contact" component={ContactUs}></Route>
        <Route exact path="/work/:id" component={MovieDetail}></Route>
      </Switch>
    </div>
  );
}

export default App;
