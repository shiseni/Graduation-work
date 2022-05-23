import styled from "styled-components";

export const Links = [
  {
    id: 1,
    name: "Абитуриенту",
    link: "/abiturientu",
    key: "abiturientu",
    sub: [
      { id: 1, name: "Наши специальности", link: "/abiturientu/speciality", key: "abiturientu", type: "speciality" },
      { id: 2, name: "Информация о выдаваемом дипломе", link: "/abiturientu/information_about_diploma", key: "abiturientu", type: "information_about_diploma" },
      { id: 3, name: "Стоимость обучения", link: "/abiturientu/tuition_price", key: "abiturientu", type: "tuition_price" },
    ],
  },
  {
    id: 2,
    name: "Обучающемуся",
    link: "/student",
    key: "student",
    sub: [
      { id: 1, name: "Титульные листы для ВКР", link: "/student/title_pages_for_final_qualifying_work", key: "student", type: "title_pages_for_final_qualifying_work" },
      { id: 2, name: "Портфолио", link: "/student/portfolio", key: "student", type: "portfolio" },
      { id: 3, name: "Заказ и выдача справок", link: "/student/release_information", key: "student", type: "release_information" },
      { id: 4, name: "Методические материалы", link: "/student/methodical_materials", key: "student", type: "methodical_materials" },
      { id: 5, name: "Демонстрационный экзамен", link: "/student/demo_exam", key: "student", type: "demo_exam" },
    ],
  },
  {
    id: 3,
    name: "Информация для сотрудников",
    link: "/employees",
    key: "employees",
    sub: [
      { id: 1, name: "Преподавателю", link: "/employees/teacher", key: "employees", type: "teacher" },
      { id: 2, name: "Общая информация", link: "#", key: "employees", type: "#" },
      { id: 3, name: "График проведения защиты дипломных проектов (работ)", link: "#", key: "employees", type: "#" },
    ],
  },
  {
    id: 4,
    name: "Ваша безопасность",
    link: "#",
    key: "#",
  },
  {
    id: 5,
    name: "Расписание",
    link: "/shedule",
    key: "shedule",
  },
  {
    id: 6,
    name: "Сведения об образовательной организации",
    link: "/info_about_organization",
    key: "info_about_organization",
    sub: [
      { id: 1, name: "Основные сведения", link: "/info_about_organization/basic_info", key: "info_about_organization", type: "basic_info" },
      {
        id: 2,
        name: "Структура и органы управления образовательной организацией",
        link: "/info_about_organization/structure_management",
        key: "info_about_organization",
        type: "structure_management",
      },
      { id: 3, name: "Документы", link: "/info_about_organization/documents", key: "info_about_organization", type: "documents" },
      { id: 4, name: "Образование", link: "/info_about_organization/education", key: "info_about_organization", type: "education" },
      { id: 5, name: "Образовательные стандарты", link: "/info_about_organization/educational_standarts", key: "info_about_organization", type: "educational_standarts" },
      { id: 5, name: "Руководство. Педагогический (научно-педагогический) состав", link: "/info_about_organization/leadership_teachers", key: "info_about_organization", type: "leadership_teachers" },
      {
        id: 6,
        name: "Материально-техническое обеспечение и оснащенность образовательного процесса",
        link: "/info_about_organization/logistics_equipment",
        key: "info_about_organization",
        type: "logistics_equipment",
      },
    ],
  },
];

export const COLORS = {
  active_section: "#006090",
  active_section_cloudy: "#1d85b9",
  active_type: "#006090",
  active_type_cloudy: "#1d85b9",
};

export const MainNavButton = styled.li`
  cursor: default;
  text-align: center;
  position: relative;
  flex-grow: 1;
  height: 100%;
  background: ${(props) => (props.type === null ? "#006090" : `${COLORS[props.type + "_cloudy"]}`)};
  color: ${(props) => (props.type ? "#d9d9d9" : "#1c1c1c")};

  > a {
    display: block;
    padding: 20px 0px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: PT Serif, sans-serif;
    font-size: 14px;
    color: #ffffff;
  }
`;

export const SectionNavButton = styled.div`
  padding: 10px;
  text-align: center;
  background-color: ${(props) => (props.type === null ? "transparent" : `${COLORS[props.type + "_cloudy"]}`)};

  > a {
    display: block;
    height: 100%;
    width: 100%;
    color: ${(props) => (props.type === null ? "#000000" : "#ffffff")};
  }

  &:hover {
    background-color: #006090;
    transform: ${(props) => (props.type === null ? "scale(1.05)" : null)};
  }

  &:hover a {
    color: #ffffff;
  }
`;
