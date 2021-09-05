import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './overridingMIStyles';

import Home from './pages/Home';
import './index.scss';

const Root = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    );
};

export default Root;
