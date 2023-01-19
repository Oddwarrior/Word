import AppRouter from "./layout/AppRouter"
import { AuthProvider } from "./common/AuthContext"

function App() {
  return (
    <div >
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  )
}

export default App
