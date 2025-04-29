import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemText, ListItemIcon, LinearProgress } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    width: '100%',
    background: 'linear-gradient(145deg, #f3e5f5, #e1bee7)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    transition: 'transform 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
}));

const StyledCardContent = styled(CardContent)({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
});

const MyWorkCard = () => {
    // Sample work items data - replace with actual data from your backend
    const workItems = [
        { id: 1, title: 'Project A', progress: 75, status: 'In Progress' },
        { id: 2, title: 'Project B', progress: 30, status: 'Started' },
        { id: 3, title: 'Project C', progress: 90, status: 'Almost Done' },
    ];

    return (
        <StyledCard>
            <StyledCardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <WorkIcon sx={{ fontSize: 30, color: '#9c27b0', mr: 1 }} />
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        My Work
                    </Typography>
                </Box>
                <List sx={{ flex: 1, overflow: 'auto' }}>
                    {workItems.map((item) => (
                        <ListItem key={item.id} sx={{ py: 1 }}>
                            <ListItemIcon>
                                <WorkIcon sx={{ color: '#9c27b0' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Box>
                                        <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {item.status}
                                        </Typography>
                                    </Box>
                                }
                                secondary={
                                    <Box sx={{ mt: 1 }}>
                                        <LinearProgress
                                            variant="determinate"
                                            value={item.progress}
                                            sx={{
                                                height: 8,
                                                borderRadius: 4,
                                                backgroundColor: 'rgba(156, 39, 176, 0.1)',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: '#9c27b0',
                                                },
                                            }}
                                        />
                                        <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                                            {item.progress}% Complete
                                        </Typography>
                                    </Box>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </StyledCardContent>
        </StyledCard>
    );
};

export default MyWorkCard; 