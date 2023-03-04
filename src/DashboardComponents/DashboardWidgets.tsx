import React from "react";
import Lottie from "lottie-react";
import NumberFormat from "react-number-format";
import moneyjsonFile from "../lotties/lottie-money.json";
import personjsonFile from "../lotties/lottie-persons.json";
import productjsonFile from "../lotties/lottie-product.json";
import invoicejsonFile from "../lotties/invoice-paper.json";
import workersjsonFile from "../lotties/workers.json";

function DashboardWidgets() {
  const clients = "0";
  const products = "0";
  const totalBalance = "0";
  const allInvoices = "0";

  const dashValue = [
    {
      title: "Total Balance",
      lottieFile: moneyjsonFile,
      amountValue: totalBalance,
    },
    {
      title: "Total Product",
      lottieFile: productjsonFile,
      amountValue: products,
    },
    {
      title: "Total Invoice",
      lottieFile: invoicejsonFile,
      amountValue: allInvoices,
    },
    {
      title: "Total Clients",
      lottieFile: personjsonFile,
      amountValue: clients,
    },
    {
      title: "Total Employees",
      lottieFile: workersjsonFile,
      amountValue: clients,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-[15px] md:grid-cols-2 xlsm:grid-cols-1">
      {dashValue?.map((items, i) => (
        <div className="w-full" key={i}>
          <div className="p-4 bg-slate-500 rounded-xl  hover:shadow-sm">
            <div className="font-title">{items.title}</div>
            <div className="flex justify-between items-center">
              {/* Icon */}
              <div className="h-30">
                <Lottie
                  animationData={items.lottieFile}
                  loop
                  className="h-20"
                />
              </div>
              {/* Icon Finished */}
              <div className="text-2xl mr-2 cursor-pointer">
                <NumberFormat
                  value={items.amountValue}
                  className=""
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value: string) => <span>{value}</span>}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardWidgets;
