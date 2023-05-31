import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./contexts/AuthContext"
import { AppRoutes } from "./routes"
import { FormProvider } from "./contexts/FormContext"

function App() {
  return (
    <>
      <AuthProvider>
        <FormProvider>
          <ToastContainer style={{ top: "6.2rem" }} />
          <AppRoutes />
        </FormProvider>
      </AuthProvider >
    </>
  )
}

export default App
