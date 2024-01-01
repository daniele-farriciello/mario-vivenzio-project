
import Video2 from '../../../video/maestro-pao-cleme.mp4';
import Image from '../../../img/mario-cleme-corner.jpg'
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Box, Grid, alpha, useMediaQuery, useTheme } from "@mui/material";
import dashboardTheme from '../../../Components/DashboardTheme/DashboardTheme'
import { RegoularH2, RegoularH1 } from '../../../Components/Typography/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import { SponsorData } from '../../SponsorPage/SponsorData';
import { TeamVivenzioTitle } from '../../../Components/Typography/Typography';

export default function FightsHistoryPage() {
  const [currentSponsorIndex, setCurrentSponsorIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const theme = useTheme();
    const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const isScreenMedium = useMediaQuery(theme.breakpoints.down('md'));

  const handleNextSponsor = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentSponsorIndex((prevIndex) => (prevIndex + 1) % SponsorData.length);
      setFadeOut(false);
    }, 500); // Duration of the fade out
  };

  const handlePreviousSponsor = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentSponsorIndex((prevIndex) => (prevIndex - 1 + SponsorData.length) % SponsorData.length);
      setFadeOut(false);
    }, 500); // Duration of the fade out
  };

  return (
    <Box sx={{ flexGrow: 1, height: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {isScreenSmall ?
        <img
          alt='background-next-gala'
          src={Image}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: -1
          }}
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
        <TeamVivenzioTitle paddingTop={10} fontSize={80} marginBottom={4} color={dashboardTheme.palette.primary.main}>HYSTORY TEAM VIVENZIO</TeamVivenzioTitle>
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: isScreenMedium ? '1fr' : '60% 25%', // Adjust column sizes based on screen size
            gap: isScreenMedium ? '0' : '20px', // Add gap for larger screens
            paddingBottom: '3%',
          }}
        >
          {/* Sponsorship Box */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
            <RegoularH1 fontSize={isScreenSmall ? 35 : 45}>Partnership</RegoularH1>
            <Card elevation={10} sx={{
              width: '100%',
              maxWidth: isScreenSmall ? '300px' : '500px',
              height: isScreenSmall ? '220px' : '350px',
              position: 'relative',
              borderRadius: 10
            }}>
              <Link to={SponsorData[currentSponsorIndex].link} target="_blank">
                <img
                  src={SponsorData[currentSponsorIndex].img}
                  alt="Sponsor"
                  style={{
                    objectFit: 'contain',
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
            justifyContent: isScreenMedium ? 'center' : 'flex-start', // Center the content on medium screens
            paddingTop: isScreenMedium ? '0' : '20%',
            width: isScreenMedium ? '70%' : '100%',
            margin: isScreenMedium ? 'auto' : '0', // Center the box on medium screens
          }}
          >
            <RegoularH2 fontSize={isScreenSmall ? 15 : 30}>
              Il nostro obiettivo è promuovere l'eccellenza sportiva e offrire spettacoli emozionanti sul ring.
              Unitevi a noi per vivere l'energia unica di questo evento straordinario e godervi combattimenti mozzafiato.
            </RegoularH2>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}