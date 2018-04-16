/**
 * Created by hongpao on 2018/4/13.
 */

const crypto = require('crypto');

//秘钥（Hmac 需要）
const secret = 'abcdefg';

/*
* md5
* sha1
* sha256
* ripemd160
*/

// 'hex' 十六进制
// 'latin1'
// 'base64'

//需要加密的内容
let content = 'I love cupcakes';

const hash = crypto.createHmac('sha256', secret)
    .update(content)
    .digest('hex');

console.log(hash);
