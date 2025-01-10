
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Linkedin from "./components/Linkedin"


import {HashRouter, BrowserRouter, Route, Routes} from "react-router-dom"

export default function App() {
  return (
    <div className="App"> 
        <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/linkedin" element={<Linkedin />} />


          
        </Routes>
        </HashRouter>
    </div>
  );
}