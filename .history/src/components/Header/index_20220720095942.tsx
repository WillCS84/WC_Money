import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";

export function Header() {
  return (
    <Container>
      <Content>
        <button type="button">Nova transação</button>

        <img src={logoImg} alt="dt money" />
      </Content>
    </Container>
  );
}
