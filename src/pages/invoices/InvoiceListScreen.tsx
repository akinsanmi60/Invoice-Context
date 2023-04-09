import React from "react";
import InvoiceTable from "../../common/Invoice/InvoiceTable";
import PageTitle from "../../common/PageTitle";

function InvoiceListScreen() {
  return (
    <div>
      <div className=" p-4 ">
        <div className="">
          <PageTitle title="Invoices Board" />
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-4 sm:mb-1">
          <InvoiceTable showAdvanceSearch />
        </div>
      </div>
    </div>
  );
}

export default InvoiceListScreen;
