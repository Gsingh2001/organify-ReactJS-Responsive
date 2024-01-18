import React, { useState, useEffect } from 'react'

import './Allproductpage.css'
import Productcontainer from './Productcontainer'
import {
    collection,
    query,
    onSnapshot, getDocs
} from "firebase/firestore";
import { db } from "../FirebaseConfig";
import Header from '../component/Header';

const Allproductpage = (props) => {
    // window.location.reload(false);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = () => {

            const productsArray = [];
            const path = `products-${props.type.toUpperCase()}`
            // console.log(props)

            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id, " => ", doc.data());
                    productsArray.push({ ...doc.data(), id: doc.id })
                });
                setProducts(productsArray)
                // console.log('done')
            }).catch('Error error error')
        }

        getProducts();
    }, [])


    return (
        <div className='allproductpage'>
            <Header/>
            <div className='heading'>
                <p>Top Results For {props.type}</p>
            </div>

            <div className="allproductcontainer">
                {products.map((product) => (
                    <Productcontainer
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default Allproductpage