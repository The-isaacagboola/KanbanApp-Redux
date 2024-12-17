import Modal from "../modal";

type Props = { closeModal: () => void };

function AddTaskModal({ closeModal }: Props) {
  return (
    <Modal>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-red-100">
        <div className="">
          <h1>Modal</h1>
          <label htmlFor="title">
            Title:
            <input type="text" name="title" />
          </label>

          <button onClick={() => closeModal()}>Add New Task</button>
        </div>
      </div>
    </Modal>
  );
}

export default AddTaskModal;
