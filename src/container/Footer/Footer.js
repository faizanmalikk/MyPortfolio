import React, { useRef, useState } from 'react'
import Appwraper from '../../wrapper/Appwraper'
import { ContactForm, FooterContainer } from './style'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Images } from '../../constants'
import emailjs from '@emailjs/browser'

const Footer = () => {

  const [isSubmitted, setisSubmitted] = useState(false)
  const form = useRef();



  const sendEmail = (e) => {
    e.preventDefault();
    setisSubmitted(true)
    emailjs.sendForm('service_5uyyaop', 'template_r6icyat', form.current, 'v2p3v6oEibBzL1rIY')
    e.target.reset();
  };

  return (
    <FooterContainer>
      <Box>
        <Typography fontSize={{ xs: '30px', sm: '43px' }} fontWeight='bold' textAlign={'center'}>Take A Coffee <Typography component={'span'} fontSize={{ xs: '30px', sm: '43px' }} color='#1976d2' fontWeight={'bold'}>& Chat With Me</Typography></Typography>
      </Box>

      <Box className='poster'>
        <Box className='poster-container'>
          <Box component={'img'} src={Images.email} width='40px' height='40px'></Box>
          <Typography component={'a'} href={'mailto:faizanjamil656@gmail.com'}>faizanjamil656@gmail.com</Typography>
        </Box>
        <Box className='poster-container2'>
          <Box component={'img'} src={Images.mobile} width='40px' height='40px'></Box>
          <Typography component={'a'} href={'tel:+92 (310) 747-3379'}>+92 (310) 747-3379</Typography>
        </Box>
      </Box>
      {isSubmitted === false ? (
        <ContactForm ref={form} onSubmit={ (e) => sendEmail(e)}>
          <TextField
            variant="standard"
            placeholder='Name'
            name='name'
            type={'text'}
            required
            InputProps={{
              disableUnderline: true,
            }}

       
          />
          <TextField
            variant="standard"
            placeholder='Email'
            name='email'
            type={'email'}
            required
            InputProps={{
              disableUnderline: true,
            }}
         

          />
          <TextField
            variant="standard"
            placeholder="Your Message"
            multiline={true}
            minRows={'4'}
            name='message'
            type={'text'}
            required
            InputProps={{
              disableUnderline: true,
            }}
         

          />
   
      
        

          <Button type='submit' variant='contained' color='primary'>Send Message</Button>
        </ContactForm>
      ) : (
        <Typography marginTop={'3rem'} color='#757575'>Thank you for getting in touch!</Typography>
      )}


    </FooterContainer>

  )
}


export default Appwraper(
  Footer,
  'Contact',
)