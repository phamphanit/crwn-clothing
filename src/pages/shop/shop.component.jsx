import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
export const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionsOverview></CollectionsOverview>
    </div>
  );
};

export default ShopPage;
