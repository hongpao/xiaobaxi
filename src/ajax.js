/*
 *  Create by hongpao
 *  on 17/10/24
 *  异步请求处理公用方法
 * */

const HTTP = {
    ajax: function (options) {
        setTimeout(function () {
            HTTP._ajax(options);
        }, 0);
    },
    beforeSendHandler: function () {

    },
    completeHandler: function () {

    },
    successHandler: function (success, result) {
        if (result.code) {
            if (result.code === 1) {
                if (success !== undefined) {
                    success(result);
                }
            } else if (result.code === -1) {
                window.location.href = result.data.url || "";
            }
        }
    },
    errorHandler: function () {

    },
    _ajax: function (options) {
        if (typeof options === "object") {

            //异步请求默认初始值
            let type = 'get';
            let timeout = 15000;
            let isShowLoading = true;
            let url = options.url;
            let data = options.params || {};
            let beforeSend = options.beforeSend || undefined;
            let reload = options.reload || undefined;
            let success = options.success || undefined;
            let complete = options.complete || undefined;
            let error = options.error || undefined;
            let contentType = "application/x-www-form-urlencoded;application/json;charset=utf-8;";
            let processData = true;
            let async = true;
            let cache = false;

            //若有传值，则替换
            if (options.type !== undefined) {
                type = options.type;
            }
            if (options.contentType !== undefined) {
                contentType = options.contentType;
            }
            if (options.processData !== undefined) {
                processData = options.processData;
            }
            if (options.timeout !== undefined) {
                timeout = options.timeout;
            }
            if (options.showLoading !== undefined) {
                isShowLoading = options.showLoading;
            }

            //时间戳，防止缓存
            // let t = new Date();

            //默认需要添加的参数
            // data.t = t.getTime();

            let self = this;

            $.ajax({
                type: type,
                url: url,
                dataType: 'json',
                crossDomain: true,
                data: data,
                timeout: timeout,
                contentType: contentType,
                processData: processData,
                async: async,
                cache: cache,
                beforeSend: function () {
                    if (beforeSend) {
                        self.beforeSendHandler();
                    }
                },
                success: function (result) {
                    self.successHandler(success, result);
                },
                complete: function () {
                    if (self.complete) {
                        self.completeHandler();
                    }
                },
                error: function (xhr, type, error) {
                    let resp = {
                        xhr: xhr,
                        type: type,
                        error: error
                    };
                    console.log("ajax error: ", resp);
                    self.errorHandler(resp);
                }
            });
        } else {
            throw new Error("options must's object");
        }
    }
};

export default HTTP;