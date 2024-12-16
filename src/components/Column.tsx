import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ProjectItem from "./ProjectItem";
import { useMemo } from "react";
import { Category, setDragged } from "../store/projectSlice";
type ColumnProp = {
  title: Category;
};
export default function Column({ title }: ColumnProp) {
  const projects = useSelector(
    (state: RootState) => state.projectStore.projects
  );

  const tasks = useMemo(() => {
    return projects.filter((item) => item.category === title);
  }, [projects, title]);

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={() => {}}
      className="p-3 text-white rounded-lg bg-teal"
    >
      <h1 className="text-lg text-center uppercase">{title}</h1>
      <div className="space-y-2">
        {tasks.map((item, i) => (
          <ProjectItem key={i} title={item.title} />
        ))}
      </div>
    </div>
  );
}
