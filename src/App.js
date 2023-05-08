import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import BackgroundCircles from "./components/BackgroundCircles"

import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Project from './pages/Project'
import Contact from "./pages/Contact"
import Navigation from './pages/Navigation'

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:type" element={<Portfolio />} />
        <Route path=":type/project/:id" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/navigation" element={<Navigation />} />
      </Routes>
      <BackgroundCircles />
    </div>
  )
}

export default App;
