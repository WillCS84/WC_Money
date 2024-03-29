import { useState } from "react"
import ReactModal from "react-modal"
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { GlobalStyle } from "./styles/global"
import { TransactionsProvider } from "./hooks/useTransactions"

ReactModal.setAppElement("#root")

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />

      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

      <GlobalStyle />
    </TransactionsProvider>
  )
}
