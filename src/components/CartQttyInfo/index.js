import { number } from 'prop-types'
import { connect } from 'react-redux'

const CartQttyInfoView = ({ totalQtty }) =>
  `(${totalQtty > 0 ? `${totalQtty} items` : 'empty'})`

CartQttyInfoView.propTypes = {
  totalQtty: number.isRequired,
}

const mapStateToProps = state => ({
  totalQtty: Object.keys(state.cart).reduce(
    (sum, key) => sum + state.cart[key],
    0
  ),
})

const CartQttyInfo = connect(mapStateToProps)(CartQttyInfoView)

export { CartQttyInfo }
