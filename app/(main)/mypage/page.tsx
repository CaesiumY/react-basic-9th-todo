import { MyPageCard } from "@/components/auth/MyPageCard";
import UserTodoList from "@/components/todo/UserTodoList";
import React, { Suspense } from "react";

const MyPage = () => {
  return (
    <section className="flex min-h-svh w-full justify-center p-6 md:p-10">
      <div className="w-full space-y-8">
        <Suspense>
          <MyPageCard />
        </Suspense>
        <UserTodoList />
      </div>
    </section>
  );
};

export default MyPage;
