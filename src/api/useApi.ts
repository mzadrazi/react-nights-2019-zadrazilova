import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

// Custom hook - reusing fetching of data

const useApi = <T>(
  fn: (...args: any[]) => Promise<T>,
  resolveCondition: ReadonlyArray<any> = []
) => {
  const [data, setData] = useState<T>(null!)
  const [isLoading, setLoading] = useState(false)

  if (!Array.isArray(resolveCondition)) {
    console.error('Resolved condition for useEffect is not an array!')
  }

  const request = (...args: any[]) => {
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
