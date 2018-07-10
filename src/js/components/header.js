import React from 'react';

export default class ComponentHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            miniHeader: false
        };
    }

    switchHeader() {
        this.setState({
            miniHeader: !this.state.miniHeader
        });
    }

    render() {
        //css内联样式的定义方法，注：动画、伪类（hover）等在这不能使用
        const styleComponentHeader = {
            header: {
                backgroundColor: "#333333",
                color: "#FFFFFF",
                "padding-top": this.state.miniHeader ? "3px" : "15px", //内联计算表示；如果用原生的属性需加引号
                paddingBottom: this.state.miniHeader ? "3px" : "15px"
            },
            //还可以定义其他的样式
        };
        return (
            <header style={styleComponentHeader.header} class="smallFontSize"
                    onClick={this.switchHeader.bind(this)}>
                <h1>这里是头部</h1>
                {/*由于安装了插件babel-plugin-react-html-attrs， 所以可以直接使用class替代className*/}
            </header>
        )
    }
}
