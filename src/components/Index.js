import React from "react";
import Education from "./Education/education";
import Header from "./Header/header";
import Navbar from "./Navbar/navbar";
import Project from "./Projects/BlockChain/project";
import Datascience from "./Projects/DataScinece/projects";
import Skills from "./Skills/skills";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Education />
      <Skills />
      {/* <Project /> */}
      <Datascience />
    </div>
  );
};

export default Index;
