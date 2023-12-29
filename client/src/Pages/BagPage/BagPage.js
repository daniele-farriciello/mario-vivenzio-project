import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, alpha, useMediaQuery, useTheme } from '@mui/material';
import { RegoularH2, TeamVivenzioTitle } from '../../Components/Typography/Typography';
import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme';
import Video from '../../video/maestro-pao-cleme.mp4';
import Image from '../../img/SecondPage1.jpeg'

export default function PadPage() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (

    <Box sx={{ flexGrow: 1, height: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {isScreenSmall ?
        <img
        alt='Bag'
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
            marginTop: { xs: '110%', sm: '20%', md: '10%', lg: '5%', xl: '5%' },
            marginBottom: { xs: '15%', sm: '5%', md: '5%'},
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
            BAG
          </TeamVivenzioTitle>
          <Typography color={dashboardTheme.palette.secondary.light} variant="body1" textAlign={'center'}>
            Il sacco è uno strumento fondamentale per chi pratica Muay Thai, essenziale per sviluppare resistenza, potenza e coordinazione. Offre ai praticanti un modo sicuro e efficace per allenarsi, essendo particolarmente utile per perfezionare la tecnica.
          </Typography>
          <RegoularH2 fontSize={{ xs: '24px', sm: '26px', md: '28px', lg: '30px', xl: '32px' }}color={dashboardTheme.palette.secondary.main}>Tecniche e Esercizi con il Sacco</RegoularH2>
          <Typography color={dashboardTheme.palette.secondary.light} variant="body1" textAlign={'center'}>
          Gli esercizi con il sacco variano da semplici colpi di base a combinazioni più complesse, adatti a tutti i livelli di esperienza. Permette ai praticanti di migliorare la propria resistenza e forza. L'istruttore può guidare i praticanti attraverso una serie di esercizi che aiutano a migliorare la velocità, la precisione e la potenza.
          </Typography>
          <RegoularH2 fontSize={{ xs: '24px', sm: '26px', md: '28px', lg: '30px', xl: '32px' }} color={dashboardTheme.palette.secondary.main}>
            Il Sacco come Strumento di Crescita Spirituale
          </RegoularH2>
          <Typography color={dashboardTheme.palette.secondary.light} variant="body1" textAlign={'center'}>
            Nella Muay Thai, allenarsi con il sacco non è solo un esercizio fisico, ma anche un percorso di crescita personale. L'allenamento costante insegna ai praticanti a gestire la loro energia e la loro forza in modo più efficiente. Si impara a mantenere la calma e la concentrazione anche in situazioni di stress, trasformando l'allenamento fisico in un momento di sviluppo personale e di autocontrollo. La pratica regolare con il Bag non solo migliora le abilità di combattimento, ma anche la resistenza mentale e la fiducia in se stessi.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
