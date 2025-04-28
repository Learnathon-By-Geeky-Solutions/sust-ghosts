import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Badge,
    Avatar,
    Menu,
    MenuItem,
    Divider,
    ListItemIcon,
    ListItemText,
    Button,
    List,
    ListItem,
    ListItemButton,
    ListItemAvatar,
    ListItemSecondaryAction,
    Chip,
    Drawer,
    ListItemIcon as MuiListItemIcon,
    Tooltip
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import HelpIcon from '@mui/icons-material/Help';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#ffffff',
    color: '#000000',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1200,
}));

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 24px',
    minHeight: '70px',
});

const WorkshopName = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: '1.2rem',
    color: '#1976d2',
    '&:hover': {
        color: '#1565c0',
    },
}));

const CenterTitle = styled(Typography)({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
});

const IconContainer = styled(Box)({
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
});

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const WorkshopButton = styled(Button)(({ theme }) => ({
    color: '#1976d2',
    fontWeight: 600,
    fontSize: '1.2rem',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: 'rgba(25, 118, 210, 0.08)',
    },
}));

const WorkshopMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
        width: 320,
        maxHeight: 400,
        marginTop: theme.spacing(1),
    },
}));

const WorkshopList = styled(List)({
    width: '100%',
    padding: 0,
});

const WorkshopListItem = styled(ListItem)(({ theme }) => ({
    '&:hover': {
        backgroundColor: 'rgba(25, 118, 210, 0.08)',
    },
}));

const LeftDrawer = styled(Drawer)({
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        backgroundColor: '#f8f9fa',
        borderRight: '1px solid #e0e0e0',
        position: 'fixed',
        top: 70, // Height of the AppBar
        height: 'calc(100vh - 70px)', // Full height minus AppBar
        overflowY: 'auto',
    },
});

const NavSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    '&:not(:last-child)': {
        borderBottom: '1px solid #e0e0e0',
    },
}));

const NavTitle = styled(Typography)(({ theme }) => ({
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#666',
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
}));

const NavItem = styled(ListItemButton)(({ theme }) => ({
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1, 2),
    '&:hover': {
        backgroundColor: 'rgba(25, 118, 210, 0.08)',
    },
    '&.Mui-selected': {
        backgroundColor: 'rgba(25, 118, 210, 0.12)',
        '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.16)',
        },
    },
}));

const StyledListItemIcon = styled(MuiListItemIcon)({
    minWidth: '40px',
});

const SupportSection = styled(NavSection)(({ theme }) => ({
    marginTop: 'auto',
    borderTop: '1px solid #e0e0e0',
    borderBottom: 'none',
}));

const MainContent = styled(Box)({
    flexGrow: 1,
    marginLeft: 240, // Width of the drawer
    marginTop: 70, // Height of the AppBar
    padding: '20px',
    maxWidth: 'calc(100vw - 240px)', // Prevent horizontal scroll
    overflowX: 'hidden',
});

const RootBox = styled(Box)({
    display: 'flex',
    minHeight: '100vh',
    width: '100vw',
    overflowX: 'hidden', // Prevent horizontal scroll
});

const TeamspaceHeader = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '8px',
});

const ProjectList = styled(List)({
    paddingLeft: '40px',
    display: 'none',
    '&.expanded': {
        display: 'block',
    },
});

const ProjectItem = styled(NavItem)({
    paddingLeft: '48px',
});

const TeamItem = styled(NavItem)({
    '& .MuiListItemText-root': {
        margin: 0,
    },
    '&:hover': {
        backgroundColor: 'rgba(25, 118, 210, 0.08)',
    },
});

const TeamHeader = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    cursor: 'pointer',
});

const FrontPage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [workshopAnchorEl, setWorkshopAnchorEl] = useState(null);
    const [currentWorkshop, setCurrentWorkshop] = useState('Workshop Name'); // Default workshop name
    const open = Boolean(anchorEl);
    const workshopOpen = Boolean(workshopAnchorEl);
    const [teams, setTeams] = useState([
        {
            id: 1,
            name: 'My Team',
            isExpanded: false,
            projects: [
                { id: 1, name: 'Project 1' },
                { id: 2, name: 'Project 2' }
            ]
        }
    ]);
    const [newTeamName, setNewTeamName] = useState('');
    const [isCreatingTeam, setIsCreatingTeam] = useState(false);
    const [newProjectName, setNewProjectName] = useState('');
    const [creatingProjectForTeam, setCreatingProjectForTeam] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleWorkshopClick = (event) => {
        setWorkshopAnchorEl(event.currentTarget);
    };

    const handleWorkshopClose = () => {
        setWorkshopAnchorEl(null);
    };

    const handleWorkshopSelect = (workshopName) => {
        setCurrentWorkshop(workshopName);
        handleWorkshopClose();
    };

    const handleCreateTeam = () => {
        if (newTeamName.trim()) {
            const newTeam = {
                id: teams.length + 1,
                name: newTeamName.trim(),
                isExpanded: false,
                projects: []
            };
            setTeams([...teams, newTeam]);
            setNewTeamName('');
        }
        setIsCreatingTeam(false);
    };

    const handleCreateProject = (teamId) => {
        if (newProjectName.trim()) {
            setTeams(teams.map(team => {
                if (team.id === teamId) {
                    return {
                        ...team,
                        projects: [
                            ...team.projects,
                            {
                                id: team.projects.length + 1,
                                name: newProjectName.trim()
                            }
                        ]
                    };
                }
                return team;
            }));
            setNewProjectName('');
        }
        setCreatingProjectForTeam(null);
    };

    const toggleTeamExpansion = (teamId) => {
        setTeams(teams.map(team => {
            if (team.id === teamId) {
                return {
                    ...team,
                    isExpanded: !team.isExpanded
                };
            }
            return team;
        }));
    };

    // Sample workshop data - replace with your actual data
    const registeredWorkshops = [
        { id: 1, name: 'Web Development Workshop', status: 'Active' },
        { id: 2, name: 'Machine Learning Basics', status: 'Completed' },
        { id: 3, name: 'UI/UX Design', status: 'Active' },
        { id: 4, name: 'Data Science Fundamentals', status: 'Upcoming' },
    ];

    return (
        <RootBox>
            <StyledAppBar>
                <StyledToolbar>
                    <Box>
                        <WorkshopButton
                            onClick={handleWorkshopClick}
                            endIcon={<ArrowDropDownIcon />}
                        >
                            {currentWorkshop}
                        </WorkshopButton>
                        <WorkshopMenu
                            anchorEl={workshopAnchorEl}
                            open={workshopOpen}
                            onClose={handleWorkshopClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <WorkshopList>
                                {registeredWorkshops.map((workshop) => (
                                    <WorkshopListItem
                                        key={workshop.id}
                                        disablePadding
                                        selected={currentWorkshop === workshop.name}
                                    >
                                        <ListItemButton onClick={() => handleWorkshopSelect(workshop.name)}>
                                            <ListItemAvatar>
                                                <Avatar sx={{ bgcolor: '#1976d2' }}>
                                                    {workshop.name.charAt(0)}
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={workshop.name}
                                                secondary={
                                                    <Chip
                                                        label={workshop.status}
                                                        size="small"
                                                        color={
                                                            workshop.status === 'Active' ? 'success' :
                                                                workshop.status === 'Completed' ? 'default' :
                                                                    'warning'
                                                        }
                                                    />
                                                }
                                            />
                                        </ListItemButton>
                                    </WorkshopListItem>
                                ))}
                            </WorkshopList>
                        </WorkshopMenu>
                    </Box>

                    <CenterTitle variant="h5" component="div">
                        Catalyst
                    </CenterTitle>

                    <IconContainer>
                        <IconButton
                            color="inherit"
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                },
                            }}
                        >
                            <Badge badgeContent={4} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar sx={{ width: 32, height: 32, bgcolor: '#1976d2' }}>
                                    <AccountCircleIcon />
                                </Avatar>
                            </StyledBadge>
                        </IconButton>
                    </IconContainer>

                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleClose}>
                            <Avatar /> Profile
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <SettingsIcon fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <LogoutIcon fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </StyledToolbar>
            </StyledAppBar>

            <LeftDrawer variant="permanent" anchor="left">
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <NavSection>
                        <NavTitle>Navigation</NavTitle>
                        <List>
                            <NavItem selected>
                                <StyledListItemIcon>
                                    <HomeIcon />
                                </StyledListItemIcon>
                                <ListItemText primary="Home" />
                            </NavItem>
                            <NavItem>
                                <StyledListItemIcon>
                                    <ChatIcon />
                                </StyledListItemIcon>
                                <ListItemText primary="Chat" />
                            </NavItem>
                            <NavItem>
                                <StyledListItemIcon>
                                    <GroupAddIcon />
                                </StyledListItemIcon>
                                <ListItemText primary="Invite" />
                            </NavItem>
                        </List>
                    </NavSection>

                    <NavSection>
                        <TeamspaceHeader>
                            <NavTitle>Teamspace</NavTitle>
                            <IconButton
                                size="small"
                                onClick={() => setIsCreatingTeam(true)}
                                sx={{
                                    color: '#1976d2',
                                    '&:hover': {
                                        backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                    }
                                }}
                            >
                                <AddIcon fontSize="small" />
                            </IconButton>
                        </TeamspaceHeader>
                        <List>
                            {teams.map((team) => (
                                <React.Fragment key={team.id}>
                                    <TeamItem>
                                        <TeamHeader onClick={() => toggleTeamExpansion(team.id)}>
                                            <StyledListItemIcon>
                                                <GroupIcon />
                                            </StyledListItemIcon>
                                            <ListItemText primary={team.name} />
                                            <IconButton
                                                size="small"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCreatingProjectForTeam(team.id);
                                                }}
                                                sx={{
                                                    color: '#1976d2',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                    }
                                                }}
                                            >
                                                <AddIcon fontSize="small" />
                                            </IconButton>
                                        </TeamHeader>
                                    </TeamItem>
                                    <ProjectList className={team.isExpanded ? 'expanded' : ''}>
                                        {team.projects.map((project) => (
                                            <ProjectItem key={project.id}>
                                                <StyledListItemIcon>
                                                    <FolderIcon />
                                                </StyledListItemIcon>
                                                <ListItemText primary={project.name} />
                                            </ProjectItem>
                                        ))}
                                        {creatingProjectForTeam === team.id && (
                                            <ProjectItem>
                                                <StyledListItemIcon>
                                                    <FolderIcon />
                                                </StyledListItemIcon>
                                                <input
                                                    type="text"
                                                    value={newProjectName}
                                                    onChange={(e) => setNewProjectName(e.target.value)}
                                                    onBlur={() => handleCreateProject(team.id)}
                                                    onKeyPress={(e) => e.key === 'Enter' && handleCreateProject(team.id)}
                                                    autoFocus
                                                    style={{
                                                        border: 'none',
                                                        outline: 'none',
                                                        fontSize: '1rem',
                                                        padding: '8px 0',
                                                        width: '100%',
                                                        backgroundColor: 'transparent'
                                                    }}
                                                    placeholder="New project name"
                                                />
                                            </ProjectItem>
                                        )}
                                    </ProjectList>
                                </React.Fragment>
                            ))}
                            {isCreatingTeam && (
                                <NavItem>
                                    <StyledListItemIcon>
                                        <GroupIcon />
                                    </StyledListItemIcon>
                                    <input
                                        type="text"
                                        value={newTeamName}
                                        onChange={(e) => setNewTeamName(e.target.value)}
                                        onBlur={handleCreateTeam}
                                        onKeyPress={(e) => e.key === 'Enter' && handleCreateTeam()}
                                        autoFocus
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            fontSize: '1rem',
                                            padding: '8px 0',
                                            width: '100%',
                                            backgroundColor: 'transparent'
                                        }}
                                        placeholder="New team name"
                                    />
                                </NavItem>
                            )}
                        </List>
                    </NavSection>

                    <SupportSection>
                        <NavTitle>Support</NavTitle>
                        <List>
                            <NavItem>
                                <StyledListItemIcon>
                                    <HelpIcon />
                                </StyledListItemIcon>
                                <ListItemText primary="Help" />
                            </NavItem>
                        </List>
                    </SupportSection>
                </Box>
            </LeftDrawer>

            <MainContent>
                {/* Main content will go here */}
            </MainContent>
        </RootBox>
    );
};

export default FrontPage;
