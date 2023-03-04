import React from "react";
import Lottie from "lottie-react";
import json from "../lotties/invoice-loading.json";

function InvoiceLoading() {
  return <Lottie animationData={json} />;
}

export default InvoiceLoading;
