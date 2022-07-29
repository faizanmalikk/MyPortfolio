import React, { useEffect, useState } from 'react'
import { Box, Container, Tooltip, Typography } from '@mui/material'
import Appwraper from '../../wrapper/Appwraper'
import { ExperienceContainer, MyContainer, SkillsContainer } from './style'
import { client, urlFor } from '../../client'
import { motion } from 'framer-motion'

const Skills = () => {

  const [skills, setskills] = useState([])
  const [experices, setexperices] = useState([])

  useEffect(() => {


    const query = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(query).then((data) => {
      setexperices(data)


    })
    client.fetch(skillsQuery).then((data) => {
      setskills(data)

    })

  }, [])

  return (
    <MyContainer >
      <Box>
        <Typography fontSize={{ xs: '30px', sm: '43px' }} fontWeight='bold' textAlign={'center'}>Skills <Typography component={'span'} fontSize={{ xs: '30px', sm: '43px' }} color='#1976d2' fontWeight={'bold'}>& Experience</Typography></Typography>
      </Box>

      <Container maxWidth='xl' className='myContainer'>
        <Box flex={{ md: '0.75' }}>
          <SkillsContainer>
            {skills.map((item, i) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                key={i}
                className='skills-container'
              >
                <Box className='skills'>
                  <Box component={'img'} src={urlFor(item.icon)} alt={item.name} height='50%' width='50%'></Box>
                </Box>
                <Typography fontSize={{ xs: '15px', sm: '17px' }} color='#757575' marginTop='10px'>{item.name}</Typography>
              </motion.div>
            ))}
          </SkillsContainer>
        </Box>
        <ExperienceContainer>
         
          {experices.map((item, i) => (
            <Box key={i} className='experience-container'>
              <Box>
                <Typography color='#1976d2' fontWeight={'bold'}>{item.year}</Typography>
              </Box>
              <Box display='flex' flexDirection={'column'} >
              {item.works.map((item, i) => (
               <Box marginBottom = '1.5em'  key={i} position='relative'>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                 
                >
                  <Tooltip title={item.desc}
                  placement = 'right-end'
                  PopperProps = {{
                    sx: {
                      "& .MuiTooltip-tooltip": {
                        border: "solid skyblue 1px",
                        color: "black",
                        backgroundColor : 'white',
                        padding : '10px 15px',
                        textAlign : 'justify',
                        maxWidth : '23em'
                      }
                    }
                  }}
                  >
                    <Box>
                    <Typography fontWeight={'bold'} fontSize='23px'>{item.name}</Typography>
               
                  <Typography fontSize='18px' color='#757575'>{item.company}</Typography>
                  </Box>
                  </Tooltip>
                </motion.div>
                </Box>
              ))}
              </Box>
            </Box>
          ))}

        </ExperienceContainer>



      </Container>
    </MyContainer>
  )
}

export default Appwraper(
Skills, 
  'Skills',
  )