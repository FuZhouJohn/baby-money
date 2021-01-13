import { Switch, Route, Redirect } from "react-router-dom";
import Welcome from "./Welcome";
import DashRoutes from "./DashRoutes";
import useRouterService, { RouterService } from "./useRouterService";
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
            <Redirect to={{ pathname: "/dash/money" }}></Redirect>
          </Route>
        )}

        <Route path="/dash">
          <DashRoutes />
        </Route>
      </Switch>
    </RouterService.Provider>
  );
}
