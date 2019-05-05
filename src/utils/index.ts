/**
 * Formats price
 * @param {number} price Float value representing a price
 * @return {string} Price rounded to 2 decimal points
 */
export const formatPrice = (price: number, currency: string = '') =>
  `${price.toFixed(2)} ${currency}`
