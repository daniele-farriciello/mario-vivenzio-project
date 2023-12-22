import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Image from '../../img/img-maestro.jpg';
import { Typography } from '@mui/material';
import { RegoularH1, RegoularH2 } from '../../Components/Typography/Typography';
import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme';

export default function StoryVivenzioGym() {
  return (
    <Box sx={{ flexGrow: 1, height: '100vh' }}>
      <Grid container spacing={0} columns={{ md: 16 }} sx={{ height: '100%', m: 0, p: 0, justifyContent: 'center' }}> {/* Removed margins and paddings */}
        <Grid
          xs={12} md={8}
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            backgroundPosition: { xs: "center", md: "left" },
            height: '100%',
            m: 0, p: 0 // Explicitly setting margin and padding to zero
          }}>
        </Grid>

        <Grid xs={12} md={8} sx={{ 
            bgcolor: 'background.paper', 
            p: { xs: 2, md: 3 }, 
            textAlign: 'center',
            height: '100%', 
            overflow: 'auto', 
            width: { xs: '100%', md: '30%' },
            mx: 'auto',
            pt: { xs: 0, md: 15 }
          }}>
          <RegoularH1 fontSize={{ xs: 40}} marginBottom={{ xs: 2}} color={dashboardTheme.palette.secondary.main}>Muay Thai</RegoularH1>
          <Typography variant="body1">
          La Muay Thai, nota come l'arte degli otto arti, è più di una semplice disciplina sportiva; è una ricca tradizione culturale della Thailandia. Nella mia palestra, dedichiamo ogni momento all'insegnamento e alla pratica di questa antica arte marziale, enfatizzando sia la sua potenza fisica che la sua profondità spirituale. 
          </Typography>
          <RegoularH2 color={dashboardTheme.palette.secondary.light}>Passione & Disciplina</RegoularH2>
          <Typography variant="body1">
            In ogni lezione, la passione e la disciplina sono i pilastri del nostro insegnamento. Credo che attraverso la dedizione e il duro lavoro, ognuno possa raggiungere vette di eccellenza sia dentro che fuori dalla palestra.
          </Typography>
          <RegoularH2 color={dashboardTheme.palette.secondary.light}>Cosa ci distingue</RegoularH2>
          <Typography variant="body1">
            La nostra palestra si distingue per l'ambiente unico. Qui, ogni membro è parte di una famiglia allargata, unita dall'amore per la Muay Thai. Forniamo un ambiente di supporto dove tutti - dai principianti ai combattenti professionisti - possono crescere, imparare e superare i propri limiti.
          </Typography>
          <RegoularH2 color={dashboardTheme.palette.secondary.light}>Sudore Ripaga Sempre</RegoularH2>
          <Typography variant="body1">
            Ogni sessione di allenamento è un'opportunità per superare se stessi, per trasformare la fatica in vittorie. Crediamo che la perseveranza e l'impegno siano la chiave per raggiungere obiettivi sia fisici che mentali. Ogni goccia di sudore rappresenta un passo avanti verso il raggiungimento dell'obiettivo.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
