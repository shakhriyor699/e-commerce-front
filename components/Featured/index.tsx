'use client'
import styled from "styled-components"
import Center from "../Center"
import Image from "next/image"

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
            <button>Read more</button>
            <button>Add to cart</button>
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