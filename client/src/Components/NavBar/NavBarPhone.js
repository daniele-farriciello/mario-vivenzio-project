import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Avatar, Link, alpha } from '@mui/material';
import { TeamVivenzioTitle } from '../Typography/Typography';
import dashboardTheme from '../DashboardTheme/DashboardTheme';
import logo from '../../img/logo.jpg'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';

export function NavBarPhoneHomePage() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogoAndTextClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    const navigateToStoryVivenzioGym = () => {
        navigate('/storyVivenzioGym')
    };

    const scrollToSponsor = () => {
        document.getElementById('sponsorSection')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContatti = () => {
        document.getElementById('contattiSection')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box>
            <CssBaseline />
            <AppBar sx={{ backgroundColor: alpha(dashboardTheme.palette.customColors.white, 0.85), minHeight: '56px' }} component="nav">
                <Toolbar sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
                    <Box justifySelf={'start'}>
                        <Button
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MenuIcon sx={{  fontSize: 40, color: 'black' }}/>
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={navigateToStoryVivenzioGym} sx={{ color: 'black' }}>Chi siamo</MenuItem>
                            <MenuItem onClick={scrollToSponsor} sx={{ color: 'black' }}>Sponsors</MenuItem>
                            <MenuItem onClick={scrollToContatti} sx={{ color: 'black' }}>Contatti</MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ display: 'flex', justifySelf: 'center', alignItems: 'center', flexDirection: 'row', cursor: 'pointer' }} onClick={handleLogoAndTextClick}>
                        <Avatar sx={{ width: 40, height: 40, mr: 2 }} alt="logo" src={logo} />
                        <TeamVivenzioTitle fontSize={30}>TEAM VIVENZIO</TeamVivenzioTitle>
                    </Box>

                    <Box display={'flex'} justifySelf={'end'}  flexDirection={'row'}>
                        <Box sx={{ marginRight: '10px' }}>
                            <Link underline="none" color="inherit" href="https://www.instagram.com/mario__vivenzio/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon sx={{ fontSize: '2.5rem', transition: 'color 0.5s', '&:hover': { color: '#C13584' } }} />
                            </Link>
                        </Box>
                        <Box>
                            <Link underline="none" color="inherit" href="https://www.facebook.com/mario.vivenzio.58/" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon sx={{ fontSize: '2.5rem', transition: 'color 0.5s', '&:hover': { color: '#3876BF' } }} />
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export function NavBarPhoneNotHomePage() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogoAndTextClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <Box>
            <CssBaseline />
            <AppBar sx={{ backgroundColor: alpha(dashboardTheme.palette.customColors.white, 0.85), minHeight: '56px' }} component="nav">

                <Toolbar sx={{display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'}}>
                    <Box justifySelf={'start'}>
                        <Link underline="none" color="inherit" href="https://www.instagram.com/mario__vivenzio/" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon sx={{ fontSize: '2.5rem', transition: 'color 0.5s', '&:hover': { color: '#3876BF' } }} />
                        </Link>
                    </Box>
                    <Box sx={{ display: 'flex', justifySelf: 'center', alignItems: 'center', flexDirection: 'row', cursor: 'pointer' }} onClick={handleLogoAndTextClick}>
                        <Avatar sx={{ width: 40, height: 40, mr: 2 }} alt="logo" src={logo} />
                        <TeamVivenzioTitle fontSize={30}>TEAM VIVENZIO</TeamVivenzioTitle>
                    </Box>
                    <Box justifySelf={'end'}  >
                        <Link underline="none" color="inherit" href="https://www.facebook.com/mario.vivenzio.58/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon sx={{ fontSize: '2.5rem', transition: 'color 0.5s', '&:hover': { color: '#C13584' } }} />
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

