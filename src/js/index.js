var React = require('react');
import ComponentDetails from './components/details';
import {Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.css';

import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';
export default class Index extends React.Component {

	componentWillMount(){
		//定义你的逻辑即可
		console.log("Index - componentWillMount.");
	}

	componentDidMount(){
		console.log("Index - componentDidMount.");
	}

	render() {
		/*
		var component;
		if (用户已登录) {
			component = <ComponentLoginedHeader/>
		}
		else{
			component = <ComponentHeader/>
		}
		*/
		return (
			<div>
				<ComponentHeader/>
				<BodyIndex userid={123456} username={"mr right"}/>
				<Switch>
					<Route component={ComponentDetails} path="/details"></Route>
				</Switch>
				<ComponentFooter/>
			</div>
		);
	}
}

