import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Customers from './pages/Customers';
import Products from './pages/Products';

import { useStateContext } from './contexts/ContextProvider';
import './App.css';

const App = () => {
    const { activeMenu, setThemeSettings } = useStateContext();


    return (
        <div className="">
            <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4"
                style={{ zIndex: '1000'}}
                >
                    <button
                    type="button" 
                    className="text-3xl p-3 hover:drop-shadow-xl 
                    hover:bg-light-gray text-white"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: 'red', borderRadius: '50%' }}
                    >
                        <FiSettings />
                    </button>
                </div>

            {activeMenu ? (
                <div 
                className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                    <Sidebar />
                </div>
            ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                    <Sidebar /> 
                </div>
            )}
            <div className={
                `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
                ${activeMenu 
                    ?  'md:ml-72'
                    : 'flex-2'}`
            }>
                <div className="fixed md:static
                 bg-main-bg dark:bg-main-dark-bg navbar w-full">
                    <Navbar />
                </div>

                <div>
                    <Routes>
                        {/* Dashboard */}
                        <Route path="/" element={(<Dashboard />)} />
                        <Route path="/Dashboard" element={(<Dashboard />)} />
                        <Route path="/Calendario" element={<Calendar />} />

                        {/* Editor */}
                        <Route path="/Clientes" element={<Customers />} />
                        <Route path="/Produtos" element={<Products />} />
                    
                    </Routes>
                </div>

                </div>
            </div>
            </BrowserRouter>
        </div>
    )
}

export default App;