/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
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
import EmptyBar from "../EmptyBar";
import { useForm } from "react-hook-form";

export type NewClientProp = {
  id: string;
  image: string;
  name: string;
  email: string;
  billingAddress: string;
  mobileNo: string;
};

export type SearchProp = Pick<NewClientProp, "name" | "mobileNo" | "email">;

const clientData = [
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

function ClientTable() {
  const { register, watch } = useForm<SearchProp>();
  const [pageNumber, setPageNumber] = useState(0);
  const formData = watch();
  const incomingData = clientData;
  const [currentItems, setCurrentItems] = useState<NewClientProp[]>(clientData);

  useEffect(() => {
    let filterData = incomingData.length > 0 ? incomingData : [];
    if (formData.name !== "") {
      filterData = incomingData.filter(client => {
        return client?.name
          ?.toLowerCase()
          ?.includes(formData.name?.toLowerCase());
      });
    }
    if (formData.mobileNo !== "") {
      filterData = incomingData.filter(client => {
        return client?.mobileNo?.includes(formData.mobileNo);
      });
    }
    if (formData.email !== "") {
      filterData = incomingData.filter(client => {
        return client?.email
          ?.toLowerCase()
          ?.includes(formData.email?.toLowerCase());
      });
    }
    setCurrentItems(filterData);
  }, [formData.name, formData.mobileNo, formData.email, incomingData]);

  // const handleDelete = useCallback((item: { id: any }) => {
  //   console.log(item.id);
  // }, []);

  // const handleEdit = useCallback((item: { id: any }) => {
  //   console.log(item.id);
  // }, []);

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
      <div className="bg-white rounded-xl px-3 py-3 mb-3">
        <div className="font-title mb-2">Advanced Search</div>
        <form className="flex flex-col">
          <div className="w-full flex ">
            <div className="mb-2 sm:mb-0 sm:text-left text-default-color flex flex-row font-title flex-1 px-2">
              <div className="h-12 w-12 rounded-[50%] bg-gray-100 mr-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                autoComplete="nope"
                placeholder="User Name"
                className={defaultSearchStyle}
                {...register("name")}
              />
            </div>
            <div className="mb-2 sm:mb-0 sm:text-left text-default-color flex flex-row  font-title flex-1 px-2">
              <div className="h-12 w-12 rounded-[50%] bg-gray-100 mr-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                autoComplete="nope"
                placeholder="User Email"
                className={defaultSearchStyle}
                {...register("email")}
              />
            </div>
            <div className="mb-2 sm:mb-0 sm:text-left text-default-color flex flex-row  font-title flex-1 px-2">
              <div className="h-12 w-12 rounded-[50%] bg-gray-100 mr-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                autoComplete="nope"
                placeholder="Mobile Number"
                className={defaultSearchStyle}
                {...register("mobileNo")}
              />
            </div>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-xl p-3">
        <div className="w-full flex">
          <div className="flex-1 text-left text-default-color font-title">
            Name
          </div>
          <div className="flex-1 text-left text-default-color font-title">
            Mobile
          </div>
          <div className="flex-1 text-left text-default-color font-title">
            Email
          </div>
          <div className="text-left text-default-color font-title sm:w-11">
            Action
          </div>
        </div>

        <div>
          {currentItems.length === 0 ? (
            <EmptyBar title="Client Data" />
          ) : currentItems ? (
            currentItems
              .slice(pagesVisited, pagesVisited + clientPerPage)
              .map(client => (
                <div className={defaultTdWrapperStyle} key={client.id}>
                  <div className={defaultTdStyle}>
                    <div className={defaultTdContentTitleStyle}>Name</div>
                    <div className={defaultTdContent}>
                      {client.image ? (
                        <img
                          className="object-cover w-10 h-10 rounded-2xl"
                          src={client.image}
                          alt={client.name}
                        />
                      ) : (
                        <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-2xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}

                      <span className="pl-1 overflow-hidden whitespace-nowrap text-ellipsis">
                        {client.name}
                      </span>
                    </div>
                  </div>
                  <div className={defaultTdStyle}>
                    <div className={defaultTdContentTitleStyle}>Mobile</div>
                    <div className={defaultTdContent}>
                      <p className="overflow-hidden whitespace-nowrap text-ellipsis ml-[-3px]">
                        {client.mobileNo}
                      </p>
                    </div>
                  </div>
                  <div className={defaultTdStyle}>
                    <div className={defaultTdContentTitleStyle}>Email</div>
                    <div className={defaultTdContent}>
                      <p className="overflow-hidden whitespace-nowrap text-ellipsis ml-[-3px]">
                        {client.email}{" "}
                      </p>
                    </div>
                  </div>
                  <div className={defaultTdActionStyle}>
                    <div className={defaultTdContentTitleStyle}>Action</div>
                    <div className={defaultTdContent}>
                      <Menu
                        menuButton={
                          <MenuButton>
                            <div className="px-2 bg-gray-50 rounded-xl">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-blue-400"
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
              ))
          ) : null}

          {currentItems.length > 0 && (
            <ReactPaginate
              className="inline-flex items-center mt-2 -space-x-px"
              previousLinkClassName="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              nextLinkClassName="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              pageLinkClassName="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              breakLinkClassName="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              activeLinkClassName="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              breakLabel="..."
              onPageChange={changePage}
              // pageRangeDisplayed={1}
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

export default ClientTable;
