import ShopActionTypes from './shop.types';
const INITIAL_STATE = {
        collections: null,
        isFetching: false,
        errorMessage: undefined
};
const shopReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
                case ShopActionTypes.COLLECTIONS_FETCH_START:
                        return {
                                ...state,
                                isFetching: true
                        };
                case ShopActionTypes.COLLECTIONS_FETCH_SUCCESS:
                        return {
                                ...state,
                                collections: action.payload,
                                isFetching: false
                        };
                case ShopActionTypes.COLLECTIONS_FETCH_FAILURE:
                        return {
                                ...state,
                                errorMessage: action.payload
                        }
                default:
                        return state;
        }

}
export default shopReducer; 