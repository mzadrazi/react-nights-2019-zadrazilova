import React from 'react'
import { string } from 'prop-types'

import { StyledLoader } from './styled'

//TODO: nicer loader
const Loader = ({ text }) => <StyledLoader>{text}</StyledLoader>

Loader.propTypes = {
  text: string,
}

Loader.defaultProps = {
  text: 'Loading ...',
}

export default Loader
