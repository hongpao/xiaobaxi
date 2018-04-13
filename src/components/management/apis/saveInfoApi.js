/**
 * Created by hongpao on 2018/1/17.
 */

import HTTP from "../../../http/ajax";
import URL from "../../../http/url";

const savePageData = function (createInfo, options) {

    options = options || {};
    options.url = URL.API_SAVE_INFO;
    options.type = "post";
    options.contentType = "application/x-www-form-urlencoded";
    options.params = {
        content: createInfo.content,
        faceImage: createInfo.faceImagePath,
        title: createInfo.title,
        tags: createInfo.tags.toString(),
        author: "一只不喜欢滚的轮胎"
    };

    return HTTP.ajax(options);
};

module.exports = savePageData;