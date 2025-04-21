// src/App.jsx

import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header'
import MenuEditor from './pages/MenuEditor'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/admin" element={<MenuEditor />} />
        <Route path="*" element={<Navigate to="/admin" />} />
      </Routes>
    </>
  )
}