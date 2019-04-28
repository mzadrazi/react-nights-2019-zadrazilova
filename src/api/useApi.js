import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

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
      .then(setData)
      .catch(error => {
        console.error(error)
        toast.error(error.message)
      })
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
