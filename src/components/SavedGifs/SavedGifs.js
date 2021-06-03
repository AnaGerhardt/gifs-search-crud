import Masonry from "react-masonry-component";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Spinner, ModalDeleteGif, ModalEditGif } from "../../components";
import "./SavedGifs.scss";

export const SavedGifs = () => {
  const gifs = useSelector((state) => state.gifs);
  const [layout, setLayout] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [gifInfo, setGifInfo] = useState({});
  const masonryOptions = {
    transitionDuration: 0,
    columnWidth: 200,
    fitWidth: true,
    gutter: 20,
  };
  return (
    <div className="saved-gifs">
      <h2>Lista de gifs salvos</h2>
      {!layout && gifs && <Spinner />}
      {gifs ? (
        <Masonry
          className={"saved-gifs-masonry hide"}
          id="savedGifsList"
          elementType={"ul"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          onLayoutComplete={() => {
            setLayout(true);
            document.getElementById("savedGifsList").classList.remove("hide");
          }}
        >
          {gifs.map((gif, i) => {
            return (
              <li key={i}>
                <img src={gif.image} alt={gif.title} />
                <div className="saved-gifs-actions">
                  <span
                    onClick={() => {
                      setGifInfo({ title: gif.title });
                      setShowModalEdit(true);
                    }}
                  >
                    Editar
                  </span>
                  <span
                    onClick={() => {
                      setGifInfo({ title: gif.title });
                      setShowModalDelete(true);
                    }}
                  >
                    Deletar
                  </span>
                </div>
              </li>
            );
          })}
        </Masonry>
      ) : (
        "Não há itens salvos ainda"
      )}
      <ModalDeleteGif
        title={gifInfo.title}
        show={showModalDelete}
        modalClosed={() => setShowModalDelete(false)}
      />
      <ModalEditGif
        title={gifInfo.title}
        show={showModalEdit}
        modalClosed={() => setShowModalEdit(false)}
      />
    </div>
  );
};
