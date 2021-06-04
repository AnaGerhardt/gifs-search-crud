import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

let modalsRoot = document.getElementById("modal-root");
if (!modalsRoot) {
  modalsRoot = document.createElement("div");
  modalsRoot.setAttribute("id", "modal-root");
  modalsRoot.setAttribute("data-testid", "modal-root");
  document.body.appendChild(modalsRoot);
}

export const Modal = ({ show, children, modalClosed }) => {
  const root = modalsRoot || document.createElement("div");
  const modal = useRef(null);
  const handleClick = useCallback(
    function (e) {
      if (e.target === modal.current) {
        modalClosed(e);
      }
    },
    [modalClosed]
  );

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const Modal = (
    <div
      ref={modal}
      data-testid="modal"
      className={`modal ${show ? "modal_opened" : "modal_closed"}`}
    >
      {children}
    </div>
  );

  return createPortal(Modal, root);
};
