import Footer from "./components/footer"
import Home from "./components/home"
import Navbar from "./components/navbar"
import Porto from "./components/porto"
import Project from "./components/project"

function App() {

  return (
    <>
      <div className="scroll-smooth">
        <Navbar />
        <Home />
        <Project />
        <Porto />
        <Footer />
      </div>
    </>
  )
}

export default App
