/**
 * Created by hongpao on 2018/3/13.
 */

import AppDispatcher from '../../../dispatcher/AppDispatcher';
import AppConstants from '../../../constants/AppConstants'
import assign from 'object-assign';
import {EventEmitter} from 'events';

// import format from './format';

const CHANGE_EVENT = "change";

const ManagementStores = assign({}, EventEmitter.prototype, {

    createInfo: {
        title: "",
        tags: [],
        faceImagePath: "",
    },
    tag: "",

    //获取全部数据
    getNewData() {
        return {
            createInfo: this.createInfo,
            tag: this.tag
        };
    },

    //保存编辑后的数据
    _setSaveInfo(data) {
        let createInfo = this.createInfo;

        switch (data.type) {
            case 1:
                createInfo.title = data.title;
                break;
            case 2:
                this.tag = data.tag.trim();
                break;
            case 3:
                createInfo.faceImagePath = window.location.origin + data.faceImagePath;
                break;
        }

        this.createInfo = createInfo;
        this.emit(CHANGE_EVENT);
    },

    //新增标签
    _addTag() {
        let createInfo = this.createInfo;
        let tag = this.tag;

        if (tag !== "" && createInfo.tags.indexOf(tag) === -1) {
            createInfo.tags.push(tag);

            this.createInfo = createInfo;
            this.tag = "";
            this.emit(CHANGE_EVENT);
        }
    },

    //删除标签
    _deleteTag(data) {
        let createInfo = this.createInfo;
        let index = createInfo.tags.indexOf(data.tagName);

        createInfo.tags.splice(index, 1);

        this.createInfo = createInfo;
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
        case AppConstants.CREATE_INFO:
            ManagementStores._setSaveInfo(action.data);
            break;
        case AppConstants.ADD_TAG:
            ManagementStores._addTag();
            break;
        case AppConstants.DELETE_TAG:
            ManagementStores._deleteTag(action.data);
            break;
        default:
    }
});

export default ManagementStores;