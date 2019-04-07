import React from 'react'
import { arrayOf, func, shape, string, number } from 'prop-types'

const CartItemsTable = ({ items, onAdd, onRemove }) => {
  if (items.length === 0) {
    return <p>Your shopping cart is empty</p>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.product.id}>
            <td>
              <img
                alt={`thumbnail of ${item.product.name}`}
                src={item.product.imgUrl}
                width={100}
              />
              {item.product.name}
            </td>
            <td>
              {item.quantity}
              <button type="button" onClick={() => onAdd(item.product.id)}>
                +
              </button>
              <button type="button" onClick={() => onRemove(item.product.id)}>
                -
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

CartItemsTable.propTypes = {
  items: arrayOf(
    shape({
      quantity: number.isRequired,
      product: shape({
        id: string.isRequired,
        name: string.isRequired,
      }).isRequired,
    })
  ),
  onAdd: func.isRequired,
  onRemove: func.isRequired,
}

CartItemsTable.defaultProps = {
  items: [],
}

export { CartItemsTable }
