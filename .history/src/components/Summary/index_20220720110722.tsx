import incomeImg from "../../assets/income.svg";
import { Container } from "./style";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src="incomeImg" alt="Receita Financeira" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src="incomeImg" alt="Receita Financeira" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src="incomeImg" alt="Receita Financeira" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
    </Container>
  );
}
