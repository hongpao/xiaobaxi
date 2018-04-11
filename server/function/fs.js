/**
 * Created by hongpao on 2018/3/19.
 * 文件读取
 * https://chyingp.gitbooks.io/nodejs/%E6%A8%A1%E5%9D%97/fs.html
 */

const fs = require('fs');

let file = '../src/http/ajax.js';

/********************读取文件（适合大文件操作）*************************/
// let readStream = fs.createReadStream(file, 'utf8');
//
// readStream.on('data', function (chunk) {
//     console.log('读取数据: ' + chunk);
// }).on('error', function (err) {
//     console.log('出错: ' + err.message);
// }).on('end', function () {  // 没有数据了
//     console.log('没有数据了');
// }).on('close', function () {  // 已经关闭，不会再有事件抛出
//     console.log('已经关闭');
// });


/********************写入文件（适合大文件）*************************/
let writeStream = fs.createWriteStream('./fileForWrite1.txt', 'utf8');

writeStream.on('close', function () {  // 已经关闭，不会再有事件抛出
    console.log('已经关闭');
});

writeStream.write('hello');
writeStream.write('world');
writeStream.end('');