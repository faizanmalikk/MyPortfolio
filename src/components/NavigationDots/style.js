import { Box, styled } from "@mui/material";


const StyledBox = styled(Box)(({ theme }) => ({
 position:'absolute',
 right:'0',
 top: '35%',
 display : 'flex',
 alignItems : 'center',
 justifyContent : 'center',
 flexDirection : 'column',
 padding : '1rem',

 '.navigation-dot':{
    
    width : '10px',
    height : '10px',
    borderRadius  : '50%',
    backgroundColor : '#cbcbcb',
    margin : '0.5rem',
    transition : 'all 0.2s ease-in-out',
    '&:hover':{
        backgroundColor : '#313bac'
    },


 },
 [theme.breakpoints.down('md')]:{
    display:'none'
 }
  
  }))

  export {
    StyledBox
  }