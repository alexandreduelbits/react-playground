import { createPortal } from "react-dom";
import styles from "./index.module.css";

export interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

function ModalDialog({ isOpen, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.modal}>{children}</div>,
    document.body,
  );
}

ModalDialog.displayName = "ModalDialog";

function ModalContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles.modalContainer}>{children}</div>;
}

ModalContainer.displayName = "ModalContainer";

const Modal = Object.assign(
  {},
  {
    Dialog: ModalDialog,
    Container: ModalContainer,
  },
);

export { Modal };
