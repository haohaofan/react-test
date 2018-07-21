import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import PCIndex from './components/pc_index';
import 'antd/dist/antd.css';

import {Route, BrowserRouter, Switch, HashRouter} from 'react-router-dom';

// import { Router, Route, Switch } from 'react-router'

class Root extends React.Component {
    render() {
        return (
            <PCIndex></PCIndex>
        );
    };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
