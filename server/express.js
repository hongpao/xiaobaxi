/**
 * Created by hongpao on 2018/3/13.
 *
 * async: 异步方法
 * await: 等待执行,只能在异步函数内执行
 */

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const multer = require('multer');


//引入模块
const aca = require('./accessControlAllow');
const Article = require('./operating/article');

//初始化
const app = express();

//配置静态资源访问
app.use('/image', express.static('../images'));

/*
* 初始化数据库
* */
const connection = mysql.createConnection({
    host: '10.1.6.10',      //主机地址
    user: 'twodfire',       //用户名
    password: '123456',     //密码
    database: 'node'        //数据库名
});
connection.connect();

/*
* 异步请求获取数据，特殊处理
* */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*
 *  接收异步请求,保存文章
 */
app.post('/save', (req, res) => {
    aca.allow(res); //允许跨域设置
    Article.create(req.body, connection, res);  //获取参数，存入数据库
});

/*
* 上传图片
* https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md
* */
let storage = multer.diskStorage({
    destination: function (req, file, cb) { // 保存的路径，是用来确定上传的文件应该存储在哪个文件夹中
        cb(null, '../images/uploads/');
    },
    filename: function (req, file, cb) {    // 用于确定文件夹中的文件名的确定
        cb(null, file.fieldname + '-' + Date.now() + '.png');
    }
});
let upload = multer({storage: storage}).single('image');
app.post('/uploadFiles', (req, res) => {
    upload(req, res, (err) => {
        //允许跨域设置
        aca.allow(res);
        res.send(
            {
                code: 1,
                path: `/images/uploads/${req.file.filename}`
            }
        );
    });
});


//启动服务
app.listen(1280, () => {
    console.log("服务已启动...");
});