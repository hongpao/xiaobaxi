/**
 * Created by hongpao on 2018/3/13.
 *
 * async: 异步方法
 * await: 等待执行,只能在异步函数内执行
 */

const Express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

//引入模块
const aca = require('./accessControlAllow');
const Article = require('./operating/article');

//初始化
const app = new Express();

//初始化数据库
const connection = mysql.createConnection({
    host: '10.1.6.10',      //主机地址
    user: 'twodfire',       //用户名
    password: '123456',     //密码
    database: 'node'        //数据库名
});
connection.connect();

//异步请求获取数据，特殊处理
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//接收异步请求
app.route('/save').post((req, res) => {

    //允许跨域设置
    aca.allow(res);

    //获取参数，存入数据库
    Article.create(req.body, connection);
    res.send({
        code: 1,
        data: {}
    });
});

//启动服务
app.listen(1280, () => {
    console.log("服务已启动...");
});