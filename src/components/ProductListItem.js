import React from 'react'
import { string } from 'prop-types'

const ProductListItem = props => (
  <li>
    <strong>{props.name}</strong>
    <p>{props.description}</p>
    <img alt={props.name} src={props.image_url} width={200} />
  </li>
)

ProductListItem.propTypes = {
  description: string.isRequired,
  image_url: string.isRequired,
  name: string.isRequired,
}

export default ProductListItem
