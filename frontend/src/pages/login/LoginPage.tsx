import {useEffect, useState} from "react";

import "./LoginPage.scss";
import {useLogin} from "../../hooks/useLogin";

const LoginPage = ({setShowNavigation}: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useLogin();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        await login(username, password);
    }

    useEffect(() => {
        setShowNavigation(false);
    }, []);

    return (
        <div className="login-wrapper">
            <div className="login">
                <div className="login-head"></div>
                <form className="login-form">
                    <div className="login-input">
                        <label>Username</label>
                        <input className="input" name="username" type="text" value={username}
                               onChange={(event: any) => setUsername(event.target.value)} placeholder="Username"
                               autoComplete="off" required/>
                    </div>
                    <div className="login-input">
                        <label>Password</label>
                        <input className="input" name="password" type="password" placeholder="Password" value={password}
                               onChange={(event: any) => setPassword(event.target.value)} autoComplete="off" required/>
                    </div>
                    <button className="button button-primary form-submit" onClick={handleSubmit}>Login</button>
                </form>
                <p className="separator"><span>OR</span></p>
                <div className="form-ctas">
                    <button className="button button-primary">Login with GitHub</button>
                    <button className="button button-primary">Login with Google</button>

                    <p className="text-link create-account">Don't have an account? <button
                        className="button button-link">Create Account?</button></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;