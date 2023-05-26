import { ToastContainer } from "react-toastify"
import { AppRoutes } from "./routes"
import { AuthProvider } from "./contexts/AuthContext"

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
