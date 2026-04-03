import { Toaster } from "react-hot-toast"
import Navbar from "./components/section/navbar"
import Home from "./pages/home"
import Search from "./pages/search"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Toaster/>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/search" element={ <Search />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
