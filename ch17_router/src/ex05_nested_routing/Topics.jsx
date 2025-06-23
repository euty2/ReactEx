import { NavLink, Routes, Route } from "react-router-dom";

const Html = ()=>{
    return "HTML is ...";
}

const Css = ()=>{
    return "CSS is ...";
}

const ReactJs = ()=>{
    return "React.js is ...";
}

const Topics = ()=>{
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li><NavLink to="/topics/1">HTML</NavLink></li>
                <li><NavLink to="/topics/2">CSS</NavLink></li>
                <li><NavLink to="/topics/3">React.js</NavLink></li>
            </ul>
            <Routes>
                <Route path="/1" element={<Html/>} />
                <Route path="/2" element={<Css/>} />
                <Route path="/3" element={<ReactJs/>} />
            </Routes>
        </div>
    )
}

export default Topics;