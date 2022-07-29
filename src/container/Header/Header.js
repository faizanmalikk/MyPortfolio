import { Box, Typography } from '@mui/material'
import React from 'react'
import { HeaderContainer, Headerskill, ImagesContainer } from './style'
import { motion } from 'framer-motion'
import { Images } from '../../constants'
import Appwraper from '../../wrapper/Appwraper'

const Header = () => {
  return (
    <HeaderContainer  >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='title-container'
      >

        <Box display={'flex'} justifyContent={{md:'flex-end'}} >
          <Box className='headerTitle' >
            <Box fontSize={{xs:'4vmax',sm:'50px'}}>👋</Box>
            <Box>
              <Typography color='#bdbdbd' fontSize={{xs:'2vmax',sm:'20px'}}>Hello i am</Typography>
              <Typography fontWeight={'bold'} fontSize={{xs:'4vmax',sm:'50px'}} >Faizan</Typography>
            </Box>
          </Box>

        </Box>
        <Box display={'flex'} justifyContent={{xs:'flex-start',md:'flex-end'}}>


          <Box className='headerTitle2'>

            <Typography>Web Developer</Typography>
            <Typography>Freelancer</Typography>

          </Box>
        </Box>
      </motion.div>

      <ImagesContainer>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='image-container'
        >

          <Box component={'img'} src={Images.profile} className='header-img'></Box>
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={Images.circle}
            alt='Profile-circle'
            className='profile-circile'
          >

          </motion.img>
        </motion.div>
      </ImagesContainer>

      <Headerskill >
        <motion.div
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='header-skill'
        >

          <Box className='skill-Img1'>
            <Box component={'img'} height='60%' width='60%' src={Images.redux} alt='img'></Box>
          </Box>
          <Box  className='skill-Img2'>
            <Box component={'img'} height='60%' width='60%' src={Images.react} alt='img'></Box>
          </Box>
          <Box className='skill-Img3'>
            <Box component={'img'} height='60%' width='60%' src={Images.node} alt='img'></Box>
          </Box>


        </motion.div>
      </Headerskill>

    </HeaderContainer>

  )
}

export default Appwraper(Header , 'Home')