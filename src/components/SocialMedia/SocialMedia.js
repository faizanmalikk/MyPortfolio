import { Facebook, GitHub, Instagram } from '@mui/icons-material'
import { Box,IconButton } from '@mui/material'
import React from 'react'
import { StyledBox } from './style'


const SocialMedia = () => {
  return (
    <StyledBox>

      <IconButton component='a' href='https://m.me/faizan.malyk66' target='_blank' className = 'social-icons'>
        <Facebook   />
      </IconButton>
      <IconButton component='a' href='https://www.instagram.com/faizanmalyk01' target='_blank'  className = 'social-icons'>
        <Instagram />
      </IconButton>
      <IconButton component='a' href='https://github.com/faizanmalikk' target='_blank'  className = 'social-icons'>
        <GitHub />
      </IconButton>

    </StyledBox>
  )
}

export default SocialMedia