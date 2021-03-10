import ShopActionTypes from './shop.types';
// import {
//         firestore,
//         convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";
export const fetchCollectionStart = () =>
({
        type: ShopActionTypes.COLLECTIONS_FETCH_START,
})
export const fetchCollectionSuccess = collectionMap =>
({
        type: ShopActionTypes.COLLECTIONS_FETCH_SUCCESS,
        payload: collectionMap
})
export const fetchCollectionFailure = (error) => ({
        type: ShopActionTypes.COLLECTIONS_FETCH_FAILURE,
        payload: error
})
export const fetchCollectionStartAsync = () => {
        // return dispatch => {
        //         const collectionRef = firestore.collection("collections");
        //         dispatch(fetchCollectionStart());
        //         collectionRef
        //                 .get()
        //                 .then((snapshot) => {
        //                         const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        //                         dispatch(fetchCollectionSuccess(collectionMap));
        //                 })
        //                 .catch(error => { dispatch(fetchCollectionFailure(error.Message)) })
        // }
}