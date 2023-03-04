import React from "react";
import Lottie from "lottie-react";
import json from "../lotties/invoice-navbar.json";

function InvoiceNavbarLoading(loop: boolean) {
  return <Lottie animationData={json} loop={loop} />;
}

export default InvoiceNavbarLoading;
