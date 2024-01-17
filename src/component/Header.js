import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../css/Header.css';


const Header = () => {
    function GetCurrentUser() {
        const [user, setUser] = useState("");
        const usersCollectionRef = collection(db, "users");
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    const getUsers = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                    };
                    getUsers();
                } else {
                    setUser(null);
                }
            })
        }, [])
        return user
    }

    const loggeduser = GetCurrentUser();
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate("/login")
        })
    }

    const [cartdata, setcartdata] = useState([]);
    if (loggeduser) {
        const getcartdata = async () => {
            const cartArray = [];
            const path = `cart-${loggeduser[0].uid}`;
            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    cartArray.push({ ...doc.data(), id: doc.id });
                });
                setcartdata(cartArray);
            }).catch((error) => console.error('Error fetching cart data:', error));
        }
        getcartdata();
    }

    return (
        <div>
            {/* Navbar section */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="assets/logo-2.png" height="120px" width="120px" className="img-fluid" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {!loggeduser && <nav>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav ">

                                <li className="nav-item">
                                    <Link className="nav-link text-dark active" to="/About">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/Contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/Shop">Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/Signup">Signup</Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-dark" to="/Cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </nav >}
                    {loggeduser && <nav>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark active" to="/About">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/Contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/Shop">Shop</Link>
                                </li>
                                {loggeduser && loggeduser[0].email == "gsingh07@outlook.in" ?
                                    <li className="nav-item">
                                        <Link className="nav-link text-dark" to="/addproduct">Add Product</Link>
                                    </li> :
                                    <div></div>}

                                <li className="nav-item">
                                    <Link className="nav-link text-dark" onClick={handleLogout} >Logout</Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-dark" to="/Cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                                </li>
                                <li>
                                    <button className='cart-icon-css'>{cartdata.length}</button>
                                </li>
                                <li>
                                    <Link className="nav-link text-dark" to="/profile"> <i className="fa-solid fa-user"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </nav >}
                </div>
            </nav>
            {/* Navbar section */}
        </div>
    );
}

export default Header;
