import '../css/SignUp.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const initialCartValue = 0;

            await addDoc(collection(db, "users"), {
                username: username,
                email: email,
                phonenumber: phonenumber,
                password: password,
                cart: initialCartValue,
                address: address,
                uid: user.uid
            });

            setSuccessMsg('New user added successfully, You will now be automatically redirected to the login page.');
            setUsername('');
            setPhonenumber('');
            setEmail('');
            setPassword('');
            setAddress('');
            setErrorMsg('');

            setTimeout(() => {
                setSuccessMsg('');
                navigate('/login');
            }, 4000);
        } catch (error) {
            console.error(error.message);
            if (error.message === 'Firebase: Error (auth/invalid-email).') {
                setErrorMsg('Please fill all required fields');
            } else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                setErrorMsg('User already exists');
            } else {
                setErrorMsg('Error during signup. Please try again.');
            }
        }
    };

    return (
        <div className='SignUpForm'>
            <div className="form-box">
                <form className="form" onSubmit={handleSignup}>
                    <span className="title">Sign up</span>
                    <span className="subtitle">Create a free account with your email.</span>
                    <div className="form-container">
                        <input type="text" className="input" placeholder="Full Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {/* Add additional input fields for phone number and address */}
                        <input type="text" className="input" placeholder="Phone Number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                        <input type="text" className="input" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <button type="submit">Sign up</button>
                </form>
                <div className="form-section">
                    <p>Have an account? <Link to="/login" className="sign-up-link">Log in</Link></p>
                </div>
                {errorMsg && <div className="error-message">{errorMsg}</div>}
                {successMsg && <div className="success-message">{successMsg}</div>}
            </div>
        </div>
    );
};

export default SignupForm;
