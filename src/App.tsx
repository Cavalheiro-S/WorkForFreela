import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./contexts/AuthContext"
import { AppRoutes } from "./routes"

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <AppRoutes />
      </AuthProvider>
    </>
  )
}

export default App
