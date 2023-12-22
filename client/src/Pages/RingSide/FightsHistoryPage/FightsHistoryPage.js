import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Video1 from '../../../video/workingProgressGala.mp4';
import Video2 from '../../../video/maestro-pao-cleme.mp4';
import dashboardTheme from '../../../Components/DashboardTheme/DashboardTheme';
import { TeamVivenzioTitle } from '../../../Components/Typography/Typography';

export default function FightsHistoryPage() {
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
          <TeamVivenzioTitle paddingTop={6} fontSize={80} marginBottom={6} color={dashboardTheme.palette.primary.main}>WORKING IN PROGRESS</TeamVivenzioTitle>
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
