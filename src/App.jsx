import { Toaster } from "react-hot-toast"
import Navbar from "./components/section/navbar"
import Home from "./pages/home"

function App() {

  return (
    <>
      <Navbar />
      <Toaster/>
      <Home/>
    </>
  )
}

export default App
