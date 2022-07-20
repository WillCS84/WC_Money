import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./style";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Receitas</p>
          <img src={incomeImg} alt="Receitas Financeiras" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Despesas</p>
          <img src={outcomeImg} alt="Despesas Financeiras" />
        </header>
        <strong>R$ -500,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="soma total de receita x despesa" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}
