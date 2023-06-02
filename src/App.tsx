import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./contexts/AuthContext"
import { AppRoutes } from "./routes"

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer style={{ top: "6.2rem" }} />
        <AppRoutes />
      </AuthProvider >
    </>
  )
}

export default App
