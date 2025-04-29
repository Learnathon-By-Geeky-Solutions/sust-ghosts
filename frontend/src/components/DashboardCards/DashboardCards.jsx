import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import TaskAssignedToMe from './TaskAssignedToMe';
import ReminderCard from './ReminderCard';
import MyWorkCard from './MyWorkCard';
import PersonalListCard from './PersonalListCard';

const DashboardCards = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" sx={{ mb: 6, fontWeight: 'bold', color: '#1976d2', textAlign: 'center' }}>
                Good Evening Tanviir!
            </Typography>
            <Grid
                container
                spacing={4}
                sx={{
                    justifyContent: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}
            >
                {/* First Row */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ height: '100%', aspectRatio: '1/1', minHeight: '500px', width: '100%', maxWidth: '500px' }}>
                        <TaskAssignedToMe />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ height: '100%', aspectRatio: '1/1', minHeight: '500px', width: '100%', maxWidth: '500px' }}>
                        <ReminderCard />
                    </Box>
                </Grid>
                {/* Second Row */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ height: '100%', aspectRatio: '1/1', minHeight: '500px', width: '100%', maxWidth: '500px' }}>
                        <MyWorkCard />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ height: '100%', aspectRatio: '1/1', minHeight: '500px', width: '100%', maxWidth: '500px' }}>
                        <PersonalListCard />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DashboardCards; 