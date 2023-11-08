import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import styled from 'styled-components';
import { Link } from '@mui/material';
import { RegoularH2, TeamVivenzioTitle } from '../Typography/Typography';


export default function NavBar() {

    const NewInstagramIcon = styled(InstagramIcon)`
        font-size: 300%;
        margin-bottom: -10px;
        transition: color 0.5s;

        &:hover {
            color: #C13584;
        }`

    const NewFacebookIcon = styled(FacebookIcon)`
        font-size: 300%;
        margin-bottom: -10px;
        transition: color 0.5s;

        &:hover {
            color: #3876BF;
        }`


    return (
        <Box >
            <CssBaseline />
            <AppBar component="nav">

                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Box display={'flex'} flexDirection={'row'}>
                        <RegoularH2 paddingRight={3}>Chi siamo</RegoularH2>
                        <RegoularH2 paddingRight={3}>Attivita</RegoularH2>
                        <RegoularH2 paddingRight={3}>Contatti</RegoularH2>
                    </Box>
                    <Box>
                    <TeamVivenzioTitle marginLeft={-30}>TEAM VIVENZIO</TeamVivenzioTitle>
                    </Box>
                    
                    <Box display={'flex'} justifyContent={'flex-end'}>
                        <Box sx={{ marginRight: '20px' }}>
                            <Link underline="none" color="inherit" href="https://www.instagram.com/mario__vivenzio/" target="_blank" rel="noopener noreferrer">
                                <NewInstagramIcon />
                            </Link>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'block', marginRight: '10px' } }}>
                            <Link underline="none" color="inherit" href="https://www.facebook.com/mario.vivenzio.58/" target="_blank" rel="noopener noreferrer">
                                <NewFacebookIcon />
                            </Link>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
