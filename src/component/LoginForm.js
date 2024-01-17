import '../css/LogInForm.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setSuccessMsg('Logged in successfully, you will be redirected to the homepage');

                setEmail('');
                setPassword('');
                setErrorMsg('');

                setTimeout(() => {
                    setSuccessMsg('');
                    navigate('/');
                }, 3000);
            })
            .catch((error) => {
                console.error(error.message);

                if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    setErrorMsg('Please fill all required fields');
                } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setErrorMsg('Email not found');
                } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setErrorMsg('Wrong Password');
                }
            });
    };

    return (
        <div className='LogInForm'>
            <div className="form-container">
                <p className="title">Welcome back</p>
                <form className="form" onSubmit={handleLogin}>
                    <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="page-link">
                        <span className="page-link-label">Forgot Password?</span>
                    </p>
                    <button type="submit" className="form-btn">
                        Log in
                    </button>
                </form>
                <p className="sign-up-label">
                    Don't have an account? <Link to="/signup" className="sign-up-link">Sign Up</Link>
                </p>
                <div className="buttons-container">
                    {/* Your Apple and Google login buttons */}
                </div>
                {errorMsg && <div className="error-message">{errorMsg}</div>}
                {successMsg && <div className="success-message">{successMsg}</div>}
            </div>
        </div>
    );
};

export default LoginForm;
