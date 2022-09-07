import React from 'react';
import { AiFillDollarCircle } from "react-icons/ai";

import Button from '../components/Button';
import { useStateContext } from '../contexts/ContextProvider';

const Dashboard = () => {
  const {currentColor} = useStateContext();

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard