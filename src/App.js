import './App.scss';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Project from "./components/Project";
import projectdata from "./data/projectdata";

function createRoute(project)
{
  var url = "/project-" + project.category + "-" + project.id;
  return (
    <Route path={url} element={<Project id={project.id} title={project.title} description={project.description} />}/>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}></Route>
      {projectdata.map(createRoute)}
    </Routes>
  )
}

export default App;
