import React from 'react';
import dashboardTheme from '../../Components/DashboardTheme/DashboardTheme'
import { Paper } from '@mui/material';
import { RegoularH1 } from '../../Components/Typography/Typography';

export default function Footer() {

    return (
        <section>
            <Paper sx={{ backgroundColor: dashboardTheme.palette.primary.main, width: '100%' }}>
                <RegoularH1>Ciao</RegoularH1>
            </Paper>
        </section>
    );
}