import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type taskItem = { title: string; category: "backlog" | "done" | "in progress" };

type storeState = { projects: taskItem[]; columns: string[] };

const initialState: storeState = {
  projects: [
    { title: "Design the custom Bible App", category: "backlog" },
    { title: "Complete Front End MAsters course on Redux", category: "done" },
    { title: "Prepare the arrangement for carol", category: "done" },
    {
      title: "Understanding Redux Deeply",
      category: "in progress",
    },
    { title: "Finish the N.T in a month", category: "backlog" },
  ],

  columns: ["backlog", "in progress", "done"],
};

const projectSlice = createSlice({
  name: "project-slice",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<taskItem>) => {
      return { ...state, action };
    },
  },
});

export const { addTask } = projectSlice.actions;
export default projectSlice.reducer;
