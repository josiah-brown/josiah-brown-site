import React from "react";

const PageContainer = (props) => {
  return (
    <div className="relative mx-5 md:mx-28 adjusted_max_h overflow-hidden">
      {props.children}
    </div>
  );
};

export default PageContainer;
