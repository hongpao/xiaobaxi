/**
 * Created by hongpao on 2018/4/10.
 */

const multer = require('multer');

const management = {
    save(app, aca, article, connection) {
        app.post('/save', (req, res) => {
            aca.allow(res); //允许跨域设置
            article.create(req.body, connection, res);  //获取参数，存入数据库
        });
    },

    upload(app, aca) {
        let storage = multer.diskStorage({
            destination: function (req, file, cb) { // 保存的路径，是用来确定上传的文件应该存储在哪个文件夹中
                cb(null, '../images/uploads/');
            },
            filename: function (req, file, cb) {    // 用于确定文件夹中的文件名的确定
                cb(null, file.originalname.toLocaleLowerCase());
            }
        });
        let upload = multer({storage: storage}).single('image');
        app.post('/uploadFiles', (req, res) => {
            upload(req, res, (err) => {
                //允许跨域设置
                aca.allow(res);
                console.log("测试：", req.file);
                res.send({
                        code: 1,
                        path: `/images/uploads/${req.file.filename}`
                    }
                );
            });
        });
    }
};

module.exports = management;