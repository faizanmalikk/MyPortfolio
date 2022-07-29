import React, { useEffect, useState } from 'react'
import Appwraper from '../../wrapper/Appwraper'
import { client, urlFor } from '../../client'
import { motion } from 'framer-motion'
import { TestimonialContainer } from './style'
import { Avatar, Box, IconButton, Typography } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

const Testimonial = () => {

  const [testimonials, settestimonials] = useState([])
  const [brands, setbrands] = useState([])
  const [currentIndex, setcurrentIndex] = useState(0)

  const handleClick = (index)=>{
    setcurrentIndex(index)
  }

  useEffect(() => {


    const query = '*[_type == "testimonials"]'
    const brandsQuery = '*[_type == "brands"]'

    client.fetch(query).then((data) => {
      settestimonials(data.slice().reverse())


    })
    client.fetch(brandsQuery).then((data) => {
      setbrands(data)

    })

  }, [])

  const test = testimonials[currentIndex]

  return (
    <TestimonialContainer>
     <Box>
     <Typography fontSize={{ xs: '30px', sm: '43px' }} fontWeight='bold' textAlign={'center'}>Testi<Typography component={'span'} fontSize={{ xs: '30px', sm: '43px' }} color='#1976d2' fontWeight={'bold'}>monials</Typography></Typography>
     </Box>
      {testimonials.length && (
        <>
        <Box className='testimonial-container'>
          <Box className='img-container' >
            <Avatar src={`${urlFor(test.imgurl)}`} sx={{ height: '100px', width: '100px', borderRadius: '50%', objectFit: 'cover' }} ></Avatar>
          </Box>
          <Box className='reviews-container'>
            <Box>
              <Typography fontFamily='DM-Sans' fontSize={'22px'} color='#757575'>{test.feedback}</Typography>
            </Box>
            <Box paddingTop ={{xs:'1em',md:'5px'}}>
              <Typography fontWeight={'bold'} fontSize='20px'>{test.name}</Typography>
              <Typography fontSize='18px' color='#757575'>{test.company}</Typography>
            </Box>
          </Box>
        </Box>
        <Box marginTop={'25px'} display='flex' gap='25px'>
         <IconButton disabled={ currentIndex === 0 && true} className='testimonial-button' onClick={() => handleClick( currentIndex - 1)}>
          <ChevronLeft/>
         </IconButton >
         <IconButton  disabled={ currentIndex ===  testimonials.length -1 && true} className='testimonial-button' onClick={() => handleClick(  currentIndex + 1)}>
          <ChevronRight/>
         </IconButton>
        </Box>
        </>
      )}
      <Box className='brands-container'>
      
        {brands.map((item,i)=>(
          <motion.div
          whileInView={{opacity : [0 , 1]}}
          transition = {{duration : 0.5 , type : 'tween'}}
          key = {i}
         
          >
       <Box component={'img'} className='brand-img' src={urlFor(item.imgurl)} alt={item.name}></Box>
          </motion.div>
        ))}
      </Box>
    </TestimonialContainer>
  )
}

export default Appwraper(
Testimonial,
  'Testimonial',
)