import DashLayout from "./DashLayout";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import Money from "../../Money";

export default function DashRoutes() {
  const { path } = useRouteMatch();
  return (
    <DashLayout>
      <Switch>
        <Route path={`${path}/money`}>
          <Money />
        </Route>
        <Route path={`${path}/label`}>Label</Route>
        <Route path={`${path}/statistics`}>Statistics</Route>
      </Switch>
    </DashLayout>
  );
}
