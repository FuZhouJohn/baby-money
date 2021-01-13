import DashLayout from "./DashLayout";
import { Switch, useRouteMatch, Route, Redirect } from "react-router-dom";
import Money from "../../Money";

export default function DashRoutes() {
  const { path } = useRouteMatch();
  return (
    <DashLayout>
      <Switch>
        <Route exact path={`${path}/money`}>
          <Money />
        </Route>
        <Route exact path={`${path}/label`}>
          Label
        </Route>
        <Route exact path={`${path}/statistics`}>
          Statistics
        </Route>
        <Route path="*">
          <Redirect to={{ pathname: `${path}/money` }}></Redirect>
        </Route>
      </Switch>
    </DashLayout>
  );
}
