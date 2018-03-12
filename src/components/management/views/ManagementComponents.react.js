/**
 * Created by hongpao on 2018/3/12.
 */

import React, {Component} from 'react';
import {render} from 'react-dom';
import wangEditor from 'wangeditor';

import Navigation from '../../common/views/Navigation';
import ManagementMain from './ManagementMain';

// import UploadAction from '../action/Actions';
// import UploadStore from '../store/Stores';
//
// import PAGE_URL from '../../../utils/PageUrl';
// import BaseAction from '../../base/action/Actions';
//
// import UploadMain from './UploadMain';
// import TopNavigation from '../../base/view/TopNavigation';
// import Loading from '../../base/view/Loading';
// import EditLayer from './EditLayer';

class ManagementComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // result: UploadStore.getNewData()
        }
    }

    componentDidMount() {
        let id = `#${this.props.id}`;

        const E = window.wangEditor;
        const editor = new E(id);
        // editor.customConfig.uploadImgShowBase64 = true;
        editor.create();




        // 初始化内容
        // this.editor.$txt.html(this.props.content);

        // let editor = new wangEditor("fwb-content");
        // editor.create();

        // BaseAction.getUserInfo();
        //
        // UploadStore.addChangeListener(this._onChange);
        // let result = this.state.result;
        // let {currentPage} = result;
        // UploadAction.getResourceList(currentPage);
    }

    componentWillUnmount() {
        // UploadStore.removeChangeListener(this._onChange);
    }

    render() {

        return (
            <div className="whole-main">
                <Navigation/>
                <ManagementMain id={this.props.id}/>
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