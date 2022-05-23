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

import Shedule from "./components/Schedule";

import InfoAboutOrganization from "./components/InfoAboutOrganization";
import BasicInfo from "./components/InfoAboutOrganization/BasicInfo";
import StructureManagement from "./components/InfoAboutOrganization/StructureManagement";
import Documents from "./components/InfoAboutOrganization/Documents";
import Education from "./components/InfoAboutOrganization/Education";
import EducationalStandards from "./components/InfoAboutOrganization/EducationalStandards";
import LeadershipTeachers from "./components/InfoAboutOrganization/LeadershipTeachers";
import Leadership from "./components/InfoAboutOrganization/Leadership";
import Teachers from "./components/InfoAboutOrganization/Teachers";
import LogisticsEquipment from "./components/InfoAboutOrganization/LogisticsEquipment";

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
          <Route path="/student" element={<Student setStylePath={setStylePath} />}>
            <Route path="title_pages_for_final_qualifying_work" element={<TitlePagesForFinalQualifyingWork setStylePath={setStylePath} />} />
            <Route path="portfolio" element={<Portfolio setStylePath={setStylePath} />} />
            <Route path="release_information" element={<ReleaseInformation setStylePath={setStylePath} />} />
            <Route path="methodical_materials" element={<MethodicalMaterials setStylePath={setStylePath} />} />
            <Route path="demo_exam" element={<DemoExam setStylePath={setStylePath} />} />
          </Route>
          <Route path="/employees" element={<Employees setStylePath={setStylePath} />}>
            <Route path="teacher" element={<Teacher setStylePath={setStylePath} />} />
          </Route>
          <Route path="/shedule" element={<Shedule setStylePath={setStylePath} />} />
          <Route path="/info_about_organization" element={<InfoAboutOrganization setStylePath={setStylePath} />}>
            <Route path="basic_info" element={<BasicInfo setStylePath={setStylePath} />} />
            <Route path="structure_management" element={<StructureManagement setStylePath={setStylePath} />} />
            <Route path="documents" element={<Documents setStylePath={setStylePath} />} />
            <Route path="education" element={<Education setStylePath={setStylePath} />} />
            <Route path="educational_standarts" element={<EducationalStandards setStylePath={setStylePath} />} />
            <Route path="leadership_teachers" element={<LeadershipTeachers setStylePath={setStylePath} />}>
              <Route path="leadership" element={<Leadership setStylePath={setStylePath} />} />
              <Route path="teachers" element={<Teachers setStylePath={setStylePath} />} />
            </Route>
            <Route path="logistics_equipment" element={<LogisticsEquipment setStylePath={setStylePath} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
