import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import range from 'ramda/src/range'

import { List, ListItem } from './styled'

import * as routes from '../../routes'

// TODO: active page

type Props = {
  nrPages: number
}

const renderPaginationItem = (number: number) => (
  <ListItem key={number}>
    <Link to={`${routes.PRODUCT_LIST}?page=${number}`}>{number}</Link>
  </ListItem>
)

const Pagination: FC<Props> = ({ nrPages }) => (
  <List>{range(1, nrPages + 1).map(renderPaginationItem)}</List>
)

export { Pagination }
