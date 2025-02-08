import React from 'react';
import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, alpha, Paper, useMediaQuery, useTheme } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import c4uLogo from '../../img/c4u-logo.png'
import './footer.css'

export default function Footer() {
    const theme = useTheme();
    const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Paper sx={{ backgroundColor: alpha(dashboardTheme.palette.secondary.main, 0.95), width: '100%', borderRadius: 0 }}>
            <div>
                <section id='contattiSection' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Paper sx={{ backgroundColor: alpha(dashboardTheme.palette.secondary.main, 0.95), width: '100%', borderRadius: 0 }}>
                        <Toolbar sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', pt: isScreenSmall ? 2 : 5, pb: isScreenSmall ? 2 : 5 }}>
                            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'} width={isScreenSmall ? '80%' : '40%'}>
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
                    <Paper sx={{ backgroundColor: alpha(dashboardTheme.palette.secondary.main, 0.95), width: '100%', borderRadius: 0 }}>
                        <div className='copyright-text' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: dashboardTheme.palette.customColors.white }}>

                            <div style={{ display: 'flex', flexDirection: isScreenSmall ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: isScreenSmall ? '0' : '0.5rem',flexDirection: isScreenSmall ? 'column' : 'row' }}>
                                    <h1 style={{ fontSize: '1.5rem', lineHeight: '1.5rem', fontFamily: 'Playfair Display, serif', }}>Sviluppato dal  TEAM di </h1>
                                    <a href="https://condominioforyou.it/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: dashboardTheme.palette.customColors.white, borderRadius: '10px'}}>
                                        <img src={c4uLogo} alt="C4U" className="sponsor__img" />
                                    </a>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                    <a style={{ fontFamily: 'Playfair Display, serif', color: dashboardTheme.palette.customColors.white, textDecoration: 'none', fontWeight: 'bold' }} href="https://www.linkedin.com/in/daniele-farriciello/" target="_blank" rel="noopener noreferrer">
                                        <span>Daniele Farriciello &nbsp;</span>
                                    </a>
                                    &
                                    <a style={{fontFamily: 'Playfair Display, serif', color: dashboardTheme.palette.customColors.white, textDecoration: 'none', fontWeight: 'bold' }} href="https://www.linkedin.com/in/davide-farriciello/" target="_blank" rel="noopener noreferrer">
                                        <span> &nbsp;Davide Farriciello</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Paper>

                </section>
                <div style={{ color: dashboardTheme.palette.customColors.white, textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>© Copyright 2025 Vivenzio Gym All Rights Reserved.</div>
            </div>
        </Paper>
    );
}