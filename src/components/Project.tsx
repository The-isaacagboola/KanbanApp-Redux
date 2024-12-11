import { useSelector } from "react-redux";
import Column from "./Column";
import { RootState } from "../store/store";

export default function Project() {
  const columns = useSelector((state: RootState) => state.projectStore.columns);

  return (
    <section className={`md:ml-10 mt-3 grid grid-cols-3 gap-3`}>
      {columns.map((col) => (
        <Column key={col} title={col} />
      ))}
    </section>
  );
}
