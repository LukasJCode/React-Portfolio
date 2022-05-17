import './App.scss';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Project from "./components/Project";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
    </Routes>
  </>
  )
}

export default App;
