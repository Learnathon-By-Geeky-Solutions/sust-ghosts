import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box,
    IconButton,
    Grid,
    Paper
} from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import NoteForm from '../Forms/NoteForm';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    width: '100%',
    background: 'linear-gradient(145deg, #e8f5e9, #c8e6c9)',
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
    padding: '16px',
    overflow: 'hidden',
});

const NoteCard = styled(Paper)(({ theme }) => ({
    padding: '12px',
    marginBottom: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    maxWidth: '100%',
    overflow: 'hidden',
    '&:hover': {
        backgroundColor: 'rgba(46, 125, 50, 0.05)',
        transform: 'translateX(5px)',
    },
}));

const PersonalListCard = () => {
    const [isNoteFormOpen, setIsNoteFormOpen] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: 'My Day',
            description: 'Today\'s tasks and thoughts...',
            date: '2025-04-21'
        },
        {
            id: 2,
            title: 'Project Ideas',
            description: 'List of potential project ideas...',
            date: '2025-04-20'
        },
        {
            id: 3,
            title: 'Shopping List',
            description: 'Items to buy this week...',
            date: '2025-04-19'
        }
    ]);

    const handleNoteClick = (note) => {
        setSelectedNote(note);
        setIsNoteFormOpen(true);
    };

    const handleSaveNote = (updatedNote) => {
        if (selectedNote) {
            setNotes(notes.map(note =>
                note.id === selectedNote.id ? updatedNote : note
            ));
        } else {
            setNotes([...notes, { ...updatedNote, id: notes.length + 1 }]);
        }
        setIsNoteFormOpen(false);
        setSelectedNote(null);
    };

    const sortedNotes = [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <StyledCard>
            <StyledCardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ListAltIcon sx={{ fontSize: 36, color: '#2e7d32', mr: 2 }} />
                        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                            Personal Notes
                        </Typography>
                    </Box>
                    <IconButton
                        color="primary"
                        aria-label="add note"
                        onClick={() => {
                            setSelectedNote(null);
                            setIsNoteFormOpen(true);
                        }}
                        sx={{
                            backgroundColor: '#2e7d32',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#1b5e20',
                            },
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Box>
                <Box sx={{ flex: 1, overflow: 'auto', width: '100%' }}>
                    {sortedNotes.map((note) => (
                        <NoteCard
                            key={note.id}
                            onClick={() => handleNoteClick(note)}
                        >
                            <Grid container alignItems="center" justifyContent="space-between" spacing={1}>
                                <Grid item xs={8}>
                                    <Typography variant="h6" sx={{ fontWeight: 'medium', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {note.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                                        {new Date(note.date).toLocaleDateString()}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </NoteCard>
                    ))}
                </Box>
            </StyledCardContent>
            <NoteForm
                open={isNoteFormOpen}
                onClose={() => {
                    setIsNoteFormOpen(false);
                    setSelectedNote(null);
                }}
                onSave={handleSaveNote}
                note={selectedNote}
            />
        </StyledCard>
    );
};

export default PersonalListCard; 