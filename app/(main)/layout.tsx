import TodoHeader from "@/components/todo/layout/TodoHeader";
import React, { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <TodoHeader />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
