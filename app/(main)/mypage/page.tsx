import { MyPageCard } from "@/components/auth/MyPageCard";
import React from "react";

const MyPage = () => {
  return (
    <section className="flex min-h-svh w-full justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <MyPageCard />
      </div>
    </section>
  );
};

export default MyPage;
