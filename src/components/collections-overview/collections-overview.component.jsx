import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import "./collections-overview.styles.scss";
const CollectionsOverview = (props) => {
  const { collections } = props;
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectCollectionForPreview(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
