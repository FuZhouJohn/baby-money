import DashLayout from "./DashLayout";
import {Switch, useRouteMatch, Route} from 'react-router-dom'

export default function DashRoutes() {
    const {path} = useRouteMatch()
    return (
        <DashLayout>
            <Switch>
                <Route path={`${path}/money`}>
                    Money
                </Route>
                <Route path={`${path}/label`}>
                    Label
                </Route>
                <Route path={`${path}/assessment`}>
                    Assessment
                </Route>
            </Switch>
        </DashLayout>
    )
}
