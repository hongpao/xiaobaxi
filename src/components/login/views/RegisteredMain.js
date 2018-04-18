import LoginAction from "../actions/Actions";

/**
 * Created by hongpao on 2018/4/16.
 */

const LoginMain = (props) => {
    let {account, password, confirmPassword, LoginAction} = props;
    return (
        <div className="main-box">
            <div className="box">
                <div className="title">注册戊戌</div>
                <ul className="login-info">
                    <li>
                        <input type="number" name="account" className="login-input" value={account}
                               onChange={LoginAction.setLoginInfo.bind(this, 1)}
                               placeholder="手机号"/>
                    </li>
                    <li>
                        <input type="password" name="pwd" className="login-input" value={password}
                               onChange={LoginAction.setLoginInfo.bind(this, 2)}
                               placeholder="密码"/>
                    </li>
                    <li>
                        <input type="password" name="pwd2" className="login-input" value={confirmPassword}
                               onChange={LoginAction.setLoginInfo.bind(this, 4)}
                               placeholder="确认密码"/>
                    </li>
                </ul>
                <div className="btn" onClick={LoginAction.login.bind(this, account, password, 'r')}>注册</div>
            </div>
        </div>
    );
};

export default LoginMain;