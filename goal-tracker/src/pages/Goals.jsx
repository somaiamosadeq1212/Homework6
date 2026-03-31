
// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   LinearProgress,
//   Button,
//   IconButton,
//   Checkbox,
//   FormControlLabel,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import GoalForm from "../components/GoalForm";
// import SummaryCards from "../components/layout/SummaryCards";

// export default function Dashboard() {
//   const [goals, setGoals] = useState([
//     { id: 1, title: "Learn React", description: "Study hooks", progress: 40, completed: false, startDate: "2026-03-11", endDate: "2026-03-12" },
//     { id: 2, title: "Build Goal Tracker", description: "Finish project", progress: 70, completed: false, startDate: "2026-03-10", endDate: "2026-03-15" },
//     { id: 3, title: "Read a Book", description: "Read 30 pages", progress: 100, completed: true, startDate: "2026-03-09", endDate: "2026-03-11" },
//   ]);

//   const [formOpen, setFormOpen] = useState(false);
//   const [editingGoal, setEditingGoal] = useState(null);
//   const [formData, setFormData] = useState({ title: "", description: "", type: "Work", startDate: "", endDate: "", progress: 0 });

//   const totalGoals = goals.length;
//   const completedGoals = goals.filter((g) => g.completed).length;
//   const pendingGoals = totalGoals - completedGoals;

//   const handleDelete = (id) => setGoals(goals.filter((g) => g.id !== id));
//   const handleEdit = (goal) => { setEditingGoal(goal); setFormData(goal); setFormOpen(true); };

//   const handleSave = () => {
//     if (editingGoal) {
//       setGoals(goals.map(g => g.id === editingGoal.id ? { ...g, ...formData, completed: formData.progress === 100 } : g));
//     } else {
//       setGoals([...goals, { ...formData, id: Date.now(), completed: formData.progress === 100 }]);
//     }
//     setFormOpen(false);
//     setEditingGoal(null);
//     setFormData({ title: "", description: "", type: "Work", startDate: "", endDate: "", progress: 0 });
//   };

//   const toggleComplete = (goal) => {
//     setGoals(goals.map(g => g.id === goal.id ? { ...g, completed: !g.completed, progress: !g.completed ? 100 : 0 } : g));
//   };

//   return (
//     <Box sx={{ width: "100%", p: 3 }}>
//       <Typography variant="h5" sx={{ mb: 2 }}>Overview</Typography>
//       <SummaryCards />

//       {/* Stats Cards */}
//       <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", mb: 4 }}>
//         <Card><CardContent><Typography color="text.secondary">Total Goals</Typography><Typography variant="h4">{totalGoals}</Typography></CardContent></Card>
//         <Card><CardContent><Typography color="text.secondary">Completed</Typography><Typography variant="h4">{completedGoals}</Typography></CardContent></Card>
//         <Card><CardContent><Typography color="text.secondary">Pending</Typography><Typography variant="h4">{pendingGoals}</Typography></CardContent></Card>
//       </Box>

//       {/* Add Button */}
//       <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
//         <Button variant="contained" onClick={() => { setEditingGoal(null); setFormData({ title: "", description: "", type: "Work", startDate: "", endDate: "", progress: 0 }); setFormOpen(true); }}>Add New Goal</Button>
//       </Box>

//       {/* Goals Grid */}
//       <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
//         {goals.map((goal) => (
//           <Card key={goal.id} sx={{ position: "relative" }}>
//             <CardContent>
//               <FormControlLabel control={<Checkbox checked={goal.completed} onChange={() => toggleComplete(goal)} />} label={<Typography variant="h6">{goal.title}</Typography>} />
//               <Typography variant="body2" color="text.secondary">{goal.description}</Typography>
//               <Typography variant="caption" display="block">{goal.startDate} - {goal.endDate}</Typography>
//               <Box sx={{ mt: 2 }}>
//                 <LinearProgress variant="determinate" value={goal.progress} />
//                 <Typography variant="caption">{goal.progress}% Completed</Typography>
//               </Box>
//               <Box sx={{ position: "absolute", top: 8, right: 8 }}>
//                 <IconButton size="small" color="primary" onClick={() => handleEdit(goal)}><EditIcon /></IconButton>
//                 <IconButton size="small" color="error" onClick={() => handleDelete(goal.id)}><DeleteIcon /></IconButton>
//               </Box>
//             </CardContent>
//           </Card>
//         ))}
//       </Box>

//       {/* Form */}
//       <GoalForm open={formOpen} onClose={() => setFormOpen(false)} onSave={handleSave} editingGoal={editingGoal} formData={formData} setFormData={setFormData} />
//     </Box>
//   );
// }


import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  IconButton,
  Tooltip,
  Chip,
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
// import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// Badge colors
const typeColors = { Work: "primary", Personal: "success", Exercise: "error" };

// LocalStorage Keys
const STORAGE_GOALS_KEY = "goals";
const STORAGE_STATS_KEY = "userStats";

// Default initial goals (if LocalStorage empty)
const defaultGoals = [
  {
    id: "1",
    title: "Daily Exercise",
    description: "30 minutes morning workout",
    progress: 70,
    type: "Exercise",
    startDate: "2026-03-01",
    endDate: "2026-03-10",
    status: "active",
    logs: [{ date: "2026-03-01", amount: 70 }],
  },
  {
    id: "2",
    title: "Read a Book",
    description: "Read 50 pages of technology book",
    progress: 40,
    type: "Personal",
    startDate: "2026-03-03",
    endDate: "2026-03-15",
    status: "active",
    logs: [{ date: "2026-03-03", amount: 40 }],
  },
];

// Default User Stats
const defaultStats = { xpTotal: 0, streak: 0, lastProgressDate: null, completedCount: 0 };

export default function GoalTracker() {
  // Load from LocalStorage or use defaults
  const [goals, setGoals] = useState(() => {
    const stored = localStorage.getItem(STORAGE_GOALS_KEY);
    return stored ? JSON.parse(stored) : defaultGoals;
  });

  const [userStats, setUserStats] = useState(() => {
    const stored = localStorage.getItem(STORAGE_STATS_KEY);
    return stored ? JSON.parse(stored) : defaultStats;
  });

  const [open, setOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "", type: "Work", startDate: "", endDate: "", progress: 0 });

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [goalToDelete, setGoalToDelete] = useState(null);

  // Save goals to state + LocalStorage
  const saveGoalsToStorage = (updatedGoals) => {
    setGoals(updatedGoals);
    localStorage.setItem(STORAGE_GOALS_KEY, JSON.stringify(updatedGoals));
  };

  // Sync userStats with LocalStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_STATS_KEY, JSON.stringify(userStats));
  }, [userStats]);

  const handleOpen = (goal = null) => {
    setEditingGoal(goal);
    setFormData(goal ? { ...goal } : { title: "", description: "", type: "Work", startDate: "", endDate: "", progress: 0 });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSliderChange = (e, value) => setFormData({ ...formData, progress: value });

  const handleSave = () => {
    if (!formData.title || !formData.startDate) return alert("Title and Start Date are required!");

    const today = new Date().toISOString().split("T")[0];

    if (editingGoal) {
      // ویرایش گویل
      const updatedGoals = goals.map((g) =>
        g.id === editingGoal.id
          ? {
              ...g,
              ...formData,
              status: formData.progress >= 100 ? "completed" : "active",
              logs: [...(g.logs || []), { date: today, amount: formData.progress }],
            }
          : g
      );
      saveGoalsToStorage(updatedGoals);
    } else {
      // اضافه کردن گویل جدید
      const newGoal = {
        ...formData,
        id: Date.now().toString(),
        status: formData.progress >= 100 ? "completed" : "active",
        logs: [{ date: today, amount: formData.progress }],
      };
      saveGoalsToStorage([...goals, newGoal]);
    }

    // Update XP + Streak + completedCount
    const xpGain = formData.progress; // ساده: هر درصد progress = 1 XP
    let newStreak = userStats.streak;

    if (userStats.lastProgressDate) {
      const lastDate = new Date(userStats.lastProgressDate);
      const diff = (new Date(today) - lastDate) / (1000 * 60 * 60 * 24);
      if (diff === 1) newStreak += 1; // consecutive day
      else if (diff > 1) newStreak = 1; // reset streak
    } else {
      newStreak = 1;
    }

    const updatedGoals = editingGoal
      ? goals.map((g) => (g.id === editingGoal.id ? { ...g, progress: formData.progress, status: formData.progress >= 100 ? "completed" : "active" } : g))
      : [...goals, { ...formData, id: Date.now().toString(), status: formData.progress >= 100 ? "completed" : "active" }];

    const completedCount = updatedGoals.filter((g) => g.status === "completed").length;

    setUserStats({
      xpTotal: userStats.xpTotal + xpGain,
      streak: newStreak,
      lastProgressDate: today,
      completedCount,
    });

    handleClose();
  };

  const handleDeleteClick = (goal) => {
    setGoalToDelete(goal);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (goalToDelete) {
      const updatedGoals = goals.filter((g) => g.id !== goalToDelete.id);
      saveGoalsToStorage(updatedGoals);
      setGoalToDelete(null);
    }
    setDeleteDialogOpen(false);
  };

  const cancelDelete = () => {
    setGoalToDelete(null);
    setDeleteDialogOpen(false);
  };

  // const handleDragEnd = (result) => {
  //   if (!result.destination) return;
  //   const items = Array.from(goals);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);
  //   saveGoalsToStorage(items);
  // };

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>🎯 Goal Tracker</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3, textAlign: "center" }}>
        XP: {userStats.xpTotal} | Streak: {userStats.streak} days | Completed: {userStats.completedCount}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpen()}>Add New Goal</Button>
      </Box>

      {/* <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="goals">
          {(provided) => (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }} {...provided.droppableProps} ref={provided.innerRef}>
              {goals.map((goal, index) => (
                <Draggable key={goal.id} draggableId={goal.id} index={index}>
                  {(provided) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      sx={{
                        minWidth: 275,
                        boxShadow: 3,
                        borderRadius: 2,
                        padding: 2,
                        backgroundColor: "#fff",
                        transition: "0.3s",
                        "&:hover": { transform: "scale(1.02)" },
                      }}
                    >
                      <CardContent>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Typography variant="h6">{goal.title}</Typography>
                          <Box>
                            <IconButton onClick={() => handleOpen(goal)} title="Edit"><EditIcon /></IconButton>
                            <IconButton onClick={() => handleDeleteClick(goal)} title="Delete"><DeleteIcon /></IconButton>
                          </Box>
                        </Box>

                        <Chip label={goal.type} color={typeColors[goal.type]} sx={{ mt: 1, mb: 2 }} />
                        <Typography sx={{ mb: 1 }}>{goal.description}</Typography>
                        <Tooltip title={`Progress: ${goal.progress}%`}>
                          <LinearProgress variant="determinate" value={goal.progress} sx={{ height: 10, borderRadius: 5, mb: 1 }} />
                        </Tooltip>
                        <Typography variant="caption" display="block">{goal.startDate} - {goal.endDate}</Typography>
                        <Typography variant="caption" display="block" color={goal.status === "completed" ? "green" : "text.secondary"}>
                          Status: {goal.status}
                        </Typography>
                      </CardContent>
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext> */}

      {/* Add/Edit Form */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingGoal ? "Edit Goal" : "Add New Goal"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField label="Title" name="title" value={formData.title} onChange={handleChange} fullWidth />
          <TextField label="Description" name="description" value={formData.description} onChange={handleChange} fullWidth multiline rows={2} />
          <Select name="type" value={formData.type} onChange={handleChange} fullWidth>
            <MenuItem value="Work">Work</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
            <MenuItem value="Exercise">Exercise</MenuItem>
          </Select>
          <TextField label="Start Date" type="date" name="startDate" value={formData.startDate} onChange={handleChange} InputLabelProps={{ shrink: true }} fullWidth />
          <TextField label="End Date" type="date" name="endDate" value={formData.endDate} onChange={handleChange} InputLabelProps={{ shrink: true }} fullWidth />
          <Box sx={{ mt: 1 }}>
            <Typography gutterBottom>Progress: {formData.progress}%</Typography>
            <Slider value={formData.progress} onChange={handleSliderChange} min={0} max={100} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Confirm Delete Dialog */}
      <Dialog open={deleteDialogOpen} onClose={cancelDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this goal?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete}>No</Button>
          <Button variant="contained" color="error" onClick={confirmDelete}>Yes</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}