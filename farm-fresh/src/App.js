import React from "react";

import Farmer from "./components/Farmer";
import Consumer from "./components/Consumer";
import Navigation from "./components/navbar/Navigation";

function App() {
    return (
        <div className="App">
            <Navigation />

            {/* <Consumer /> */}
            <Farmer />
        </div>
    );
}

export default App;
