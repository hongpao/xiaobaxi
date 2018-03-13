/**
 * Created by hongpao on 2018/3/13.
 */

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.post('/save', function (ctx, next) {
    console.log(ctx);
    ctx.body = 'ok'
});

app.listen(1280);