import React from 'react'
import { func, shape, string, number } from 'prop-types'
import { connect } from 'react-redux'
import qs from 'qs'
import { toast } from 'react-toastify'

import { ProductList } from './ProductList/index'
import { Pagination } from '../../components/Pagination'
import { Loader } from '../../components/Loader'

import { useApi } from '../../api/useApi'
import { getProducts } from '../../api/products/getProducts.js'
import { addProduct } from '../../store/cart/actions'

const ProductsView = props => {
  const { page } = qs.parse(props.location.search.substr(1))

  const { data, isLoading } = useApi(
    () => getProducts({ page: { number: page } }),
    [page]
  )

  const handleAddToCart = (e, productId) => {
    e.preventDefault()
    props.addProduct(productId)
    toast.success('Product have been added to cart.')
  }

  return (
    <>
      {isLoading && <Loader />}
      {data && (
        <>
          <Pagination
            nrPages={data.meta.page_count}
            activePage={props.match.params.page}
          />
          <ProductList onAddToCart={handleAddToCart} products={data.products} />
        </>
      )}
    </>
  )
}

ProductsView.propTypes = {
  addProduct: func.isRequired,
  location: shape({
    search: string.isRequired,
  }).isRequired,
  match: shape({
    params: shape({
      page: number.isRequired,
    }).isRequired,
  }).isRequired,
}

const mapDispatchToProps = {
  addProduct,
}

const Products = connect(
  null,
  mapDispatchToProps
)(ProductsView)

export { Products }
