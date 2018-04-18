/**
 * Created by hongpao on 2018/3/12.
 */

const Navigation = (props) => {
    return (
        <div className="nav-box">
            <div className="nav-content">
                <img src="../../../../images/rockets.png" className="logo" alt=""/>
                <a href="index.html" className="nav-tab">首页</a>
                <div className="nav-tab">列表</div>
                <div className="nav-info">红袍</div>
            </div>
        </div>
    );
};

export default Navigation;