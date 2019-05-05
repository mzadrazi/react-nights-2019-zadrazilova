import React, { FC } from 'react'
import { connect, MapStateToProps } from 'react-redux'
import { AppState } from '../../store'

type Props = ReturnType<typeof mapStateToProps>

const CartQttyInfoView: FC<Props> = ({ totalQtty }) => (
  <>`(${totalQtty > 0 ? `${totalQtty} items` : 'empty'})`</>
)

const mapStateToProps = (state: AppState) => ({
  totalQtty: Object.keys(state.cart).reduce(
    (sum, key) => sum + state.cart[key],
    0
  ),
})

const CartQttyInfo = connect(mapStateToProps)(CartQttyInfoView)

export { CartQttyInfo }
