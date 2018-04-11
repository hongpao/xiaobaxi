/**
 * Created by hongpao on 2018/4/10.
 */

const fs = require('fs');
const path = require('path');

//路径地址
const bannerImagePath = '../images/banner/';

const index = {
    getBannerImagePath(app, aca) {
        app.get('/getBannerImagePath', (req, res) => {

            //允许跨域设置
            aca.allow(res);

            let bannerImagePathAry = [];

            fs.readdir(bannerImagePath, function (err, ret) {
                ret.map((item) => {
                    //path.extname(item)返回扩展名
                    //path.resolve(item)返回文件的绝对路径
                    if (path.extname(item).trim() !== "") {
                        bannerImagePathAry.push(`/images/banner/${item}`);
                    }
                });

                //返回
                res.send({
                        code: 1,
                        path: bannerImagePathAry
                    }
                );
            });
        });
    }
};

module.exports = index;