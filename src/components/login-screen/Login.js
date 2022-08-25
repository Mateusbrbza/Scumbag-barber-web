import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import "./login.css";
import sbIMG from "../../assets/logo.png";

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loggedIn = useContext(true);

function loginConfirmed() {
    if (loggedIn) {
        console.log('validado')
    } else {
        console.log('senha incorreta')
    }
}

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"></span>

            <span className="login-form-title"> 
            <img src={sbIMG} alt="Scumbag Barbearia"/>
            </span>

            <div className="wrap-input">
              <input 
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            
            <div className="container-login-form-btn">
              <Link className="login-form-btn" to='/home'>
              <button className="login-form-btn" onClick={loginConfirmed}>Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
