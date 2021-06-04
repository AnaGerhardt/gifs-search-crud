import { Modal } from "..";
import { modifyGif } from "../../requests/modifyGif";
import { toast } from "react-toastify";
import store from "../../redux/store";
import { editGif } from "../../redux/savedGifs.slice";
import { useState } from "react";

export const ModalEditGif = ({ title, ...modalProps }) => {
  const [newTitle, setNewTitle] = useState("");
  async function editingGif() {
    try {
      const req = await modifyGif(title, newTitle);
      if (req) {
        store.dispatch(editGif({ title, newTitle }));
        toast["success"]("Gif alterado!");
        setNewTitle("");
        modalProps.modalClosed();
      }
    } catch (e) {
      toast["error"](e);
    }
  }

  return (
    <Modal {...modalProps}>
      <div className="modal-wrapper">
        <div className="modal-wrapper-title">Editar título do gif</div>
        <div className="modal-wrapper-body">
          <div>
            <strong>Título atual</strong>
            <big>{title}</big>
          </div>
          <div>
            <strong>Novo Título</strong>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-wrapper-button">
          <button
            type="button"
            className="button button-main"
            onClick={editingGif}
          >
            Atualizar título
          </button>
        </div>
      </div>
    </Modal>
  );
};
