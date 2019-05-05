import { ProductType } from '../../../global/types'

type Data = {
  id: string
  attributes: {
    name: string
    description: string
    image_url: string
  }
}

type Included = ReadonlyArray<{
  type: string
  attributes: {
    formatted_amount: string
  }
}>

export const parseProduct = ({
  data,
  included,
}: {
  data: Data
  included: Included
}): ProductType => {
  return {
    id: data.id,
    name: data.attributes.name,
    description: data.attributes.description,
    imgUrl: data.attributes.image_url,
    price: included.find(itm => itm.type === 'prices')!.attributes,
  }
}
