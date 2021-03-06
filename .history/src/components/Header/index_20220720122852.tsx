import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenTransactionModal() {}

  function handleCloseNewTransactionModal() {}

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
