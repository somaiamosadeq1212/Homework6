import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Dashboard from "../pages/Dashboard";
import Goals from "../pages/Goals/Goals";
import GoalDetails from "../pages/GoalDetails";
// import NewGoal from "../pages/NewGoal";
import Categories from "../pages/Categories";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="goals" element={<Goals />} />
        {/* <Route path="goals/new" element={<NewGoal />} /> */}
        <Route path="goals/:id" element={<GoalDetails />} />
        <Route path="categories" element={<Categories />} />
        <Route path="settings" element={<Settings />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}