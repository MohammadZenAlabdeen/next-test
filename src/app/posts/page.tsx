import Link from "next/link";
import { title } from "process";
import React, { Suspense } from "react";

import { getPosts } from "../utils/api/api";
import { Card } from "@/components/Card/Card";
import Loading from "../loading";
interface post {
  id: number;
  title: string;
  description: string;
}
const page = async () => {
  const posts = await getPosts();
  return (
      <div className="w-full h-full flex items-start justify-start gap-8 flex-wrap p-12 relative">
        <Link
          href={"/posts/create"}
          className=" absolute top-4 right-4 bg-slate-700 text-white px-3 py-1 rounded"
        >
          create post
        </Link>
        {posts?.map((element: post) => {
          return (
            <Card
              id={element?.id}
              title={element?.title}
              description={element?.description}
            />
          );
        })}
      </div>
  );
};

export default page;
