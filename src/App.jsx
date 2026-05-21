import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import ResourceHubPage from './pages/ResourceHubPage'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="resources" element={<ResourceHubPage />} />
          {/* Fallback route for all other replicated pages */}
          <Route path="*" element={
            <div style={{padding: '200px 40px', textAlign: 'center', minHeight: '80vh'}}>
              <h2 style={{color: 'var(--primary-blue)'}}>Page Content Coming Soon</h2>
              <p style={{color: 'var(--text-light)'}}>This template handles dynamically generated inner pages.</p>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
