import React from 'react'
import { StyledBox } from './style'

const NavigationDots = ({active}) => {
  return (
    <StyledBox>
    {['Home', 'About', 'Work', 'Skills', 'Testimonial', 'Contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="navigation-dot"
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </StyledBox>
  )
}

export default NavigationDots