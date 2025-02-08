import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Video2 from '../../video/maestro-pao-cleme.mp4';
import { useMediaQuery, useTheme } from '@mui/material';
import Image from '../../img/mario-cleme-corner.jpg'
import Image2 from '../../img/next-gala-img.jpg'
// import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme';
// import { TeamVivenzioTitle } from '../../Components/Typography/Typography';

export default function NextGalà() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

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
        }}
      >
        <Grid
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* {!isScreenSmall ?
            <TeamVivenzioTitle marginTop={5} marginBottom={5} fontSize={80} color={dashboardTheme.palette.primary.main}>WORKING IN PROGRESS</TeamVivenzioTitle>
          :
            null
          } */}
          <img src={Image2} alt='background-next-gala' style={{
            position: 'absolute',
            width: isScreenSmall ? '100%' : 'auto',
            height: isScreenSmall ? 'auto' : '90%',
            objectFit: 'cover',
            bottom: isScreenSmall ? 0 : 5,
            left: '50%',
            borderRadius: '20px',
            transform: isScreenSmall ? 'translate(-50%, -50%)' : 'translateX(-50%)',
            top: isScreenSmall ? '50%' : 'auto',
            zIndex: -1
          }} />
        </Grid>
      </Grid>
    </Box>
  );
}
