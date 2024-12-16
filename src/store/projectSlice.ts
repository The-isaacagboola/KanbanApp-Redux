import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Category = "todo" | "done" | "in progress";
type taskItem = { title: string; category: Category };

type storeState = {
  draggedTask: string | null;
  projects: taskItem[];
  columns: Category[];
};

const initialState: storeState = {
  draggedTask: null,
  projects: [
    { title: "Design the custom Bible App", category: "todo" },
    { title: "Complete Front End MAsters course on Redux", category: "done" },
    { title: "Prepare the arrangement for carol", category: "done" },
    {
      title: "Understanding Redux Deeply",
      category: "in progress",
    },
    { title: "Finish the N.T in a month", category: "todo" },
  ],

  columns: ["todo", "in progress", "done"],
};

const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<taskItem>) => {
      state.projects.push(action.payload);
    },
    setDragged: (state, action: PayloadAction<string>) => {
      state.draggedTask = action.payload;
    },
  },
});

export const { addTask, setDragged } = projectSlice.actions;
export default projectSlice.reducer;
