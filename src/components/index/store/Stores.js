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
    bannerImagePath: [],

    //获取全部数据
    getNewData() {
        return {
            bannerImagePath: this.bannerImagePath
        };
    },

    //保存banner图片
    _setBannerImage(data) {
        this.bannerImagePath = data;
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case AppConstants.BANNER_IMAGE:
            IndexStore._setBannerImage(action.data);
            break;
    }
});

export default IndexStore;