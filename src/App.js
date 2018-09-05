import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./containers/Main";
import Movie from "./components/movie/Movie";
import NotFound from "./NotFound";

const App = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path={path + "/"} component={Main} />
          <Route path={path + "/movie/:movieId"} component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
