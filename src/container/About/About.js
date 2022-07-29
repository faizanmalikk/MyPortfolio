import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AboutContainer, AboutDiv } from './style'
import { motion } from 'framer-motion'
import { client, urlFor } from '../../client'
import Appwraper from '../../wrapper/Appwraper'
import MotionWraper from '../../wrapper/MotionWraper'
const About = () => {

  const [abouts, setabouts] = useState('')

  useEffect(() => {
   
   const query = '*[_type == "abouts"]'

    client.fetch(query).then((data)=> setabouts(data) )

  }, [])



  return (
    <AboutDiv  >

      <Box textAlign={'center'} marginBottom={{xs:'2rem',md:'0'}}>
        <Typography fontSize={{xs:'30px',sm:'43px'}}fontWeight='bold'>I Know That <Typography component={'span'} fontSize={{xs:'30px',sm:'43px'}} color='#1976d2' fontWeight={'bold'}>Good Dev </Typography> <br/> Means <Typography component={'span'} fontSize={{xs:'30px',sm:'43px'}} color='#1976d2' fontWeight={'bold'}>Good Business</Typography></Typography>
      </Box>

      <AboutContainer>
        {abouts && abouts.slice().reverse().map((value,index)=>(
          <motion.div
          whileInView={{opacity : 1}}
          whileHover = {{scale : 1.1 }}
          transition = {{duration : 0.5 , type: 'tween'}}
          key={index}
         className='about-cards'
          >
            <Box width={{xs:'90%',sm:'13em'}} margin='0 auto'>
            <Box component={'img'} src={urlFor(value.imgUrl)} sx={{width:'100%',objectFit:'cover',borderRadius:'15px',height:'200px'}}></Box>
            <Typography fontWeight={'bold'}marginTop='10px' fontSize='23px'>{value.title}</Typography>
            <Typography color='#9e9e9e' fontSize='19px' textAlign={'justify'}>{value.description}</Typography>
            </Box>
          </motion.div>
        ))}
      </AboutContainer>
 
    </AboutDiv>
  )
}


export default Appwraper(
  MotionWraper(About), 
  'About',
  )