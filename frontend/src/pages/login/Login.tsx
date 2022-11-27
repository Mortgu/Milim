import {useState} from "react";

import "./Login.scss";
import {useLogin} from "../../hooks/useLogin";

import KeyIcon from "@material-ui/icons/Block";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {login, error} = useLogin();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        await login(username, password);
    }

    return (
        <div className="login-wrapper">
            <div className="login">
                <div className="login-head">
                    <div className="head-icon">
                        <KeyIcon/>
                    </div>
                    <div className="content">
                        <h1>Log in to your Account</h1>
                        <p>Please enter your details to continue.</p>
                    </div>
                </div>
                {error && (
                    <div className="">
                        <p>{error}</p>
                    </div>
                )}
                <form className="login-form">
                    <div className="input-label">
                        <label>Username</label>
                        <input className="input" name="username" type="text" value={username}
                               onChange={(event: any) => setUsername(event.target.value)} placeholder="Username"
                               autoComplete="off" required/>
                    </div>
                    <div className="input-label">
                        <label>Password</label>
                        <input name="password" type="password" placeholder="Password" value={password}
                               onChange={(event: any) => setPassword(event.target.value)} autoComplete="off" required/>
                    </div>
                    <input type="submit" onClick={handleSubmit} value="Sign in"/>
                </form>
                <p className="separator"><span>OR</span></p>
                <div className="form-ctas">
                    <button className="button primary-button">Login with GitHub</button>
                    <button className="button primary-button">Login with Google</button>

                    <p className="text-link create-account">Don't have an account? <a href="#"
                        className="button button-link">Create Account?</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login;