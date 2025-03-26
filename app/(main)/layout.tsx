import TodoHeader from "@/components/todo/layout/TodoHeader";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React, { PropsWithChildren } from "react";

const MainLayout = async ({ children }: PropsWithChildren) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <div>
      <TodoHeader />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
