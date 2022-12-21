import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AppContext } from "./components/AppContext"
import Home from "./pages/Home"

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)

    return(
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default MainRoutes
