import React from 'react';
import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, alpha, Paper } from '@mui/material';
import { RegoularH2 } from '../../Components/Typography/Typography';

export default function Footer() {
    return (
        <section>
            <Paper sx={{ backgroundColor: alpha(dashboardTheme.palette.secondary.light, 0.95), width: '100%', borderRadius: 0}}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', pt:5, pb:5 }}>
                    <Box display={'flex'} flexDirection={'row'} >
                        <RegoularH2 marginRight={3} color={dashboardTheme.palette.customColors.white} hoverColor={dashboardTheme.palette.secondary.main} transition={'color 0.5s ease-in-out'}>Via Cimitero, 74, 80039 Saviano NA, Italy</RegoularH2>
                        
                        <RegoularH2 marginRight={3} color={dashboardTheme.palette.customColors.white} hoverColor={dashboardTheme.palette.secondary.main} transition={'color 0.5s ease-in-out'}>+39 388 370 6025</RegoularH2>
                    </Box>

                    <Box display={'flex'} justifyContent={'flex-end'}>
                        <Box sx={{ marginRight: '20px' }}>
                            <Link underline="none" color="inherit" href="https://www.instagram.com/mario__vivenzio/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon sx={{ fontSize: '3rem', color: dashboardTheme.palette.customColors.white, transition: 'color 0.5s', '&:hover': { color: '#C13584' } }} />
                            </Link>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'block', marginRight: '10px' } }}>
                            <Link underline="none" color="inherit" href="https://www.facebook.com/mario.vivenzio.58/" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon sx={{ fontSize: '3rem', color: dashboardTheme.palette.customColors.white, transition: 'color 0.5s', '&:hover': { color: '#3876BF' } }} />
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </Paper>
        </section>
    );
}