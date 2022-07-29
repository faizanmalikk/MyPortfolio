import React, { useState } from 'react';
import { AssuredWorkload, Close, ContactPage, Home, Info,  Work } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Logo, MyAppBar } from './style'
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Backdrop, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery } from '@mui/material';


const Navbar = () => {

  const smallerthen1050 = useMediaQuery('(max-width:1050px)')
  const [open, setopen] = useState(false)

  const [pagesActive, setpagesActive] = useState({
    avtiveObject: null,
    pages: [
      'Home', 'About', 'Work', 'Skills', 'Contact'
    ]
  })

  const [mobilemenu, setmobilemenu] = useState({
    avtiveObject: null,
    pages: [
      { title: 'Home', icon: <Home /> },
      { title: 'About', icon: <Info /> },
      { title: 'Work', icon: <Work /> },
      { title: 'Skills', icon: <AssuredWorkload /> },
      { title: 'Contact', icon: <ContactPage /> },
    ]
  }
  )


  const handleOpenNavMenu = (e) => {

    setopen(!open)
  };


  return (
    <>

      <Backdrop open={open} onClick={() => setopen(false)} sx={{ zIndex: '9' }} />
      <MyAppBar  >

        <Toolbar disableGutters >
          <Logo
            variant="h6"
            noWrap
          onClick={()=> window.scrollTo(0, 0)}
         
            sx={{

              display: 'flex',
              position: 'absolute',
              top: '10px',
              left: '0'

            }}
          >
            folio
          </Logo>

          <Box

            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}

              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>

          </Box>

          <Box  >
            {open && (
              <motion.div

                animate={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
                className='myMenu'
              >
                <Box display='flex' justifyContent='flex-end' marginTop='30px' marginRight={'20px'} marginBottom='15px' >
                  <IconButton onClick={() => setopen(false)}>
                    <Close sx={{ color: 'black' }} />
                  </IconButton>
                </Box>

                <List
                  sx={{ display: 'flex', flexDirection: 'column', gap: '35px' }}
                >
                  {mobilemenu.pages.map((value, i) => (
                    <ListItem disablePadding key={i}>
                      <Button disableRipple component={'a'} href={`#${value.title}`} onClick={()=> setopen(false)}
                      sx={{ textDecoration: 'none', width: '100%' }} 
                      >
                        <ListItemButton disableRipple>
                          <ListItemIcon className='unactiveLink'>
                            {value.icon}
                          </ListItemIcon>
                          <ListItemText primary={value.title} className='unactiveLink' />
                        </ListItemButton>
                      </Button>
                    </ListItem>
                  ))}

                </List>
              </motion.div>
            )}

          </Box>


          <Box sx={{ display: { xs: 'none', md: 'flex' } }} justifyContent='center' width='100%'  >
            <Stack direction={'row'} spacing={smallerthen1050 ? 2 : 7} >

              {pagesActive.pages.map((item, i) => {

                return <Typography component={Button} key={i}
                  className='unactiveLink'
                  href={`#${item}`}
            
                  textTransform='uppercase'
                  sx={{ textDecoration: 'none' }}

                >
                  {item}
                </Typography>
              })}

            </Stack>
          </Box>


        </Toolbar>

      </MyAppBar>


    </>
  );
};
export default Navbar;
