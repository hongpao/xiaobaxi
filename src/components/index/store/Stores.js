/**
 * Created by hongpao on 2018/3/23.
 */

import AppDispatcher from '../../../dispatcher/AppDispatcher';
import AppConstants from '../../../constants/AppConstants'
import assign from 'object-assign';
import {EventEmitter} from 'events';

// import format from './format';

const CHANGE_EVENT = "change";

const IndexStore = assign({}, EventEmitter.prototype, {
    bannerImagePath: [
        {
            id: 145352532,
            path: '/images/banner/IMG_4405.jpg',
            name: ""
        }, {
            id: 23423535,
            path: '/images/banner/IMG_4504.jpg',
            name: ""
        }
    ],

    //获取全部数据
    getNewData() {
        return {
            bannerImagePath: this.bannerImagePath
        };
    },

    //保存编辑后的数据
    // _setSaveInfo(data) {
    //     let createInfo = this.createInfo;
    //
    //     switch (data.type) {
    //         case 1:
    //             createInfo.title = data.title;
    //             break;
    //         case 2:
    //             this.tag = data.tag.trim();
    //             break;
    //         case 3:
    //             createInfo.faceImagePath = window.location.origin + data.faceImagePath;
    //             break;
    //     }
    //
    //     this.createInfo = createInfo;
    //     this.emit(CHANGE_EVENT);
    // },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        // case AppConstants.CREATE_INFO:
        //     IndexStore._setSaveInfo(action.data);
        //     break;
    }
});

export default IndexStore;