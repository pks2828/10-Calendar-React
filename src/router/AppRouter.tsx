import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar"

/**
 * Componente que define el enrutador de la aplicación.
 * 
 * @returns El componente del enrutador de la aplicación.
 */
export const AppRouter = () => {

    const authStatus = 'autenticado'
  
    return (
    <Routes>
        {
            (authStatus === 'no-autenticado')
            // Si el usuario no está autenticado, muestra la página de inicio de sesión
            ? <Route path="/auth/*" element={<LoginPage/>} />
            // Si el usuario está autenticado, muestra la página del calendario
            : <Route path="/*" element={<CalendarPage/>} />
        }
        <Route path="/*" element={<Navigate to="/auth/login"/>} />
    </Routes>
  )
}
