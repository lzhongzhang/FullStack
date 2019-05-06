import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter, Switch} from 'react-router-dom';
import Home from './Home';
import List from './List';
import Detail from './Detail';

class App extends React.Component {
    render() {
        const withRouterDetail = withRouter(Detail);
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/users" component={List} /> 
                    <Route path="/users/:login" component={withRouterDetail} /> 
                </Switch>  
            </BrowserRouter>
        );
    }
}

export default App;
