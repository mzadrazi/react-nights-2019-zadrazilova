import React, { MouseEvent, FC } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import qs from 'qs'
import { toast } from 'react-toastify'

import { ProductList } from './ProductList/index'
import { Pagination } from '../../components/Pagination'
import { Loader } from '../../components/Loader'

import { useApi } from '../../api/useApi'
import { getProducts } from '../../api/products/getProducts'
import { addProduct } from '../../store/cart/actions'

//TODO: type for location.search
type Props = typeof mapDispatchToProps & RouteComponentProps<{ page: string }>

const ProductsView: FC<Props> = props => {
  const { page } = qs.parse(props.location.search.substr(1))

  const { data, isLoading } = useApi(
    () => getProducts({ page: { number: page } }),
    [page]
  )

  const handleAddToCart = (e: MouseEvent, productId: string) => {
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
            // activePage={props.match.params.page}
          />
          <ProductList onAddToCart={handleAddToCart} products={data.products} />
        </>
      )}
    </>
  )
}

const mapDispatchToProps = {
  addProduct,
}

const Products = connect(
  null,
  mapDispatchToProps
)(ProductsView)

export { Products }
