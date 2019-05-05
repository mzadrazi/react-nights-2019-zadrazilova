import React, { FC } from 'react'

import { StyledLoader } from './styled'

//TODO: nicer loader
const Loader: FC<Props> = ({ text = 'Loading ...' }) => (
  <StyledLoader>{text}</StyledLoader>
)

type Props = {
  text?: string
}

export { Loader }
