import React from "react";
import ClientTable from "../../common/Clients/ClientTable";
import PageTitle from "../../common/PageTitle";
import QuickAddClient from "../../DashboardComponents/QuickAddClient";

function ClientListScreen() {
  const pageName = "clientslist";
  return (
    <div>
      <div className="p-4">
        <PageTitle title="Clients Board" />
      </div>

      <div className="flex">
        <div className="w-[70%]  pl-4 pr-4 sm:pl-4 sm:pr-0 mb-4 sm:mb-1">
          <ClientTable showAdvanceSearch />
        </div>
        <div className="w-[30%] p-4  sm:pl-4 sm:pr-2 bg-white rounded-xl mr-3">
          <QuickAddClient pageType={pageName} />
        </div>
      </div>
    </div>
  );
}

export default ClientListScreen;
