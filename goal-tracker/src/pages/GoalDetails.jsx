import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, LinearProgress, Chip, Button } from "@mui/material";

const typeColors = { Work: "primary", Personal: "success", Exercise: "error" };

export default function GoalDetails() {
  const { id } = useParams(); // id از URL
  const navigate = useNavigate();
  const [goal, setGoal] = useState(null);

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem("goals") || "[]");

    // تبدیل id به string برای تطبیق با useParams
    const foundGoal = storedGoals.find((g) => String(g.id) === id);

    if (!foundGoal) {
      navigate("/goals"); // اگر گویل پیدا نشد برگرد به لیست
    } else {
      setGoal(foundGoal);
    }
  }, [id, navigate]);

  if (!goal) return null;

  return (
    <Box sx={{ padding: 4 }}>
      <Button onClick={() => navigate("/goals")} sx={{ mb: 2 }}>
        Back to Goals
      </Button>

      <Typography variant="h4" sx={{ mb: 2 }}>
        {goal.title}
      </Typography>

      <Chip label={goal.type} color={typeColors[goal.type]} sx={{ mb: 2 }} />
      <Typography sx={{ mb: 2 }}>{goal.description}</Typography>

      <Typography sx={{ mb: 1 }}>
        {goal.startDate} - {goal.endDate}
      </Typography>

      <Typography sx={{ mb: 1 }}>Status: {goal.status}</Typography>

      <Typography sx={{ mb: 1 }}>Progress:</Typography>
      <LinearProgress
        variant="determinate"
        value={goal.progress}
        sx={{ height: 10, borderRadius: 5 }}
      />
    </Box>
  );
}