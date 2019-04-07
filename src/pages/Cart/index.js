import React from 'react'
import { arrayOf, func, number, shape, string } from 'prop-types'
import { connect } from 'react-redux'

import { addProduct, removeProduct } from '../../store/cartItems/actions'

import { CartItemsTable } from './CartItemsTable'

const CartView = props => (
  <div>
    <h2>Shopping Cart</h2>
    <CartItemsTable
      items={props.items}
      onAdd={props.addProduct}
      onRemove={props.removeProduct}
    />
  </div>
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
  items: Object.keys(state.cartItems).map(productId => ({
    product: state.products.find(p => p.id === productId),
    quantity: state.cartItems[productId],
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

export default Cart
