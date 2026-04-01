// export function calculateStreak(goals) {
//   const today = new Date();

//   const completedDates = goals
//     .filter((g) => g.completed)
//     .map((g) => new Date(g.endDate).toDateString());

//   let streak = 0;

//   for (let i = 0; i < 365; i++) {
//     const checkDate = new Date();
//     checkDate.setDate(today.getDate() - i);

//     if (completedDates.includes(checkDate.toDateString())) {
//       streak++;
//     } else {
//       break;
//     }
//   }

//   return streak;
// }


export function calculateStreak(goals) {
  const today = new Date();

  const activeDates = goals
    .filter((g) => g.progress > 0)
    .map((g) => new Date(g.endDate).toDateString());

  let streak = 0;

  for (let i = 0; i < 365; i++) {
    const checkDate = new Date();
    checkDate.setDate(today.getDate() - i);

    if (activeDates.includes(checkDate.toDateString())) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}