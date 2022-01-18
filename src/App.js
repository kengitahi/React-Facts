import React from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

import "./styles.css";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    );
}

export default App;