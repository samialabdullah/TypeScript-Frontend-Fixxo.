import { createContext } from 'react'
import { ProductCardType } from '../components/ProductCard'

export const ProductContext = createContext([] as ProductCardType[])
export const FeaturedProductsContext = createContext([] as ProductCardType[])
export const ThreeContext = createContext([] as ProductCardType[])
export const FourContext = createContext([] as ProductCardType[])


