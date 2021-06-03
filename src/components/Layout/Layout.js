import { GifsContext } from "../../context/GifsContext";
import { searchGifs } from "../../requests/searchGifs";
import { Bookmark } from "../Icons/Bookmark";
import { debounce } from "lodash";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import "./Layout.scss";

export const Layout = ({ children }) => {
  const [gifs, setGifs] = useState(undefined);
  const history = useHistory();

  const debouncedFunc = debounce(async function (search) {
    if (window.location.pathname !== "/") {
      history.push("/");
    }
    if (search) {
      const req = await searchGifs(search);
      if (req?.data?.data?.length > 0) {
        setGifs(req.data.data);
      }
    }
  }, 600);

  return (
    <GifsContext.Provider value={gifs}>
      <header className="header">
        <Link to="/">
          <img src={Logo} alt="Logo Aliança Rebelde" />
        </Link>
        <div className="header-search">
          <input
            type="text"
            placeholder="Buscar por gifs..."
            onChange={(e) => {
              debouncedFunc(e.target.value);
            }}
          />
        </div>
        <Link to="/salvos" className="header-saved">
          <Bookmark />
          <span>Salvos</span>
        </Link>
      </header>
      {children}
    </GifsContext.Provider>
  );
};
