import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import About from '@/pages/About'
import React from 'react'

const AboutPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <About/>
      <Footer />
    </main>
  )
}

export default AboutPage
