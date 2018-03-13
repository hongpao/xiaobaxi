/**
 * Created by hongpao on 2018/3/12.
 */

const ManagementMain = (props) => {
    let {createInfo, tag, id, managementAction,getContent} = props;

    return (
        <div className="main-content">
            <div className="ad">
                广告位
            </div>
            <form className="create-info-form">
                <label className="form-tr clearfix">
                    <span className="title">标题</span>
                    <input type="text" className="form-input-big" value={createInfo.title} placeholder="在这里输入标题..."
                           maxLength="20" onChange={managementAction.changeTitle}/>
                    <span className="error"></span>
                </label>
                <label className="form-tr clearfix">
                    <span className="title">标签标签</span>
                    {
                        createInfo.tags.map((item) => {
                            return (
                                <p className="form-tag" onClick={managementAction.deleteTag.bind(this, item)}>{item}</p>
                            );
                        })
                    }
                    {
                        createInfo.tags.length < 10 ?
                            (
                                <div>
                                    <input type="text" className="form-input-small" value={tag} maxLength="4"
                                           onChange={managementAction.changeTag}/>
                                    <input type="button" className="form-btn" value="确定"
                                           onClick={managementAction.addTag}/>
                                </div>
                            ) : null
                    }
                </label>
                <label className="form-tr clearfix">
                    <span className="title">封面</span>
                    <div className="faceImg"></div>
                    <span className="error"></span>
                </label>
                <label className="form-tr clearfix">
                    <span className="title">内容</span>
                    <div className="editor-content">
                        <div id={id} contentEditable="true">
                        </div>
                    </div>
                </label>
                <label className="form-tr clearfix">
                    <span className="title"></span>
                    <div className="btn-box">
                        <div className="btn btn-submit" onClick={getContent}>提交</div>
                        <div className="btn btn-reload">清空</div>
                    </div>
                </label>
            </form>
        </div>
    );
};

export default ManagementMain;