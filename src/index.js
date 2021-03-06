import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './components/pages/home/Home'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/lightupcity">
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
