/*
 *  Create by hongpao
 *  on 18/3/13
 *  异步请求接口列表
 * */

// const BASE_URL = require(ENV_BASE_URL); //域名

const BASE_URL = {
    API_BASE_URL: "http://upload.2dfire-daily.com"
};

const URL = {
    //获取资源地址列表
    // API_UPLOAD_FILES: BASE_URL.API_BASE_URL + "/upfileandlist",


    API_SAVE_INFO: "http://localhost:1280/save",
    API_UPLOAD_FILES: "http://localhost:1280/uploadFiles"
};

module.exports = URL;