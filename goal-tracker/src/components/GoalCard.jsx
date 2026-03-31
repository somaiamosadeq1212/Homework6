// import React from "react";
// import { Card, CardContent, Typography, LinearProgress, Box, IconButton } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// export default function GoalCard({ goal }) {
//   return (
//     <Card sx={{ minHeight: 150, position: "relative" }}>
//       <CardContent>
//         <Typography variant="h6">{goal.title}</Typography>
//         <Typography variant="body2" color="text.secondary">
//           {goal.description}
//         </Typography>

//         <Box mt={2}>
//           <LinearProgress variant="determinate" value={goal.progress} />
//           <Typography variant="caption">{goal.progress}% Completed</Typography>
//         </Box>

//         <Box sx={{ position: "absolute", top: 8, right: 8 }}>
//           <IconButton size="small" color="primary">
//             <EditIcon />
//           </IconButton>
//           <IconButton size="small" color="error">
//             <DeleteIcon />
//           </IconButton>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// }