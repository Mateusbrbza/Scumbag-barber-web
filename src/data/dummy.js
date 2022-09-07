import React from 'react';
import { IconName, AiFillHome, AiFillEdit } from "react-icons/ai";
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';



export const links = [
  {
    title: 'Visualização',
    links: [
      {
        name: 'Dashboard',
        icon: <AiFillHome />,
      },
      {
        name: 'Produtos',
        icon: <AiFillEdit />,
      },
      {
        name: 'Clientes',
        icon: <RiContactsLine />,
      },
      {
        name: 'Calendario',
        icon: <AiOutlineCalendar />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
];