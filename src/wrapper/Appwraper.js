import { Box, Typography } from '@mui/material'
import React from 'react'
import { SocialMedia, NavigationDots } from '../components/index'
import { CopyRight } from './style'

const Appwraper = (Component, idName, className) => function Hoc() {
    return (
        <Box className={className}
            width='100%'
            minHeight={'100vh'}
            position='relative'
            id={idName}
     
        >

            <SocialMedia />

            <Box>
                <Component />
                 <CopyRight>
                    <Typography >&copy; 2022 Faizan</Typography>
                    <Typography >All rights reserved</Typography>
                </CopyRight>
            </Box> 

            <NavigationDots active={idName} />
        </Box>
    )
}

export default Appwraper