
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
// import SummarySection from "../components/layout/SummaryCards";
// import { initialGoals, initialFormData } from "../data/FormData";
// import { useEffect } from "react";


// export default function Dashboard() {

// const [goals, setGoals] = useState(() => {
//   const savedGoals = localStorage.getItem("goals");

// useEffect(() => {
//   localStorage.setItem("goals", JSON.stringify(goals));
// }, [goals]);
  
//   return savedGoals ? JSON.parse(savedGoals) : initialGoals;
// });

//   const [formOpen, setFormOpen] = useState(false);
//   const [editingGoal, setEditingGoal] = useState(null);
//   const [formData, setFormData] = useState(initialFormData);
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
//     setFormData(initialFormData);  };

//   const toggleComplete = (goal) => {
//     setGoals(goals.map(g => g.id === goal.id ? { ...g, completed: !g.completed, progress: !g.completed ? 100 : 0 } : g));
//   };


//   // add goal
//   const handleAddGoal = () => {
//   setEditingGoal(null);
//   setFormData(initialFormData);
//   setFormOpen(true);
// };



//   return (
//     <Box sx={{ width: "100%", p: 3 }}>
//       <Typography variant="h5" sx={{ mb: 2 }}>Overview</Typography>
      
// <SummarySection
//   totalGoals={totalGoals}
//   completedGoals={completedGoals}
//   pendingGoals={pendingGoals}
//   onAddGoal={handleAddGoal}
// />


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
  Box,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import GoalForm from "../components/GoalForm";
import SummarySection from "../components/layout/SummaryCards";
import { initialGoals, initialFormData } from "../data/FormData";

import { calculateXP } from "../utils/xpCalculator";
import { calculateStreak } from "../utils/streakCalculator";

export default function Dashboard() {

  // ✅ load from localStorage
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("goals");
    return savedGoals ? JSON.parse(savedGoals) : initialGoals;
  });

  // ✅ save to localStorage
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const [formOpen, setFormOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  const [formData, setFormData] = useState(initialFormData);

  // 📊 Stats
  const totalGoals = goals.length;
  const completedGoals = goals.filter((g) => g.completed).length;
  const pendingGoals = totalGoals - completedGoals;

  // ⚡ XP Calculation
  const streak = calculateStreak(goals);
const totalXP = calculateXP(goals, streak);
  // ✏️ Handlers
  const handleDelete = (id) =>
    setGoals(goals.filter((g) => g.id !== id));

  const handleEdit = (goal) => {
    setEditingGoal(goal);
    setFormData(goal);
    setFormOpen(true);
  };

  const handleSave = () => {
    if (editingGoal) {
      setGoals(
        goals.map((g) =>
          g.id === editingGoal.id
            ? {
                ...g,
                ...formData,
                completed: formData.progress === 100,
              }
            : g
        )
      );
    } else {
      setGoals([
        ...goals,
        {
          ...formData,
          id: Date.now(),
          completed: formData.progress === 100,
        },
      ]);
    }

    setFormOpen(false);
    setEditingGoal(null);
    setFormData(initialFormData);
  };

  const toggleComplete = (goal) => {
    setGoals(
      goals.map((g) =>
        g.id === goal.id
          ? {
              ...g,
              completed: !g.completed,
              progress: !g.completed ? 100 : 0,
            }
          : g
      )
    );
  };

  const handleAddGoal = () => {
    setEditingGoal(null);
    setFormData(initialFormData);
    setFormOpen(true);
  };

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Overview
      </Typography>

      <SummarySection
        totalGoals={totalGoals}
        completedGoals={completedGoals}
        pendingGoals={pendingGoals}
        onAddGoal={handleAddGoal}
        xp={totalXP}
        streak={streak}
      />

      {/* Goals Grid */}
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        }}
      >
        {goals.map((goal) => (
          <Card key={goal.id} sx={{ position: "relative" }}>
            <CardContent>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={goal.completed}
                    onChange={() => toggleComplete(goal)}
                  />
                }
                label={<Typography variant="h6">{goal.title}</Typography>}
              />

              <Typography variant="body2" color="text.secondary">
                {goal.description}
              </Typography>

              <Typography variant="caption" display="block">
                {goal.startDate} - {goal.endDate}
              </Typography>

              <Box sx={{ mt: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={goal.progress}
                />
                <Typography variant="caption">
                  {goal.progress}% Completed
                </Typography>
              </Box>

              <Box sx={{ position: "absolute", top: 8, right: 8 }}>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => handleEdit(goal)}
                >
                  <EditIcon />
                </IconButton>

                <IconButton
                  size="small"
                  color="error"
                  onClick={() => handleDelete(goal.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Form */}
      <GoalForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSave={handleSave}
        editingGoal={editingGoal}
        formData={formData}
        setFormData={setFormData}
      />
    </Box>
  );
}