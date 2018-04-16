import LoginAction from "../actions/Actions";

/**
 * Created by hongpao on 2018/4/16.
 */

const LoginMain = (props) => {
    let {account, password, LoginAction} = props;
    return (
        <div className="main-box">
            <div className="box">
                <div className="title">注册戊戌</div>
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
                        <input type="password" name="pwd" className="login-input" value={password}
                               onChange={LoginAction.setLoginInfo.bind(this, 2)}
                               placeholder="确认密码"/>
                    </li>
                </ul>
                <div className="btn" onClick={LoginAction.registered.bind(this, account, password)}>注册</div>
            </div>
        </div>
    );
};

export default LoginMain;