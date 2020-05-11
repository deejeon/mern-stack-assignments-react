import React, { Component, useState } from 'react';

function HookForm(props) {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");    
    const [emailError, setEmailError] = useState("");    

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("");
        }
        else if(e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters!");
        }
        else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("");
        }
        else if(e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters!");
        }
        else {
            setLastNameError("");
        }
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("");
        }
        else if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        }
        else {
            setEmailError("");
        }
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("");
        }
        else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        }
        else {
            setPasswordError("");
        }
    }
    
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 1) {
            setConfirmPasswordError("");
        }
        else if(e.target.value != password) {
            setConfirmPasswordError("Passwords must match!")
        }
        else {
            setConfirmPasswordError("");
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>First Name: </label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={handleFirstName}
                    />
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{ firstNameError }</p> :
                        ''
                    }
                </div><div>
                    <label>Last Name: </label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={handleLastName}
                    />
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{ lastNameError }</p> :
                        ''
                    }
                </div><div>
                    <label>Email: </label>
                    <input
                        type="text"
                        value={email}
                        onChange={handleEmail}
                    />
                    {
                        emailError ?
                        <p style={{color:'red'}}>{ emailError }</p> :
                        ''
                    }
                </div><div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    />
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{ passwordError }</p> :
                        ''
                    }
                </div><div>
                    <label>Confirm Password: </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPassword}
                    />
                    {
                        confirmPasswordError ?
                        <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                        ''
                    }
                </div>
                <button>Submit</button>
            </form>

            <div>
                <h2>Your Form Data</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    )
}

export default HookForm;