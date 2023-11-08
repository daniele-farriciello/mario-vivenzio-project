import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import HomePage from './Pages/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import dashboardTheme from './Components/DashboardTheme/DashboardTheme';
import BagPage from './Pages/BagPage/BagPage';

function App() {
  return (
    <ThemeProvider theme={dashboardTheme}>
      <BrowserRouter>
        <ThemeProvider theme={dashboardTheme}>
          <Routes>
            <Route path='' element={<HomePage />} />
            <Route path='/bagPage' element={<BagPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      <NavBar></NavBar>
    </ThemeProvider>
  );
}

export default App;