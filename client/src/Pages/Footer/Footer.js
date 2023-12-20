import React from 'react';
import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, alpha, Paper } from '@mui/material';
import { RegoularH2 } from '../../Components/Typography/Typography';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
    return (
        <section>
            <Paper sx={{ backgroundColor: alpha(dashboardTheme.palette.secondary.main, 0.95), width: '100%', borderRadius: 0 }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', pt: 5, pb: 5 }}>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'} width={'40%'}>
                        <Link underline="none" color="inherit" href="https://www.google.com/maps/search/?api=1&query=Via+Cimitero,+74,+80039+Saviano+NA,+Italy" target="_blank" rel="noopener noreferrer">
                            <LocationOnIcon sx={{ fontSize: '2.6rem', color: dashboardTheme.palette.customColors.white, transition: 'color 0.5s', '&:hover': { color: '#3876BF' } }} />
                        </Link>

                        <Link underline="none" color="inherit" href="tel:+393883706025" target="_blank" rel="noopener noreferrer">
                            <CallIcon sx={{ fontSize: '2.6rem', color: dashboardTheme.palette.customColors.white, transition: 'color 0.5s', '&:hover': { color: '#3876BF' } }} />
                        </Link>

                        <Link underline="none" color="inherit" href="https://www.instagram.com/mario__vivenzio/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon sx={{ fontSize: '3rem', color: dashboardTheme.palette.customColors.white, transition: 'color 0.5s', '&:hover': { color: '#C13584' } }} />
                        </Link>

                        <Link underline="none" color="inherit" href="https://www.facebook.com/mario.vivenzio.58/" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon sx={{ fontSize: '3rem', color: dashboardTheme.palette.customColors.white, transition: 'color 0.5s', '&:hover': { color: '#3876BF' } }} />
                        </Link>
                    </Box>
                </Toolbar>
            </Paper>
        </section>
    );
}