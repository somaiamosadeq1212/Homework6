// import React from "react";
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem, Box, Slider, Typography } from "@mui/material";

// export default function GoalForm({ open, onClose, onSave, editingGoal, formData, setFormData }) {
//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleSliderChange = (e, value) => setFormData({ ...formData, progress: value });

//   if (!formData) return null;
//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>{editingGoal ? "Edit Goal" : "Add New Goal"}</DialogTitle>
//       <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//         <TextField label="Title" name="title" value={formData.title} onChange={handleChange} fullWidth />
//         <TextField label="Description" name="description" value={formData.description} onChange={handleChange} fullWidth multiline rows={2} />
//         <Select name="type" value={formData.type} onChange={handleChange} fullWidth>
//           <MenuItem value="Work">Work</MenuItem>
//           <MenuItem value="Personal">Personal</MenuItem>
//           <MenuItem value="Exercise">Exercise</MenuItem>
//           <MenuItem value="Study">Study</MenuItem>
//            <MenuItem value="Other">Other</MenuItem>


//         </Select>
//         <TextField label="Start Date" type="date" name="startDate" value={formData.startDate} onChange={handleChange} InputLabelProps={{ shrink: true }} fullWidth />
//         <TextField label="End Date" type="date" name="endDate" value={formData.endDate} onChange={handleChange} InputLabelProps={{ shrink: true }} fullWidth />
//         <Box sx={{ mt: 1 }}>
//           <Typography gutterBottom>Progress: {formData.progress}%</Typography>
//           <Slider value={formData.progress} onChange={handleSliderChange} min={0} max={100} />
//         </Box>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button variant="contained" onClick={onSave}>Save</Button>
//       </DialogActions>
//     </Dialog>
//   );
// }