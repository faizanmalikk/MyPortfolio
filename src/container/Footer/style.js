import { Box, styled } from "@mui/material";


const FooterContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    minWidth: '99vw',
    backgroundColor: 'white',
    padding :' 2rem 10px',

    '.poster': {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '2em',
        justifyContent: 'center',
        marginTop: '2.5em',
        [theme.breakpoints.down('sm')]: {
            gap: '1.5rem'
        }
    },
    '.poster-container': {
        display: 'flex',
        gap: '1rem',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: '1rem 2rem',
        width: '17em',
        borderRadius: '10px',
        backgroundColor: ' #fef4f5',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            gap: '0.6em',
            paddingRight: '0',
            paddingLeft: '0.5rem'
        },

        '&:hover': {
            boxShadow: '0 0 25px #fef4f5',

        },

        '.MuiTypography-root': {
            textDecoration: 'none',
            color: theme.palette.grey[600],
            transition: 'all 0.4s ease-in-out',
            fontSize: '20px',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            '&:hover': {
                cursor: 'poniter',
                color: theme.palette.grey[800]
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '17px',

            }
        }

    },
    '.poster-container2': {
        display: 'flex',
        gap: '0.6rem',
        backgroundColor: 'white',
        width: '17em',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderRadius: '10px',
        backgroundColor: ' #f2f7fb',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            gap: '0.4em',
            paddingRight: '0',
            paddingLeft: '0.5rem'
        },

        '&:hover': {
            boxShadow: '0 0 25px #f2f7fb',

        },

        '.MuiTypography-root': {
            textDecoration: 'none',
            color: theme.palette.grey[600],
            transition: 'all 0.4s ease-in-out',
            fontSize: '20px',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            '&:hover': {
                cursor: 'poniter',
                color: theme.palette.grey[800]
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '17px',

            }
        }

    }

}))

const ContactForm = styled('form')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    alignItems: 'center',
    marginTop: '3rem',
    '.MuiTextField-root': {
        width: '40%',
        backgroundColor: '#f2f7fb',
        padding: '10px 25px',
        transition: 'all 0.4s ease-in-out',
        fontFamily: 'Roboto',
        borderRadius: '10px',
        fontSize: '26px',

        '&:hover': {
            boxShadow: '0 0 25px #f2f7fb'
        },

        [theme.breakpoints.down('md')]: {
            width: '70%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%'
        }


    },


    '.MuiButton-root': {
        fontSize: '15px',
        padding: '15px',
        fontWeight: '550',
        borderRadius: '10px'
    }


}))



export {
    FooterContainer,
    ContactForm,
    
}
