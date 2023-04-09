type TaxProp = {
  id: string;
  title: string;
  type: string;
  value: string;
  amount: number;
};

type UpdateProductsProp = {
  amount: number;
  id: string | undefined;
  name: string;
  productID: string;
  quantity: number;
}[];

export const sumProductTotal = (updateProducts: UpdateProductsProp) => {
  const total = updateProducts.reduce(
    (prev: number, product: { quantity: number; amount: number }) => {
      const strValue = (product.quantity * product.amount)
        .toFixed(4)
        .toString()
        .slice(0, -2);

      return parseFloat(strValue) + prev;
    },
    0,
  );
  return total;
};

export const sumTotalTaxWithoutPercent = (taxes: TaxProp[]) => {
  return taxes
    ?.filter((tax: { type: string }) => tax.type !== "percentage")
    ?.reduce((prev, tx) => {
      return prev + parseFloat(tx.amount.toString());
    }, 0);
};

export const getTotalTaxesWithPercent = (
  taxes: TaxProp[],
  subTotalAmount: number,
) => {
  const isFindIndex = taxes.findIndex(tax => tax.type === "percentage");
  if (isFindIndex !== -1) {
    const updatedTaxes = [...taxes];
    const amount = (Number(taxes[isFindIndex].value) / 100) * subTotalAmount;
    updatedTaxes[isFindIndex] = {
      ...updatedTaxes[isFindIndex],
      amount,
    };
    return [...updatedTaxes];
  }
  return taxes;
};

export const sumTotalTaxes = (taxes: TaxProp[]) => {
  return taxes?.reduce((prev, tx) => {
    return prev + parseFloat(tx.amount.toString());
  }, 0);
};

export const sumTotalAmount = (subTotal: string, taxAmount: string) => {
  const total = parseFloat(subTotal) + parseFloat(taxAmount);

  return Number.isInteger(total) // checking if is a whole number
    ? total
    : total?.toFixed(4)?.toString()?.slice(0, -2); // this is use to convert it to a whole number
};
