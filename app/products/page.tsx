import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Products from '@/pages/Products'
import React from 'react'

const Productspage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Products/>
      <Footer />
    </main>
  )
}

export default Productspage
