import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import HomePage from './Pages/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import dashboardTheme from './Components/DashboardTheme/DashboardTheme';
import BagPage from './Pages/BagPage/BagPage';
import PagPage from './Pages/PadPage/PagPage';
import SparringPage from './Pages/SparringPage/SparringPage';
import SponsorPage from './Pages/SponsorPage/SponsorPage';
import Footer from './Pages/Footer/Footer';
import NextGalà from './Pages/NextGalà/NextGalà';
import StoryVivenzioGym from './Pages/StoryVivenzioGym/StoryVivenzioGym';
import FightsHistoryPage from './Pages/RingSide/FightsHistoryPage/FightsHistoryPage';

function App() {
  return (
    <ThemeProvider theme={dashboardTheme}>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/bagPage' element={<BagPage />} />
          <Route path='/bagPage' element={<BagPage />} />
          <Route path='/padPage' element={<PagPage />} />
          <Route path='/sparringPage' element={<SparringPage />} />
          <Route path='/nextGalà' element={<NextGalà />} />
          <Route path='/storyVivenzioGym' element={<StoryVivenzioGym />} />
          <Route path='/fightsHistoryPage' element={<FightsHistoryPage />} />
          <Route path='/sponsorPage' element={<SponsorPage />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;