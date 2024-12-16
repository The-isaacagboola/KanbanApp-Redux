import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setDragged } from "../store/projectSlice";
type Props = {
  title: string;
};

const colors = {
  todo: "#9eb61a7c",
  "in progress": "#fe02027c",
  done: "#1ba1397c",
};
export default function ProjectItem({ title }: Props) {
  const item = useSelector((store: RootState) =>
    store.projectStore.projects.find((task) => task.title === title)
  );
  const dragged = useSelector(
    (store: RootState) => store.projectStore.draggedTask
  );
  const textColor = item?.category ? colors[item?.category] : undefined;
  return (
    <div
      draggable
      onDrag={() => {
        setDragged(title);
        console.log(dragged);
      }}
      className="p-2 text-black rounded-lg cursor-move bg-navAcc"
    >
      <h1 className="text-xl font-semibold ">{title}</h1>

      <div className="flex gap-2">
        <h2> Added: </h2>
        <p>12th May, 2024</p>
      </div>
      <div className="flex gap-2">
        <h2> Status: </h2>
        <p
          className={`uppercase font-semibold`}
          style={{
            color: textColor,
          }}
        >
          {item?.category}
        </p>
      </div>
    </div>
  );
}
