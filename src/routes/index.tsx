import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '../pages';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
