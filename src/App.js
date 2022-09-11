import './App.scss';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={process.env.PUBLIC_URL} element={<Layout/>}></Route>
        <Route path={process.env.PUBLIC_URL + "/project/:id"} element={<Project/>}/>
      </Routes>
    </Router>
  )
}

export default App;
