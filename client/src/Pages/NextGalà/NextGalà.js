import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Video1 from '../../video/workingProgressGala.mp4';
import Video2 from '../../video/maestro-pao-cleme.mp4';
import { RegoularH1 } from '../../Components/Typography/Typography';
import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme';

export default function NextGalà() {
  return (
    <Box sx={{ flexGrow: 1, height: '100vh', position: 'relative' }}>
      {/* Background Video */}
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

      {/* Content */}
      <Grid
        container
        spacing={2}
        sx={{
          height: '100%',
          display: 'flex',        
          justifyContent: 'center', // Center content horizontally
          alignItems: 'center',     // Center content vertically
        }}
      >
        <Grid
          item // Added the `item` property
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <RegoularH1 marginBottom={8} color={dashboardTheme.palette.secondary.main}>WORKING IN PROGRESS</RegoularH1>
          <video
            src={Video1}
            autoPlay
            loop
            muted
            style={{
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
