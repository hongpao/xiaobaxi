/**
 * Created by hongpao on 2018/3/12.
 */

import React, {Component} from 'react';
import {render} from 'react-dom';

import Navigation from '../../common/views/Navigation';
import ManagementMain from './ManagementMain';

import ManagementAction from '../actions/Actions';
import ManagementStore from '../stores/Stores';

class ManagementComponents extends Component {
    constructor(props) {
        super(props);
        this.state = ManagementStore.getNewData();
    }

    componentDidMount() {
        //初始化富文本编辑框
        let id = `#${this.props.id}`;
        const E = window.wangEditor;
        this.editor = new E(id);
        // editor.customConfig.uploadImgShowBase64 = true;
        this.editor.create();

        ManagementStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        ManagementStore.removeChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState(ManagementStore.getNewData());
    };

    // 获取内容
    getContent = () => {
        let content = this.editor.txt.html();
        ManagementAction.submit(this.state.createInfo, content);
    };

    render() {
        return (
            <div className="whole-main">
                <Navigation/>
                <ManagementMain {...this.state} id={this.props.id} managementAction={ManagementAction}
                                getContent={this.getContent}/>
            </div>
        );
    }
}

function init() {
    const root = document.getElementById('J-main');
    if (root) {
        render(<ManagementComponents id="fwb-content"/>, root);
    }
}

export default {init: init};