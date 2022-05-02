import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/Base.css";
import "./css/Footer.css";
import "./css/Header.css";
import "./css/Normalize.css";
import Header from "./components/General/Header";
import Footer from "./components/General/Footer";
import NoMatch from "./components/General/NotMatch";

import Home from "./components/Home";

import Abiturientu from "./components/Abiturientu";
import Speciality from "./components/Abiturientu/Speciality";
import InformationAboutDiploma from "./components/Abiturientu/InformationAboutDiploma";
import TuitionPrice from "./components/Abiturientu/TuitionPrice";

import Student from "./components/Student";
import TitlePagesForFinalQualifyingWork from "./components/Student/TitlePagesForFinalQualifyingWork";
import Portfolio from "./components/Student/Portfolio";
import ReleaseInformation from "./components/Student/ReleaseInformation";
import MethodicalMaterials from "./components/Student/MethodicalMaterials";
import DemoExam from "./components/Student/DemoExam";

import Employees from "./components/Employees";
import Teacher from "./components/Employees/Teacher";

function App() {
  const [stylePath, setStylePath] = useState(null);
  return (
    <>
      <link rel="stylesheet" type="text/css" href={stylePath} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NoMatch setStylePath={setStylePath} />} />
          <Route path="/" element={<Home setStylePath={setStylePath} />} />
          <Route path="/abiturientu" element={<Abiturientu setStylePath={setStylePath} />}>
            <Route path="speciality" element={<Speciality setStylePath={setStylePath} />} />
            <Route path="information_about_diploma" element={<InformationAboutDiploma setStylePath={setStylePath} />} />
            <Route path="tuition_price" element={<TuitionPrice setStylePath={setStylePath} />} />
          </Route>

          <Route path="/student" element={<Student setStylePath={setStylePath} />} />
          <Route path="/student/title_pages_for_final_qualifying_work" element={<TitlePagesForFinalQualifyingWork setStylePath={setStylePath} />} />
          <Route path="/student/portfolio" element={<Portfolio setStylePath={setStylePath} />} />
          <Route path="/student/release_information" element={<ReleaseInformation setStylePath={setStylePath} />} />
          <Route path="/student/methodical_materials" element={<MethodicalMaterials setStylePath={setStylePath} />} />
          <Route path="/student/demo_exam" element={<DemoExam setStylePath={setStylePath} />} />

          <Route path="/employees" element={<Employees setStylePath={setStylePath} />} />
          <Route path="/employees/teacher" element={<Teacher setStylePath={setStylePath} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
