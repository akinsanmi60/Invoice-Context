import React from "react";
import Navbar from "../common/Navbar/Navbar";
import Sidebar from "../common/Navbar/Sidebar";
import { useAppContext } from "../context/AppContext";
// import { getIsOpenClientSelector } from "../../store/clientSlice";
// import { getIsOpenProductSelector } from "../../store/productSlice";

type CProps = {
  children: React.ReactNode;
};

const defaultContainerClasses =
  "z-0 transform duration-200 lg:flex-grow pt-20 ";

function AppContainer({ children }: CProps) {
  const { stateData } = useAppContext();
  const { showNavbar, escapeOverflow } = stateData;

  //check it again
  const isOpenProductSelector = false;
  const isOpenClientSelector = false;

  return (
    <div
      className={
        "relative min-h-screen lg:flex" +
        (escapeOverflow ? "" : "app-wraper ") +
        (isOpenClientSelector || isOpenProductSelector
          ? " fixed-body-scroll"
          : "")
      }
    >
      <Navbar />
      <Sidebar />
      <div
        className={
          showNavbar
            ? defaultContainerClasses + " pl-72 ease-in"
            : defaultContainerClasses + " "
        }
      >
        <div
          className={
            "container mx-auto" +
            (showNavbar
              ? "scale-100 origin-top ease-in md:origin-center md:scale-100"
              : "")
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default AppContainer;
