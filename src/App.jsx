import CreateForm from "./components/section/createForm"
import EditForm from "./components/section/editForm"
import { Toaster } from "react-hot-toast"
import Navbar from "./components/section/navbar"
import Home from "./pages/home"

function App() {

  return (
    <>
      <Toaster/>
      <Navbar />
      <CreateForm />
      <EditForm/>
      <Home/>
    </>
  )
}

export default App
