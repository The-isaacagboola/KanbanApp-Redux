import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type ColumnProp = {
  title: string;
};
export default function Column({ title }: ColumnProp) {
  const tasks = useSelector((state: RootState) =>
    state.projectStore.projects.filter((item) => item.category === title)
  );

  return (
    <div className="bg-teal text-white p-3 rounded-lg">
      <h1 className="uppercase text-lg text-center">{title}</h1>
      {JSON.stringify(tasks.filter((item) => item.category === title))}
    </div>
  );
}
