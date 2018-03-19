/**
 *  Created by hongpao on 2018/3/19.
 *
 *  title:  资源压缩
 *
 *  url:    https://chyingp.gitbooks.io/nodejs/%E6%A8%A1%E5%9D%97/zlib.html
 *
 */

const zlib = require('zlib');
const fs = require('fs');

let path = '../src/http/ajax.js';


/******************** 压缩 *******************/
let gzip = zlib.createGzip();

let inFile = fs.createReadStream(path);
let out = fs.createWriteStream(path + ".gz");

inFile.pipe(gzip).pipe(out);
/**********************************************/


/******************** 解压缩 *******************/
// let gunzip = zlib.createGunzip();
//
// let inFile2 = fs.createReadStream(path + ".gz");
// let out2 = fs.createWriteStream('../src/ajax.js');
//
// inFile2.pipe(gunzip).pipe(out2);
/**********************************************/