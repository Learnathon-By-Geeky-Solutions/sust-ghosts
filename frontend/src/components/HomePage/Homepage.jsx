import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ViewListIcon from "@mui/icons-material/ViewList";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CssBaseline from "@mui/material/CssBaseline";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  ReferenceLine,
  LabelList,
} from "recharts";

// Navigation items for the sidebar
const NAVIGATION = [
  {
    kind: "header",
    title: "Spaces",
  },
  {
    segment: "everything",
    title: "Everything",
    icon: <DashboardIcon />,
  },
  {
    segment: "team-space",
    title: "Team Space",
    icon: <FolderIcon />,
  },
  {
    segment: "projects",
    title: "Projects",
    icon: <AssignmentIcon />,
  },
  {
    segment: "view-all-spaces",
    title: "View All Spaces",
    icon: <ViewListIcon />,
  },
  {
    segment: "create-space",
    title: "Create Space",
    icon: <CreateNewFolderIcon />,
  },
];

const COLORS = [
  "#9c27b0",
  "#00bcd4",
  "#ffc107",
  "#4caf50",
  "#f44336",
  "#ff9800",
];

// Create theme
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9c27b0", // Purple
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});

// Custom AppProvider component
function AppProvider({ children, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

// Custom DashboardLayout component
function DashboardLayout({ children }) {
  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "background.paper",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            Project 1
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              placeholder="Search"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ mr: 2 }}
            />
            <Button variant="contained" color="primary" startIcon={<AddIcon />}>
              Add Task
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "background.paper",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {NAVIGATION.map((item, index) => {
              if (item.kind === "header") {
                return (
                  <ListItem key={index} sx={{ py: 0.5, px: 2 }}>
                    <Typography variant="overline" color="text.secondary">
                      {item.title}
                    </Typography>
                  </ListItem>
                );
              }

              if (item.kind === "divider") {
                return <Divider key={index} />;
              }

              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

function DashboardCharts({ inProgressTasks, toDoTasks, completedTasks }) {
  // All tasks
  const allTasks = [...inProgressTasks, ...toDoTasks, ...completedTasks];

  // Pie chart: Task completion by assignee (as percentage)
  const assigneeCount = {};
  allTasks.forEach((task) => {
    if (!assigneeCount[task.assignee]) assigneeCount[task.assignee] = 0;
    assigneeCount[task.assignee]++;
  });
  const totalTasks = allTasks.length;
  // Sort by value descending
  const sortedAssignees = Object.entries(assigneeCount)
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }));

  // Show top 5, group the rest as "Others"
  const topN = 5;
  const topAssignees = sortedAssignees.slice(0, topN);
  const othersCount = sortedAssignees
    .slice(topN)
    .reduce((sum, a) => sum + a.value, 0);

  const pieData =
    othersCount > 0
      ? [
          ...topAssignees.map((a) => ({
            ...a,
            percent: ((a.value / totalTasks) * 100).toFixed(1),
          })),
          {
            name: "Others",
            value: othersCount,
            percent: ((othersCount / totalTasks) * 100).toFixed(1),
          },
        ]
      : topAssignees.map((a) => ({
          ...a,
          percent: ((a.value / totalTasks) * 100).toFixed(1),
        }));

  // ...barData, lineData, stats unchanged...

  // Bar chart: Task status counts per assignee
  const assignees = Array.from(new Set(allTasks.map((t) => t.assignee)));
  const barData = assignees.map((assignee) => ({
    assignee,
    "In Progress": inProgressTasks.filter((t) => t.assignee === assignee)
      .length,
    "To Do": toDoTasks.filter((t) => t.assignee === assignee).length,
    Completed: completedTasks.filter((t) => t.assignee === assignee).length,
  }));

  // Line chart: Tasks completed over time
  const completedByDate = {};
  completedTasks.forEach((task) => {
    const date = task.dueDate || task.date;
    completedByDate[date] = (completedByDate[date] || 0) + 1;
  });
  const lineData = Object.entries(completedByDate)
    .sort(([a], [b]) => new Date(a) - new Date(b))
    .map(([date, count]) => ({ date, count }));

  // Overall stats
  const overdueTasks = allTasks.filter(
    (t) => !t.isCompleted && new Date(t.dueDate || t.date) < new Date()
  ).length;
  const avgPriority =
    allTasks.reduce((acc, t) => {
      if (t.priority === "High") return acc + 3;
      if (t.priority === "Medium") return acc + 2;
      if (t.priority === "Low") return acc + 1;
      return acc;
    }, 0) / (allTasks.length || 1);

  const avgPriorityLabel =
    avgPriority >= 2.5 ? "High" : avgPriority >= 1.5 ? "Medium" : "Low";

      return (
        <Box>
          {/* Overall Project Info */}
          <Grid container spacing={6} sx={{ mb: 6 }}>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 4, textAlign: "center", minHeight: 120 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Total Tasks
                </Typography>
                <Typography variant="h3">{totalTasks}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 4, textAlign: "center", minHeight: 120 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Completed Tasks
                </Typography>
                <Typography variant="h3">{completedTasks.length}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 4, textAlign: "center", minHeight: 120 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Overdue Tasks
                </Typography>
                <Typography variant="h3">{overdueTasks}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 4, textAlign: "center", minHeight: 120 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Avg. Priority
                </Typography>
                <Typography variant="h3">{avgPriorityLabel}</Typography>
              </Paper>
            </Grid>
          </Grid>
    
          {/* Charts */}
          <Grid container spacing={6}>
            {/* Pie chart: Task % by assignee (top 5 + Others, no colors) */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, height: 540, bgcolor: "background.paper", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, textAlign: "center" }}>
                  Task Distribution by Assignee (%)
                </Typography>
                <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ResponsiveContainer width="95%" height={380}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={170}
                        innerRadius={60}
                        label={({ name, percent }) => `${name}: ${percent}%`}
                        stroke="#888"
                        fill="white"
                        strokeDasharray="3 3"
                        labelLine={false}
                      >
                        <LabelList dataKey="percent" position="outside" />
                      </Pie>
                      <Tooltip formatter={(value, name) => [`${value} tasks`, name]} />
                      <Legend layout="vertical" align="right" verticalAlign="middle" />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 2, display: "block", textAlign: "center" }}
                >
                  Only top 5 assignees are shown individually. Others are grouped.
                </Typography>
              </Paper>
            </Grid>
            {/* Bar chart: Task status per assignee */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, height: 540, bgcolor: "background.paper", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, textAlign: "center" }}>
                  Task Status by Assignee
                </Typography>
                <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ResponsiveContainer width="95%" height={380}>
                    <BarChart
                      data={barData}
                      margin={{ top: 30, right: 40, left: 20, bottom: 30 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="assignee" tick={{ fontSize: 16 }} />
                      <YAxis allowDecimals={false} tick={{ fontSize: 16 }} />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="In Progress"
                        fill="none"
                        stroke="#1976d2"
                        strokeWidth={4}
                        barSize={32}
                      />
                      <Bar
                        dataKey="To Do"
                        fill="none"
                        stroke="#43a047"
                        strokeDasharray="5 2"
                        strokeWidth={4}
                        barSize={32}
                      />
                      <Bar
                        dataKey="Completed"
                        fill="none"
                        stroke="#757575"
                        strokeDasharray="2 2"
                        strokeWidth={4}
                        barSize={32}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Paper>
            </Grid>
            {/* Line chart: Tasks completed over time */}
            <Grid item xs={12}>
              <Paper sx={{ p: 4, height: 420, bgcolor: "background.paper" }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, textAlign: "center" }}>
                  Tasks Completed Over Time
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={lineData}
                    margin={{ top: 30, right: 40, left: 20, bottom: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 16 }} />
                    <YAxis allowDecimals={false} tick={{ fontSize: 16 }} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="count"
                      stroke="#1976d2"
                      strokeWidth={4}
                      dot={{ r: 8, stroke: "#1976d2", fill: "#fff" }}
                    />
                    <ReferenceLine y={0} stroke="#000" />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      );
    }

// Custom PageContainer component
function PageContainer({ children }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {children}
    </Container>
  );
}

// Task component
function Task({ number, title, date, workspace, project, isCompleted }) {
  const dateColor = isCompleted ? "success.main" : "error.main";

  return (
    <Paper
      sx={{
        p: 2,
        mb: 1.5,
        display: "flex",
        alignItems: "center",
        gap: 2,
        bgcolor: "background.paper",
      }}
      elevation={2}
    >
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          minWidth: 28,
        }}
      >
        #{number}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Workspace: {workspace} &nbsp;|&nbsp; Project: {project}
        </Typography>
      </Box>
      <Typography color={dateColor} variant="body2" sx={{ minWidth: 70 }}>
        {date}
      </Typography>
    </Paper>
  );
}

// TaskSection component
function TaskSection({ title, tasks }) {
  return (
    <Grid item xs={12} md={4}>
      <Paper sx={{ p: 2, minHeight: 300, bgcolor: "background.paper" }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {title}
        </Typography>
        {tasks.length === 0 ? (
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            No tasks
          </Typography>
        ) : (
          tasks.map((task, index) => (
            <Task
              key={index}
              number={index + 1}
              title={task.title}
              date={task.date}
              workspace={task.workspace}
              project={task.project}
              isCompleted={task.isCompleted}
            />
          ))
        )}
      </Paper>
    </Grid>
  );
}

function TaskTableSection({ title, tasks }) {
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, mb: 3, bgcolor: "background.paper" }}>
        {/* Section Title (fixed, not scrollable) */}
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 600,
            position: "sticky",
            top: 0,
            zIndex: 2,
            bgcolor: "background.paper",
          }}
        >
          {title}
        </Typography>
        {/* Table Header (fixed, not scrollable) */}
        <TableContainer
          sx={{
            maxHeight: 260, // Adjust height as needed
            overflowY: "auto",
          }}
        >
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Task Name</TableCell>
                <TableCell>Assignee</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Comment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7}>
                    <Typography color="text.secondary">No tasks</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                tasks.map((task, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{task.title}</TableCell>
                    <TableCell>
                      {task.assignee || task.workspace || "-"}
                    </TableCell>
                    <TableCell>{task.dueDate || task.date}</TableCell>
                    <TableCell>{task.priority || "-"}</TableCell>
                    <TableCell>
                      {task.isCompleted
                        ? "Completed"
                        : task.status
                          ? task.status
                          : title}
                    </TableCell>
                    <TableCell>{task.comment || "-"}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  );
}

export default function Homepage() {
  // Sample task data
  const inProgressTasks = [
    {
      title: "Design Homepage",
      date: "Apr 17",
      workspace: "Marketing",
      project: "Website Redesign",
      isCompleted: false,
      assignee: "Alice",
      dueDate: "Apr 17",
      priority: "High",
      status: "In Progress",
      comment: "UI update",
    },
    {
      title: "Update Logo",
      date: "Apr 18",
      workspace: "Branding",
      project: "Rebranding",
      isCompleted: false,
      assignee: "Bob",
      dueDate: "Apr 18",
      priority: "Medium",
      status: "In Progress",
      comment: "",
    },
  ];

  const toDoTasks = [
    {
      title: "Write Blog Post",
      date: "Apr 20",
      workspace: "Content",
      project: "Blog Launch",
      isCompleted: false,
      assignee: "Carol",
      dueDate: "Apr 20",
      priority: "Low",
      status: "To Do",
      comment: "Draft only",
    },
    {
      title: "Prepare Presentation",
      date: "Apr 22",
      workspace: "Sales",
      project: "Q2 Pitch",
      isCompleted: false,
      assignee: "Dave",
      dueDate: "Apr 22",
      priority: "High",
      status: "To Do",
      comment: "",
    },
  ];

  const completedTasks = [
    {
      title: "Fix Login Bug",
      date: "Apr 10",
      workspace: "Development",
      project: "Bug Fixes",
      isCompleted: true,
      assignee: "Eve",
      dueDate: "Apr 10",
      priority: "High",
      status: "Completed",
      comment: "Patched",
    },
    {
      title: "Client Meeting",
      date: "Apr 12",
      workspace: "Support",
      project: "Onboarding",
      isCompleted: true,
      assignee: "Frank",
      dueDate: "Apr 12",
      priority: "Medium",
      status: "Completed",
      comment: "",
    },
  ];

  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <AppProvider theme={theme}>
      <DashboardLayout>
        <PageContainer>
          {/* Tab Menu Bar (fixed, not scrollable) */}
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              mb: 3,
              position: "sticky",
              top: 0,
              zIndex: 10,
              bgcolor: "background.paper",
            }}
          >
            <Tabs
              value={tab}
              onChange={handleTabChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="task section tabs"
            >
              <Tab label="List" />
              <Tab label="Board" />
              <Tab label="Dashboard" />
            </Tabs>
          </Box>
          {/* Only show task tables if "List" tab is selected */}
          {tab === 0 && (
            <Grid container spacing={3} direction="column">
              <TaskTableSection title="In Progress" tasks={inProgressTasks} />
              <TaskTableSection title="To Do" tasks={toDoTasks} />
              <TaskTableSection title="Task Completed" tasks={completedTasks} />
            </Grid>
          )}
          {/* Dashboard tab: show charts */}
          {tab === 2 && (
            <DashboardCharts
              inProgressTasks={inProgressTasks}
              toDoTasks={toDoTasks}
              completedTasks={completedTasks}
            />
          )}
          {/* You can add content for Board tab here if needed */}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}