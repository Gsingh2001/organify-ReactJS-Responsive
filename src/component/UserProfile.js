import React, { useState, useEffect } from 'react'
import { auth, db } from '../FirebaseConfig'
import { collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore'
import '../css/UserProfile.css';


const UserProfile = () => {
    function GetCurrentUser() {
        const [user, setUser] = useState(null);
        const usersCollectionRef = collection(db, "users");
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    // console.log(userlogged.email)
                    const getUsers = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        console.log(q);
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                    };
                    getUsers();
                }
                else {
                    setUser(null);
                }
            })
        }, [])
        return user
    }

    const loggeduser = GetCurrentUser();
    if (loggeduser) { console.log(loggeduser[0].password) }
    return (
        <> 
        {loggeduser ?
        <div className="container-xl px-4 mt-4">
        {/* Account page navigation */}
        <nav className="nav nav-borders">
            {/* ... */}
        </nav>
        <hr className="mt-0 mb-4" />
        <div className="row">
            <div className="col-xl-4">
                {/* Profile picture card */}
                <div className="card mb-4 mb-xl-0">
                    <div className="card-header">Profile Picture</div>
                    <div className="card-body text-center">
                        {/* Profile picture image */}
                        <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                        {/* Profile picture help block */}
                        <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                        {/* Profile picture upload button */}
                        <button className="btn btn-primary" type="button">Upload new image</button>
                    </div>
                </div>
            </div>
            <div className="col-xl-8">
                {/* Account details card */}
                <div className="card mb-4">
                    <div className="card-header">Account Details</div>
                    <div className="card-body">
                        <form>
                            {/* ... Form content ... */}
                            <div className="mb-3">
                                <label className="small mb-1" htmlFor="inputUsername">Email</label>
                                <input className="form-control" id="inputUsername" type="mail" placeholder={loggeduser[0].email}  />
                          
                            </div>
                            <div className="mb-3">
                                <label className="small mb-1" htmlFor="inputUsername">Password (how your name will appear to other users on the site)</label>
                                <input className="form-control" id="inputUsername" type="password"  value={loggeduser[0].password}  />
                            </div>
                            <div className="mb-3">
                                <label className="small mb-1" htmlFor="inputUsername">Unique id </label>
                                <input className="form-control" id="inputUsername" type="text" value={loggeduser[0].uid}  />
                            </div>
                            <div className="mb-3">
                                <label className="small mb-1" htmlFor="inputUsername">Name </label>
                                <input className="form-control" id="inputUsername" type="text" value={loggeduser[0].username}  />
                            </div>
                            <div className="mb-3">
                                <label className="small mb-1" htmlFor="inputUsername">Address </label>
                                <input className="form-control" id="inputUsername" type="text" value={loggeduser[0].address}  />
                            </div>
                            <div className="mb-3">
                                <label className="small mb-1" htmlFor="inputUsername">Phone Number </label>
                                <input className="form-control" id="inputUsername" type="text" value={loggeduser[0].phonenumber}  />
                            </div>
                            {/* ... More form fields ... */}
                            {/* Save changes button */}
                            <button className="btn btn-primary" type="button">Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    : <div>You are Not Logged In</div>}
    </>
    );
}

export default UserProfile;
