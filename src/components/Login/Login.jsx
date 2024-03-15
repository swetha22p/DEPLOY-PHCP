import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import './Login.scss';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="login-container">
            <div className="login-sub-container">
                <div className="left">
                    <img src="assets/images/banner.svg" alt="Banner" />
                </div>
                <div className="right">
                    <div className="login-card">
                        <img src="/assets/images/user_profile.svg" alt="user" />
                        <div className="form-control">
                            <input type="text" placeholder="Email address" />
                            <input type="text" placeholder="Password" />
                            <div className="action-buttons">
                                <button onClick={() => navigate("/")}>LOG IN</button>
                                <button>SIGN UP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;