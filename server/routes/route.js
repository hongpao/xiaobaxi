/**
 * Created by hongpao on 2018/4/10.
 */

const path = require('path');
const os = require('os');

const r = {
    main(app) {
        app.get('/*.html', (req, res) => {
            // console.log('hostname', os.hostname());
            // console.log('cpus', os.cpus());
            // console.log('arch', os.arch());
            // console.log('homedir', os.homedir());
            // console.log('loadavg', os.loadavg());
            // console.log('type', os.type());
            // console.log('uptime', os.uptime());
            // console.log('req', req.socket.remoteAddress);
            res.sendFile(path.resolve(`./page${req.originalUrl}`));
        });
    }
};

module.exports = r;