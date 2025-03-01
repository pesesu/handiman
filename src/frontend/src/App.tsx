import {Routes, Route } from 'react-router-dom'
import SingleService from './pages/service/SingleService'
import Home from './pages/Home'
import TestPage from './pages/TestPage'
import Services from './pages/service/Services'
import ContactUs from './pages/ContactUs'
import FaqPage from './pages/FaqPage'
import SingleListing from './pages/listing/SingleListing'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Service Specific */}
        <Route path='/service/:id' element={<SingleService />} />
        <Route path='/services' element={<Services />} />

        {/* Listing Specific */}
        <Route path='/listing/:id' element={<SingleListing />} />
        {/* <Route path='/listings' element={<Listings />} /> */}

        {/* Admin Specific */}

        {/* General Pages */}
        <Route path='contact' element={<ContactUs />} />
        <Route path='faq' element={<FaqPage />} />
        <Route path='test' element={<TestPage />} />

      </Routes>
    </>
  )
}

export default App
