import React from "react";
import PageTitle from "../../common/PageTitle";
import ProductTable from "../../common/Product/ProductTable";
import QuickAddProduct from "../../common/Product/QuickAddProduct";

function ProductListScreen() {
  return (
    <div>
      <div className="p-4">
        <PageTitle title="Products" />
      </div>

      <div className="flex">
        <div className="w-[70%] lg:w-4/6 pl-4 pr-4 sm:pl-4 sm:pr-0 mb-4 sm:mb-1">
          <ProductTable />
        </div>
        <div className="w-[30%] lg:w-2/6 pl-4 pr-4 sm:pl-4 sm:pr-2">
          <QuickAddProduct />
        </div>
      </div>
    </div>
  );
}

export default ProductListScreen;
