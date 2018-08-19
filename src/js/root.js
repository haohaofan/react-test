import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import {Button} from 'antd';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import PCUserCenter from './components/pc_usercenter';
import 'antd/dist/antd.css';
import MobileIndex from './components/mobile_index';
import MobileNewsDetails from './components/mobile_news_details';
import MobileUserCenter from './components/mobile_usercenter';
import {Route, BrowserRouter, Switch, HashRouter} from 'react-router-dom';

// import { Router, Route, Switch } from 'react-router'

class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <BrowserRouter>
                        <Switch>
                            <Route  exact path="/" component={PCIndex}></Route>
                            <Route  path="/details/:uniquekey" component={PCNewsDetails}></Route>
                            <Route  path="/usercenter" component={PCUserCenter}></Route>
                        </Switch>
                    </BrowserRouter>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={MobileIndex}></Route>
                            <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
                            <Route path="/usercenter" component={MobileUserCenter}></Route>
                        </Switch>
                    </BrowserRouter>
                </MediaQuery>
            </div>
        );
    };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
