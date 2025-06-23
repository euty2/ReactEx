// npm install react-router-dom 설치

import Contact from "./Contact";
import Home from "./Home";
import Topics from "./Topics";

const SubApp = () =>{
    return (
        <div>
            <h1>Hello React Router DOM</h1>
            <Home />
            <Topics />
            <Contact />
        </div>
    )
}

export default SubApp;