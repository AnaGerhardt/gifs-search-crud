import { Modal } from "..";
import { addGif } from "../../requests/addGif";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import store from "../../redux/store";
import { saveGif } from "../../redux/gifs.slice";

export const ModalAddGif = ({ title, image, giphy, ...modalProps }) => {
  const gifs = useSelector((state) => state.gifs);

  async function savingGif() {
    const checkRepeated = gifs.some((gif) => gif.title === title);
    if (!checkRepeated) {
      try {
        const req = await addGif(title, image);
        if (req) {
          store.dispatch(saveGif({ title, image }));
          toast["success"]("Gif adicionado à sua lista!");
          modalProps.modalClosed();
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      toast["warning"]("Sua lista já contém esse gif!");
    }
  }

  return (
    <Modal {...modalProps}>
      <div className="modal-wrapper">
        <div className="modal-wrapper-body">
          <div>
            <strong>Título</strong>
            <big>{title}</big>
          </div>
          <div>
            <strong>Link do Giphy</strong>
            <a href={giphy} target="_blank" rel="noreferrer">
              Clique aqui para visitar
            </a>
          </div>
        </div>
        <div className="modal-wrapper-button">
          <button
            type="button"
            className="button button-main"
            onClick={savingGif}
          >
            Salvar gif
          </button>
        </div>
      </div>
    </Modal>
  );
};
