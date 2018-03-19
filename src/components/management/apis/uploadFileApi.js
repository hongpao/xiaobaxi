/**
 * Created by hongpao on 2017/10/23.
 */

import HTTP from "../../../http/ajax";
import URL from "../../../http/url";

const uploadFile = function (options) {
    options = options || {};
    options.url = URL.API_UPLOAD_FILES;
    options.type = "post";
    options.contentType = false;
    options.processData = false;
    options.async = false;
    options.cache = false;
    options.params = options.data;

    return HTTP.ajax(options);
};

module.exports = uploadFile;