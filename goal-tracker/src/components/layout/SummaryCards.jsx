import { Box, Card, CardContent, Typography, Button } from "@mui/material";

export default function SummaryCards() {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
      <Card sx={{ flex: 1 }}>
        <CardContent>
          <Typography>🔥 Streak</Typography>
          <Typography variant="h5">5 days</Typography>
        </CardContent>
      </Card>

      <Card sx={{ flex: 1 }}>
        <CardContent>
          <Typography>⭐ XP</Typography>
          <Typography variant="h5">580</Typography>
        </CardContent>
      </Card>

      <Card sx={{ flex: 1 }}>
        <CardContent>
          <Button variant="contained" fullWidth>
            + New Goal
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}