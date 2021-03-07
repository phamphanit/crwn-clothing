import React from "react";
import "./collection-preview.component.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { withRouter } from "react-router-dom";
const CollectionPreview = ({ title, items, ...otherProps }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => {
        otherProps.history.push(
          `${otherProps.match.path}/${otherProps.routeName}`
        );
      }}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);
export default withRouter(CollectionPreview);
