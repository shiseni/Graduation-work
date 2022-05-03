import React from "react";
import { Link } from "react-router-dom";

const Links = [
  {
    id: 1,
    name: "Абитуриенту",
    link: "/abiturientu",
    sub: [
      { id: 1, name: "Наши специальности", link: "/abiturientu/speciality" },
      { id: 2, name: "Информация о выдаваемом дипломе", link: "/abiturientu/information_about_diploma" },
      { id: 3, name: "Стоимость обучения", link: "/abiturientu/tuition_price" },
    ],
  },
  {
    id: 2,
    name: "Обучающемуся",
    link: "/student",
    sub: [
      { id: 1, name: "Титульные листы для ВКР", link: "/student/title_pages_for_final_qualifying_work" },
      { id: 2, name: "Портфолио", link: "/student/portfolio" },
      { id: 3, name: "Заказ и выдача справок", link: "/student/release_information" },
      { id: 4, name: "Методические материалы", link: "/student/methodical_materials" },
      { id: 5, name: "Демонстрационный экзамен", link: "/student/demo_exam" },
    ],
  },
  {
    id: 3,
    name: "Информация для сотрудников",
    link: "/employees",
    sub: [
      { id: 1, name: "Преподавателю", link: "/employees/teacher" },
      { id: 2, name: "Общая информация", link: "#" },
      { id: 3, name: "График проведения защиты дипломных проектов (работ)", link: "#" },
    ],
  },
  {
    id: 4,
    name: "Ваша безопасность",
    link: "#",
  },
  {
    id: 5,
    name: "Расписание",
    link: "/shedule",
  },
  {
    id: 6,
    name: "Сведения об образовательной организации",
    link: "/info_about_organization",
    sub: [
      { id: 1, name: "Основные сведения", link: "/info_about_organization/basic_info" },
      { id: 2, name: "Структура и органы управления образовательной организацией", link: "/info_about_organization/structure_management" },
      { id: 3, name: "Документы", link: "/info_about_organization/documents" },
      { id: 4, name: "Образование", link: "/info_about_organization/education" },
      { id: 5, name: "Образовательные стандарты", link: "/info_about_organization/educational_standarts" },
      { id: 5, name: "Руководство. Педагогический (научно-педагогический) состав", link: "/info_about_organization/leadership_teachers" },
      { id: 6, name: "Материально-техническое обеспечение и оснащенность образовательного процесса", link: "/info_about_organization/logistics_equipment" },
    ],
  },
];

const SubSection = (props) => {
  const { subsection } = props;
  return (
    <li key={subsection.id}>
      <Link to={subsection.link} title={subsection.name}>
        {subsection.name}
      </Link>
    </li>
  );
};

const Section = () => {
  return Links.map((section) => {
    return (
      <li key={section.id}>
        <Link to={section.link} title={section.name}>
          {section.name}
        </Link>
        {section.sub !== undefined && (
          <ul>
            {section.sub.map((subsection) => {
              return <SubSection subsection={subsection} />;
            })}
          </ul>
        )}
      </li>
    );
  });
};

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" width="100" height="41" alt="Главная" />
        </Link>
      </div>
      <div className="block-menu">
        <ul className="navigation">
          <Section />
        </ul>
      </div>
    </header>
  );
};

export default Header;
