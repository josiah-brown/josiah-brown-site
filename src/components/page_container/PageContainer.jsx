import React from "react";

const PageContainer = (props) => {
  return (
    <div
      data-testid="page-container"
      className="relative adjusted_max_h bg-white dark:bg-neutral-800"
    >
      {props.children}
    </div>
  );
};

export default PageContainer;
