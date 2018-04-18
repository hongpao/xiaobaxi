/**
 * Created by hongpao on 2018/4/16.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const login = {
    goLogin(app, aca) {
        let _self = this;

        app.post('/login', (req, res) => {
            let {account, password, type} = req.body;

            console.log('account:', account);
            console.log('password:', password);
            console.log('type:', type);
            /*
            * 用户密码需要加密
            * */
            let secret = 'f-*%^g98s><asr9,:dls;';
            const pwdHash = crypto.createHmac('sha256', secret)
                .update(password)
                .digest('hex');

            let userInfo = {
                account: account,
                password: pwdHash,
                createTime: _self.createTime(2),
                ip: req.ip
            };

            let userPath = './data/user/user-info-data.js';

            fs.readFile(userPath, 'utf-8', function (err, data) {
                if (err) throw err;

                fs.writeFile(userPath, JSON.stringify(userInfo), function (err2) {
                    if (err2) throw err2;

                    //允许跨域设置
                    aca.allow(res);

                    //返回
                    res.send({
                            code: 1,
                            path: pwdHash
                        }
                    );
                });
            });
        });
    },
    createTime(type) {
        let d = new Date();
        let year = d.getFullYear().toString();
        let month = this.getFullTimeFormat(d.getMonth() + 1);
        let date = this.getFullTimeFormat(d.getDate());
        let hours = this.getFullTimeFormat(d.getHours());
        let minutes = this.getFullTimeFormat(d.getMinutes());
        let seconds = this.getFullTimeFormat(d.getSeconds());

        let r = '';
        switch (type) {
            case 1:
                r = year + month + date + hours + minutes + seconds;
                break;
            case 2:
                r = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
                break;
        }
        return r;
    },
    getFullTimeFormat(param) {
        param = param.toString();
        param = param.length === 1 ? `0${param}` : param;

        return param;
    }
};

module.exports = login;