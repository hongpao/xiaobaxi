/**
 * Created by hongpao on 2018/3/13.
 */

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '10.1.6.10',      //主机地址
    user: 'twodfire',       //用户名
    password: '123456',     //密码
    database: 'node'        //数据库名
});

connection.connect();

/**************************************新增********************************************/
// let sqlType = "INSERT INTO ";
// let tableName = "word";
// let fields = "(id,title,faceImage,content,createTime,author)";
// let values = "('124', '菜鸟工具', 'https://c.runoob.com', '23453', 'hongpao', 'ZH')";
// let sql = sqlType + tableName + fields + " VALUES " + values;
// connection.query(sql, function (err, result) {
//
//     if (err) {
//         console.log('[INSERT ERROR] - ', err.message);
//         return;
//     }
//     console.log(result);
// });
/*************************************************************************************/


/**************************************更新********************************************/
// let sqlType = "UPDATE ";
// let tableName = "word";
// let updateValues = "author='YANGYANGdd'";
// let onlyIndex = "id=124";
// let sql = sqlType + tableName + " SET " + updateValues + " WHERE " + onlyIndex;
// connection.query(sql, function (err, result) {
//
//     if (err) {
//         console.log('[UPDATE ERROR] - ', err.message);
//         return;
//     }
//     console.log(result);
// });
/*************************************************************************************/


/**************************************删除********************************************/
// connection.query("DELETE FROM word where id=123", function (err, result) {
//
//     if (err) {
//         console.log('[DELETE ERROR] - ', err.message);
//         return;
//     }
//     console.log(result);
// });
/*************************************************************************************/


/**************************************查找********************************************/
// connection.query('SELECT * FROM word', function (err, result) {
//     result.map((item) => {
//         let string = JSON.stringify(item);
//         let data = JSON.parse(string);
//
//         console.log(data);
//     });
// });
/*************************************************************************************/

connection.end();