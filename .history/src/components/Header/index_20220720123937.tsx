import { useState } from "react";
import Modal from "react-modal";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}