import { useState, useEffect } from 'react'

// Custom hook - reusing fetching of data

const useApi = (fn, resolveCondition = []) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  if (!Array.isArray(resolveCondition)) {
    console.error('Resolved condition for useEffect is not an array!')
  }

  const request = (...args) => {
    setLoading(true)
    fn(...args)
      .then(returnedData => setData(returnedData))
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(request, resolveCondition)

  return {
    request,
    data,
    isLoading,
  }
}

export { useApi }
