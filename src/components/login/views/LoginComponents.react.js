/**
 * Created by hongpao on 2018/4/12.
 */

import React, {Component} from 'react';
import {render} from 'react-dom';

import Footer from '../../common/views/Footer';

// import ManagementAction from '../actions/Actions';
// import ManagementStore from '../stores/Stores';

class LoginComponents extends Component {
    constructor(props) {
        super(props);
        // this.state = ManagementStore.getNewData();
    }

    componentDidMount() {
        // ManagementStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        // ManagementStore.removeChangeListener(this._onChange);
    }

    _onChange = () => {
        // this.setState(ManagementStore.getNewData());
    };

    render() {
        let screenHeight = window.screen.availHeight;
        return (
            <div className="loginBg" style={{backgroundImage: 'url(/images/banner/1.jpeg)'}}>
                <div className="box">
                    <div className="title">小二</div>
                    <ul className="login-info">
                        <li>
                            <input type="text" name="account" className="login-input" placeholder="账号、手机号或邮箱"/>
                        </li>
                        <li>
                            <input type="password" name="pwd" className="login-input" placeholder="密码"/>
                        </li>
                        <li>
                            <p className="forgot">忘记密码？</p>
                        </li>
                    </ul>
                    <div className="btn">登录</div>
                </div>
                <div className="newSign">没有账号？<i>注册</i></div>
            </div>
        );
    }
}

function init() {
    const root = document.getElementById('J-login');
    if (root) {
        render(<LoginComponents/>, root);
    }
}

export default {init: init};