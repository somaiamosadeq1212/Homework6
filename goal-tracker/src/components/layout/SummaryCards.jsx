// import { Box, Card, CardContent, Typography, Button } from "@mui/material";

// export default function SummaryCards() {
//   return (
//     <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
//       <Card sx={{ flex: 1 }}>
//         <CardContent>
//           <Typography>🔥 Streak</Typography>
//           <Typography variant="h5">5 days</Typography>
//         </CardContent>
//       </Card>

//       <Card sx={{ flex: 1 }}>
//         <CardContent>
//           <Typography>⭐ XP</Typography>
//           <Typography variant="h5">580</Typography>
//         </CardContent>
//       </Card>

//       <Card sx={{ flex: 1 }}>
//         <CardContent>
//           <Button variant="contained" fullWidth>
//             + New Goal
//           </Button>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }


import { Box, Card, CardContent, Typography, Button } from "@mui/material";

export default function SummarySection({
  totalGoals,
  completedGoals,
  pendingGoals,
  onAddGoal,
  xp,
  streak,
}) {
  return (
    <>
      {/* 🔥 Top Cards */}
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        
        {/* Streak */}
        <Card sx={{ flex: 1, minWidth: 200 }}>
          <CardContent>
            <Typography>🔥 Streak</Typography>
            <Typography variant="h5">
              {streak} days
            </Typography>
          </CardContent>
        </Card>

        {/* XP */}
        <Card sx={{ flex: 1, minWidth: 200 }}>
          <CardContent>
            <Typography>⭐ XP</Typography>
            <Typography variant="h5">
              {xp} XP
            </Typography>
          </CardContent>
        </Card>

        {/* Add Goal */}
        <Card sx={{ flex: 1, minWidth: 200 }}>
          <CardContent>
            <Button variant="contained" fullWidth onClick={onAddGoal}>
              + New Goal
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* 📊 Stats */}
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          mb: 4,
        }}
      >
        <Card>
          <CardContent>
            <Typography color="text.secondary">Total Goals</Typography>
            <Typography variant="h4">{totalGoals}</Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography color="text.secondary">Completed</Typography>
            <Typography variant="h4">{completedGoals}</Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography color="text.secondary">Pending</Typography>
            <Typography variant="h4">{pendingGoals}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}