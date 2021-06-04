import { Modal } from "..";
import { removeGif } from "../../requests/removeGif";
import { toast } from "react-toastify";
import store from "../../redux/store";
import { deleteGif } from "../../redux/savedGifs.slice";

export const ModalDeleteGif = ({ title, ...modalProps }) => {
  async function deletingGif() {
    try {
      const req = await removeGif(title);
      if (req) {
        store.dispatch(deleteGif({ title }));
        toast["success"]("Gif removido!");
        modalProps.modalClosed();
      }
    } catch (e) {
      toast["error"](e);
    }
  }

  return (
    <Modal {...modalProps}>
      <div className="modal-wrapper">
        <div className="modal-wrapper-title">Deletar gif</div>
        <div className="modal-wrapper-body">
          Tem certeza que deseja remover esse gif da sua lista?
        </div>
        <div className="modal-wrapper-buttons">
          <button
            type="button"
            className="button button-main"
            onClick={deletingGif}
          >
            Sim
          </button>
          <button
            type="button"
            className="button button-main"
            onClick={() => modalProps.modalClosed()}
          >
            Não
          </button>
        </div>
      </div>
    </Modal>
  );
};
