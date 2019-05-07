import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter, Switch, Link} from 'react-router-dom';
import Home from './Home';
import List from './List';
import Detail from './Detail';
import Login from './Login';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated: false
      };
    }

    loginHandler = () => {
      this.setState({authenticated: true});
    }

    render() {
        const { authenticated } = this.state;
        const WithRouterDetail = withRouter(Detail);
        const WithRouterLogin = withRouter(Login);
        const WithRouterHome = withRouter(Home);
        const WithRouterList = withRouter(List);
        console.log(authenticated);
        return (
            <BrowserRouter>
                <nav>
                  <ul>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/login'>Login</Link>
                    </li>
                    <li>
                      <Link to='/list'>List</Link>
                    </li>
                  </ul>
                </nav>
                <Switch>
                    <Route exact path="/" render={() => (<WithRouterHome authenticated={authenticated}/>)} />
                    <Route exact path="/login" render={() => (<WithRouterLogin authenticated={authenticated} loginHandler={this.loginHandler}/>)} /> 
                    <Route exact path="/list" render={() => (<WithRouterList authenticated={authenticated}/>)} /> 
                    <Route path="/list/:login" render={() => (<WithRouterDetail authenticated={authenticated}/>)} /> 
                </Switch>  
            </BrowserRouter>
        );
    }
}

export default App;
