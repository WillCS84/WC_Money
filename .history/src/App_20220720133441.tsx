import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("root");

export function App() {
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />

      <Dashboard />

      <GlobalStyle />
    </>
  );
}
