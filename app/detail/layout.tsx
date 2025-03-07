import React, { PropsWithChildren } from "react";

const DetailLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <h1>Detail Layout</h1>
      {children}
    </div>
  );
};

export default DetailLayout;
