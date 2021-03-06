import { Switch, Route, Redirect } from "react-router-dom";
import Welcome from "./Welcome";
import DashRoutes from "./DashRoutes";
import useRouterService, { RouterService } from "./useRouterService";
import NoMatch from "./NoMatch";
export default function Router() {
  const routerService = useRouterService();
  return (
    <RouterService.Provider value={routerService}>
      <Switch>
        {routerService.firstLoad ? (
          <Route path="/">
            <Welcome />
          </Route>
        ) : (
          <Route path="/" exact>
            <Redirect to={{ pathname: "/dash/money" }} />
          </Route>
        )}
        <Route path="/dash">
          <DashRoutes />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </RouterService.Provider>
  );
}
