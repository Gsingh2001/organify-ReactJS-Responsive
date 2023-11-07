import React from 'react'
import { db } from '../FirebaseConfig.js';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';


const FormContact = () => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [City, setCity] = useState();
    const [message, setMessage] = useState();

    const userCollectionRef = collection(db, "Formdata")

    const handleSubmit = () => {
        addDoc(userCollectionRef, {
            email: email,
            name: name,
            phone: phone,
            City: City,
            message: message
        })

    }
    return (
        <div className="contact-from-section mt-150 mb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <div className="form-title">
                           
                        </div>
                        <div id="form_status"></div>
                        <div className="contact-form">
                            <form  id="fruitkha-contact" onSubmit={handleSubmit}>

                                <p>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        id="name"
                                        
                                        onChange={(event) => {
                                            setEmail(event.target.value)
                                          }}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        id="email"
                                       
                                        onChange={(event) => {
                                            setEmail(event.target.value)
                                          }}
                                    />
                                </p>
                                <p>
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        name="phone"
                                        id="phone"
                                        
                                        onChange={(event) => {
                                            setEmail(event.target.value)
                                          }}
                                    />
                                    <input
                                        type="text"
                                        placeholder="City"
                                        name="City"
                                        id="City"
                                        
                                        onChange={(event) => {
                                            setEmail(event.target.value)
                                          }}
                                    />
                                </p>
                                <p>
                                    <textarea
                                        name="message"
                                        id="message"
                                        cols="30"
                                        rows="10"
                                        placeholder="Message"
                                        
                                        onChange={(event) => {
                                            setEmail(event.target.value)
                                          }}
                                    ></textarea>
                                </p>
                                <input type="hidden" name="token" value="FsWga4&@f6aw" />
                                <p>
                                    <input onClick={handleSubmit} type="submit" ></input>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormContact;
