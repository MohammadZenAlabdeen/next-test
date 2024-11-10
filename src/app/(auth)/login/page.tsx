import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link href={"/register"}>register</Link>
    </div>
  );
};

export default page;
