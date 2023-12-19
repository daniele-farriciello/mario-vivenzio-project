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
            <Paper sx={{ backgroundColor: alpha(dashboardTheme.palette.secondary.light, 1), width: '100%' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Box display={'flex'} flexDirection={'row'} >
                        <RegoularH2 marginRight={3} hoverColor={dashboardTheme.palette.secondary.main} borderBottom={`2px solid transparent`} borderBottomHover={`2px solid ${alpha(dashboardTheme.palette.customColors.blue, 0.85)}`} paddingBottom={0.3}>Chi siamo</RegoularH2>
                        <RegoularH2 marginRight={3} hoverColor={dashboardTheme.palette.secondary.main} borderBottom={`2px solid transparent`} borderBottomHover={`2px solid ${alpha(dashboardTheme.palette.customColors.white, 1.0)}`} paddingBottom={0.3}>Sponsors</RegoularH2>
                        <RegoularH2 marginRight={3} hoverColor={dashboardTheme.palette.secondary.main} borderBottom={`2px solid transparent`} borderBottomHover={`2px solid ${alpha(dashboardTheme.palette.customColors.red, 0.85)}`} paddingBottom={0.3}>Contatti</RegoularH2>
                    </Box>

                    <Box display={'flex'} justifyContent={'flex-end'}>
                        <Box sx={{ marginRight: '20px' }}>
                            <Link underline="none" color="inherit" href="https://www.instagram.com/mario__vivenzio/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon sx={{ fontSize: '3rem', transition: 'color 0.5s', '&:hover': { color: '#C13584' } }} />
                            </Link>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'block', marginRight: '10px' } }}>
                            <Link underline="none" color="inherit" href="https://www.facebook.com/mario.vivenzio.58/" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon sx={{ fontSize: '3rem', transition: 'color 0.5s', '&:hover': { color: '#3876BF' } }} />
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </Paper>
        </section>
    );
}