import React from 'react'
import { arrayOf, func, number, shape, string } from 'prop-types'
import { connect } from 'react-redux'

import { addProduct, removeProduct } from '../../store/cart/actions'
// import { formatPrice } from '../../utils'

import { Wrapper } from './styled'
import { CartItemsTable } from './CartItemsTable'

const CartView = props => (
  <Wrapper>
    <h2>Shopping Cart</h2>
    <CartItemsTable
      items={props.items}
      onAdd={props.addProduct}
      onRemove={props.removeProduct}
    />
    {/* <TotalPrice>
      Total price:{' '}
      {formatPrice(
        props.items.reduce(
          (sum, curr) => sum + curr.quantity * curr.product.price.amount_float,
          0
        )
      )}
    </TotalPrice> */}
  </Wrapper>
)

CartView.propTypes = {
  addProduct: func.isRequired,
  items: arrayOf(
    shape({
      product: shape({
        id: string.isRequired,
      }).isRequired,
      quantity: number.isRequired,
    })
  ),
  removeProduct: func.isRequired,
}

CartView.defaultProps = {
  items: [],
}

const mapStateToProps = state => ({
  items: Object.keys(state.cart).map(productId => ({
    product: state.products.find(p => p.id === productId),
    quantity: state.cart[productId],
  })),
})

const mapDispatchToProps = {
  addProduct,
  removeProduct,
}

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartView)

export { Cart }
