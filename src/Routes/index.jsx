import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import  Skills  from "../pages/Skills/index";
import ProjectCard from "../pages/ProjectCard";
import AboutMe from "../pages/AboutMe";

const PagesRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />}/>
           
            <Route exact path="/skills" element={<Skills />}/>
             
            <Route exact path="/project" element={<ProjectCard />}/>
              
            <Route exact path="/aboutMe" element={ <AboutMe />}/>   
        </Routes>
    );
}

export default PagesRoutes;