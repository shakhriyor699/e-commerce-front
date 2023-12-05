
import Link from 'next/link'
import React, { FC } from 'react'
import styled from 'styled-components'
import { ButtonProps, Styled } from '../PrimaryBtn'

interface StyledLinkProps extends ButtonProps {
  children: React.ReactNode
  link: string
}


const StyledLink = styled(Link) <ButtonProps>`
  ${Styled}
  text-decoration: none;
`

const ButtonLink: FC<StyledLinkProps> = ({ children, link, ...rest }) => {
  return (
    <StyledLink href={link} {...rest}>{children}</StyledLink>
  )
}

export default ButtonLink