import { Product } from '@classes/Product'
import { createContext } from 'react'

export const ProductListContext = createContext<Product[]>([])
