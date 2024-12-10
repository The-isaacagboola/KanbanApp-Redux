import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    { task: "Design the custom Bible App", category: "backlog" },
    { task: "Complete Front End MAsters course on Redux", category: "done" },
    { task: "Prepare the arrangement for carol", category: "done" },
    {
      task: "Understanding Redux Deeply",
      category: "progress",
    },
    { task: "Finish the N.T in a month", category: "backlog" },
  ],
};

const projectSlice = createSlice({
  name: "project-slice",
  initialState,
  reducers: {},
});

export default projectSlice.reducer;
