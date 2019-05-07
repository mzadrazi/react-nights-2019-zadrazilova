import React, { FC } from 'react'
import { Wrapper, Quantity, Control, Controls } from './styled'

type Props = {
  quantity: number
  onAdd: () => void
  onRemove: () => void
}

const QuantityControl: FC<Props> = ({ quantity, onAdd, onRemove }) => (
  <Wrapper>
    <Quantity>{quantity}</Quantity>
    <Controls>
      <Control onClick={onAdd}>+</Control>
      <Control onClick={onRemove}>-</Control>
    </Controls>
  </Wrapper>
)

export { QuantityControl }
