import styled from 'styled-components'

import theme from '../../global/theme'
import { Price as BasePrice } from '../../components/Price/index'

export const Wrapper = styled.div`
  display: flex;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.basic};
  overflow: hidden;
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

export const Button = styled.button`
  background-color: ${theme.color.oxblood};
  color: ${theme.color.white};
  font-weight: bold;
  border: none;
  border-radius: ${theme.radius.basic};
  padding: 15px;
  width: 320px;

  :hover {
    background-color: #5f222e;
  }
`

export const Price = styled(BasePrice)`
  font-size: 1.5em;
`
