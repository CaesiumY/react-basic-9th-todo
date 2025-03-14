import Link from "next/link";
import React from "react";

const TodoHeader = () => {
  return (
    <header className="mb-4">
      <div className="container mx-auto p-2 flex flex-row">
        <Link href="/">
          <h1 className="text-4xl font-bold">Todo List</h1>
        </Link>
      </div>
    </header>
  );
};

export default TodoHeader;
