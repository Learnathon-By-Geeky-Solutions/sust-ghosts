import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Box
} from '@mui/material';

const NoteForm = ({ open, onClose, onSave, note }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (note) {
            setTitle(note.title);
            setDescription(note.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [note]);

    const handleSave = () => {
        onSave({
            ...note,
            title,
            description,
            date: note ? note.date : new Date().toISOString().split('T')[0]
        });
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>{note ? 'Edit Note' : 'Create New Note'}</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                    <TextField
                        fullWidth
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        multiline
                        rows={6}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        variant="outlined"
                    />
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

export default NoteForm; 