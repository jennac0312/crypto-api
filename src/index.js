import { StrictMode } from "react";
import ReactDOM from "react-dom"; // no destructuring 
import './style.css'
import App from './App'
//  import BrowserRouter and rename it as Router
import { BrowserRouter as Router } from 'react-router-dom'


// wrap App components with Router to enable router features
ReactDOM.render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>,
    document.getElementById("root")
)
