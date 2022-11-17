//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


setInterval(function() {
    ReactDOM.render(<Home />, document.querySelector("#app"));
}, 1000);



