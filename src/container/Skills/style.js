import { Box, styled } from "@mui/material";

const MyContainer = styled(Box)(({ theme }) => ({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '99vw',
    padding: '4rem 5em',
    backgroundColor : 'white',
    [theme.breakpoints.down('md')]: {
        padding: '4rem 0',
    },
    '.myContainer': {

        display: 'flex',
        paddingTop: '2em',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        }
    }


}))

const SkillsContainer = styled(Box)(({ theme }) => ({

    display: 'flex',
    gap: '2em',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
        gap: '1em'
    },
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
    },
    '.skills-container': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    '.skills': {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: theme.palette.grey[100],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            height: '80px',
            width: '80px'
        }
    }

}))

const ExperienceContainer = styled(Box)(({ theme }) => ({

    flex: '1',
    [theme.breakpoints.down('md')]: {
        paddingTop: '3rem'
    },
    '.experience-container': {
        display: 'flex',
        gap: '2em',
        marginLeft: '20%',
        [theme.breakpoints.down('md')]: {
            marginLeft: '0',
           

        }

    },
    '.MuiTooltip-tooltip': {
        backgroundColor: 'blue'
    },
    '.MuiTooltip-popper': {
        color: 'blue !important'

    }

}))

export {
    MyContainer,
    SkillsContainer,
    ExperienceContainer
}