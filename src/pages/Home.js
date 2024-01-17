import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import FeatureList from '../component/FeatureList'
import Advertisement from '../component/Advertisement'
import ShopBanner from '../component/ShopBanner'
import LatestNews from '../component/LatestNews'
import Footer1 from '../component/Footer1'
import { auth, db } from '../FirebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'



const Home = () => {

    function GetCurrentUser() {
        const [user, setUser] = useState("");
        const usersCollectionRef = collection(db, "users");
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    // console.log(userlogged.email)
                    const getUsers = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        // console.log(q);
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
     if (loggeduser) { console.log(loggeduser[0]) }

    return (
        <div>
            <Header/>
            <Banner/>
            <FeatureList/>
            <Advertisement/>
            <ShopBanner/>
            <LatestNews/>
            <Footer1/>
        </div>
    )
}

export default Home
