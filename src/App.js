import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./app/about/About";
import Authors from "./app/authors/Authors";
import Footer from "./app/footer/Footer";
import Header from "./app/header/Header";
import Home from "./app/home/Home";
import SingleAuthor from "./app/singleAuthor/SingleAuthor";
import SinglePost from "./app/singlePost/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/authors/"} component={Authors} />
          <Route path={"/about"} component={About} />
          <Route path={"/post/:id"} component={SinglePost} />
          <Route path={"/users/:id"} component={SingleAuthor} />
        </Switch>
        <Footer/>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
