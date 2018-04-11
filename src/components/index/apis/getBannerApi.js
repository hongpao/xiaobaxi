/**
 * Created by hongpao on 2018/1/17.
 */

import HTTP from "../../../http/ajax";
import URL from "../../../http/url";

const getBannerImagePath = function (options) {

    options = options || {};
    options.url = URL.API_GET_BANNER_PATH;
    options.type = "get";

    return HTTP.ajax(options);
};

module.exports = getBannerImagePath;