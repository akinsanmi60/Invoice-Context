import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useClientDataContext } from "../../context/clientDataContext";
import ClientTable from "./ClientTable";

function ClientChooseModal() {
  const { openClientSelect, setOpenClientSelect } = useClientDataContext();

  const [animate, setAnimate] = useState(false);

  const onCancelHandler = useCallback(() => {
    setOpenClientSelect(false);
  }, [setOpenClientSelect]);

  useEffect(() => {
    if (openClientSelect === true) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [openClientSelect]);

  return openClientSelect === true ? (
    <motion.div
      className="modal-container"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: animate ? 1 : 0,
      }}
      transition={{
        type: "spring",
        damping: 18,
      }}
    >
      <div className="relative">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <ClientTable clientSelected={openClientSelect} />
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={onCancelHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  ) : null;
}

export default ClientChooseModal;
