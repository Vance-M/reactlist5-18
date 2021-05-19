import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import RickandMorty from '../../containers/RandMFN';
import characterDetail from '../characters/characterDetail';

export default function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route 
                    path="/" 
                    exact
                    render={(routerProps) => <RickandMorty {...routerProps} />} 
                />
                <Route
                    path="/:RMid"
                    exact
                    component={characterDetail}
                />
            </Switch>
        </Router>
    </div>
    )
}

// need to do router and send ot a detail page as well