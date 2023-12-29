import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, alpha, useMediaQuery, useTheme } from '@mui/material';
import { RegoularH2, TeamVivenzioTitle } from '../../Components/Typography/Typography';
import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme';
import Video from '../../video/video-annamaria-pao.mp4';
import Image from '../../img/photo-grigia-pao-maestro.jpg'

export default function PadPage() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (

    <Box sx={{ flexGrow: 1, height: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {isScreenSmall ?
        <img
          alt='Pad'
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
            filter: 'blur(2px)',
            zIndex: -1
          }}
          src={Video}
        />
      }
      <Grid
        container
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          overflowY: 'auto'
        }}
      >
        <Grid
          container
          sx={{
            marginTop: { xs: '85%', sm: '20%', md: '10%', lg: '5%', xl: '5%' },
            marginBottom: { xs: '15%', sm: '5%', md: '5%' },
            width: { xs: '90%', sm: '80%', md: '60%', lg: '50%', xl: '40%' },
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius: '20px',
            backgroundColor: alpha(dashboardTheme.palette.primary.main, 0.7),
            padding: { xs: '10px', sm: '20px', md: '30px', lg: '40px', xl: '50px' },
          }}
        >
          <TeamVivenzioTitle color={dashboardTheme.palette.secondary.main} fontSize={{ xs: '36px', sm: '42px', md: '48px', lg: '54px', xl: '60px' }}>
            PAO
          </TeamVivenzioTitle>
          <Typography color={dashboardTheme.palette.secondary.light} variant="body1" textAlign={'center'}>
            Il Pao è un attrezzo essenziale per l'allenamento in Muay Thai, utilizzato per migliorare precisione e potenza nei colpi.
            Permette di esercitarsi in sicurezza. Simula situazioni di combattimento reale, essenziale per la pratica tecnica.
          </Typography>
          <RegoularH2 fontSize={{ xs: '24px', sm: '26px', md: '28px', lg: '30px', xl: '32px' }} color={dashboardTheme.palette.secondary.main}>Tecniche e Esercizi con il Pao</RegoularH2>
          <Typography color={dashboardTheme.palette.secondary.light} variant="body1" textAlign={'center'}>
            Gli esercizi con il Pao spaziano da sequenze di base a combinazioni avanzate, adatti a tutti i livelli di esperienza.
            L'istruttore guida i praticanti attraverso vari esercizi, enfatizzando non solo la corretta postura e tecnica, ma anche l'importanza della presenza mentale e del controllo emotivo durante l'allenamento.
          </Typography>
          <RegoularH2 fontSize={{ xs: '24px', sm: '26px', md: '28px', lg: '30px', xl: '32px' }} color={dashboardTheme.palette.secondary.main}>
            Il Pao come Strumento di Crescita Spirituale
          </RegoularH2>
          <Typography color={dashboardTheme.palette.secondary.light} variant="body1" textAlign={'center'}>
            Nella Muay Thai, l'allenamento con il Pao è visto come un percorso verso la padronanza di sé, dove mente, corpo e spirito lavorano in armonia.
            La pratica regolare con il Pao insegna ai praticanti a rimanere focalizzati, calmi e presenti, trasformando l'allenamento fisico in un'esperienza meditativa e spiritualmente arricchente.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
