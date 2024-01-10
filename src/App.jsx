import { useState } from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import MainView from "./Components/MainView";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <MainView />
      <About />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default App
