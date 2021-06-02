import { useGifs } from "../../context/GifsContext";
import Masonry from "react-masonry-component";
import useLoading from "../../hooks/loadingHook";
import { searchGifs } from "../../requests/searchGifs";
import { Spinner, GifDetails } from "../../components";
import MayTheForce from "../../assets/images/maytheforce.gif";
import { useState } from "react";

import "./Main.scss";

export const Main = () => {
  const gifs = useGifs();
  const loading = useLoading(searchGifs);
  const [layout, setLayout] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [gifInfo, setGifInfo] = useState({});

  const masonryOptions = {
    transitionDuration: 0,
    columnWidth: 200,
    fitWidth: true,
    gutter: 20,
  };

  return (
    <div className="gifs-list">
      {!layout && !loading && gifs && <Spinner />}
      {loading ? (
        <Spinner />
      ) : gifs ? (
        <Masonry
          className={"gifs-list-masonry hide"}
          id="gifsList"
          elementType={"ul"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          onLayoutComplete={() => {
            setLayout(true);
            document.getElementById("gifsList").classList.remove("hide");
          }}
        >
          {gifs.map((gif, i) => {
            return (
              <li key={i}>
                <img
                  src={gif.images.fixed_width.url}
                  alt={gif.title}
                  onClick={() => {
                    setGifInfo({
                      title: gif.title,
                      image: gif.images.fixed_width.url,
                      giphy: gif.url,
                    });
                    setShowModal(true);
                  }}
                />
                <span>Ver detalhes</span>
              </li>
            );
          })}
        </Masonry>
      ) : (
        <div className="gifs-list-intro">
          <span>Faça sua busca no campo acima!</span>
          <img src={MayTheForce} alt="May the force be with you" />
        </div>
      )}
      <GifDetails
        title={gifInfo.title}
        image={gifInfo.image}
        giphy={gifInfo.giphy}
        show={showModal}
        modalClosed={() => setShowModal(false)}
      />
    </div>
  );
};
