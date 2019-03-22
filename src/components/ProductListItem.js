import React from 'react'
import { string } from 'prop-types'

const ProductListItem = props => {
  const { description, image_url } = props

  return (
    <>
      <strong>{props.name}</strong>
      <p>{description}</p>
      <img alt={name} src={image_url} width={200} />
    </>
  )
}

ProductListItem.propTypes = {
  description: string.isRequired,
  image_url: string.isRequired,
  name: string.isRequired,
}

export default ProductListItem
