import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import range from 'ramda/src/range'

import { List, ListItem } from './styled'

import * as routes from '../../routes'

// TODO: active page

const renderPaginationItem = number => (
  <ListItem key={number}>
    <Link to={`${routes.PRODUCT_LIST}?page=${number}`}>{number}</Link>
  </ListItem>
)

const Pagination = ({ nrPages }) => (
  <List>{range(1, nrPages + 1).map(renderPaginationItem)}</List>
)

Pagination.propTypes = {
  //activePage: PropTypes.number,
  nrPages: PropTypes.number.isRequired,
}

// Pagination.defaultProps = {
//   activePage: 1,
// }

export { Pagination }
