'use client'
import { deletePost } from '@/app/utils/api/api';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

interface Post {
  id: number;
  title: string;
  description: string;
}

export const Card = ({ id, title, description }: Post) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deletePost(id);
    router.push('/posts');
  };

  return (
    <div className="bg-slate-900 px-4 w-52 py-5 text-white text-xl flex items-center flex-col gap-3 rounded-xl">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="flex justify-center gap-3">
        <Link href={`/posts/${id}`} className="w-full text-center">
          Edit
        </Link>
        <button onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
