import { render } from "@testing-library/react";
import { Main } from "../";

import { withStore } from "../../testUtils";

describe("<Main />", () => {
  it("tests if images are rendered", () => {
    const { getAllByRole } = render(withStore(<Main />));
    const imgList = getAllByRole("img");
    expect(imgList).toHaveLength(3);
  });
  it("tests if details text is rendered", () => {
    const { getAllByText } = render(withStore(<Main />));
    const detalhes = getAllByText(/ver detalhes/i);
    expect(detalhes).toHaveLength(3);
  });
});
