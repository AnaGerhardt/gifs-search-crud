import { cleanup, fireEvent, render } from "@testing-library/react";
import { Modal } from "../";

const setup = (props = {}, content = undefined) => {
  const onClose = jest.fn();
  const renderUtils = render(
    <Modal modalClosed={onClose} show={props.show || false} {...props}>
      {content}
    </Modal>
  );
  return {
    onClose,
    renderUtils,
  };
};

describe("<Modal />", () => {
  afterEach(cleanup);
  it("render modal into portal", () => {
    const { renderUtils } = setup();
    const modal = renderUtils.getByTestId("modal");
    expect(modal).toBeInTheDocument();
  });

  it("hidden modal", () => {
    const { renderUtils } = setup();
    const modal = renderUtils.getByTestId("modal");
    expect(modal).toHaveClass("modal_closed");
  });

  it("show modal", () => {
    const { renderUtils } = setup({ show: true });
    const modal = renderUtils.getByTestId("modal");
    expect(modal).toHaveClass("modal_opened");
  });

  it("close by clicking outside of modal", () => {
    const { renderUtils, onClose } = setup({
      show: true,
    });
    const modal = renderUtils.getByTestId("modal");
    fireEvent.click(modal);
    expect(onClose).toBeCalledTimes(1);
  });

  it("not close by clicking on content of modal", () => {
    const { renderUtils, onClose } = setup(
      { show: true },
      <span>test modal</span>
    );
    const content = renderUtils.getByText("test modal");
    fireEvent.click(content);
    expect(onClose).toBeCalledTimes(0);
  });
});
