import React from "react";
import { Route, Switch } from "react-router-dom";
import MemberDetail from "./MemberDetail";
import MemberList from "./MemberList";

function Member({ match }) {
  return (
    <Switch>
      <Route exact path={match.path} component={MemberList} />
      <Route path={`${match.path}/:id`} component={MemberDetail} />
    </Switch>
  );
}

export default Member;
