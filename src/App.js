import styles from "./App.module.scss";
import React from "react";
import { Main } from "./pages/Main";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./features/Header";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
