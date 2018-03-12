/**
 * Created by hongpao on 2018/3/12.
 */

const ManagementMain = (props) => {
    return (
        <div className="main-content">
            <div className="ad">
                广告位
            </div>
            <form className="create-info-form">
                <label className="form-tr clearfix">
                    <span className="title">标题</span>
                    <input type="text" className="form-input-big" value=""/>
                    <span className="error">错误信息</span>
                </label>
                <label className="form-tr clearfix">
                    <span className="title">标签标签</span>
                    <p className="form-tag">码农</p>
                    <p className="form-tag">程序猿</p>
                    <input type="text" className="form-input-small" value="标签标签"/>
                    <input type="button" className="form-btn" value="确定"/>
                    <span className="error">错误信息</span>
                </label>
                <label className="form-tr clearfix">
                    <span className="title">封面</span>
                    <div className="faceImg"></div>
                    <span className="error">错误信息</span>
                </label>
                <label className="form-tr clearfix">
                    <span className="title">内容</span>
                    <div className="editor-content">
                        <div id={props.id} contentEditable="true">
                        </div>
                    </div>
                </label>
                <label className="form-tr clearfix">
                    <span className="title"></span>
                    <div className="btn-box">
                        <input type="button" className="btn-submit" value="提交"/>
                        <input type="button" className="btn-reload" value="清空"/>
                    </div>
                </label>
            </form>
        </div>
    );
};

export default ManagementMain;