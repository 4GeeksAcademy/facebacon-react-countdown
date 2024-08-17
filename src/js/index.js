//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";


const SecondsCounter = ({ seconds }) => {
    return (
        <div className="seconds-counter">
            <div className="clock-icon">
                <i className="fas fa-clock"></i>
            </div>
            <div className="digits">
                <span>{Math.floor(seconds / 10000) % 10}</span>
                <span>{Math.floor(seconds / 1000) % 10}</span>
                <span>{Math.floor(seconds / 100) % 10}</span>
                <span>{Math.floor(seconds / 10) % 10}</span>
                <span>{Math.floor(seconds) % 10}</span>
            </div>
        </div>
    );
};

let seconds = 0;

// Render the component and update it every second
setInterval(() => {
    seconds++;
    ReactDOM.createRoot(document.getElementById('app')).render(
        <SecondsCounter seconds={seconds} />
    );
}, 1000);

