
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   LinearProgress,
//   IconButton,
//   Checkbox,
//   FormControlLabel,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// import GoalForm from "../components/GoalForm";
// import SummarySection from "../components/layout/SummaryCards";
// import { initialGoals, initialFormData } from "../data/FormData";

// import { calculateXP } from "../utils/xpCalculator";
// import { calculateStreak } from "../utils/streakCalculator";

// export default function Dashboard() {

//   // ✅ load from localStorage
//   const [goals, setGoals] = useState(() => {
//     const savedGoals = localStorage.getItem("goals");
//     return savedGoals ? JSON.parse(savedGoals) : initialGoals;
//   });

//   // ✅ save to localStorage
//   useEffect(() => {
//     localStorage.setItem("goals", JSON.stringify(goals));
//   }, [goals]);

//   const [formOpen, setFormOpen] = useState(false);
//   const [editingGoal, setEditingGoal] = useState(null);
//   const [formData, setFormData] = useState(initialFormData);

//   // 📊 Stats
//   const totalGoals = goals.length;
//   const completedGoals = goals.filter((g) => g.completed).length;
//   const pendingGoals = totalGoals - completedGoals;

//   // ⚡ XP Calculation
//   const streak = calculateStreak(goals);
// const totalXP = calculateXP(goals, streak);
//   // ✏️ Handlers
//   const handleDelete = (id) =>
//     setGoals(goals.filter((g) => g.id !== id));

//   const handleEdit = (goal) => {
//     setEditingGoal(goal);
//     setFormData(goal);
//     setFormOpen(true);
//   };

//   const handleSave = () => {
//     if (editingGoal) {
//       setGoals(
//         goals.map((g) =>
//           g.id === editingGoal.id
//             ? {
//                 ...g,
//                 ...formData,
//                 completed: formData.progress === 100,
//               }
//             : g
//         )
//       );
//     } else {
//       setGoals([
//         ...goals,
//         {
//           ...formData,
//           id: Date.now(),
//           completed: formData.progress === 100,
//         },
//       ]);
//     }

//     setFormOpen(false);
//     setEditingGoal(null);
//     setFormData(initialFormData);
//   };

//   const toggleComplete = (goal) => {
//     setGoals(
//       goals.map((g) =>
//         g.id === goal.id
//           ? {
//               ...g,
//               completed: !g.completed,
//               progress: !g.completed ? 100 : 0,
//             }
//           : g
//       )
//     );
//   };

//   const handleAddGoal = () => {
//     setEditingGoal(null);
//     setFormData(initialFormData);
//     setFormOpen(true);
//   };

//   return (
//     <Box sx={{ width: "100%", p: 3 }}>
//       <Typography variant="h5" sx={{ mb: 2 }}>
//         Overview
//       </Typography>

//       <SummarySection
//         totalGoals={totalGoals}
//         completedGoals={completedGoals}
//         pendingGoals={pendingGoals}
//         onAddGoal={handleAddGoal}
//         xp={totalXP}
//         streak={streak}
//       />

//       {/* Goals Grid */}
//       <Box
//         sx={{
//           display: "grid",
//           gap: 2,
//           gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//         }}
//       >
//         {goals.map((goal) => (
//           <Card key={goal.id} sx={{ position: "relative" }}>
//             <CardContent>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={goal.completed}
//                     onChange={() => toggleComplete(goal)}
//                   />
//                 }
//                 label={<Typography variant="h6">{goal.title}</Typography>}
//               />

//               <Typography variant="body2" color="text.secondary">
//                 {goal.description}
//               </Typography>

//               <Typography variant="caption" display="block">
//                 {goal.startDate} - {goal.endDate}
//               </Typography>

//               <Box sx={{ mt: 2 }}>
//                 <LinearProgress
//                   variant="determinate"
//                   value={goal.progress}
//                 />
//                 <Typography variant="caption">
//                   {goal.progress}% Completed
//                 </Typography>
//               </Box>

//               <Box sx={{ position: "absolute", top: 8, right: 8 }}>
//                 <IconButton
//                   size="small"
//                   color="primary"
//                   onClick={() => handleEdit(goal)}
//                 >
//                   <EditIcon />
//                 </IconButton>

//                 <IconButton
//                   size="small"
//                   color="error"
//                   onClick={() => handleDelete(goal.id)}
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </Box>
//             </CardContent>
//           </Card>
//         ))}
//       </Box>

//       {/* Form */}
//       <GoalForm
//         open={formOpen}
//         onClose={() => setFormOpen(false)}
//         onSave={handleSave}
//         editingGoal={editingGoal}
//         formData={formData}
//         setFormData={setFormData}
//       />
//     </Box>
//   );
// }

import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import GoalCard from "../pages/Goals/GoalCard";
import GoalForm from "../pages/Goals/GoalForm";
import NotFound from "../pages/NotFound";
import SummarySection from "../components/layout/SummaryCards";
import { initialGoals, initialFormData } from "../data/FormData";
import { calculateXP } from "../utils/xpCalculator";
import { calculateStreak } from "../utils/streakCalculator";
import { useSearch } from "../context/SearchContext"; // ✅ اضافه شد

export default function Dashboard() {
  const { search } = useSearch(); // ✅ گرفتن سرچ از Context

  // Load goals from localStorage
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("goals");
    return saved ? JSON.parse(saved) : initialGoals;
  });

  // Save goals to localStorage
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const [formOpen, setFormOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  const [formData, setFormData] = useState(initialFormData);

  // 📊 فیلتر بر اساس سرچ
  const filteredGoals = goals.filter((goal) =>
    goal.title.toLowerCase().includes(search.toLowerCase()) ||
    goal.description.toLowerCase().includes(search.toLowerCase())
  );

  // Stats (اختیاری: اگر خواستی روی filteredGoals حساب کن)
  const totalGoals = goals.length;
  const completedGoals = goals.filter((g) => g.completed).length;
  const pendingGoals = totalGoals - completedGoals;

  const streak = calculateStreak(goals);
  const totalXP = calculateXP(goals, streak);

  // Handlers
  const handleEdit = (goal) => {
    setEditingGoal(goal);
    setFormData(goal);
    setFormOpen(true);
  };

  const handleDelete = (id) => {
    setGoals(goals.filter((g) => g.id !== id));
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

  const handleSave = () => {
    if (editingGoal) {
      setGoals(
        goals.map((g) =>
          g.id === editingGoal.id
            ? { ...g, ...formData, completed: formData.progress === 100 }
            : g
        )
      );
    } else {
      setGoals([
        ...goals,
        { ...formData, id: Date.now(), completed: formData.progress === 100 },
      ]);
    }
    setFormOpen(false);
    setEditingGoal(null);
    setFormData(initialFormData);
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
          mt: 2,
        }}
      >
        {filteredGoals.length === 0 ? (
  <NotFound />
) : (
  filteredGoals.map((goal) => (
    <GoalCard
      key={goal.id}
      goal={goal}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onToggleComplete={toggleComplete}
    />
  ))
)}
          
      </Box>

      {/* Goal Form */}
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