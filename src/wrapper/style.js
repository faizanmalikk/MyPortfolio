import { Box, styled } from "@mui/material";




const CopyRight = styled(Box)(({ theme }) => ({
 position : 'absolute',
 bottom : '10px',
 right : '20px',
  padding: '2rem 0 0',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  flexDirection : 'column',

'.MuiTypography-root':{
  textTransform : 'uppercase',
  textAlign : 'left',
  lingHeight : '1.5',
  fontSize : '0.8rem',


},

[theme.breakpoints.down('md')]:{
 display:'none'
}
}))

export {

  CopyRight
}