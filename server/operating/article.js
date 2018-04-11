/**
 * Created by hongpao on 2018/3/15.
 */

const article = {
    create(params, connection, res) {
        let {content, faceImage, title, tags, author} = params;

        //word表里的字段，如果是全插入，则不需要列出字段名
        // let fields = ['id', 'title', 'faceImage', 'content', 'tags', 'author', 'createTime'];

        let id = Date.now();
        let createTime = this.getDate();

        let values = `('${id}', '${title}', '${faceImage}', '${content}','${tags}', '${author}', '${createTime}')`;
        let sql = `INSERT INTO word VALUES ${values}`;

        //存入数据库
        connection.query(sql, function (err, result) {

            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
            }

            res.send({
                code: 1,
                data: {}
            });
        });
    },

    /*
    * 获取当前时间
    * */
    getDate() {
        let d = new Date();
        let year = d.getFullYear();
        let month = this.takeFull(d.getMonth() + 1);
        let date = this.takeFull(d.getDate());
        let hours = this.takeFull(d.getHours());
        let minutes = this.takeFull(d.getMinutes());
        let second = this.takeFull(d.getSeconds());

        return `${year}-${month}-${date} ${hours}:${minutes}:${second}`;
    },

    /*
    * 日期时间处理
    * 2017-8-8  -->  2017-08-08
    * */
    takeFull(val) {
        val = val.toString();
        if (val.length === 1) {
            return `0${val}`;
        } else {
            return val;
        }
    }
};

module.exports = article;