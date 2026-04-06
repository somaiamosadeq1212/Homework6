// import React from "react";
// import { Card, CardContent, Typography, LinearProgress, IconButton, Chip, Tooltip, Box } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useNavigate } from "react-router-dom";

// const typeColors = { Work: "primary", Personal: "success", Exercise: "error" };



// export default function GoalCard({ goal, onEdit, onDelete }) {

// const navigate = useNavigate();

// <Card
//   onClick={() => navigate(`/goals/${goal.id}`)}
//   sx={{
//     cursor: "pointer", // تغییر نشانگر موس
//     minWidth: 275,
//     boxShadow: 3,
//     borderRadius: 2,
//     padding: 2,
//     backgroundColor: "#fff",
//     transition: "0.3s",
//     "&:hover": { transform: "scale(1.02)" },
//   }}
// >
//   ...
// </Card>

//   return (
//     <Card sx={{ minWidth: 275, boxShadow: 3, borderRadius: 2, padding: 2, backgroundColor: "#fff", transition: "0.3s", "&:hover": { transform: "scale(1.02)" } }}>
//       <CardContent>
//         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <Typography variant="h6">{goal.title}</Typography>
//           <Box>
//             <IconButton onClick={() => onEdit(goal)} title="Edit"><EditIcon /></IconButton>
//             <IconButton onClick={() => onDelete(goal)} title="Delete"><DeleteIcon /></IconButton>
//           </Box>
//         </Box>
//         <Chip label={goal.type} color={typeColors[goal.type]} sx={{ mt: 1, mb: 2 }} />
//         <Typography sx={{ mb: 1 }}>{goal.description}</Typography>
//         <Tooltip title={`Progress: ${goal.progress}%`}>
//           <LinearProgress variant="determinate" value={goal.progress} sx={{ height: 10, borderRadius: 5, mb: 1 }} />
//         </Tooltip>
//         <Typography variant="caption" display="block">{goal.startDate} - {goal.endDate}</Typography>
//         <Typography variant="caption" display="block" color={goal.status === "completed" ? "green" : "text.secondary"}>
//           Status: {goal.status}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  IconButton,
  Chip,
  Tooltip,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const typeColors = { Work: "primary", Personal: "success", Exercise: "error" };

export default function GoalCard({ goal, onEdit, onDelete, onToggleComplete }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/goals/${goal.id}`)}
      sx={{
        minWidth: 280,
        maxWidth: 320,
        boxShadow: 3,
        borderRadius: 2,
        padding: 2,
        backgroundColor: "#fff",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": { transform: "scale(1.03)" },
      }}
    >
      <CardContent>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={goal.completed}
                onClick={(e) => e.stopPropagation()} // جلوگیری از navigate هنگام تیک زدن
                onChange={() => onToggleComplete(goal)}
              />
            }
            label={<Typography variant="h6">{goal.title}</Typography>}
          />

          <Box>
            <IconButton
              onClick={(e) => { e.stopPropagation(); onEdit(goal); }}
              size="small"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={(e) => { e.stopPropagation(); onDelete(goal.id); }}
              size="small"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Type Chip */}
        <Chip label={goal.type} color={typeColors[goal.type]} sx={{ mt: 1, mb: 2 }} />

        {/* Description */}
        <Typography sx={{ mb: 1 }}>{goal.description}</Typography>

        {/* Dates */}
        <Typography variant="caption" display="block">
          {goal.startDate} - {goal.endDate}
        </Typography>

        {/* Progress */}
        <Tooltip title={`Progress: ${goal.progress}%`}>
          <LinearProgress
            variant="determinate"
            value={goal.progress}
            sx={{ height: 10, borderRadius: 5, mt: 1 }}
          />
        </Tooltip>
        <Typography variant="caption" display="block">
          {goal.progress}% Completed
        </Typography>

        {/* Status */}
        <Typography
          variant="caption"
          display="block"
          color={goal.completed ? "green" : "text.secondary"}
        >
          Status: {goal.completed ? "Completed" : "In Progress"}
        </Typography>
      </CardContent>
    </Card>
  );
}

// import React from "react";
// import { Card, CardContent, Typography, LinearProgress, IconButton, Chip, Tooltip, Box } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useNavigate } from "react-router-dom";

// const typeColors = { Work: "primary", Personal: "success", Exercise: "error" };

// export default function GoalCard({ goal, onEdit, onDelete }) {
//   const navigate = useNavigate();

//   return (
//     <Card
//       onClick={() => navigate(`/goals/${goal.id}`)}
//       sx={{
//         cursor: "pointer", // تغییر نشانگر موس
//         minWidth: 275,
//         boxShadow: 3,
//         borderRadius: 2,
//         padding: 2,
//         backgroundColor: "#fff",
//         transition: "0.3s",
//         "&:hover": { transform: "scale(1.02)" },
//       }}
//     >
//       <CardContent>
//         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <Typography variant="h6">{goal.title}</Typography>
//           <Box>
//             <IconButton
//               onClick={(e) => { e.stopPropagation(); onEdit(goal); }}
//               title="Edit"
//             >
//               <EditIcon />
//             </IconButton>
//             <IconButton
//               onClick={(e) => { e.stopPropagation(); onDelete(goal); }}
//               title="Delete"
//             >
//               <DeleteIcon />
//             </IconButton>
//           </Box>
//         </Box>

//         <Chip label={goal.type} color={typeColors[goal.type]} sx={{ mt: 1, mb: 2 }} />
//         <Typography sx={{ mb: 1 }}>{goal.description}</Typography>
//         <Tooltip title={`Progress: ${goal.progress}%`}>
//           <LinearProgress variant="determinate" value={goal.progress} sx={{ height: 10, borderRadius: 5, mb: 1 }} />
//         </Tooltip>
//         <Typography variant="caption" display="block">{goal.startDate} - {goal.endDate}</Typography>
//         <Typography
//           variant="caption"
//           display="block"
//           color={goal.status === "completed" ? "green" : "text.secondary"}
//         >
//           Status: {goal.status}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }