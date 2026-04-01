// export function calculateXP(goals, streak) {
//   let xp = 0;

//   goals.forEach((goal) => {
//     //  XP از progress
//     xp += Math.floor(goal.progress / 10) * 10;

//     //  Bonus برای completion
//     if (goal.completed) {
//       xp += 100;
//     }
//   });

//   //  Streak bonus
//   xp += streak * 20;

//   return xp;
// }


export function calculateXP(goals, streak) {
  let xp = 0;

  goals.forEach((goal) => {
    // 🎯 progress
    xp += goal.progress;

    // 🎁 completion bonus
    if (goal.completed) {
      xp += 20;
    }
  });

  // 🔥 streak bonus
  xp += streak * 10;

  return xp;
}