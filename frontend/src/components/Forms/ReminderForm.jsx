import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    IconButton,
    Box
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ReminderForm = ({ open, onClose, onSave }) => {
    const [description, setDescription] = useState('');
    const [time, setTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleSave = () => {
        onSave({
            description,
            time
        });
        setDescription('');
        setTime(new Date());
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Create New Reminder</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                    <TextField
                        fullWidth
                        label="Description"
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        variant="outlined"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <DateTimePicker
                                label="Time"
                                value={time}
                                onChange={(newValue) => setTime(newValue)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                                <IconButton onClick={() => setShowTimePicker(true)}>
                                                    <AccessTimeIcon />
                                                </IconButton>
                                            ),
                                        }}
                                    />
                                )}
                            />
                        </Box>
                    </LocalizationProvider>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSave} variant="contained" color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ReminderForm; 