import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../common/PageTitle";
import DashboardWidgets from "../../DashboardComponents/DashboardWidgets";
import InvoiceIcon from "../../Icons/InvoiceIcon";
import Button from "../../common/Button/Button";
import { useDisclosure } from "@chakra-ui/react";
import { DrawerScreen } from "../../common/Drawer";
import TestComp from "../../DashboardComponents/test";
import QuickAddClient from "../../DashboardComponents/QuickAddClient";

function DashboardScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const goToNewInvoice = useCallback(() => {
    navigate("/invoices/new");
  }, [navigate]);

  const handleQuickAdd = useCallback(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <div>
        <div className="p-4 flex justify-between items-center">
          <PageTitle title="Dashboard" />
          <div className=" flex gap-[15px] xlsm:hidden">
            <div>
              <Button onClick={goToNewInvoice} block={true}>
                <InvoiceIcon />
                <span className="ml-2 text-[13px]"> New Invoice </span>
              </Button>
            </div>
            <div>
              <Button onClick={handleQuickAdd} block={true} outlined={true}>
                <InvoiceIcon />
                <span className="ml-2  text-[13px]"> Quick Add </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full pl-4 pr-4 mb-4 sm:mb-1">
          <DashboardWidgets />
          <TestComp />
          <QuickAddClient />
        </div>
      </div>
      <DrawerScreen isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default DashboardScreen;
