import { Box, styled } from "@mui/material";
import img from '../../assets/bgIMG.png'


const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'repeat',
  display: 'flex',
  gap: '20px',
  minHeight: '100vh',
  maxHeight: 'auto',
  padding: '4rem 1em',

  alignItems: 'center',
 

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'start',
    paddingTop: '5em',
    gap: '50px'
  },
 

  '.title-container': {
    flex: '0.65',
    [theme.breakpoints.down('sm')]: {

      width: '90%'
    }
  },

  '.headerTitle': {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
    backgroundColor: 'white',
    padding: '0.7em 2em',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '0 !important',
      width: '11em',
      padding: '0.6em 1em',
    },

  },
  '.headerTitle2': {
    marginTop: '2em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    width: '11em',
    padding: '0.7em 2em',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    '.MuiTypography-root': {

      textTransform: 'uppercase',
      display: 'flex',

      justifyContent: 'flex-end',
      color: '#9e9e9e',
      fontSize: '19px',
      [theme.breakpoints.down('sm')]:{
        fontSize : '1.5vmax'
      }

    },
    [theme.breakpoints.down('sm')]:{
     
    width:'8em',
       padding: '0.6em 1em',
       marginTop: '1em',
       
    },

  },

}))

const ImagesContainer = styled(Box)(({ theme }) => ({
  flex: 1,

  '.image-container': {

    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: '100%'

  },
  '.profile-circile': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    zIndex: '0',
    bottom: '0',
  },
  '.header-img': {
    maxWidth: '100%',
    objectFit: 'contain',
    zIndex: '1',

  }

}))

const Headerskill = styled(Box)(({ theme }) => ({

  flex: '0.55',
  [theme.breakpoints.down('md')]:{
    width : '100%'
  },
  '.header-skill': {
    display: 'flex',
    flexDirection: 'column',
    gap: '35px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
      justifyContent:'center',
    
    }

  },
  '.skill-Img1': {
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]:{
      height: '90px',
      width: '90px',
    }

  },
  '.skill-Img2': {
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]:{
      height: '140px',
      width: '140px',
    }
  },
  '.skill-Img3': {
    height: '70px',
    width: '70px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]:{
      height: '60px',
      width: '60px',
    }
  }


}))


export {
  HeaderContainer,
  ImagesContainer,
  Headerskill
}