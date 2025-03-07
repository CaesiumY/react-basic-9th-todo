import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      HomePage
      <Link href="/detail">Detail Page</Link>
    </div>
  );
};

export default HomePage;
