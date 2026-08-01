import { Modal } from "./Modal";
import { useState } from "react";

export function PortalsContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <article>
      <h1>Portals</h1>

      <p>
        Portals are useful when you want to display content outside of the main
        DOM hierarchy.
      </p>

      <p>
        In the example below, the Modal component uses ReactDOM.createPortal to
        render its content in a different part of the DOM.
      </p>

      <p>Click the button below to open the modal.</p>

      <Modal.Dialog isOpen={isModalOpen}>
        <Modal.Container>
          <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
          <p>This is the modal content.</p>
        </Modal.Container>
      </Modal.Dialog>

      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
    </article>
  );
}

PortalsContent.displayName = "PortalsContent";
