import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';

import {Route,BrowserRouter, Switch,HashRouter} from 'react-router-dom';
// import { Router, Route, Switch } from 'react-router'

class Root extends React.Component{
  render(){
      return (
          <div>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="danger">Danger</Button>
          </div>
      );
  };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
