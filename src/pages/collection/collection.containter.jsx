import { compose } from "redux";
import CollectionPage from "./colllection.component";
import { connect } from "react-redux";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "./../../components/with-spinner/with-spinner.component";
const mapStateToProps = (state) => ({
  isLoading: !selectIsCollectionLoaded(state),
});
const CollectionPageContainter = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainter;
