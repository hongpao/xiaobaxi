/**
 * Created by hongpao on 2018/3/13.
 *
 * async: 异步方法
 * await: 等待执行,只能在异步函数内执行
 */

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

//引入模块
const aca = require('./accessControlAllow');
const article = require('./operating/article');
const PageRoute = require('./routes/route');
const IndexDid = require('./routes/index');
const ManagementDid = require('./routes/management');
const LoginPort = require('./routes/login');

//初始化
const app = express();

//配置静态资源访问
app.use('/public', express.static('./public'));
app.use('/css', express.static('./css'));
app.use('/images', express.static('./images'));
app.use('/assets', express.static('./assets'));

/*
* 初始化数据库
* */
const connection = mysql.createConnection({
    host: '10.1.6.10',      //主机地址
    user: 'twodfire',       //用户名
    password: '123456',     //密码
    database: 'node'        //数据库名
});
// connection.connect();

/*
* 异步请求获取数据，特殊处理
* */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*****************************************************
 *
 * 路由接口处理
 *
 ******************************************************/
PageRoute.main(app);
IndexDid.getBannerImagePath(app, aca);
// ManagementDid.save(app, aca, article, connection);        //异步请求,保存文章
ManagementDid.upload(app, aca);                             //上传图片
LoginPort.goLogin(app, aca);                                   //登录

//启动服务
app.listen(1280, () => {
    console.log('**************************************************************');
    console.log('**                                                          **');
    console.log('**                                                          **');
    console.log('** Ladies and Gentlemen Node服务已启动完毕，可以正常使用... **');
    console.log('**                                                          **');
    console.log('**                                                          **');
    console.log('**************************************************************');
});