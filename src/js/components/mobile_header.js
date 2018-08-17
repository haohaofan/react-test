import React from 'react';
import {Row, Col} from 'antd';
import {Link , NavLink} from 'react-router-dom';
import  'whatwg-fetch';
import {
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        };
    };
    componentWillMount(){
        //若本地存储用户信息，直接登录
        if (localStorage.userid!='') {
            this.setState({hasLogined:true});
            this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
        }
    };
    setModalVisible(value)
    {
        this.setState({modalVisible: value});
    };
    handleClick(e) {
        if (e.key == "register") {
            this.setState({current: 'register'});
            this.setModalVisible(true);
        } else {
            {
                this.setState({current: e.key});
            }
        }
    };
    handleSubmit(e)
    {
        //页面开始向 API 进行提交数据
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData= this.props.form.getFieldsValue();
        console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
            +"&username="+formData.userName+"&password=password"+formData.password
            +"&r_userName=" +formData.r_userName+"&r_password="+formData.r_password
            +"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions).
        then(response=>response.json()).then(json=>{
            json = {
                "NickUserName" : "test",
                "UserId" : "88"
            };
            this.setState({userNickName:json.NickUserName,userid:json.UserId});

        });
        if (this.state.action=="login") {
            this.setState({hasLogined:true});
        }
        message.success("请求成功！");
        this.setModalVisible(false);
    };
    login(){
        this.setModalVisible(true);
    };
    callback(key) {
        if (key == 1) {
            this.setState({action: 'login'});
        } else if (key == 2) {
            this.setState({action: 'register'});
        }
    };

    logout() {
        localStorage.userid = '';
        localStorage.userNickName = '';
        this.setState({hasLogined: false});
    };
    render() {
        let {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined ?
            <ul>
                <li>
                    <Link to="/">
                        <Icon type="inbox"/>
                    </Link>
                </li>
                <li class="logout"  onClick={this.logout.bind(this)}>退出</li>
            </ul>
            :
            <Icon type="setting" onClick={this.login.bind(this)}/>
        return (
            <div id="mobileheader">
                <header>
                    <img src="/src/images/logo.png" alt="logo"/>
                    <span>TestFAN</span>
                    {userShow}
                </header>
                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText = "确定" cancelText = "取消">
                    <Tabs type="card" onChange={this.callback.bind(this)}>
                        <TabPane tab="登录" key="1">
                            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('userName', )(
                                        <Input placeholder="请输入您的账号"/>
                                    )}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('password', )(
                                        <Input type="password" placeholder="请输入您的密码"/>
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit">登录</Button>
                            </Form>
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('r_userName', )(
                                        <Input placeholder="请输入您的账号"/>
                                    )}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('r_password', )(
                                        <Input type="password" placeholder="请输入您的密码"/>
                                    )}
                                </FormItem>
                                <FormItem label="确认密码">
                                    {getFieldDecorator('r_confirmPassword', )(
                                        <Input type="password" placeholder="请再次输入您的密码"/>
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit" >注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        );
    };
}

export default MobileHeader = Form.create()(MobileHeader);