import React, { createContext, useEffect, useState } from "react";

type InvoiceDataProp = {
  id: string;
  invoiceNo: string;
  clientName: string;
  email: string;
  amount: string;
  statusIndex: string;
  statusName: string;
  totalAmount: string;
};

type NewInvoiceContext = {
  setInvoiceData: React.Dispatch<React.SetStateAction<InvoiceDataProp[]>>;
  invoiceData: InvoiceDataProp[];
};

export const InvoiceContext = createContext({} as NewInvoiceContext);

type ContextProps = {
  children: React.ReactNode;
};

const invoiceApiData = [
  {
    id: "83",
    invoiceNo: "",
    clientName: "Akinsanmi",
    email: "teset@gmail.com",
    amount: "78790",
    statusIndex: "good",
    statusName: "checked",
    totalAmount: "50461818",
  },
  {
    id: "85",
    invoiceNo: "",
    clientName: "bolaji",
    email: "teset@gmail.com",
    amount: "78790",
    statusIndex: "draft",
    statusName: "checked",
    totalAmount: "50461818",
  },
  {
    id: "35",
    invoiceNo: "",
    clientName: "Akanke",
    email: "teset@gmail.com",
    amount: "78790",
    statusIndex: "good",
    statusName: "checked",
    totalAmount: "50461818",
  },
  {
    id: "45",
    invoiceNo: "",
    clientName: "Lekan",
    email: "teset@gmail.com",
    amount: "09165789456",
    statusIndex: "good",
    statusName: "checked",
    totalAmount: "50461818",
  },
  {
    id: "14",
    invoiceNo: "",
    clientName: "tunmi",
    email: "teset@gmail.com",
    amount: "64279799",
    statusIndex: "good",
    statusName: "checked",
    totalAmount: "50461818",
  },
  {
    id: "4",
    invoiceNo: "",
    clientName: "Alraed",
    email: "teset@gmail.com",
    amount: "79499",
    statusIndex: "good",
    statusName: "checked",
    totalAmount: "50461818",
  },
];
export function InvoiceProvider({ children }: ContextProps) {
  const [invoiceData, setInvoiceData] = useState<InvoiceDataProp[]>([]);
  useEffect(() => {
    setInvoiceData(invoiceApiData);
  }, []);

  return (
    <InvoiceContext.Provider value={{ invoiceData, setInvoiceData }}>
      {children}
    </InvoiceContext.Provider>
  );
}

export const useInvoiceDataContext = () => React.useContext(InvoiceContext);
