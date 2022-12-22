import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"
import { useNavigate } from "react-router-dom";

interface dados {
  titulo: string,
  tipo: string,
  categoria: string,
  valor: number,
}

interface IAppContext {
  email: string,
  setEmail: (email: string) => void
  items: dados[],
  setItems: (items: dados[]) => void
  senha: string,
  setSenha: (senha: string) => void
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
}
export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [items, setItems] = useState<dados[]>([])

  const storage = getAllLocalStorage()

  useEffect(() => {
    if (storage) {
      console.log(JSON.parse(storage))
      setItems(JSON.parse(storage))
    }
  }, [storage])

  return (
    <AppContext.Provider value={{ items, setItems, email, setEmail, senha, setSenha, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  )
}
