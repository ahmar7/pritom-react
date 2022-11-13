import React from "react";
import Education from "./Education/education";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import Navbar from "./Navbar/navbar";
import Project from "./Projects/BlockChain/Project";
import Datascience from "./Projects/DataScinece/projects";
import Researchpaper from "./Researchpaper/researchpaper";
import Skills from "./Skills/skills";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Education />
      <Skills />
      <Project />
      <Datascience />
      <Researchpaper />
      <Footer />
    </div>
  );
};

export default Index;
