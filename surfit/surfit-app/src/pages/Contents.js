import React from "react";
import { Route, Switch } from "react-router-dom";
import ContentsDetail from "./ContentsDetail";
import ContentsList from "./ContentsList";

const Contents = (props) => {
  return (
    <Switch>
      <Route exact path="/contents" component={ContentsList} />
      <Route path="/contents/:id" component={ContentsDetail} />
    </Switch>
  );
};

export default Contents;
