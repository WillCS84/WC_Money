import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions"
import { Container } from "./style"

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount
        acc.totals += transaction.amount
      } else {
        acc.withdrwaws -= transaction.amount
        acc.totals -= transaction.amount
      }

      return acc
    },
    {
      deposits: 0,
      withdrwaws: 0,
      totals: 0
    }
  )

  return (
    <Container>
      <div>
        <header>
          <p>Receitas</p>
          <img src={incomeImg} alt="Receitas Financeiras" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Despesas</p>
          <img src={outcomeImg} alt="Despesas Financeiras" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(summary.withdrwaws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="soma total de receita x despesa" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(summary.totals)}
        </strong>
      </div>
    </Container>
  )
}
