import React from 'react'
import Register from './pages/Register'
import Events from './pages/Events'
import Navbar from './components/Navbar'
import { Router, Routes, Route } from 'react-router-dom'
import EventDetail from './pages/EventDetail'
import CreateEventPage from './pages/CreateEventPage'
import BookTicketPage from './pages/BookTicketPage'
import Login from './pages/LOgin'

const App = () => {
  return (
    
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path='/create' element={<CreateEventPage />} />
        <Route path="/book/:id" element={<BookTicketPage />} />
        
      </Routes>
      </>
    
  )
}

export default App
