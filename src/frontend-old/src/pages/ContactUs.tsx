import Contact from '@/components/home/Contact'
import BreadcrumbHero from '@/components/shared/BreadcrumbHero'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import React from 'react'

const ContactUs = () => {
  return (
    <div className="mt-14">
        <Header />
        <BreadcrumbHero title='Contact' />
        <Contact />
        <Footer />
    </div>
  )
}

export default ContactUs