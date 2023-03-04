import React from "react";

type PageProp = {
  title: string;
};

function PageTitle({ title }: PageProp) {
  return (
    <div>
      <h2 className="text-2xl text-center ">{title}</h2>
    </div>
  );
}

export default PageTitle;
