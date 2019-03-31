import styled from 'styled-components'

import { Price as BasePrice } from '../../components/Price/index'

export const Wrapper = styled.div`
  display: flex;
`
export const Title = styled.h2``

export const ImgWrap = styled.div``

export const Img = styled.img`
  width: 500px;
`

export const ProductInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`

export const Description = styled.div``

//TODO: move Price in common components
export const Price = styled(BasePrice)`
  font-size: 1.5em;
`
