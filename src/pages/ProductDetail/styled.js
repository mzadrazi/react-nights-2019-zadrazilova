import styled from 'styled-components'

import { theme } from '../../global/theme'
import { Price as BasePrice } from '../../components/Price/index'

export const Wrapper = styled.div`
  display: flex;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.basic};
  overflow: hidden;
  padding: 3rem;
`
export const Title = styled.h2``

export const ImgWrap = styled.div`
  width: 45rem;
  text-align: center;
  margin-right: 3rem;
`

export const Img = styled.img`
  max-width: 100%;
`

export const ProductInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.p``

export const Price = styled(BasePrice)`
  font-size: 2.4rem;
`
