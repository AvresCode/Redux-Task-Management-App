// export const selectTask = (reduxState) => reduxState.task;

export const selectTask = (reduxState) => {
  //
  //
  if (reduxState.task.showCompletedTasks) {
    return reduxState.task;
  } else {
    const filteredTasks = reduxState.task.tasks.filter(
      (i) => i.completed === false
    );
    return {
      ...reduxState.task,
      tasks: filteredTasks,
    };
  }
};
// {
//   if (reduxState.task.showCompletedTasks === true) {
//     console.log("got here");
//     return reduxState.task;
//   } else {
//     return reduxState.task.tasks.filter(i => i.completed === false)
//   }
// };
