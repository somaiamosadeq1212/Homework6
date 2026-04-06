

// export function calculateStreak(goals) {
//   const today = new Date();

//   const activeDates = goals
//     .filter((g) => g.progress > 0)
//     .map((g) => new Date(g.endDate).toDateString());

//   let streak = 0;

//   for (let i = 0; i < 365; i++) {
//     const checkDate = new Date();
//     checkDate.setDate(today.getDate() - i);

//     if (activeDates.includes(checkDate.toDateString())) {
//       streak++;
//     } else {
//       break;
//     }
//   }

//   return streak;
// }


export function calculateStreak(goals) {
  const today = new Date();

  // تبدیل به YYYY-MM-DD بدون timezone مشکل
  const formatDate = (date) => {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];
  };

  const activeDates = goals
    .filter((g) => g.progress > 0)
    .map((g) => g.endDate); // مستقیم از دیتا

  let streak = 0;

  for (let i = 0; i < 365; i++) {
    const checkDate = new Date(today);
    checkDate.setDate(today.getDate() - i);

    const dateString = formatDate(checkDate);

    if (activeDates.includes(dateString)) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}