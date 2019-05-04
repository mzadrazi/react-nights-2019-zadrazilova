import React, { FC } from 'react'
import { string } from 'prop-types'

import { StyledLoader } from './styled'

//TODO: nicer loader
const Loader: FC<Props> = ({ text }) => <StyledLoader>{text}</StyledLoader>

type Props = {
  text?: string
}

Loader.defaultProps = {
  text: 'Loading ...',
}

export { Loader }
