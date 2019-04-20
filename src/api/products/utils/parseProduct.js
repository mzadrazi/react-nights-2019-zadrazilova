export const parseProduct = ({ data, included }) => {
  return {
    id: data.id,
    name: data.attributes.name,
    description: data.attributes.description,
    imgUrl: data.attributes.image_url,
    price: included.find(itm => itm.type === 'prices').attributes,
  }
}
