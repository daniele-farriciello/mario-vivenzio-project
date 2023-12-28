import React from 'react';
import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, alpha, Paper, useMediaQuery, useTheme } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
    const theme = useTheme();
    const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <section id='contattiSection'>
            <Paper sx={{ backgroundColor: alpha(dashboardTheme.palette.secondary.main, 0.95), width: '100%', borderRadius: 0 }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', pt: isScreenSmall ? 2 : 5, pb: isScreenSmall ? 2 : 5 }}>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'} width={ isScreenSmall ? '80%' : '40%'}>
                        <Link underline="none" color="inherit" href="https://www.google.com/maps/search/?api=1&query=Via+Cimitero,+74,+80039+Saviano+NA,+Italy" target="_blank" rel="noopener noreferrer">
                            <LocationOnIcon sx={{ fontSize: isScreenSmall ? '2rem' : '2.6rem', color: dashboardTheme.palette.customColors.white, transition: 'color 0.5s', '&:hover': { color: '#FFFB73' } }} />
                        </Link>

                        <Link underline="none" color="inherit" href="tel:+393883706025" target="_blank" rel="noopener noreferrer">
                            <CallIcon sx={{ fontSize: isScreenSmall ? '2rem' : '2.6rem', color: dashboardTheme.palette.customColors.white, transition: 'color 0.5s', '&:hover': { color: '#557C55' } }} />
                        </Link>

                        <Link underline="none" color="inherit" href="https://www.instagram.com/mario__vivenzio/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon sx={{ fontSize: isScreenSmall ? '2rem' : '2.6rem', color: dashboardTheme.palette.customColors.white, transition: 'color 0.5s', '&:hover': { color: '#C13584' } }} />
                        </Link>

                        <Link underline="none" color="inherit" href="https://www.facebook.com/mario.vivenzio.58/" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon sx={{ fontSize: isScreenSmall ? '2rem' : '2.6rem', color: dashboardTheme.palette.customColors.white, transition: 'color 0.5s', '&:hover': { color: '#3876BF' } }} />
                        </Link>
                    </Box>
                </Toolbar>
            </Paper>
        </section>
    );
}