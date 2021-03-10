import { createAction, props } from '@ngrx/store'
import { IProduct } from '../model/product.model'

export const getProducts = createAction('[Products] Get Products')
export const getProductsSuccess = createAction('[Products] Get Products Success', props<{ products: IProduct[] }>())

export const getSelectedProduct = createAction('[Products] Get Selected Product')
export const setSelectedProduct = createAction('[Products] Set Selected Product', props<{ product: IProduct }>())

export const setSelectedProductToSessionStorage = createAction(
  '[Products] Set Selected Product to Session Storage',
  props<{ product: IProduct }>()
)
export const getSelectedProductFromSessionStorage = createAction('[Products] Get Selected Product from Session Storage')
export const getSelectedProductFromSessionStorageSuccess = createAction(
  '[Products] Get Selected Product from Session Storage Success',
  props<{ product: IProduct | null }>()
)
