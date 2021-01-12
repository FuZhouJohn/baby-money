import {Switch, Route, Redirect} from 'react-router-dom';
import Welcome from "./Welcome";
import DashRoutes from "./DashRoutes";
export default function Router(){
    return (
        <Switch>
            <Route path='/' exact>
                <Redirect to={{pathname: '/welcome'}}/>
            </Route>
            <Route path="/welcome">
                <Welcome/>
            </Route>
            <Route path='/dash'>
                <DashRoutes/>
            </Route>
        </Switch>
    )
}
