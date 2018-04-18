/**
 * Created by hongpao on 2018/4/13.
 */

import AppDispatcher from '../../../dispatcher/AppDispatcher';
import AppConstants from '../../../constants/AppConstants'
import assign from 'object-assign';
import {EventEmitter} from 'events';

// import format from './format';

const CHANGE_EVENT = "change";

const LoginStores = assign({}, EventEmitter.prototype, {
    status: "l",    //l：登录   r：注册
    account: "",
    password: "",
    confirmPassword: "",

    //获取全部数据
    getNewData() {
        return {
            status: this.status,
            account: this.account,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
    },

    //保存编辑后的数据
    _setLogin(data) {
        let {type, content} = data;

        switch (type) {
            case 1:
                this.account = content;
                break;
            case 2:
                this.password = content;
                break;
            case 3:
                this.status = content;
                break;
            case 4:
                this.confirmPassword = content;
                break;
        }

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
        case AppConstants.USER_LOGIN_INFO:
            LoginStores._setLogin(action.data);
            break;
        default:
    }
});

export default LoginStores;