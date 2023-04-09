import React, { createContext, useEffect, useState } from "react";

type ProductDataProp = {
  id: string;
  image: string;
  name: string;
  amount: string;
  productID: string;
};

type NewProductContext = {
  setProductData: React.Dispatch<React.SetStateAction<ProductDataProp[]>>;
  productData: ProductDataProp[];
  setOpenProductSelect: React.Dispatch<React.SetStateAction<boolean>>;
  openProductSelect: boolean;
};

export const ProductContext = createContext({} as NewProductContext);

type ContextProps = {
  children: React.ReactNode;
};

const productApiData = [
  {
    id: "3",
    image: "",
    name: "kulikuli",
    amount: "5861",
    productID: "5486",
  },
  {
    id: "45",
    image: "",
    name: "epo pupa",
    amount: "7801",
    productID: "26416",
  },
  {
    id: "14",
    image: "",
    name: "semovita",
    amount: "36974",
    productID: "9871",
  },
  {
    id: "4",
    image: "",
    name: "cream",
    amount: "2587",
    productID: "159765",
  },
];
export function ProductProvider({ children }: ContextProps) {
  const [openProductSelect, setOpenProductSelect] = useState(false);

  const [productData, setProductData] = useState<ProductDataProp[]>([]);

  useEffect(() => {
    setProductData(productApiData);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productData,
        setProductData,
        openProductSelect,
        setOpenProductSelect,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductDataContext = () => React.useContext(ProductContext);
