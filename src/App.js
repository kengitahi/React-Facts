import React from "react";

import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";

import "./styles.css";

function App() {
    return (
        <div className="container">
            <Navbar />
            <MainContainer />
        </div>
    );
}

export default App;