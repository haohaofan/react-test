import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Modal} from 'antd';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import {
	Tabs,
	message,
	Form,
	Input,
	Button,
	Checkbox,
	Card,
	notification,
	Upload
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
import {Link, NavLink} from 'react-router-dom';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
export default class MobileUserCenter extends React.Component {
    constructor(){
        super();
        this.state = {
            previewImage: '',
            previewVisible: false
        };
    };

    handleCancel(){
        this.setState({previewVisible: false})
    };
	render() {
        const props = {
            action: 'http://newsapi.gugujiankong.com/handler.ashx',
            headers: {
                "Access-Control-Allow-Origin":"*"
            },
            listType: 'picture-card',
            defaultFileList:[
                {
                    uid:-1,
                    name:'xxx.png',
                    state: 'done',
                    url:'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
                    thumbUrl:'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
                }
            ],
            onPreview: (file)=>{
                this.setState({previewImage:file.url,previewVisible:true});
            }
        };
		return (
			<div>
				<MobileHeader/>
				<Row>
					<Col span={24}>
						<Tabs>
							<TabPane tab="我的收藏列表" key="1"></TabPane>
							<TabPane tab="我的评论列表" key="2"></TabPane>
                            <TabPane tab="头像设置" key="3">
                                <div className="clearfix">
                                    <Upload {...props}>
                                        <Icon type="plus"/>
                                        <div className="ant-upload-text">上传照片</div>
                                    </Upload>
                                    <Modal visible={this.state.previewVisible} footer={null}
                                           onCancel={this.handleCancel.bind(this)}>
                                        <img alt="预览" src={this.state.previewImage}/>
                                    </Modal>
                                </div>
							</TabPane>
						</Tabs>
					</Col>
				</Row>
				<MobileFooter/>
			</div>
		);
	};
}
