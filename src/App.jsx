import CreateForm from "./components/section/createForm"
import EditForm from "./components/section/editForm"
import { Toaster } from "react-hot-toast"
import Navbar from "./components/section/navbar"
import Home from "./pages/home"
import Forms from "./components/section/forms"

function App() {

  return (
    <>
      <Toaster/>
      <Navbar />
      <Forms/>
      <Toaster/>
      <Home/>
    </>
  )
}

export default App
