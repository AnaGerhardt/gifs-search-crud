import { render } from "@testing-library/react";
import { SavedGifs } from "../";

import { withStore } from "../../testUtils";

describe("<SavedGifs />", () => {
  it("tests if images are rendered", () => {
    const { getAllByRole } = render(withStore(<SavedGifs />));
    const imgList = getAllByRole("img");
    expect(imgList).toHaveLength(2);
  });
  it("tests if actions are rendered", () => {
    const { getAllByText } = render(withStore(<SavedGifs />));
    const editar = getAllByText("Editar");
    expect(editar).toHaveLength(2);
    const deletar = getAllByText("Deletar");
    expect(deletar).toHaveLength(2);
  });
});
