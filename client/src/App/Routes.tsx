import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../Landing/Landing';

const Routes: React.FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
            </Switch>
        </Router>
    );
};

export default Routes;
