import { FC } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children: React.ReactNode
  size: string
  primary?: boolean
  white?: boolean
  outlined?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  display: inline-flex;
  ${({ primary }) => primary && `
    background: #5542F6;
    color: #fff;
  `}
  ${({ white, outlined }) => white && !outlined && `
    background: #fff;
    color: #000;
  `}
  ${({ outlined }) => outlined && `
    background: transparent;
    color: #fff;
    border: 1px solid #fff;
  `}
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  ${({ size }) => size === 'l' && `
    padding: 10px 20px;
    font-size: 1.2rem;
  `}
  svg {
    height: 20px;
  }
`

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )
}

export default Button