'use client'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Center from '../Center'

const StyledHeader = styled.header`
    background: #222;

`

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`

const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`

const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`

const Header = () => {
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href='/'>Ecommerce</Logo>
          <StyledNav>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/products'>All products</NavLink>
            <NavLink href='/categories'>Categories</NavLink>
            <NavLink href='/account'>Account</NavLink>
            <NavLink href='/cart'>Cart (0)</NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader >
  )
}

export default Header