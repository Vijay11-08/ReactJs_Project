import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <nav className="navbar">
      <div className="logo">MyWebsite</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <h1>Hello, Vijay!</h1>
  </StrictMode>,
)
