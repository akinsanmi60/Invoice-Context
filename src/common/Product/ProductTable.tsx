/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import {
  defaultTdStyle,
  defaultTdActionStyle,
  defaultTdWrapperStyle,
  defaultTdContent,
  defaultTdContentTitleStyle,
  defaultSearchStyle,
} from "../../constants/defaultStyles";
import ReactPaginate from "react-paginate";
import { useForm } from "react-hook-form";
import ProductIcon from "../../Icons/ProductIcon";
import ProductIDIcon from "../../Icons/ProductIDIcon";

export type NewProductProp = {
  productID: string;
  image: string;
  name: string;
  amount: string;
};

export type SearchProp = Pick<NewProductProp, "productID" | "name">;

const productData = [
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

function ProductTable({ showAdvanceSearch = false }) {
  const { register, watch } = useForm<SearchProp>();
  const [pageNumber, setPageNumber] = useState(0);
  const formData = watch();
  const [currentItems, setCurrentItems] = useState(productData);

  useEffect(() => {
    let filterData = productData.length > 0 ? productData : [];
    if (formData.name !== "") {
      filterData = productData.filter(productItem => {
        return productItem?.name
          ?.toLowerCase()
          ?.includes(formData.name?.toLowerCase());
      });
    }
    if (formData.productID !== "") {
      filterData = productData.filter(productItem => {
        return productItem?.productID?.includes(formData.productID);
      });
    }

    setCurrentItems(filterData);
  }, [formData.name, formData.productID]);

  // const handleEdit = useCallback(
  //   item => {
  //     dispatch(setEditedId(item.id));
  //   },
  //   [dispatch],
  // );

  const clientPerPage = 2;
  const pagesVisited = pageNumber * clientPerPage;
  // setting the pageCount in number
  const pageCount = Math.ceil(currentItems.length / clientPerPage);
  // enable to change page number
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="bg-white rounded-xl p-3 mb-3">
        <div className="font-title mb-2">Advanced Search</div>
        <div className="flex w-full">
          <div className="mb-2 sm:mb-0 sm:text-left text-default-color flex flex-row  font-title flex-1 px-2">
            <div className="h-12 w-12 rounded-[50%] bg-gray-100 mr-2 flex justify-center items-center text-gray-400">
              <ProductIDIcon />
            </div>
            <input
              placeholder="Product ID"
              className={defaultSearchStyle}
              {...register("productID")}
            />
          </div>
          <div className="mb-2 sm:mb-0 sm:text-left text-default-color flex flex-row font-title flex-1 px-2">
            <div className="h-12 w-12 rounded-[50%] bg-gray-100 mr-2 flex justify-center items-center text-gray-400">
              <ProductIcon />
            </div>
            <input
              autoComplete="nope"
              placeholder="Product Name"
              className={defaultSearchStyle}
              {...register("name")}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-3">
        <div className="w-full flex">
          <div className="text-left text-default-color font-title flex-1">
            ProductID
          </div>
          <div className="text-left text-default-color font-title flex-1">
            Name
          </div>
          <div className="text-left text-default-color font-title flex-1">
            Amount
          </div>
          <div className="text-left text-default-color font-title sm:w-11">
            Action
          </div>
        </div>

        <div>
          {currentItems &&
            currentItems
              .slice(pagesVisited, pagesVisited + clientPerPage)
              .map(product => (
                <div className={defaultTdWrapperStyle} key={product.id}>
                  <div className={defaultTdStyle}>
                    <div className={defaultTdContentTitleStyle}>ProductID</div>
                    <div className={defaultTdContent}>
                      {product.image ? (
                        <img
                          className="object-cover h-10 w-10 rounded-2xl"
                          src={product.image}
                          alt={product.name}
                        />
                      ) : (
                        <span className="h-10 w-10 rounded-2xl bg-gray-100 flex justify-center items-center">
                          <ProductIcon />
                        </span>
                      )}
                      <span className="whitespace-nowrap text-ellipsis overflow-hidden pl-1">
                        {product.productID || "#"}
                      </span>
                    </div>
                  </div>

                  <div className={defaultTdStyle}>
                    <div className={defaultTdContentTitleStyle}>Name</div>
                    <div className={defaultTdContent}>
                      <span className="whitespace-nowrap text-ellipsis overflow-hidden">
                        {product.name}
                      </span>
                    </div>
                  </div>

                  <div className={defaultTdStyle}>
                    <div className={defaultTdContentTitleStyle}>Amount</div>
                    <div className={defaultTdContent}>
                      <span className="whitespace-nowrap text-ellipsis overflow-hidden">
                        {product.amount}
                      </span>
                    </div>
                  </div>

                  <div className={defaultTdActionStyle}>
                    <div className={defaultTdContentTitleStyle}>Action</div>
                    <div className={defaultTdContent}>
                      <Menu
                        menuButton={
                          <MenuButton>
                            <div className="bg-gray-50 px-2 rounded-xl">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                              </svg>
                            </div>
                          </MenuButton>
                        }
                        transition
                      >
                        <MenuItem>Edit</MenuItem>
                        <MenuItem>Delete</MenuItem>
                      </Menu>
                    </div>
                  </div>
                </div>
              ))}

          {currentItems.length > 0 && (
            <ReactPaginate
              className="inline-flex items-center -space-x-px mt-2"
              previousLinkClassName="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              nextLinkClassName="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              pageLinkClassName="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              breakLinkClassName="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              activeLinkClassName="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              breakLabel="..."
              onPageChange={changePage}
              pageRangeDisplayed={1}
              pageCount={pageCount}
              previousLabel="<"
              nextLabel={">"}
              // renderOnZeroPageCount={null}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ProductTable;
