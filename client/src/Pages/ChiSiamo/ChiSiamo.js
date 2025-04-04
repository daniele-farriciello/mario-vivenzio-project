import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Box, Paper, Button, alpha, useMediaQuery, useTheme } from "@mui/material";
import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme'
import { RegoularH1 } from '../../Components/Typography/Typography';
import { useNavigate } from 'react-router-dom';
import Video from '../../video/generale-allenamento.mp4';

export default function ChiSiamo() {

    const theme = useTheme();
    const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    return (
        <section id="chiSiamoSection">
            <RegoularH1 marginBottom={0}>CHI SIAMO</RegoularH1>
            <Box sx={{ borderBottom: '2px solid', borderColor: dashboardTheme.palette.customColors.red, width: '15%', margin: '20px auto' }}></Box>
            <Paper sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100vw' }}>
                <Box sx={{ display: 'flex', alignItems: "center", flexDirection: "row", width: '100%' }} >
                    <Box sx={{ height: '80vh', width: '100%' }} onClick={() => navigate('/storyVivenzioGym')}>
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
                                component="video"
                                autoPlay
                                loop
                                muted
                                playsInline
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    objectPosition: 'center 35%',
                                    transform: 'scale(1)', /* l'immagine sara al 115% elimimando lo spazio tra le immagini*/
                                    transition: 'transform 0.5s, opacity 0.5s', /*si traforma in 0.5 secondi*/
                                    filter: 'brightness(40%)',  // Apply the darkening effect here using the brightness filter
                                    ":hover": {
                                        opacity: '1',
                                        transform: 'scale(1.10)' /* Torna alla normalita sembrando più piccola */
                                    }
                                }}
                                src={Video}
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
                                    sx={{
                                        fontFamily: 'Playfair Display, serif',
                                        fontWeight: '200%',
                                        borderRadius: '20px',
                                        fontSize: isScreenSmall ? '120%' : '150%',
                                        padding: isScreenSmall ? '10px 20px' : '15px 30px',
                                        backgroundColor: alpha(dashboardTheme.palette.customColors.white, 0.7),
                                        transition: 'transform 0.5s, color 0.5s, background 0.5s',
                                        ':hover': {
                                            color: dashboardTheme.palette.customColors.white,
                                            backgroundColor: alpha(dashboardTheme.palette.secondary.main, 0.65)
                                        }
                                    }}
                                >
                                    SCOPRI
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Box>
            </Paper>
        </section>
    );
}