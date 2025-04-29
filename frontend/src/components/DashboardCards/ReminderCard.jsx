import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemText, ListItemIcon, Chip, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import ReminderForm from '../Forms/ReminderForm';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    width: '100%',
    background: 'linear-gradient(145deg, #e3f2fd, #bbdefb)',
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

const ReminderCard = () => {
    const [isReminderFormOpen, setIsReminderFormOpen] = useState(false);
    // Sample reminders data - replace with actual data from your backend
    const reminders = [
        { id: 1, title: 'Team Meeting', time: '10:00 AM', priority: 'high' },
        { id: 2, title: 'Project Deadline', time: '2:00 PM', priority: 'medium' },
        { id: 3, title: 'Client Call', time: '4:30 PM', priority: 'low' },
        { id: 4, title: 'Review Documents', time: '11:00 AM', priority: 'medium' },
        { id: 5, title: 'Team Building', time: '3:00 PM', priority: 'low' },
    ];

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high':
                return 'error';
            case 'medium':
                return 'warning';
            case 'low':
                return 'success';
            default:
                return 'default';
        }
    };

    const handleSaveReminder = (reminderData) => {
        // Here you can handle saving the reminder data
        console.log('New reminder:', reminderData);
    };

    return (
        <StyledCard>
            <StyledCardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <NotificationsIcon sx={{ fontSize: 36, color: '#1976d2', mr: 2 }} />
                        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                            Reminders
                        </Typography>
                    </Box>
                    <IconButton
                        color="primary"
                        aria-label="add reminder"
                        onClick={() => setIsReminderFormOpen(true)}
                        sx={{
                            backgroundColor: '#1976d2',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#1565c0',
                            },
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Box>
                <List sx={{ flex: 1, overflow: 'auto' }}>
                    {reminders.map((reminder) => (
                        <ListItem
                            key={reminder.id}
                            sx={{
                                py: 2,
                                '&:hover': {
                                    backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                    borderRadius: '8px',
                                },
                            }}
                        >
                            <ListItemIcon>
                                <NotificationsIcon sx={{ fontSize: 28, color: '#1976d2' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                                            {reminder.title}
                                        </Typography>
                                        <Chip
                                            label={reminder.priority}
                                            size="medium"
                                            color={getPriorityColor(reminder.priority)}
                                            sx={{
                                                height: '24px',
                                                '& .MuiChip-label': {
                                                    px: 1,
                                                    fontSize: '0.875rem',
                                                },
                                            }}
                                        />
                                    </Box>
                                }
                                secondary={
                                    <Typography variant="body1" color="text.secondary">
                                        Time: {reminder.time}
                                    </Typography>
                                }
                                sx={{ ml: 2 }}
                            />
                        </ListItem>
                    ))}
                </List>
            </StyledCardContent>
            <ReminderForm
                open={isReminderFormOpen}
                onClose={() => setIsReminderFormOpen(false)}
                onSave={handleSaveReminder}
            />
        </StyledCard>
    );
};

export default ReminderCard; 