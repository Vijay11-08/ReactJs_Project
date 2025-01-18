//   1. Impliment Countdown Timer With Useeffect
//   MM:SS  05:00 04:59  , 04:00  03:59
import * as React from "react";

function FetchTimerData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ minutes: 5, seconds: 0 });
        }, 1000); // Simulates an API delay
    });
}

function CountdownTimer() {
    const [minutes, setMinutes] = React.useState("Loading...");
    const [seconds, setSeconds] = React.useState("Loading...");

    React.useEffect(() => {
        FetchTimerData().then((data) => {
            setMinutes(data.minutes);
            setSeconds(data.seconds);
        });
    }, []);

    React.useEffect(() => {
        if (typeof minutes === "number" && typeof seconds === "number") {
            const interval = setInterval(() => {
                if (seconds === 0 && minutes === 0) {
                    clearInterval(interval);
                } else if (seconds === 0) {
                    setMinutes((prev) => prev - 1);
                    setSeconds(59);
                } else {
                    setSeconds((prev) => prev - 1);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [minutes, seconds]);

    return (
        <div>
            Countdown Timer: {minutes !== "Loading..." ? String(minutes).padStart(2, "0") : minutes}:
            {seconds !== "Loading..." ? String(seconds).padStart(2, "0") : seconds}
        </div>
    );
}

export default CountdownTimer;



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import CountdownTimer from './Lecture18_01_2025/UseEffactExcersize1'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <CountdownTimer/>
//   </StrictMode>,
// )




