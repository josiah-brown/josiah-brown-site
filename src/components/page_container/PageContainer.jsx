import React from "react";

const PageContainer = (props) => {
  return (
    <div className="relative mx-5 h-screen md:mx-28 overflow-hidden">
      {props.children}
    </div>
  );
};

export default PageContainer;
