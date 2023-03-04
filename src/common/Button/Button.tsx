import React, { useMemo } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children?: React.ReactNode;
  size?: string;
  block?: boolean;
  outlined?: boolean;
  secondary?: boolean;
  success?: boolean;
  danger?: boolean;
  onClick?: () => void;
  types?: "reset" | "button" | "submit" | undefined;
};

function Button(props: ButtonProps) {
  const {
    children,
    size = "",
    block = false,
    outlined = false,
    secondary = false,
    success = false,
    danger = false,
    types,
  } = props;

  const buttonClasses = useMemo(() => {
    let defaultClasses =
      "rounded-[6px] text-white flex flex-row items-center justify-center";

    if (block) {
      defaultClasses += " block w-full ";
    }

    if (size === "small") {
      defaultClasses += " text-sm h-8 px-2 ";
    } else {
      defaultClasses += " h-12 px-2";
    }

    if (outlined) {
      if (secondary) {
        defaultClasses += " border-gray-400 border text-[green]";
      } else if (success) {
        defaultClasses += " border-green-600 border text-green-500";
      } else if (danger) {
        defaultClasses += " border-red-500 border text-red-500";
      } else defaultClasses += " primary-self-text border-blue-400 border ";
    } else {
      if (secondary) {
        defaultClasses += " bg-gray-400 ";
      } else if (success) {
        defaultClasses += " bg-green-600 ";
      } else if (danger) {
        defaultClasses += " bg-red-500 ";
      } else defaultClasses += " primary-background-color ";
    }

    return defaultClasses;
  }, [block, danger, outlined, secondary, size, success]);

  return (
    <motion.button
      whileHover={{
        scale: size === "small" ? 1.02 : 1.1,
        transition: {
          type: "spring",
          damping: 15,
          duration: 0.1,
        },
      }}
      whileTap={{ scale: 0.9 }}
      type={types}
      className={buttonClasses}
      {...props}
      onClick={props.onClick}
    >
      {children}
    </motion.button>
  );
}

export default Button;
