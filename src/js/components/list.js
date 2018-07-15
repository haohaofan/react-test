import React from 'react';
import {NavLink} from 'react-router-dom';

export default class ComponentList extends React.Component {
    render() {
        return (
            <div>
                <h2>这里是列表页面</h2>
                <ul>
                    <li>
                        <NavLink to={'/'} activeClassName=''>
                            返回首页
                        </NavLink>
                    </li>
                </ul>
                <div>
                    {this.props.match.params.id}
                </div>
            </div>
        );
    };
}
