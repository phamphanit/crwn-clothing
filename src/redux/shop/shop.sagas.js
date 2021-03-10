import { takeLatest, call, put } from 'redux-saga/effects';
import {
        firestore,
        convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions';
import ShopActionTypes from './shop.types';

export function* fetchCollections() {
        try {
                const collectionRef = firestore.collection('collections');
                const snapshot = yield collectionRef.get();
                const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
                // const collectionMap = convertCollectionsSnapshotToMap(snapshot);
                yield put(fetchCollectionSuccess(collectionMap));
        }
        catch (error) {
                yield put(fetchCollectionFailure(error.message));
        }
}
export function* onFetchCollectionStart() {
        yield takeLatest(ShopActionTypes.COLLECTIONS_FETCH_START, fetchCollections);
}