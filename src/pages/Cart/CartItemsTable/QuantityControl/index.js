import React from 'react'
import { func, number } from 'prop-types'
import { Wrapper, Quantity, Control, Controls } from './styled'

const QuantityControl = ({ quantity, onAdd, onRemove }) => (
  <Wrapper>
    <Quantity>{quantity}</Quantity>
    <Controls>
      <Control onClick={onAdd}>+</Control>
      <Control onClick={onRemove}>-</Control>
    </Controls>
  </Wrapper>
)

QuantityControl.propTypes = {
  onAdd: func.isRequired,
  onRemove: func.isRequired,
  quantity: number.isRequired,
}

export { QuantityControl }
