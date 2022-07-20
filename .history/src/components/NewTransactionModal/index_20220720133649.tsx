import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("root");

export function NewTransactionModal() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    >
      <h2>Cadastrar transação</h2>
    </Modal>
  );
}
