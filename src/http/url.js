/*
 *  Create by hongpao
 *  on 18/3/13
 *  异步请求接口列表
 * */

// const BASE_URL = require(ENV_BASE_URL); //域名

const BASE_URL = {
    // API_BASE_URL: "http://upload.2dfire-daily.com"
    API_BASE_URL: "http://localhost:1280"
};

const URL = {
    //获取资源地址列表
    // API_UPLOAD_FILES: BASE_URL.API_BASE_URL + "/upfileandlist",


    API_SAVE_INFO: BASE_URL.API_BASE_URL + "/save",
    API_UPLOAD_FILES: BASE_URL.API_BASE_URL + "/uploadFiles",
    API_GET_BANNER_PATH: BASE_URL.API_BASE_URL + "/getBannerImagePath",
    API_GO_LOGIN: BASE_URL.API_BASE_URL + "/login",
};

module.exports = URL;