import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api, back } from "../services/api"

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}
type TransactionInput = Omit<Transaction, "id" | "createdAt">

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    back.get("/releases").then((response) => {
      console.log("reponse", response)

      setTransactions(response.data)
    })
  }, [])

  async function createTransaction(transaction: TransactionInput) {
    // const response = await api.post("/transactions", {
    //   ...transaction,
    //   createdAt: new Date()
    // })
    console.log("transaction", transaction)

    const res = await back
      .post("/releases", {
        ...transaction
      })
      .then((response) => {
        console.log("response", response)
      })

    // const data = response.data.transaction

    // setTransactions([...transactions, data])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>{children}</TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
