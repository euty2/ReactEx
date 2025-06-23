// npm install react-router-dom 설치

import Contact from "./Contact";
import Home from "./Home";
import Topics from "./Topics";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import "./SubApp.css";

/**
 * <NavLink> = <Link> + class='active' 추가
 */
const SubApp = () =>{
    return (
        <BrowserRouter>
            <div>
                <h1>Hello React Router DOM</h1>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/topics">Topics</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/topics" element={<Topics/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/*" element={"Not Found"} />                    
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default SubApp;