import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/colllection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollection } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
class ShopPage extends React.Component {
  unsubscripeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollection(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
