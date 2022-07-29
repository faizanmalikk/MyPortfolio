import { Box, styled } from "@mui/material";


const TestimonialContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    minWidth: '99vw',
    padding  :'2rem 0',
   


    '.testimonial-container': {
        display: 'flex',
        backgroundColor: 'white',
        width: '50%',
        minHeight: '320px',
        boxShadow: '0 0 30px rgba(0,0,0,0.1)',
        borderRadius: '15px',
        padding : '0 1em',
        marginTop:'2em',
        [theme.breakpoints.down('md')]:{
            flexDirection : 'column',
            width : '80%'
        },
        [theme.breakpoints.down('sm')]:{
            flexDirection : 'column',
            width : '90%',
            overflow:' hidden'
        },

    },
    '.img-container': {
        flex: '0.20',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]:{
            marginTop : '1.5em'
        }
    },
    '.reviews-container':{
        flex : '1',
        padding:'2.5em 1em',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-around',
        [theme.breakpoints.down('md')]:{
            padding:'1.5em 0.7em',
            textAlign : 'justify'
        }
    },
    '.testimonial-button':{
        backgroundColor : 'white',
        transition : 'all 0.4s ease-in-out',
        '&:hover':{
            backgroundColor : theme.palette.grey[300],
           
        }
    },
    '.brands-container':{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexWrap : 'wrap',
        gap : '2em',
        marginTop:'2.5em',
  
    },
    '.brand-img':{
        width : '100px',
        filter : 'grayscale(1)',
        transition : 'all 0.4s ease-in-out',
        '&:hover':{
            filter : 'grayscale(0)',

        }
    }


}))


export {
    TestimonialContainer
}