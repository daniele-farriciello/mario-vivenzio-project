import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Avatar, Link, alpha } from '@mui/material';
import { RegoularH2, TeamVivenzioTitle } from '../Typography/Typography';
import dashboardTheme from '../DashboardTheme/DashboardTheme';
import logo from '../../img/logo.jpg'
import { useNavigate, useLocation } from 'react-router-dom';


export default function NavBar() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogoAndTextClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    const navigateToStoryVivenzioGym = () => {
        navigate('/storyVivenzioGymPage')
    };

    const scrollToSponsor = () => {
        document.getElementById('sponsorSection')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContatti = () => {
        document.getElementById('contattiSection')?.scrollIntoView({ behavior: 'smooth' });
    };

    const isHomePage = location.pathname === '/';


    return (
        <>
            {isHomePage ?
                <Box >
                    <CssBaseline />
                    <AppBar sx={{ backgroundColor: alpha(dashboardTheme.palette.customColors.white, 0.85) }} component="nav">

                        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Box display={'flex'} flexDirection={'row'}>
                                <Box onClick={navigateToStoryVivenzioGym}>
                                    <RegoularH2 marginRight={3} hoverColor={dashboardTheme.palette.secondary.main} borderBottom={`2px solid transparent`} borderBottomHover={`2px solid ${alpha(dashboardTheme.palette.customColors.blue, 0.85)}`} transition={'border-bottom 0.5s ease-in-out'} paddingBottom={0.3}>Chi siamo</RegoularH2>
                                </Box>
                                <Box onClick={scrollToSponsor}>
                                    <RegoularH2 marginRight={3} hoverColor={dashboardTheme.palette.secondary.main} borderBottom={`2px solid transparent`} borderBottomHover={`2px solid ${alpha(dashboardTheme.palette.customColors.white, 1.0)}`} transition={'border-bottom 0.5s ease-in-out'} paddingBottom={0.3}>Sponsors</RegoularH2>
                                </Box>
                                <Box onClick={scrollToContatti}>
                                    <RegoularH2 marginRight={3} hoverColor={dashboardTheme.palette.secondary.main} borderBottom={`2px solid transparent`} borderBottomHover={`2px solid ${alpha(dashboardTheme.palette.customColors.red, 0.85)}`} transition={'border-bottom 0.5s ease-in-out'} paddingBottom={0.3}>Contatti</RegoularH2>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', ml: -43, cursor: 'pointer' }} onClick={handleLogoAndTextClick}>
                                <Avatar sx={{ width: 56, height: 56, mr: 2 }} alt="logo" src={logo} />
                                <TeamVivenzioTitle >TEAM VIVENZIO</TeamVivenzioTitle>
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
                    </AppBar>
                </Box>

                :
                <Box >
                    <CssBaseline />
                    <AppBar sx={{ backgroundColor: alpha(dashboardTheme.palette.customColors.white, 0.85) }} component="nav">

                        <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                            <Box sx={{ marginRight: '20px' }}>
                                <Link underline="none" color="inherit" href="https://www.instagram.com/mario__vivenzio/" target="_blank" rel="noopener noreferrer">
                                    <FacebookIcon sx={{ fontSize: '3rem', transition: 'color 0.5s', '&:hover': { color: '#3876BF' } }} />
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleLogoAndTextClick}>
                                <Avatar sx={{ width: 56, height: 56, mr: 2 }} alt="logo" src={logo} />
                                <TeamVivenzioTitle >TEAM VIVENZIO</TeamVivenzioTitle>
                            </Box>
                            <Box sx={{ display: { xs: 'none', sm: 'block', marginRight: '10px' } }}>
                                <Link underline="none" color="inherit" href="https://www.facebook.com/mario.vivenzio.58/" target="_blank" rel="noopener noreferrer">
                                    <InstagramIcon sx={{ fontSize: '3rem', transition: 'color 0.5s', '&:hover': { color: '#C13584' } }} />
                                </Link>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            }

        </>
    );
}
