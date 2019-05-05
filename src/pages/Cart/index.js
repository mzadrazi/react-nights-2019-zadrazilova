import React from 'react'
import { arrayOf, func, number, shape, string } from 'prop-types'
import { connect } from 'react-redux'

import { useApi } from '../../api/useApi'
import { addProduct, removeProduct } from '../../store/cart/actions'
import { getProductsByIds } from '../../api/products/getProductsByIds'
import { formatPrice } from '../../utils'

import { Wrapper, TotalPrice } from './styled'
import { CartItemsTable } from './CartItemsTable'
import { Loader } from '../../components/Loader'

const CartView = props => {
  const { data, isLoading } = useApi(() => getProductsByIds(props.productIds), [
    props.productIds.join(','),
  ])

  const products = data || []

  const itemsData = props.items.map(item => ({
    product: products.find(prod => prod.id === item.product),
    quantity: item.quantity,
  }))

  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {isLoading && <Loader />}
      {products.length > 0 && (
        <>
          <CartItemsTable
            items={itemsData}
            onAdd={props.addProduct}
            onRemove={props.removeProduct}
          />
          <TotalPrice>
            Total price:{' '}
            {formatPrice(
              itemsData.reduce(
                (sum, curr) =>
                  sum + curr.quantity * curr.product.price.amount_float,
                0
              )
            )}
          </TotalPrice>
        </>
      )}
    </Wrapper>
  )
}

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
  productIds: arrayOf(number).isRequired,
  removeProduct: func.isRequired,
}

CartView.defaultProps = {
  items: [],
}

const mapStateToProps = state => ({
  items: Object.keys(state.cart).map(productId => ({
    product: productId,
    quantity: state.cart[productId],
  })),
  productIds: Object.keys(state.cart),
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
