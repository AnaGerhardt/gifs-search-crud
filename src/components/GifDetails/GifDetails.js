import { Modal } from "../";

export const GifDetails = ({ title, image, giphy, ...modalProps }) => {
  return (
    <Modal {...modalProps}>
      <div className="modal-wrapper">
        <div className="modal-wrapper-body">
          <strong>Título</strong> <br />
          <big>{title}</big> <br />
          <br />
          <strong>Link do Giphy</strong> <br />
          <a href={giphy} target="_blank" rel="noreferrer">
            Clique aqui para visitar
          </a>
        </div>
        <div className="modal-wrapper-button">
          <button type="button" className="button button-main">
            Salvar gif
          </button>
        </div>
      </div>
    </Modal>
  );
};
