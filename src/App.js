import './App.scss';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Project from "./components/Project";
import projectdata from "./data/projectdata";

function createRoute(project)
{
  var url = "/project-" + project.category + "-" + project.id;
  console.log(url);
  return (
    <Route path={url} element={<Project id={project.id} title={project.title} description={project.description}/>}/>
  )
}

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout/>}></Route>
      <Route exact path="/project-web-1" element={<Project id={1} title={"project.title"} description={"project.description"}/>}></Route>
      {/* {projectdata.map(createRoute)} */}
    </Routes>
  )
}

export default App;
