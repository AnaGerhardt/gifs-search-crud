import { render } from "@testing-library/react";
import { Layout } from "../";

import { withRouter } from "../../testUtils";

describe("<Layout />", () => {
  it("tests if search input is rendered", () => {
    const { getByPlaceholderText } = render(withRouter(<Layout />));
    const input = getByPlaceholderText("Buscar por gifs...");
    expect(input).toBeInTheDocument();
  });
  it("tests if saved list button is rendered", () => {
    const { getByText } = render(withRouter(<Layout />));
    const salvos = getByText("Salvos");
    expect(salvos).toBeInTheDocument();
  });
});
