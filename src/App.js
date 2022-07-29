import React, { useEffect } from 'react'
import { Box, CssBaseline } from '@mui/material'
import { Navbar } from './components'
import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import WebFont from 'webfontloader'

const App = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['DM Sans','Macondo','Roboto']
      }
    })

    window.scrollTo(0 ,0)
  }, [])

 

  return (
    <>
    <CssBaseline/>
    <Box backgroundColor='#edf2f8'>
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Skills/>
    <Testimonial/>
    <Footer/>
    </Box>

     </>
  )
}

export default App