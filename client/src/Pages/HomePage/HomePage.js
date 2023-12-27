import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Box, Paper,Button, alpha, useMediaQuery, useTheme  } from "@mui/material";
import membershipPic2 from '../../img/clemente-ring.png';
import membershipPic from '../../img/pasquale-ring.png';
import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme';
import Activities from '../Activities/Activities';
import ThirdPage from '../RingSide/RingSide';
import SponsorPage from '../SponsorPage/SponsorPage';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

// import { RegoularH1HomePage } from '../../Components/Typography/Typography';

export default function HomePage() {

    const theme = useTheme();
    const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate()

    function clickExploreButton() {
        console.log('clicked');
        document.getElementById('activitiesSection')?.scrollIntoView({ behavior: 'smooth' });
    }
    function clickProssimoGalaButton() {
        console.log('clicked')
        navigate('/nextGalà')
    }


    return (
        <div>
            <Paper sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%' }}>
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: "center", 
                    flexDirection: isScreenSmall ? "column" : "row", // Stack items in a column on small screens
                    width: '100%' 
                }}>
                    <Box sx={{ height: '100vh', width: '100vh' }}>
                        <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
                            <CardMedia
                                component="img"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    transform: 'scale(1.15)', /* l'immagine sara al 115% elimimando lo spazio tra le immagini*/
                                    transition: 'transform 0.5s, opacity 0.5s', /*si traforma in 0.5 secondi*/
                                    filter: 'brightness(40%)',  // Apply the darkening effect here using the brightness filter
                                    ":hover": {
                                        opacity: '1',
                                        transform: 'scale(1.03)' /* Torna alla normalita sembrando più piccola */
                                    }
                                }}
                                image={membershipPic}
                                alt="membership pic"
                            />
                            <CardActions
                                disableSpacing
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={clickProssimoGalaButton}
                                    sx={{
                                        fontFamily: 'Playfair Display, serif',
                                        fontWeight: '200%',
                                        borderRadius: '20px',
                                        fontSize: '150%',         // Increase font size to make text larger
                                        padding: '15px 30px',       // Increase padding for a larger button
                                        backgroundColor: alpha(dashboardTheme.palette.customColors.white, 0.7),
                                        transition: 'transform 0.5s, color 0.5s, background 0.5s',
                                        ':hover': {
                                            color: dashboardTheme.palette.customColors.white,
                                            backgroundColor: alpha(dashboardTheme.palette.customColors.blue, 0.85)
                                        }
                                    }}
                                >
                                    PROSSIMO GALÀ
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                    <Box sx={{ height: '100vh', width: '100vh' }}>
                        <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
                            {/* Overlay for darkening the image */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0
                                }}
                            />
                            <CardMedia
                                component="img"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    transform: 'scale(1.15)', /* l'immagine sara al 115% elimimando lo spazio tra le immagini*/
                                    transition: 'transform 0.5s, opacity 0.5s', /*si traforma in 0.5 secondi*/
                                    filter: 'brightness(40%)',  // Apply the darkening effect here using the brightness filter
                                    ":hover": {
                                        opacity: '1',
                                        transform: 'scale(1.03)' /* Torna alla normalita sembrando più piccola */
                                    }
                                }}
                                image={membershipPic2}
                                alt="membership pic"
                            />
                            <CardActions
                                disableSpacing
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={clickExploreButton}
                                    sx={{
                                        fontFamily: 'Playfair Display, serif',
                                        fontWeight: '200%',
                                        borderRadius: '20px',
                                        fontSize: '150%',         // Increase font size to make text larger
                                        padding: '15px 30px',       // Increase padding for a larger button
                                        backgroundColor: alpha(dashboardTheme.palette.customColors.white, 0.7),
                                        transition: 'transform 0.5s, color 0.5s, background 0.5s',
                                        ':hover': {
                                            color: dashboardTheme.palette.customColors.white,
                                            backgroundColor: alpha(dashboardTheme.palette.customColors.blue, 0.85)
                                        }
                                    }}
                                >
                                    ESPLORA
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Box>
            </Paper>
            <Activities/>
            <ThirdPage/>
            <SponsorPage/>
            <Footer/>
        </div>
    );
}