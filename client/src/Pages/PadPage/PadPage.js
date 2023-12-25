import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, alpha } from '@mui/material';
import { RegoularH2, TeamVivenzioTitle } from '../../Components/Typography/Typography';
import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme';
import Video from '../../video/maestro-pao-cleme.mp4';

export default function PadPage() {
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
        src={Video}
      />

      <Grid
        container
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Grid
          container
          sx={{
            marginTop: '5%',
            width: '45%',
            height: '70%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius: '20px',
            backgroundColor: alpha(dashboardTheme.palette.primary.main, 0.4),
            paddingTop: 0,
            paddingX: '60px', // Aggiungi padding orizzontale qui
          }}
        >
          <TeamVivenzioTitle color={dashboardTheme.palette.primary.main} fontSize={54}>
            PAO
          </TeamVivenzioTitle>
          <Typography variant="body1" textAlign={'center'}>
            Il Pao è un attrezzo essenziale per l'allenamento in Muay Thai, utilizzato per migliorare precisione e potenza nei colpi. 
            Permette di esercitarsi in sicurezza. Simula situazioni di combattimento reale, essenziale per la pratica tecnica.
          </Typography>
          <RegoularH2 color={dashboardTheme.palette.primary.main}>Tecniche e Esercizi con il Pao</RegoularH2>
          <Typography variant="body1" textAlign={'center'}>
            Gli esercizi con il Pao spaziano da sequenze di base a combinazioni avanzate, adatti a tutti i livelli di esperienza.
            L'istruttore guida i praticanti attraverso vari esercizi, enfatizzando non solo la corretta postura e tecnica, ma anche l'importanza della presenza mentale e del controllo emotivo durante l'allenamento.
          </Typography>
          <RegoularH2 fontSize={28} color={dashboardTheme.palette.primary.main}>Il Pao come Strumento di Crescita Spirituale</RegoularH2>
          <Typography variant="body1" textAlign={'center'}>
            Nella Muay Thai, l'allenamento con il Pao è visto come un percorso verso la padronanza di sé, dove mente, corpo e spirito lavorano in armonia.
            La pratica regolare con il Pao insegna ai praticanti a rimanere focalizzati, calmi e presenti, trasformando l'allenamento fisico in un'esperienza meditativa e spiritualmente arricchente.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
