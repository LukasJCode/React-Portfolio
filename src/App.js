import './App.scss';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Project from "./components/Project";
import projectdata from "./data/projectdata";

var projects = [];

function createProject(project)
{
  projects.push(project);
}

function App() {
  projectdata.map(createProject);
  return (
    <Routes>
      <Route path="/" element={<Layout/>}></Route>
      <Route path="/project" element={<Project id={projects[0].id} title={projects[0].title} description={projects[0].description} />}></Route>
    </Routes>
  )
}

export default App;
