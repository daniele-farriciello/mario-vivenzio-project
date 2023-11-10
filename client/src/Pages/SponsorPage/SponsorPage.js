import * as React from 'react';
import Card from '@mui/material/Card';
import { Box, Paper, alpha } from "@mui/material";
import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme'
import { RegoularH2, RegoularH1 } from '../../Components/Typography/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import { SponsorData } from './SponsorData';

export default function SponsorPage() {
    const [currentSponsorIndex, setCurrentSponsorIndex] = React.useState(0);

    const handleNextSponsor = () => {
        setCurrentSponsorIndex((prevIndex) => (prevIndex + 1) % SponsorData.length);
    };

    const handlePreviousSponsor = () => {
        setCurrentSponsorIndex((prevIndex) => (prevIndex - 1 + SponsorData.length) % SponsorData.length);
    };

    return (
        <section>
            <Paper sx={{ borderColor: dashboardTheme.palette.customColors.red, width: '100%' }}>
                <RegoularH1 marginLeft={37} textAlign='start'>PARTENRSHIP</RegoularH1>
                <Box sx={{ display: 'flex', alignItems: "center", flexDirection: "row", width: '100%', justifyContent: 'space-around' }} >
                    <Box sx={{ height: '60vh', width: '50vw', pb: 6 }}>
                        <Card elevation={10} sx={{ width: '100%', height: '100%', position: 'relative', borderRadius: 10 }}>
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    borderRadius: '30px',
                                }}
                            />
                            <Link to={SponsorData[currentSponsorIndex].link} target="_blank">
                                <img
                                    src={SponsorData[currentSponsorIndex].img}
                                    alt="membership pic"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        objectFit: 'contain',
                                        width: '100%',
                                        height: '100%',
                                        transform: 'scale(1.0)',
                                        transition: 'transform 0.5s, opacity 0.5s',
                                        ":hover": {
                                            opacity: '1',
                                            transform: 'scale(1.15)'
                                        }
                                    }}
                                />
                            </Link>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    position: 'absolute',
                                    bottom: '38%',
                                    left: 0,
                                    right: 0,
                                    padding: '15px 30px',
                                }}
                            >
                                <ArrowBackIosIcon
                                    sx={{
                                        color: alpha(dashboardTheme.palette.secondary.main, 0.75),
                                        fontSize: 50,
                                        cursor: 'pointer',
                                    }}
                                    onClick={handlePreviousSponsor}
                                />
                                <ArrowForwardIosIcon
                                    sx={{
                                        cursor: 'pointer',
                                        color: alpha(dashboardTheme.palette.secondary.main, 0.75),
                                        fontSize: 50,
                                    }}
                                    onClick={handleNextSponsor}
                                />
                            </Box>
                        </Card>
                    </Box>
                    <Box sx={{ height: '60vh', width: '30vw', textAlign: 'center', pt: 7 }}>
                        <RegoularH2>IL NOSTRO OBIETTIVO È PROMUOVERE L'ECCELLENZA SPORTIVA E OFFRIRE SPETTACOLI EMOZIONANTI SUL RING. UNITEVI A NOI PER VIVERE L'ENERGIA UNICA DI QUESTO EVENTO STRAORDINARIO E GODERVI COMBATTIMENTI MOZZAFIATO</RegoularH2>
                    </Box>
                </Box>
            </Paper>
        </section>
    );
}