import React, { useContext } from "react";
import { UserContext } from "./1st";

export function Page1({ nextPage }) {
    const { formData, setFormData } = useContext(UserContext);

    return (
        <div>
            <h2>Enter Principle Amount</h2>
            <input
                type="number"
                value={formData.principle}
                onChange={(e) => setFormData({ ...formData, principle: e.target.value })}
                placeholder="Enter Principle (10,000)"
            />
            <button onClick={nextPage}>Next</button>
        </div>
    );
}

export function Page2({ nextPage, prevPage }) {
    const { formData, setFormData } = useContext(UserContext);

    return (
        <div>
            <h2>Enter Rate of Interest</h2>
            <input
                type="number"
                value={formData.rate}
                onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
                placeholder="Enter Rate (7%)"
            />
            <button onClick={prevPage}>Back</button>
            <button onClick={nextPage}>Next</button>
        </div>
    );
}

export function Page3({ nextPage, prevPage }) {
    const { formData, setFormData } = useContext(UserContext);

    return (
        <div>
            <h2>Enter Time Period</h2>
            <input
                type="number"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                placeholder="Enter Time (1 year)"
            />
            <button onClick={prevPage}>Back</button>
            <button onClick={nextPage}>Next</button>
        </div>
    );
}

export function Page4({ prevPage }) {
    const { formData } = useContext(UserContext);
    const { principle, rate, time } = formData;

    const calculateTotalAmount = () => {
        if (principle && rate && time) {
            return parseFloat(principle) + (parseFloat(principle) * parseFloat(rate) * parseFloat(time)) / 100;
        }
        return "Incomplete Data";
    };

    return (
        <div>
            <h2>Total Amount</h2>
            <p>Principle: {principle}</p>
            <p>Rate of Interest: {rate}%</p>
            <p>Time Period: {time} year(s)</p>
            <h3>Total Amount: {calculateTotalAmount()}</h3>
            <button onClick={prevPage}>Back</button>
        </div>
    );
}
