import React from 'react';
import Button from '../components/Button';
import { GoPrimitiveDot } from 'react-icons/go';

const Products = () => {
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

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
        m-3 p-4 rounded-2xl md:w-780">
          <div classame="flex justify-between">
            <p className="font-semibold text-xl">Receita mensal</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>teste</span>
              </p>
              <p className="flex items-center gap-2 text-green-400
              hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>teste2</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div clasName="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">R$ 100</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer
                  rounded-full text-white bg-green-400 ml-3 trxt-xs">
                    10%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">texto 3</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">R$ 100</span>
                </p>
                <p className="text-gray-500 mt-1">Despesas</p>
              </div>

              <div className="mt-5">
                
              </div>
            </div>
          </div>

        </div>
      </div>

        
      </div>
    </div>
  )
}

export default Products