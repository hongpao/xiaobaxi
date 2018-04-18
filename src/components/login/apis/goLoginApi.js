/**
 * Created by hongpao on 2018/1/17.
 */

import HTTP from "../../../http/ajax";
import URL from "../../../http/url";

const goLogin = function (account, password, type, options) {

    options = options || {};
    options.url = URL.API_GO_LOGIN;
    options.type = "post";
    options.params = {
        account: account,
        password: password,
        type: type
    };

    return HTTP.ajax(options);
};

module.exports = goLogin;