import {
  faBus,
  faCode,
  faGraduationCap,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';

export const educationData = [
  {
    date: '2005 - 2013',
    title: 'Primary and middle school',
    location: 'Pečenjevce, Serbia',
    description:
      'English language (A2), Communication, Binary numbers & operations, Basic computer skills.',
    icon: faSchool,
  },
  {
    date: '2013 - 2017',
    title: 'Grammar school',
    location: 'Leskovac, Serbia',
    description:
      'English language (B2), Informatics, Computer hardware, Binary system, Algorithms, Basic concepts of programming, Fortran, Windows forms.',
    icon: faBus,
  },
  {
    date: '2017 - present',
    title: 'Faculty of Electronic Engineering',
    location: 'Niš, Serbia',
    description:
      'English language (C1 & technical proficiency), Algorithms and programming, Computer systems, Object oriented programming, Programming languages, Data structures, Databases, Web programming, Software engineering, Object oriented design, Game theory, Operating systems, Artificial intelligence, Web development, Various projects and practical exercises using the programming languages: C, C++, C#, Java, SQL, Javascript, Typescript & Lisp.',
    icon: faGraduationCap,
  },
  {
    date: '2021 - present',
    title: 'Freelance Web developer',
    location: 'Niš, Serbia + remote',
    description:
      'Designing both static and dynamic websites using technologies such as HTML, CSS, Javascript, Typescript, React, NodeJS, Express, Firebase, MongoDB, Bootstrap, MaterialUI, ChakraUI and more.',
    icon: faCode,
  },
];
