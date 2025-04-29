import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    width: '100%',
    background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
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
    padding: '24px',
});

const TaskAssignedToMe = () => {
    // Sample tasks data - replace with actual data from your backend
    const tasks = [
        { id: 1, title: 'Complete Project Proposal', dueDate: '2024-05-01' },
        { id: 2, title: 'Review Team Reports', dueDate: '2024-05-02' },
        { id: 3, title: 'Client Meeting Preparation', dueDate: '2024-05-03' },
        { id: 4, title: 'Update Documentation', dueDate: '2024-05-04' },
        { id: 5, title: 'Team Sync Meeting', dueDate: '2024-05-05' },
    ];

    return (
        <StyledCard>
            <StyledCardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <AssignmentIcon sx={{ fontSize: 36, color: '#1976d2', mr: 2 }} />
                    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                        Tasks Assigned to Me
                    </Typography>
                </Box>
                <List sx={{ flex: 1, overflow: 'auto' }}>
                    {tasks.map((task) => (
                        <ListItem
                            key={task.id}
                            sx={{
                                py: 2,
                                '&:hover': {
                                    backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                    borderRadius: '8px',
                                },
                            }}
                        >
                            <ListItemIcon>
                                <AssignmentIcon sx={{ fontSize: 28, color: '#1976d2' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                                        {task.title}
                                    </Typography>
                                }
                                secondary={
                                    <Typography variant="body1" color="text.secondary">
                                        Due: {task.dueDate}
                                    </Typography>
                                }
                                sx={{ ml: 2 }}
                            />
                        </ListItem>
                    ))}
                </List>
            </StyledCardContent>
        </StyledCard>
    );
};

export default TaskAssignedToMe; 