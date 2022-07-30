import { Box, styled } from "@mui/material";


const WorkContainer = styled(Box)(({ theme }) => ({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '99vw',
    padding: '4rem 5em',
    [theme.breakpoints.down('md')]: {
        padding: '4rem 0.5em',
    },
  

}))
const StyledWork = styled(Box)(({ theme }) => ({

    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '1em',


    '.work-feilds': {
        backgroundColor: 'white',
        padding: '14px 14px',
        color: 'black',
        borderRadius: '10px',
        transition: 'all 0.3s ease-in-out',
        fontSize: '18px',
        '&:hover': {
            backgroundColor: '#1976d2',
            color: 'white',
            cursor: 'pointer'
        }

    },

    '.item-active': {
        backgroundColor: '#1976d2',
        color: 'white',
    }


}))

const StyledCard = styled(Box)(({ theme }) => ({

    '.card-container': {
        marginTop: '2em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2em',

    },
    '.card': {
        width: '11rem',
        minHeight: '16.5rem',
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            boxShadow: '0 0 25px rgba(0,0,0,0.2)'
        },
        [theme.breakpoints.down('sm')]: {
            width: '85%',
            paddingBottom: '0',
       
        }

    },
    '.active': {
        display: 'flex',
        
    
    },
    '.unactive': {
        display: 'none',
    

    },
    '.work-img-container': {
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        width: '100%',
        height: '220px',
        borderRadius: '10px',
     
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 40px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        transition: 'all 0.3s ease-in-out',


        opacity: '0'
    },
    '.hover-container': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer'
    },

    '.card-title': {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
        paddingTop: '10px',
    },


    '.card-description': {
        textAlign: 'center',
        fontSize: '18px',
        paddingTop: '7px',
        color: theme.palette.grey[600],
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '13px'
        }

    },
    '.card-tag': {
        position: 'absolute',
        top: '-41px',

        margin: '0 auto',
        width: '100%',

        display: 'flex',
        justifyContent: 'center',

        '.MuiTypography-root': {
            borderRadius: '10px',
            fontSize: '15px',
            backgroundColor: 'white',
            objectFit: 'cover',
            padding: '10px',
            color: theme.palette.grey[700]

        }


    }



}))



export {
    WorkContainer,
    StyledWork,
    StyledCard

}