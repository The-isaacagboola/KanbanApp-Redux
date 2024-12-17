import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Category = "todo" | "done" | "in progress";
export type taskItem = { title: string; category: Category; added: number };

type storeState = {
  draggedTask: string | undefined;
  projects: taskItem[];
  columns: Category[];
};

const initialState: storeState = {
  draggedTask: "Howfar i am available",
  projects: [
    {
      title: "Complete the idealization of the Custom Bible App",
      category: "todo",
      added: 1734444378234,
    },
    {
      title: "Learn React Native",
      category: "todo",
      added: 1734444378234,
    },
    {
      title: "Build the Custom Bible App with React Native",
      category: "todo",
      added: 1734344378234,
    },
    {
      title: "Complete Front End Masters course on Redux",
      category: "done",
      added: 1734244369034,
    },
    {
      title: "Prepare the arrangements for ...",
      category: "in progress",
      added: 1734414339034,
    },
    {
      title: "Build a simple project using Redux for state management",
      category: "in progress",
      added: 1734444289034,
    },
    {
      title: "Finish the N.T in a month",
      category: "todo",
      added: 1734044319034,
    },
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
    deleteTask: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter(
        (item) => item.title !== action.payload
      );
    },
    moveTask: (state, action: PayloadAction<Category>) => {
      const title = state.draggedTask;
      state.projects = state.projects.map((task) =>
        task.title !== title ? task : { ...task, category: action.payload }
      );
    },
  },
});

export const { addTask, setDragged, deleteTask, moveTask } =
  projectSlice.actions;
export default projectSlice.reducer;
