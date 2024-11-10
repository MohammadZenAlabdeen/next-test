import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Register</h1>
      <Link href={"/login"}>login</Link>
    </div>
  );
};

export default page;
