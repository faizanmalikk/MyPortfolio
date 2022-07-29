import { AppBar, Box, styled, Typography } from "@mui/material";
import Images from '../../assets/bgWhite.png'

const MyAppBar = styled(AppBar)(({ theme }) => ({
    position : 'fixed',
    backgroundColor : 'rgba(225,225,225,0.25)',
    backdropFilter : 'blur(4px)',
    webkitBackdropFilter: 'blur(4px)',
    boxShadow : 'none',
    
    '.myMenu':{
      backgroundColor: 'white', 
      position: 'fixed', 
      top: '0', 
      right: '0',
      Bottom:'0',
      height:'100vh',
      width : '60%',
      zIndex : '5',
      backgroundImage : `url(${Images})`,
      backgroundSize : 'cover',
      backgroundRepeat : 'repeat',
      [theme.breakpoints.down('sm')]:{
      width : '72.5%'
      }
    },

    '.unactiveLink':{
      color : '#6b7688'
    },
    '.activeLink' : {
      color : 'black'
    }

    
  }))

const Logo = styled(Typography)(({ theme }) => ({
  
  fontFamily: 'Macondo',
  fontWeight: 800,
  letterSpacing: '.1rem',
  color: 'black',
  textDecoration: 'none',
  paddingLeft:'50px',
  cursor : 'pointer',
  [theme.breakpoints.down('md')]:{
    paddingLeft:'17px',
  }
  
}))

  export {
      Logo,
      MyAppBar,
      
  
  }