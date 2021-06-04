import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import { MemoryRouter } from "react-router-dom";

export const mockedGifs = [
  {
    title: "Título 1",
    url: "Teste",
    images: { fixed_width: { url: "Teste" } },
  },
  {
    title: "Título 2",
    url: "Teste",
    images: { fixed_width: { url: "Teste" } },
  },
  {
    title: "Título 2",
    url: "Teste",
    images: { fixed_width: { url: "Teste" } },
  },
];

export const mockedSavedGifs = [
  { title: "Título 1", image: "Teste" },
  { title: "Título 2", image: "Teste" },
];

export const withStore = (
  component,
  gifs = mockedGifs,
  savedGifs = mockedSavedGifs
) => {
  return (
    <Provider store={createStore(rootReducer, { gifs, savedGifs })}>
      {component}
    </Provider>
  );
};

export const withRouter = (component, route = "/") => {
  window.history.pushState({}, "Test Page", route);

  return <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>;
};
