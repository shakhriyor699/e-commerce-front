'use client'
import React, { FC } from 'react'
import styled from 'styled-components'

interface CenterProps {
  children: React.ReactNode
}

const StyledDiv = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
`


const Center: FC<CenterProps> = ({ children }) => {
  return (
    <StyledDiv>{children}</StyledDiv>
  )
}

export default Center