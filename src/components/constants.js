import styled from "styled-components";

export const Links = [
  {
    id: 1,
    name: "Абитуриенту",
    link: "/abiturientu",
    key: "abiturientu",
    sub: [
      { id: 1, name: "Наши специальности", link: "/abiturientu/speciality", key: "abiturientu" },
      { id: 2, name: "Информация о выдаваемом дипломе", link: "/abiturientu/information_about_diploma", key: "abiturientu" },
      { id: 3, name: "Стоимость обучения", link: "/abiturientu/tuition_price", key: "abiturientu" },
    ],
  },
  {
    id: 2,
    name: "Обучающемуся",
    link: "/student",
    key: "student",
    sub: [
      { id: 1, name: "Титульные листы для ВКР", link: "/student/title_pages_for_final_qualifying_work", key: "student" },
      { id: 2, name: "Портфолио", link: "/student/portfolio", key: "student" },
      { id: 3, name: "Заказ и выдача справок", link: "/student/release_information", key: "student" },
      { id: 4, name: "Методические материалы", link: "/student/methodical_materials", key: "student" },
      { id: 5, name: "Демонстрационный экзамен", link: "/student/demo_exam", key: "student" },
    ],
  },
  {
    id: 3,
    name: "Информация для сотрудников",
    link: "/employees",
    key: "employees",
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

export const COLORS = {
  active_section: "#006090",
  active_section_cloudy: "#1d85b9",
};

export const MainNavButton = styled.li`
  text-align: center;
  position: relative;
  flex-grow: 1;
  height: 100%;
  background: ${(props) => (props.type === null ? "#006090" : `${COLORS[props.type + "_cloudy"]}`)};
  color: ${(props) => (props.type ? "#d9d9d9" : "#1c1c1c")};

  &:hover span {
    color: ${(props) => COLORS[props.type]};
  }

  > a {
    display: block;
    padding: 20px 0px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: PT Serif, sans-serif;
    font-size: 14px;
    color: white;
  }
`;
