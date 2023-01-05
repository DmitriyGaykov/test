import {
   BrowserRouter,
    Routes,
     Route,
      createBrowserRouter,
       RouterProvider,
        createRoutesFromElements } from 'react-router-dom';
import React, { Children } from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

import './Fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './CSS/index.css';

import Catalog from './Components/Catalog/Catalog';

const App = () => 
{
  return (
      <div className='root-block'>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route index path='/' element={<Main />} />
            <Route path='/catalog' element={<Catalog />} />
          </Routes> 

          <Footer />
        </BrowserRouter>
      </div>
  );
};

export default App;
