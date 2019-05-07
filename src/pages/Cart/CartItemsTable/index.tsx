import React, { FC } from 'react'

import { formatPrice } from '../../../utils'

import { QuantityControl } from './QuantityControl'
import { Table, Td, Th } from './styled'
import { ProductType } from '../../../global/types'

type Props = {
  items: ReadonlyArray<{
    quantity: number
    product: ProductType
  }>
  onAdd: (productId: string) => void
  onRemove: (productId: string) => void
}

//TODO: format total price
const CartItemsTable: FC<Props> = ({ items = [], onAdd, onRemove }) => {
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

export { CartItemsTable }
