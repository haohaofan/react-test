import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import {Button} from 'antd';
import PCIndex from './components/pc_index';
import 'antd/dist/antd.css';
import MobileIndex from './components/mobile_index';

import {Route, BrowserRouter, Switch, HashRouter} from 'react-router-dom';

// import { Router, Route, Switch } from 'react-router'

class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <PCIndex></PCIndex>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
