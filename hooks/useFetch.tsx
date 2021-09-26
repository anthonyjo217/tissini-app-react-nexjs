import { Product } from '@classes/Product'
import { useState, useEffect, useRef } from 'react'

type typeState = {
  data: Product | null | []
  loading: boolean
  error: string | null
}

export const useFetch = (url: string): typeState => {
  const isMounted = useRef(true)
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    setState({ data: null, loading: true, error: null })

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          })
        }
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: 'Unable to load data' as any,
        })
      })
  }, [url])

  return state
}
