import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import BodyChild from "./bodychild";

import ReactMixin from 'react-mixin';
import MixinLog from './mixins';
import { Input } from 'antd';
import { Radio } from 'antd';
import { LocaleProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const  defaultProps={
  username:'默认名字hello'
};
export default class BodyIndex extends React.Component {

    componentWillMount() {
        //定义你的逻辑即可
        console.log("BodyIndex - componentWillMount.");
    }

    componentDidMount() {
        console.log("BodyIndex - componentDidMount.");
    }

    constructor(props) {
        super(props); //调用基类的所有的初始化方法
        this.state = {
            username: "Parry",
            age: 20,
            date: ''
        }; //初始化赋值,state只作用于当前类，不会污染其他模块
        this.handleChildValueChange=this.handleChildValueChange.bind(this)
    }
    changeUserInfo(age){
        this.setState({age:age})
    //    改变样式方法一
    //     var mySubmitButton = document.getElementById('submitButton');
    //     console.log(mySubmitButton);
    //     ReactDom.findDOMNode(mySubmitButton).style.color='red';

    //  方法二
        console.log(this.refs.submitButton);
        this.refs.submitButton.style.color='blue';
        //refs：访问到组件内部DOM节点唯一可靠方法；会自动销毁对子组件的引用；不要在render或render之前对refs进行引用；不要滥用refs；

        MixinLog.log();
    }
    handleChildValueChange(event){
        this.setState({age:event.target.value})
    }
    handleChange(date) {
        message.info('您选择的日期是: ' + (date ? date.toString() : ''));
        this.setState({ date });
    }
    render() {
        // setTimeout(() => {
        //     //更改 state 的时候
        //     this.setState({username: "IMOOC", age: 30});
        // }, 4000);
        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>接收到的父页面的属性：{this.props.userid} {this.props.username}</p>
                <p>{this.state.username} {this.state.age}</p>
                <Input placeholder="Basic usage" />
                <Input type="button" value="提交" id="submitButton" ref="submitButton" onClick={this.changeUserInfo.bind(this,88)}/>
                {/*注释*/}
                <BodyChild {...this.props} id={1688} handleChildValueChange={this.handleChildValueChange}/>
                {/*'...this.props'表示将所有接收的属性传递给子组件*/}
                <Radio>按钮</Radio>
                <LocaleProvider locale={zhCN}>
                    <div style={{ width: 400, margin: '100px auto' }}>
                        <DatePicker onChange={value => this.handleChange(value)} />
                        <div style={{ marginTop: 20 }}>当前日期：{this.state.date && this.state.date.toString()}</div>
                    </div>
                </LocaleProvider>
            </div>
        )
    }
}

BodyIndex.propTypes={
    userid: PropTypes.number.isRequired, //验证props属性的数据类型，isRequried表示此属性是必须的
    username: PropTypes.string
};

BodyIndex.defaultProps = defaultProps;//如果父组件没有属性时，按预设的默认值显示

ReactMixin(BodyIndex.prototype, MixinLog);//不用组件间共用功能