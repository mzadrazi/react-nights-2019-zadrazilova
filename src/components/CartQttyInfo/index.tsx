import { FC } from 'react'
import { number } from 'prop-types'
import { connect, MapStateToProps } from 'react-redux'
import { AppState } from '../../store'

const CartQttyInfoView: FC<Props> = ({ totalQtty }) =>
  `(${totalQtty > 0 ? `${totalQtty} items` : 'empty'})`

type Props = ReturnType<typeof mapStateToProps>

// CartQttyInfoView.propTypes = {
//   totalQtty: number.isRequired,
// }

const mapStateToProps = (state: AppState) => ({
  totalQtty: Object.keys(state.cart).reduce(
    (sum, key) => sum + state.cart[key],
    0
  ),
})

const CartQttyInfo = connect(mapStateToProps)(CartQttyInfoView)

export { CartQttyInfo }
