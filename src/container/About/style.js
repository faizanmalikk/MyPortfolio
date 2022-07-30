import { Box, styled } from "@mui/material";



const AboutContainer = styled(Box)(({ theme }) => ({
  display:'flex',
  justifyContent:'center',
  gap:'40px',
  margin : '0 5em',
  marginTop:'2em',
  flexWrap : 'wrap',
  [theme.breakpoints.down('md')]:{
    margin:'0 0.5em',
    margintTop : '2em !important',
    gap:'30px',
  }

  
 
  }))

const AboutDiv = styled(Box)(({ theme }) => ({
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  minHeight:'100vh',
  flexDirection:'column',
  backgroundColor : 'white',
  width:'100%',
  margin:'0 auto',
  padding : '4rem 0',

'.white-bg' : {
  backgroundColor : 'white'
}
 
  
 
  }))

  export{
    AboutContainer,
    AboutDiv
  }