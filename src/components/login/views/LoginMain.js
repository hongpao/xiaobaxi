import LoginAction from "../actions/Actions";

/**
 * Created by hongpao on 2018/4/16.
 */

const LoginMain = (props) => {
    let {account, password, LoginAction} = props;
    return (
        <div className="main-box">
            <div className="box">
                <div className="title">戊戌12年</div>
                <ul className="login-info">
                    <li>
                        <input type="text" name="account" className="login-input" value={account}
                               onChange={LoginAction.setLoginInfo.bind(this, 1)}
                               placeholder="账号、手机号或邮箱"/>
                    </li>
                    <li>
                        <input type="password" name="pwd" className="login-input" value={password}
                               onChange={LoginAction.setLoginInfo.bind(this, 2)}
                               placeholder="密码"/>
                    </li>
                    <li>
                        <p className="forgot">忘记密码？</p>
                    </li>
                </ul>
                <div className="btn" onClick={LoginAction.login.bind(this, account, password, 'l')}>登录</div>
            </div>
            <div className="newSign" onClick={LoginAction.toRegistered.bind(this, "r")}>没有账号？<i>注册</i></div>
            <div className="download">Go In 小程序</div>
        </div>
    );
};

export default LoginMain;