import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/screens/HomeScreen";
import ProductScreen from "./components/screens/ProductScreen";

// BrowserRouter is similar to that of HTML5 history API which uses push state and replace state
function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
          </Switch>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
