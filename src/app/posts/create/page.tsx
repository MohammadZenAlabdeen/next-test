"use client";
import React, { useEffect, useState } from "react";
import Form from "@/components/Form/Form";
import { title } from "process";
interface PostType {
  id: number;
  title: string;
  description: string;
}

const page =  () => {


  return (
    <Form id={0} title={''} description={''}/>
  );
};
export default page;
