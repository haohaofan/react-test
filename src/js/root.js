import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import {Route,BrowserRouter, Switch} from 'react-router-dom';
// import { Router, Route, Switch } from 'react-router'


class Root extends React.Component{
  render(){
      return (
          <BrowserRouter>
              <Switch>
                  <Route component={ComponentList} exact path="/list"></Route>
                  <Route component={Index} path="/"></Route>
              </Switch>
          </BrowserRouter>
      );
  };
}

ReactDOM.render(<Root/>, document.getElementById('example'));
