import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';

const Routes: React.FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default Routes;
