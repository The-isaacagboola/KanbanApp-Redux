import { useState } from "react";
import Modal from "../modal";
import { Category } from "../store/projectSlice";
import { taskItem } from "../store/projectSlice";
import { addTask } from "../store/projectSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

type Props = { closeModal: () => void; cat: Category };

function AddTaskModal({ closeModal, cat }: Props) {
  const [response, setResponse] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const [error, setError] = useState("");

  const addNewTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!response) {
      setError("Please enter a valid title.");
      return;
    }
    const task: taskItem = {
      title: response,
      category: cat,
      added: Date.now(),
    };
    dispatch(addTask(task));
    closeModal();
  };

  return (
    <Modal>
      <div className="fixed  top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)]">
        <div
          className=""
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: " 30px 50px",
            backgroundColor: "white",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            fontSize: "18px",
            alignItems: "center",
          }}
        >
          <h1 className="mb-5 text-3xl font-semibold text-center ">New Task</h1>

          <button
            className="absolute flex items-center justify-center w-10 h-10 mr-8 font-bold border rounded-full cursor-pointer -right-3 top-3"
            onClick={() => closeModal()}
          >
            X
          </button>
          <h2 className="mb-2 text-xl font-semibold text-left">
            Please fill in the title below;
          </h2>
          <label htmlFor="title" className="p-2 mb-3 border">
            Title:
            <input
              type="text"
              name="title"
              className="pl-1 border-none outline-none"
              onChange={(e) => setResponse(e.target.value)}
            />
          </label>

          <button
            onClick={addNewTask}
            className="px-3 py-1 text-white max-w-fit bg-slate-400"
          >
            Add New Task
          </button>
          {error && (
            <p className="text-xl font-semibold text-red-600">{error}</p>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default AddTaskModal;
