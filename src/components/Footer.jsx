import React from 'react'
import { FooterContainer } from '../styles/FooterStyles'

export const Footer = () => {
  return (
    <FooterContainer>
        <div className="Footer--Github">
        <a href="https://github.com/DeltaQuery" target="_blank">Github</a>
        </div>
        <div className="Footer--MadeBy">
        <a href="https://www.linkedin.com/in/carlos-e-bracho/" target="_blank">Repository</a>
        </div>
        <div className="Footer--Linkedin">
        <a href="https://www.linkedin.com/in/carlos-e-bracho/" target="_blank">Linkedin</a>
        </div>
    </FooterContainer>
  )
}
