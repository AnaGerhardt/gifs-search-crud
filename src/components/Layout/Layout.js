import { searchGifs } from "../../requests/searchGifs";
import { Bookmark } from "../Icons/Bookmark";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import { setGifs } from "../../redux/gifs.slice";
import store from "../../redux/store";
import "./Layout.scss";
import { useEffect } from "react";

export const Layout = ({ children }) => {
  const history = useHistory();

  const debouncedFunc = debounce(async function (search) {
    if (window.location.pathname !== "/") {
      history.push("/");
    }
    if (search.trim().length > 1) {
      localStorage.setItem("search", search);
      const req = await searchGifs(search);
      const result = req.data.data;
      if (result.length > 0) {
        store.dispatch(setGifs(result));
      }
    } else {
      store.dispatch(setGifs([]));
    }
  }, 600);

  useEffect(() => {
    if (!!document.querySelector("#search").value === false) {
      store.dispatch(setGifs([]));
    }
  });

  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={Logo} alt="Logo Aliança Rebelde" />
        </Link>
        <div className="header-search">
          <input
            id="search"
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
    </>
  );
};
