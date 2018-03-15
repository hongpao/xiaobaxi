/**
 * Created by hongpao on 2018/3/15.
 */

const accessControlAllow = {
    allow(res) {
        /*
        * 允许跨域设置
        * Access-Control-Allow-Origin:  允许的域名（ * 所有域）
        * Access-Control-Allow-Methods: 允许的方法
        * Access-Control-Allow-Headers: 服务器支持的头信息
        * */
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    }
};

module.exports = accessControlAllow;