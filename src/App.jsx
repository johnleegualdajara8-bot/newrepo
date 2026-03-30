import React from 'react'
import Action from '../pages/Action.jsx'
import Horror from '../pages/Horror.jsx'
import Romance from '../pages/Romance.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Chatbot from '../components/Chatbot.jsx'
import './App.css'

function App() {
  return (
    <div className="container">
      <Header />
      
      <main>
        <h2>Action Movies</h2>
        <Action />

        <h2>Horror Movies</h2>
        <Horror />

        <h2>Romance Movies</h2>
        <Romance />
      </main>

      <Footer />
      <Chatbot />
    </div>
  )
}

export default App