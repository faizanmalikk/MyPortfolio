import { Box, styled } from "@mui/material";


const StyledBox = styled(Box)(({ theme }) => ({
   position : 'absolute',
   bottom : '0',
   left:'0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap:'15px',
    flexDirection: 'column',
    padding: '1rem',
    zIndex:'1',

   '.social-icons':{
    textDecoration : 'none',
    backgroundColor:'transparent',
  fontSize : '25px',
  transition : 'all 0.4s ease',
    '&:hover' : {
   cursor : 'pointer',
   color : 'black'
    }
   },

   [theme.breakpoints.down('md')]:{
    display : 'none'
   }
  
  }))

  export {
    StyledBox
  }