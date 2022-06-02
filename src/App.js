import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./css/Base.css";
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
import ForTeacher from "./components/Employees/Teacher";
import GraduationProjectSchedule from "./components/Employees/GraduationProjectSchedule";

import Security from "./components/Security";
import TerroristThreat from "./components/Security/TerroristThreat";
import StopCorruption from "./components/Security/StopCorruption";

import Shedule from "./components/Schedule";

import InfoAboutOrganization from "./components/InfoAboutOrganization";
import BasicInfo from "./components/InfoAboutOrganization/BasicInfo";
import StructureManagement from "./components/InfoAboutOrganization/StructureManagement";
import Documents from "./components/InfoAboutOrganization/Documents";
import Education from "./components/InfoAboutOrganization/Education";
import EducationalStandards from "./components/InfoAboutOrganization/EducationalStandards";
import LeadershipTeachers from "./components/InfoAboutOrganization/LeadershipTeachers";
import Leadership from "./components/InfoAboutOrganization/Leadership";
import Teacher from "./components/InfoAboutOrganization/Teacher";
import LogisticsEquipment from "./components/InfoAboutOrganization/LogisticsEquipment";

import AdmissionCampaign2022 from "./components/Other/AdmissionCampaign2022";
import ReceptionInformation from "./components/Other/ReceptionInformation";
import ProgramGIA from "./components/Other/ProgramGIA";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="main-container">
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={500} unmountOnExit>
            <Routes location={location}>
              <Route path="*" element={<NoMatch />} />
              <Route path="/" element={<Home />} />
              <Route path="/admission_campaign_2022" element={<AdmissionCampaign2022 />}>
                <Route path="reception_informatioon" element={<ReceptionInformation />} />
              </Route>
              <Route path="/program_gia" element={<ProgramGIA />} />
              <Route path="/abiturientu" element={<Abiturientu />}>
                <Route path="speciality" element={<Speciality />} />
                <Route path="information_about_diploma" element={<InformationAboutDiploma />} />
                <Route path="tuition_price" element={<TuitionPrice />} />
              </Route>
              <Route path="/student" element={<Student />}>
                <Route path="title_pages_for_final_qualifying_work" element={<TitlePagesForFinalQualifyingWork />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="release_information" element={<ReleaseInformation />} />
                <Route path="methodical_materials" element={<MethodicalMaterials />} />
                <Route path="demo_exam" element={<DemoExam />} />
              </Route>
              <Route path="/employees" element={<Employees />}>
                <Route path="teacher" element={<ForTeacher />} />
                <Route path="graduation_project_schedule" element={<GraduationProjectSchedule />} />
              </Route>
              <Route path="/security" element={<Security />}>
                <Route path="terrorist_threat" element={<TerroristThreat />} />
                <Route path="stop_corruption" element={<StopCorruption />} />
              </Route>
              <Route path="/shedule" element={<Shedule />} />
              <Route path="/info_about_organization" element={<InfoAboutOrganization />}>
                <Route path="basic_info" element={<BasicInfo />} />
                <Route path="structure_management" element={<StructureManagement />} />
                <Route path="documents" element={<Documents />} />
                <Route path="education" element={<Education />} />
                <Route path="educational_standarts" element={<EducationalStandards />} />
                <Route path="leadership_teachers" element={<LeadershipTeachers />}>
                  <Route path="leadership" element={<Leadership />} />
                  <Route path="teacher" element={<Teacher />} />
                </Route>
                <Route path="logistics_equipment" element={<LogisticsEquipment />} />
              </Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer />
    </>
  );
}

export default App;
