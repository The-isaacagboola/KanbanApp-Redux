import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ProjectItem from "./ProjectItem";
import { useMemo, useState } from "react";
import { Category } from "../store/projectSlice";
import AddTaskModal from "./AddTaskModal";
type ColumnProp = {
  title: Category;
};

export default function Column({ title }: ColumnProp) {
  const [isOpen, setOpenModal] = useState(false);

  const closeModal = () => setOpenModal(false);

  const projects = useSelector(
    (state: RootState) => state.projectStore.projects
  );

  const tasks = useMemo(() => {
    return projects.filter((item) => item.category === title);
  }, [projects, title]);

  return (
    <>
      <div
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={() => {}}
        className="p-3 text-white transition-all rounded-lg bg-teal max-h-fit"
      >
        <h1 className="mb-3 text-lg text-center uppercase">{title}</h1>
        <div className="space-y-2">
          {tasks.map((item, i) => (
            <ProjectItem key={i} title={item.title} />
          ))}
        </div>

        <div className="flex">
          <button
            onClick={() => setOpenModal(true)}
            className="w-full p-2 mt-4 text-xl font-semibold rounded-lg bg-slate-400"
          >
            + Add New Task
          </button>
        </div>
      </div>

      {isOpen && <AddTaskModal closeModal={closeModal} cat={title} />}
    </>
  );
}
