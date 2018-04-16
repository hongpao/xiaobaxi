/**
 * Created by hongpao on 2018/4/13.
 */

import AppDispatcher from '../../../dispatcher/AppDispatcher';
import AppConstants from '../../../constants/AppConstants';

import goLogin from '../apis/goLoginApi';

const LoginActions = {

    setLoginInfo(type, e) {
        let content = e.target.value;

        AppDispatcher.dispatch({
            actionType: AppConstants.USER_LOGIN_INFO,
            data: {type: type, content: content}
        });
    },

    //去注册
    toRegistered(style) {
        AppDispatcher.dispatch({
            actionType: AppConstants.USER_LOGIN_INFO,
            data: {type: 3, content: style}
        });
    },

    //注册
    registered(account, password) {
    },

    /*
    * 点击登录
    * */
    login(account, password) {
        goLogin(account, password, {
            success: function (result) {
                if (result.code === 1) {
                    let data = result.data || {};
                }
            }
        });
    }
};

export default LoginActions;