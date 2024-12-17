import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { deleteTask, setDragged } from "../store/projectSlice";

type Props = {
  title: string;
};

const colors = {
  todo: "#2e36007d",
  "in progress": "#fe02027c",
  done: "#0050127c",
};

export default function ProjectItem({ title }: Props) {
  const item = useSelector((store: RootState) =>
    store.projectStore.projects.find((task) => task.title === title)
  );
  const dispatch = useDispatch<AppDispatch>();

  const textColor = item?.category ? colors[item?.category] : undefined;

  return (
    <div
      draggable
      onDragStart={() => {
        dispatch(setDragged(title));
        console.log("dragging start");
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
      <button
        className="p-1 mt-2 font-bold text-white bg-[#df0303] rounded-md"
        onClick={() => {
          dispatch(deleteTask(title));
        }}
      >
        Delete Task
      </button>
    </div>
  );
}
