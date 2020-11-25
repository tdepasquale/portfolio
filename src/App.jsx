import GlobalStyle from "./components/GlobalStyle";
import { Nav } from "./components/Nav";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { OurWork } from "./pages/OurWork";
import { Switch, Route, useLocation } from "react-router-dom";
import { MovieDetail } from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* Framer Motion requires AnimatePresence to wrap the Switch and for Switch to have the location and key as described below for page exit transitions to work */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUs}></Route>
          <Route exact path="/work" component={OurWork}></Route>
          <Route exact path="/contact" component={ContactUs}></Route>
          <Route exact path="/work/:id" component={MovieDetail}></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
