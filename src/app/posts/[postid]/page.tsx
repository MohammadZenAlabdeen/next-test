"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPostById } from "@/app/utils/api/api";
import Form from "@/components/Form/Form";
interface PostType {
  id: number;
  title: string;
  description: string;
}

const page = () => {
  const { postid } = useParams();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (postid) {
        const found = await getPostById(Number(postid));
        setPost(found);
      }
    };

    fetchPost();
  }, [postid]);

  return (
    <Form id={post?.id? post.id:1} description={post?.description} title={post?.title} />
  );
};
export default page;
