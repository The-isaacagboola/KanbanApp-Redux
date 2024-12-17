import { ReactNode } from "react";
import ReactDom from "react-dom";

type Props = {
  children: ReactNode;
};

function Modal({ children }: Props) {
  const portalDiv = document.getElementById("portal");

  if (!portalDiv) return;
  return ReactDom.createPortal(<div>{children}</div>, portalDiv);
}

export default Modal;
