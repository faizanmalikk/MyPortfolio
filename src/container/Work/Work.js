import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { StyledCard, StyledPagination, StyledWork, WorkContainer } from './style'
import Appwraper from '../../wrapper/Appwraper'
import { client, urlFor } from '../../client'
import { motion } from 'framer-motion'
import { Block, GitHub, Visibility } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'


const Work = () => {

  const [activefilter, setactivefilter] = useState('All')
  const [works, setworks] = useState([])
  const [filterWork, setfilterWork] = useState([])
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 })
  const [activeCard, setactiveCard] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(5)

  const navigate = useNavigate()

  useEffect(() => {


    const query = '*[_type == "works"]'

    client.fetch(query).then((data) => {
      setworks(data)
      setfilterWork(data)
    })

  }, [])


  const handleWorkFilter = (item) => {

    setactivefilter(item)
    setanimateCard({ y: 100, opacity: 0 })

    setTimeout(() => {

      setanimateCard({ y: 0, opacity: 1 })

      if (item === 'All') {
        setfilterWork(works)
        setCurrentPage(1)
      } else {

        setCurrentPage(1)
        setfilterWork(works.filter((work) => work.tags.includes(item)))
      }

    }, 500);



  }

  const handleCardChange = (index) => {

    setactiveCard(index)

  }

  const toggleActiveCard = (index) => {

    if (activeCard === index) {

      return 'active'
    } else {

      return 'unactive'
    }


  }

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = filterWork.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageCount = (event, value) => {

    setanimateCard({ y: 100, opacity: 0 })
    const id = document.getElementById('Work')
    id.scrollIntoView()

    setTimeout(() => {

      setanimateCard({ y: 0, opacity: 1 })
      setCurrentPage(value)

    }, 500);

  }


  return (
    <WorkContainer >
      <Box >
        <Typography fontSize={{ xs: '30px', sm: '43px' }} fontWeight='bold' textAlign={'center'}>My Creative <Typography component={'span'} fontSize={{ xs: '30px', sm: '43px' }} color='#1976d2' fontWeight={'bold'}>Portfolio</Typography></Typography>
      </Box>

      <Box>

        <StyledWork >
          {['UI/UX Design', 'React Js', 'MERN Stack', 'All'].map((item, i) => (
            <Box
              onClick={() => handleWorkFilter(item)}
              key={i}
              className={`work-feilds ${activefilter === item ? 'item-active' : ''}`}>
              {item}
            </Box>
          ))}
        </StyledWork>


      </Box>

      <StyledCard >
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='card-container'

        >

          {currentPosts.map((item, index) => (
            <Box key={index} className='card' onClick={() => handleCardChange(index)} onMouseOver={() => handleCardChange(index)} onMouseOut={() => setactiveCard('')}>
              <Box sx={{ position: 'relative' }} >
                <Box component={'img'} width='100%' height={'220px'} sx={{ borderRadius: '10px' }} src={urlFor(item.imgUrl)} alt={item.name}></Box>

                <motion.div

                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className={`work-img-container ${toggleActiveCard(index)}`}

                >
                  <Typography component={'a'} href={item.projectLink} target='_blank' rel='noreferrer' >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [0, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className='hover-container'
                    >
                      <Visibility sx={{ width: '60%', height: '60%' }} />
                    </motion.div>
                  </Typography>
                  <Button component={'a'} disabled={!item.codeLink && true} href={item.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [0, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className='hover-container'
                    >
                      {item.codeLink ? (
                        <GitHub sx={{ width: '60%', height: '60%' }} />
                      ) : (
                        <Block sx={{ width: '60%', height: '60%' }} />
                      )}
                    </motion.div>
                  </Button>
                </motion.div>
              </Box>
              <Box sx={{ position: 'relative' }}>
                <Typography className='card-title'>{item.title}</Typography>
                <Typography className='card-description' >{item.description.length > 70 ? `${item.description.substring(0, 70)}...` : item.description}</Typography>
                <Box className='card-tag'>

                  <Typography>{item.tags[0]}</Typography>

                </Box>
              </Box>

            </Box>
          ))}

        </motion.div>
        {postPerPage < filterWork.length && (

          <StyledPagination color='primary' size='large'
            count={Math.ceil(filterWork.length / postPerPage)}
            page={currentPage}
            shape='rounded'
            onChange={(event, value) => handlePageCount(event, value)}
            showLastButton showFirstButton hideNextButton hidePrevButton

          />
        )}
      </StyledCard>


    </WorkContainer>
  )
}

export default Appwraper(
  Work,
  'Work',
  'white-bg'
)