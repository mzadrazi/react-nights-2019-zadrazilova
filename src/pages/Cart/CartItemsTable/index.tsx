import React, { FC } from 'react'
import { arrayOf, func, shape, string, number } from 'prop-types'

import { formatPrice } from '../../../utils'

import { QuantityControl } from './QuantityControl'
import { Table, Td, Th } from './styled'

type Props = {
  onAdd: () => void
  onRemove: () => void
}

//TODO: format total price
const CartItemsTable: FC<Props> = ({ items, onAdd, onRemove }) => {
  if (items.length === 0) {
    return <p>Your shopping cart is empty</p>
  }

  return (
    <Table>
      <thead>
        <tr>
          <Th>Product</Th>
          <Th>Price per piece</Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.product.id}>
            <Td>
              <img
                alt={`thumbnail of ${item.product.name}`}
                src={item.product.imgUrl}
                width={100}
              />
              {item.product.name}
            </Td>
            <Td>{item.product.price.formatted_amount}</Td>
            <Td>
              <QuantityControl
                quantity={item.quantity}
                onAdd={() => onAdd(item.product.id)}
                onRemove={() => onRemove(item.product.id)}
              />
            </Td>
            <Td>
              {formatPrice(
                item.quantity * item.product.price.amount_float,
                item.product.price.currency_code
              )}
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
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
