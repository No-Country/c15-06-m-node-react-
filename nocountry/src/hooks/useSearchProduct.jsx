import { useState, useEffect } from 'react'

/**
 * Returns a filtered array of products based on a search term.
 *
 * @param {Array} searchData - The array of products to search through.
 * @param {string} searchTerm - The term to search for in the product names.
 * @return {Array} - The filtered array of products.
 */
export function useProductSearch(searchData, searchTerm) {
  const filteredItems = searchData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return filteredItems
}
