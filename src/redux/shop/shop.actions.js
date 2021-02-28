import ShopActionTypes from './shop.types';
export const updateCollection = collectionMap =>
({
        type: ShopActionTypes.UPDATE_COLLECTS,
        payload: collectionMap
})