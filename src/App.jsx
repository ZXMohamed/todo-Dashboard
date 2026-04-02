import CreateForm from "./components/section/createForm"
import EditForm from "./components/section/editForm"
import Navbar from "./components/section/navbar"
import Home from "./pages/home"

function App() {

  return (
    <>
      <Navbar />
      <CreateForm />
      <EditForm/>
      <Home />
    </>
  )
}

export default App
