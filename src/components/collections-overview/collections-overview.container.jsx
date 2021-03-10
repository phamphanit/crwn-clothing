import { connect } from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "../collections-overview/collections-overview.component";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import { compose } from "redux";
const mapStateToProps = (state) => ({
  isLoading: selectIsCollectionFetching(state),
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
