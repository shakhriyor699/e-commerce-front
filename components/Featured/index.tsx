'use client'
import styled from "styled-components"
import Center from "../Center"
import Image from "next/image"
import Button from "../PrimaryBtn"

const Bg = styled.div`
  background: #222;
  color: #fff;
  padding: 50px 0;
`

const Title = styled.h1`
  font-weight: normal;
`

const Desc = styled.p`
  color: #aaa;
  margin: 15px 0;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  img {
    max-width: 100%;
  }
`



const Featured = () => {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <div>
            <Title>Pro anywhere</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae saepe suscipit beatae qui assumenda odit recusandae sunt autem labore quas. Fuga tenetur assumenda, laboriosam dolore reiciendis nobis architecto quod laudantium!</Desc>
            <Button outlined size='l'>Read more</Button>
            <Button primary size='l'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              Add to cart
            </Button>
          </div>
          <div>
            <Image width={300} height={170} src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png" alt="featured" />
          </div>
        </Wrapper>

      </Center>
    </Bg>
  )
}

export default Featured