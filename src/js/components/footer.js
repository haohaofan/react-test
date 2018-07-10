import React from 'react';
import footerCss from '../../css/footer.css';

export default class ComponentFooter extends React.Component {
    render() {
        var footerConvertStyle = {
            "miniFooter": {
                "backgroundColor": "#333333",
                "color": "#ffffff",
                "paddingLeft": "20px",
                "paddingTop": "3px",
                "paddingBottom": "3px"
            },
            "miniFooter_h1": {
                "fontSize": "15px"
            },
            "global_h1": {
                "color": "red"
            },
            "tip": {
                "color": "yellow"
            },
        };
        return (
            <footer className={footerCss.miniFooter}>
                <h1>这里是页脚，一般放置版权的一些信息。</h1>
                <h1  style={footerConvertStyle.tip}>这里是页脚，使用内联样式。</h1>
            </footer>
        )
    }
}
