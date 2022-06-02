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
      { id: 2, name: "График проведения защиты дипломных проектов", link: "/employees/graduation_project_schedule", key: "employees", type: "graduation_project_schedule" },
    ],
  },
  {
    id: 4,
    name: "Ваша безопасность",
    link: "/security",
    key: "security",
    sub: [
      { id: 1, name: "Порядок действия в случае возникновения террористической угрозы", link: "/security/terrorist_threat", key: "security", type: "terrorist_threat" },
      { id: 2, name: "STOP Коррупция", link: "/security/stop_corruption", key: "security", type: "stop_corruption" },
    ],
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

export const Leaderships = [
  {
    id: 1,
    name: "Прохорова Светлана Юрьевна",
    image: "prohorova2.jpg",
    job: "Декан факультета СПО",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 304",
    phone: "(8422) 41-80-92",
    email: "svetl26@mail.ru",
  },
  {
    id: 2,
    name: "Мартынова Антонина Алексеевна",
    image: "martynova.jpg",
    job: "Заместитель декана",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 138а",
    phone: "(8422) 77-88-39",
    email: "martynovaaa@ido.ulstu.ru",
  },
  {
    id: 3,
    name: "Борисова Оксана Витальевна",
    image: "borisovaov.jpg",
    job: "Заместитель декана по учебно-воспитательной работе",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 300а",
    phone: "(8422) 77-88-59",
    email: "borisovaov@ido.ulstu.ru",
  },
];

export const Teachers = [
  {
    id: 1,
    name: "Вершинина Ирина Павловна",
    image: "Vershinina.jpg",
    job: "Зам. директора по УМР",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 300а",
    phone: "(8422) 77-88-59",
    email: "vershininaip@ido.ulstu.ru",
  },
  {
    id: 2,
    name: "Рябоволова Татьяна Анатольевна",
    image: "ryabovolova_ta.jpg",
    job: "Ведущий специалист",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 300а",
    phone: "(8422) 77-88-59",
    email: "ryabovolovata@ido.ulstu.ru",
  },
  {
    id: 3,
    name: "Блинкова Лариса Борисовна",
    image: "blinkovalb.jpg",
    job: "Методист",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 300а",
    phone: "(8422) 77-88-59",
    email: "blinkovalb@ido.ulstu.ru",
  },
  {
    id: 4,
    name: "Кудрявцева Оксана Юрьевна",
    image: "kudryavtsevaou.jpg",
    job: "Ведущий специалист",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 138а",
    phone: "(8422) 77-88-39",
    email: "ms.ksenia1984@list.ru",
  },
  {
    id: 5,
    name: "Николенко Александр Сергеевич",
    image: "nikolenkoas.jpg",
    job: "Специалист",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 119",
    phone: "(8422) 77-88-14",
    email: "nikolenkoas@ido.ulstu.ru",
  },
  {
    id: 6,
    name: "Зайцева Любовь Ивановна",
    image: "zaizevali.jpg",
    job: "Архивариус",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 138б",
    phone: "(8422) 77-88-42",
    email: "zaitsevali@ido.ulstu.ru",
  },
  {
    id: 7,
    name: "Прохорова Валентина Сергеевна",
    image: "prohorovavs.jpg",
    job: "Педагог-психолог",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 302",
    phone: "(8422) 77-88-28",
    email: "prohorovavs@ido.ulstu.ru",
  },
  {
    id: 8,
    name: "Аникин Сергей Александрович",
    image: "Anikin.jpg",
    job: "Преподаватель Права и Обществознания",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 9,
    name: "Аронова Ирина Николаевна",
    image: "aronova.jpg",
    job: "Преподаватель Математических дисциплин",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 10,
    name: "Баранов Сергей Александрович",
    image: "Baranov.jpg",
    job: "Преподаватель Специальных дисциплин",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 11,
    name: "Березовская Ольга Владимировна",
    image: "Berezovskaya.jpg",
    job: "Преподаватель Высшей математики",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 12,
    name: "Графова Елена Васильевна",
    image: "grafova.jpg",
    job: "Преподаватель Специальных дисциплин",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 13,
    name: "Егорова Анастасия Владимировна",
    image: "Egorova.jpg",
    job: "Преподаватель Иностранного языка",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 14,
    name: "Иванова Татьяна Александровна",
    image: "Ivanova.jpg",
    job: "Преподаватель Экономики",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 15,
    name: "Измайлова Ляйсян Вялиевна",
    image: "izmailovalv.jpg",
    job: "Преподаватель Русского языка и Литературы",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 16,
    name: "Карпекин Сергей Александрович",
    image: "Karpekin.jpg",
    job: "Преподаватель Специальных дисциплин",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 17,
    name: "Кузьмин Максим Юрьевич",
    image: "kuzminmu.jpg",
    job: "Преподаватель Иностранного языка",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 18,
    name: "Кунчина Валентина Эдуардовна",
    image: "kunchina.jpg",
    job: "Преподаватель Иностранного языка",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 19,
    name: "Мартынов Сергей Васильевич",
    image: "Martynov.jpg",
    job: "Преподаватель Истории",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 20,
    name: "Майорова Татьяна Викторовна",
    image: "Mayorova.jpg",
    job: "Преподаватель Математики и информатики",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 21,
    name: "Муравьёва Зоя Алексеевна",
    image: "Muraveva.jpg",
    job: "Преподаватель Математики",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 22,
    name: "Образцова Валентина Владимировна",
    image: "Obrazcova.jpg",
    job: "Преподаватель Русского языка и литературы",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 23,
    name: "Свешникова Екатерина Сергеевна",
    image: "Sveshnikova.jpg",
    job: "Преподаватель",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 24,
    name: "Сергеева Элеонора Владимировна",
    image: "ev_sergeeva.jpg",
    job: "Преподаватель Русского языка и литературы",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 25,
    name: "Филиппова Татьяна Владисовна",
    image: "Filippova.jpg",
    job: "Преподаватель Специальных дисциплин",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 26,
    name: "Сафонов Александр Валериевич",
    image: "safonovav.jpg",
    job: "Преподаватель",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 119",
    phone: "(8422) 77-88-14",
    email: "safonovav@ido.ulstu.ru",
  },
  {
    id: 27,
    name: "Хайбуллова Нурия Абдуласматовна",
    image: "xaibullova.jpg",
    job: "Преподаватель Специальных дисциплин",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 28,
    name: "Юркина Татьяна Константиновна",
    image: "urkinatk.jpg",
    job: "Преподаватель",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 119",
    phone: "тел. (8422) 77-88-14",
    email: "polikarpova.1994@mail.ru",
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
  height: 100%;
  background: ${(props) => (props.type === null ? "#006090" : `${COLORS[props.type + "_cloudy"]}`)};
  box-shadow: inset 0 -4px 0 var(--accent-color-hover);
  color: ${(props) => (props.type ? "#d9d9d9" : "#1c1c1c")};

  > a {
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: PT Serif, sans-serif;
    font-size: 13px;
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
