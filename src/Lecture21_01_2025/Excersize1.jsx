// Create a Ragistration Form With Following Details
// 1. Crickeeter Name (Text Box)
//          Minimum 8 characters 
// 2. Gender (male or female)
// 3. Email (Text Box)
//    Email format validation 
// 4. Match (checkbox)
//        ODI , Test , T20 , Domestic
// 5. Password and Confirm Password
//     Both Password should be same
// 6. Country (Dropdown)
// 7. Submit Button
// when user clicks Submit button 
// all above details should be displayed in the below form in table format

import { useState, useEffect } from "react";
import { Promise, resolve } from "bluebird";
Promise.config({cancellation : true});

function RegistrationForm() {
    const [formData, setFormData] = useState({
        crickeeterName: "",
        gender: "",
        email: "",
        match: [],
        password: "",
        confirmPassword: "",
        country: "",
    });

    const country = ['South Africa', ' Australia', 'India','England','New Zealand'];

    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    
    const validateForm = () => {
        let errors = {};
        if (formData.crickeeterName.length < 8) {
            errors.crickeeterName = "Crickeeter Name should be at least 8 characters long.";
        }
        if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            errors.email = "Invalid email format.";
        }
        if (formData.password!== formData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }
        if (formData.password.length < 8) {
            errors.password = "Password should be at least 8 characters long.";
        }
        if (formData.confirmPassword.length < 8) {
            errors.confirmPassword = "Confirm Password should be at least 8 characters long.";
        }
        setError(errors);
        return Object.keys(errors).length === 0;

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        if (validateForm()) {
            // Simulate a delay for form submission
            setTimeout(() => {
                setFormData({...formData, password: "", confirmPassword: "" });
                setSuccess(true);
                setLoading(false);
            }, 2000);
        } else {
            setLoading(false);
        }
    }
    useEffect(() => {
        return () => {
            setError({});
        }
    }, [])
    return (
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Crickeeter Name:</label>
                    <input
                        type="text"
                        value={formData.crickeeterName}
                        onChange={(e) => setFormData({...formData, crickeeterName: e.target.value })}
                        required
                        minLength={8}
                    />
                    {error.crickeeterName && <p>{error.crickeeterName}</p>}
                    <label>Email:</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value })}
                        required
                        />
                        {error.email && <p>{error.email}</p>}
                    <label>Gender:</label>
                    <input 
                    type="radio"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={(e) => setFormData({...formData, gender: e.target.value })} 
                     />
                    <label>Match </label>
                    <input
                        type="checkbox"
                        value="ODI"
                        checked={formData.match.includes("ODI")}
                        onChange={(e) => setFormData({...formData, match: formData.match.includes("ODI")? [...formData.match] : [...formData.match, e.target.value] })}
                        /> ODI
                    <label>Password</label>
                    <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value })}

                     />
                     {error.password && <p>{error.password}</p>}
                    <label htmlFor="">Confirm Password</label>
                    <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value })}
                    />
                    <label htmlFor=" ">country</label>
                    <select value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value })}>
                        {country.map((c, i) => <option key={i}>{c}</option>)}
                    </select>
                    <button
                    onClick={handleSubmit}
                    
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>

    );
}

export default RegistrationForm;