/**
 * Created by hongpao on 2018/3/19.
 * 域名解析
 */

const dns = require('dns');

dns.lookup('www.qq.com', function (err, address, family) {
    if (err) throw err;
    console.log('例子A: ' + address);
    console.log('例子B: ' + family);
});

dns.resolve4('www.taobao.com', function (err, address, family) {
    if (err) throw err;
    console.log('例子C: ' + address);
});