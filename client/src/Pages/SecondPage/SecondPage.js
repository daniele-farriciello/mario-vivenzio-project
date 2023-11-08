import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Box, Paper } from "@mui/material";
import membershipPic1 from '../../img/SecondPage1.jpeg';
import membershipPic2 from '../../img/SecondPage2.jpg';
import membershipPic3 from '../../img/SecondPage3.jpg';
import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme'
import { RegoularH1, RegoularH2 } from '../../Components/Typography/Typography';
import { useNavigate } from 'react-router-dom';

export default function SecondPage() {
    const navigate = useNavigate();

    return (
        <section>
            <RegoularH1 marginBottom={0}>ATTIVITÀ</RegoularH1>
            <Box sx={{ borderBottom: '2px solid', borderColor: dashboardTheme.palette.customColors.red, width: '15%', margin: '20px auto' }}></Box>
            <Paper sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: "center", flexDirection: "row", width: '100%' }} >
                    <Box sx={{ height: '50vh', width: '100vw' }} onClick={() => navigate('/bagPage')}>
                        <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
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
                                image={membershipPic1}
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
                                <RegoularH2 color={dashboardTheme.palette.customColors.white}>
                                    BAG
                                </RegoularH2>
                            </CardActions>
                        </Card>
                    </Box>
                    <Box sx={{ height: '50vh', width: '100vw' }} onClick={() => navigate('/padPage')}>
                        <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
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
                                <RegoularH2 color={dashboardTheme.palette.customColors.white}>
                                    PAD
                                </RegoularH2>
                            </CardActions>
                        </Card>
                    </Box>
                    <Box sx={{ height: '50vh', width: '100vw' }} onClick={() => navigate('/sparringPage')}>
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
                                image={membershipPic3}
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
                                <RegoularH2 color={dashboardTheme.palette.customColors.white}>
                                    SPARRING
                                </RegoularH2>
                            </CardActions>
                        </Card>
                    </Box>
                </Box>
            </Paper>
        </section>
    );
}