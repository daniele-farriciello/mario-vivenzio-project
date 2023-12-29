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
        alt='Sparring'
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
            marginTop: { xs: '145%', sm: '20%', md: '10%', lg: '5%', xl: '5%' },
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
            SPARRING
          </TeamVivenzioTitle>
          <Typography color={dashboardTheme.palette.secondary.light} variant="body1" textAlign={'center'}>
            Lo Sparring è una componente vitale dell'allenamento in Muay Thai, fondamentale per sviluppare riflessi, tempismo e comprensione pratica delle tecniche di combattimento. Questa pratica consente ai combattenti di testare e affinare le loro abilità in un contesto controllato e sicuro, simulando situazioni di combattimento reale.
          </Typography>
          <RegoularH2 fontSize={{ xs: '24px', sm: '26px', md: '28px', lg: '30px', xl: '32px' }}color={dashboardTheme.palette.secondary.main}>Principi e Tecniche dello Sparring</RegoularH2>
          <Typography color={dashboardTheme.palette.secondary.light} variant="body1" textAlign={'center'}>
            Le sessioni di sparring variano da esercizi leggeri e controllati a sessioni più intense, adatte a praticanti di vari livelli di esperienza. Durante lo sparring, i combattenti apprendono l'importanza della distanza, del movimento e della strategia, oltre a migliorare la difesa e l'attacco. L'istruttore monitora e guida i praticanti, assicurando che le tecniche vengano eseguite correttamente e in sicurezza, enfatizzando il rispetto reciproco e il controllo.
          </Typography>
          <RegoularH2 fontSize={{ xs: '24px', sm: '26px', md: '28px', lg: '30px', xl: '32px' }}color={dashboardTheme.palette.secondary.main}>
            Lo Sparring come Strumento di Crescita Spirituale
          </RegoularH2>
          <Typography color={dashboardTheme.palette.secondary.light} variant="body1" textAlign={'center'}>
            Nella Muay Thai, lo sparring è un'opportunità per crescita personale e apprendimento. Attraverso la pratica dello sparring, i praticanti sviluppano non solo la loro tecnica, ma anche la loro capacità di leggere l'avversario e adattarsi rapidamente a situazioni dinamiche. Lo sparring insegna a mantenere la calma sotto pressione, migliorando la resilienza mentale e la presenza di spirito. Questo tipo di allenamento aiuta i combattenti a guadagnare fiducia nelle proprie capacità e a sviluppare un profondo rispetto per l'arte marziale e per i loro avversari.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
