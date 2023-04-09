import React, { createContext, useEffect, useState } from "react";

type NewClientProp = {
  id: string;
  image: string;
  name: string;
  email: string;
  billingAddress: string;
  mobileNo: string;
};

type NewClientContext = {
  setClientData: React.Dispatch<React.SetStateAction<NewClientProp[]>>;
  clientData: NewClientProp[];
  openClientSelect: boolean;
  setOpenClientSelect: React.Dispatch<React.SetStateAction<boolean>>;
  clientSelector: string;
  setClientSelector: React.Dispatch<React.SetStateAction<string>>;
  selectClientData: NewClientProp;
  setSelectClientData: React.Dispatch<React.SetStateAction<NewClientProp>>;
};

export const AppDataContext = createContext({} as NewClientContext);

type ContextProps = {
  children: React.ReactNode;
};

const clientAPiData = [
  {
    id: "3",
    image: "",
    name: "Akinsanmi",
    email: "teset@gmail.com",
    mobileNo: "09064378790",
    billingAddress: "Lagos",
  },
  {
    id: "45",
    image: "",
    name: "Lekan",
    email: "hald@gmail.com",
    mobileNo: "09165789456",
    billingAddress: "Lagos",
  },
  {
    id: "14",
    image: "",
    name: "tunmi",
    email: "set@gmail.com",
    mobileNo: "08164279799",
    billingAddress: "Lagos",
  },
  {
    id: "4",
    image: "",
    name: "Alraed",
    email: "homerun@gmail.com",
    mobileNo: "08064779499",
    billingAddress: "Lagos",
  },
];

export function ApiProvider({ children }: ContextProps) {
  const [openClientSelect, setOpenClientSelect] = useState(false);
  const [clientSelector, setClientSelector] = useState("");
  const [clientData, setClientData] = useState<NewClientProp[]>([]);
  const [selectClientData, setSelectClientData] = useState<NewClientProp>({
    id: "",
    image: "",
    name: "",
    email: "",
    billingAddress: "",
    mobileNo: "",
  });

  useEffect(() => {
    setClientData(clientAPiData);
  }, []);

  useEffect(() => {
    const isFind = clientAPiData.findIndex(
      client => client.id === clientSelector,
    );

    if (isFind !== -1) {
      setSelectClientData(clientAPiData[isFind]);
      return;
    }
  }, [clientSelector]);

  return (
    <AppDataContext.Provider
      value={{
        openClientSelect,
        setOpenClientSelect,
        clientSelector,
        setClientSelector,
        clientData,
        setClientData,
        selectClientData,
        setSelectClientData,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export const useClientDataContext = () => React.useContext(AppDataContext);
