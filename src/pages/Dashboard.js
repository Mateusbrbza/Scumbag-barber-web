import React from 'react';
import { AiFillDollarCircle } from "react-icons/ai";

import Button from '../components/Button';
import { useStateContext } from '../contexts/ContextProvider';

const Dashboard = () => {
  const {currentColor} = useStateContext();

  return (
    <div className="mt-8">
      <div className="flex flex-wrap justify-center">
        <div 
        className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 
        rounded-xl w-full lg:w-80 p-9 pt-8 m-3 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Ganhos nos ultimos 30 dias</p>
              {/* valores api retirar e informar dentro dos p */}
              <p className="text-2xl">R$ 100,27</p>
            </div>
          </div>
          <div className="mt-6">
            <Button 
            color="white"
            bgColor="Black"
            text="Visualizar"
            borderRadius="10px"
            size="md"
            />
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Dashboard