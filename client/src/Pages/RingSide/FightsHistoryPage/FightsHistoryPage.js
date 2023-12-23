import React from 'react';
import { Box, Grid } from "@mui/material";
import dashboardTheme from '../../../Components/DashboardTheme/DashboardTheme'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Video1 from '../../../video/workingProgressGala.mp4';
import Video2 from '../../../video/maestro-pao-cleme.mp4';
import { TeamVivenzioTitle } from '../../../Components/Typography/Typography';

export default function SponsorPage() {
  // const [currentSponsorIndex, setCurrentSponsorIndex] = useState(0);
  // const [fadeOut, setFadeOut] = useState(false);

  // const handleNextSponsor = () => {
  //   setFadeOut(true);
  //   setTimeout(() => {
  //     setCurrentSponsorIndex((prevIndex) => (prevIndex + 1) % SponsorData.length);
  //     setFadeOut(false);
  //   }, 500); // Duration of the fade out
  // };

  // const handlePreviousSponsor = () => {
  //   setFadeOut(true);
  //   setTimeout(() => {
  //     setCurrentSponsorIndex((prevIndex) => (prevIndex - 1 + SponsorData.length) % SponsorData.length);
  //     setFadeOut(false);
  //   }, 500); // Duration of the fade out
  // };

  return (
    <Box sx={{ flexGrow: 1, height: '100vh', position: 'relative' }}>
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
        <TeamVivenzioTitle paddingTop={6} fontSize={80} marginBottom={6} color={dashboardTheme.palette.primary.main}>WORKING IN PROGRESS</TeamVivenzioTitle>
        <Grid
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <video
            src={Video1}
            autoPlay
            loop
            style={{
              borderRadius: '20px',
              maxWidth: '100%',
              maxHeight: '60vh',
              objectFit: 'contain'
            }}
          />

          <video
            src={Video1}
            autoPlay
            loop
            style={{
              borderRadius: '20px',
              maxWidth: '100%',
              maxHeight: '60vh',
              objectFit: 'contain'
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}