/*
* 上传图片
* */
const multer = require('multer');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../images/uploads/');    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.fieldname + '-' + Date.now() + '.png');
    }
});
// let upload = multer({storage: storage}).single('image');

// app.post('/uploadFiles', (req, res) => {
//     upload(req, res, (err) => {
//         //允许跨域设置
//         console.log(req.body);
//         console.log(req.file);
//         // aca.allow(res);
//         // File.saveResource(req, res);
//     });
// });

let upload = multer({dest: '../images/uploads/'});
app.post('/uploadFiles', upload.single('image'), (req, res) => {
    //允许跨域设置
    console.log(req.body);
    console.log(req.file);
    // aca.allow(res);
    // File.saveResource(req, res);
});