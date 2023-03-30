import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import { useForm } from "../../hooks/useForm";

export const Login = () => {

    const { onLoginSubmit } = useContext(AuthContext);

    const LoginFormKeys = {
        Email:'email', 
        Password:'password'
    }

    const { values, changeHandler } = useForm({
        [LoginFormKeys.Email]:'', 
        [LoginFormKeys.Password]:'', 
    }, onLoginSubmit)
    
    return (

        <section id="login-page" className="auth">
            <form id="login" onSubmit={onLoginSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    id="email" 
                    name={LoginFormKeys.Email} 
                    placeholder="Sokka@gmail.com" 
                    value = {values[LoginFormKeys.Email]}
                    onChange={changeHandler}/>

                    <label htmlFor="login-pass">Password:</label>
                    <input 
                    type="password" 
                    id="login-password" 
                    name={LoginFormKeys.Password} 
                    value={values[LoginFormKeys.Password]}
                    onChange={changeHandler}/>
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}