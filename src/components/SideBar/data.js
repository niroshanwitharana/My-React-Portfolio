import React from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaCodepen,
  FaHome,
  FaUserGraduate,
  FaFolderOpen,
  FaWpforms,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/education',
    text: 'Education',
    icon: <FaUserGraduate />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://github.com/niroshanwitharana',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://stackoverflow.com/users/11591116/niro?tab=profile',
    icon: <FaStackOverflow />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/niroshana-witharana-67a465165/',
    icon: <FaLinkedinIn />,
  },
  {
    id: 4,
    url: 'https://www.facebook.com/N.Witharana',
    icon: <FaFacebookF />,
  },
  {
    id: 5,
    url: 'https://codesandbox.io/u/niroshanwitharana',
    icon: <FaCodepen />,
  },
];
