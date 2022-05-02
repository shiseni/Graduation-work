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
    name: "Слабовидящим",
    link: "#",
  },
  {
    id: 6,
    name: "Расписание",
    link: "#",
  },
  {
    id: 7,
    name: "Сведения об образовательной организации",
    link: "#",
    sub: [
      { id: 1, name: "Основные сведения", link: "#" },
      { id: 2, name: "Структура и органы управления образовательной организацией", link: "#" },
      { id: 3, name: "Документы", link: "#" },
      { id: 4, name: "Образование", link: "#" },
      { id: 5, name: "Образовательные стандарты", link: "#" },
      { id: 5, name: "Руководство. Педагогический (научно-педагогический) состав", link: "#" },
      { id: 6, name: "Материально-техническое обеспечение и оснащенность образовательного процесса", link: "#" },
      { id: 7, name: "Стипендии и иные виды материальной поддержки", link: "#" },
      { id: 8, name: "Платные образовательные услуги", link: "#" },
      { id: 9, name: "Финансово-хозяйственная деятельность", link: "#" },
      { id: 10, name: "Вакантные места для приема (перевода)", link: "#" },
      { id: 11, name: "Положения по организации учебного процесса", link: "#" },
      { id: 12, name: "Инновационная деятельность", link: "#" },
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
        <Link to="#">
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
