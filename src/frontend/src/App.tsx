import {Routes, Route } from 'react-router-dom'
import SingleService from './pages/service/SingleService'
import Home from './pages/Home'
import TestPage from './pages/TestPage'
import Services from './pages/service/Services'
import ContactUs from './pages/ContactUs'
import FaqPage from './pages/FaqPage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service/:id' element={<SingleService />} />
        <Route path='/services' element={<Services />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='faq' element={<FaqPage />} />
        <Route path='test' element={<TestPage />} />
      </Routes>
    </>
  )
}

export default App
