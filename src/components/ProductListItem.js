import React from 'react'
import { string } from 'prop-types'

const ProductListItem = (
  { name, description, image_url } // eslint-disable-line no-shadow
) => (
  <li>
    <strong>{name}</strong>
    <p>{description}</p>
    <img alt={name} src={image_url} width={200} />
  </li>
)

ProductListItem.propTypes = {
  description: string.isRequired,
  image_url: string.isRequired,
  name: string.isRequired,
}

export default ProductListItem
