
import Video2 from '../../../video/video-cleme-sparring.mp4';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Box, Grid, alpha, useMediaQuery, useTheme } from "@mui/material";
import dashboardTheme from '../../../Components/DashboardTheme/DashboardTheme'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import { TeamVivenzioTitle } from '../../../Components/Typography/Typography';
import { FightersData } from './FightersData';

export default function FightsHistoryPage() {
  const [currentFighterIndex, setCurrentFighterIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isScreenMedium = useMediaQuery(theme.breakpoints.down('md'));

  const handleNextSponsor = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentFighterIndex((prevIndex) => (prevIndex + 1) % FightersData.length);
      setFadeOut(false);
    }, 500); // Duration of the fade out
  };

  const handlePreviousSponsor = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentFighterIndex((prevIndex) => (prevIndex - 1 + FightersData.length) % FightersData.length);
      setFadeOut(false);
    }, 500); // Duration of the fade out
  };

  return (
    <Box sx={{ flexGrow: 1, height: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {isScreenSmall ?
        <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          top: 0,
          left: 0,
          filter: 'blur(8px)',
          zIndex: -1
        }}
        src={Video2}
      />
        :
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 35%',
            top: 0,
            left: 0,
            filter: 'blur(8px)',
            zIndex: -1
          }}
          src={Video2}
        />
      }
      <Grid
        container
        spacing={2}
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <TeamVivenzioTitle paddingTop={isScreenSmall ? 0 : 11} fontSize={isScreenSmall ? 40 : 80} marginBottom={3} color={dashboardTheme.palette.primary.main}>HYSTORY TEAM VIVENZIO</TeamVivenzioTitle>
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: isScreenMedium ? '1fr' : '60% 25%', // Adjust column sizes based on screen size
            gap: isScreenMedium ? '0' : '20px', // Add gap for larger screens
            paddingBottom: '3%',
          }}
        >

          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
            <Card elevation={10} sx={{
              width: '100%',
              maxWidth: isScreenSmall ? '200px' : '320px',
              height: isScreenSmall ? '300px' : '550px',
              position: 'relative',
              borderRadius: 10
            }}>
              <Link to={FightersData[currentFighterIndex].link} target="_blank">
                <img
                  src={FightersData[currentFighterIndex].img}
                  alt="Sponsor"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    opacity: fadeOut ? 0 : 1,
                    transition: 'opacity 0.5s ease-in-out',
                  }}
                />
              </Link>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  position: 'absolute',
                  bottom: isScreenSmall ? '42%' : '40%',
                  left: 0,
                  right: 0,
                  padding: isScreenSmall ? '5px 5px' : '15px 30px',
                }}
              >
                <ArrowBackIosIcon
                  sx={{
                    color: alpha(dashboardTheme.palette.secondary.main, 0.75),
                    fontSize: isScreenSmall ? 30 : 50,
                    cursor: 'pointer',
                  }}
                  onClick={handlePreviousSponsor}
                  aria-label="Previous sponsor"
                />
                <ArrowForwardIosIcon
                  sx={{
                    cursor: 'pointer',
                    color: alpha(dashboardTheme.palette.secondary.main, 0.75),
                    fontSize: isScreenSmall ? 30 : 50
                  }}
                  onClick={handleNextSponsor}
                  aria-label="Next sponsor"
                />
              </Box>
            </Card>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: isScreenMedium ? 'center' : 'center', // Center the content on medium screens
            paddingTop: isScreenMedium ? '0' : '5%',
            width: isScreenMedium ? '70%' : '100%',
            margin: isScreenMedium ? 'auto' : '0', // Center the box on medium screens
          }}
          >
            <TeamVivenzioTitle color={dashboardTheme.palette.secondary.main} fontSize={isScreenSmall ? 15 : 50}>
              {FightersData[currentFighterIndex].name}
            </TeamVivenzioTitle>
            {Object.entries(FightersData[currentFighterIndex].descriptions || {}).map(([key, description]) => (
              <TeamVivenzioTitle key={key} color={dashboardTheme.palette.primary.main} fontSize={isScreenSmall ? 15 : 30}>
                {description}
              </TeamVivenzioTitle>
            ))}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}