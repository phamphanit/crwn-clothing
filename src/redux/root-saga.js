import { all, call } from 'redux-saga/effects';

import { onFetchCollectionStart } from './shop/shop.sagas';

export default function* rootSaga() {
        yield all([call(onFetchCollectionStart)]);
}