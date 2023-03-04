/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import cn from "classnames";

type SectionProp = {
  children: React.ReactNode;
  className?: string;
};

function SectionTitle({ children, className }: SectionProp) {
  const cssName = cn("primary-self-text text-lg font-title", className);
  // const classes = useMemo(() => {
  //   const defaultClassName = "primary-self-text text-lg font-title";

  //   if (className) {
  //     return defaultClassName + " " + className;
  //   }

  //   return defaultClassName;
  // }, [className]);

  return <div className={cssName}>{children}</div>;
}

export default SectionTitle;
