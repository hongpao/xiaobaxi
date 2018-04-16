/**
 * Created by hongpao on 2018/4/12.
 */

import React, {Component} from 'react';
import {render} from 'react-dom';

import LoginAction from '../actions/Actions';
import LoginStore from '../stores/Stores';

import LoginMain from './LoginMain';
import RegisteredMain from './RegisteredMain';

class LoginComponents extends Component {
    constructor(props) {
        super(props);
        this.state = LoginStore.getNewData();
    }

    componentDidMount() {
        LoginStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        LoginStore.removeChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState(LoginStore.getNewData());
    };

    render() {
        let {status} = this.state;

        let showDom = null;

        switch (status) {
            case 'l':
                showDom = (<LoginMain {...this.state} LoginAction={LoginAction}/>);
                break;
            case 'r':
                showDom = (<RegisteredMain {...this.state} LoginAction={LoginAction}/>);
                break;

        }

        return (
            <div className="loginBg" style={{backgroundImage: 'url(/images/banner/1.jpeg)'}}>
                {showDom}
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