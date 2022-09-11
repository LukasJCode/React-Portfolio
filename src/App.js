import './App.scss';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Project from "./components/Project";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Layout/>}></Route>
        <Route path="project/:id" element={<Project/>}/>
      </Routes>
  )
}

export default App;
