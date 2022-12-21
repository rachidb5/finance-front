import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"
import { useNavigate } from "react-router-dom";

interface IAppContext {
  email: string,
  setEmail: (email: string) => void
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

  const storage = getAllLocalStorage()

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage)
      setIsLoggedIn(login)
        if (login) {
          navigate('/conta/1')
        }
    }
  }, [storage, navigate])

  return (
    <AppContext.Provider value={{ email, setEmail, senha, setSenha, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  )
}
