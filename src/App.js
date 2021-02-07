import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";

const App = () => {
    document.title = "NM-Portfolio";
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path={["/", "/about"]}>
                        <About />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route>
                        <NoMatch />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;