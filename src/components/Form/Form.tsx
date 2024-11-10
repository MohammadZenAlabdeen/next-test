"use client";
import React, { FormEvent, useRef } from "react";
import { createPost, updatePost } from "@/app/utils/api/api";
import { useRouter } from "next/navigation";

interface PostType {
  id: number;
  title: string | null | undefined;
  description: string | null | undefined;
}

const Form =  ({ id, title, description }: PostType) => {
  const form = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const titleValue = (form.current.elements[0] as HTMLInputElement).value;
      const descValue = (form.current.elements[1] as HTMLInputElement).value;

      if (id !== 0) {
        await updatePost(id, titleValue, descValue);
      } else {
        await createPost(titleValue, descValue);
      }

      router.push("/posts"); // Navigate to /posts after submission
    }
  };

  return (
    <form
      ref={form}
      onSubmit={onSubmit}
      className="px-8 bg-slate-800 flex items-center w-96 gap-14 py-24 flex-col rounded-xl"
    >
      <input
        type="text"
        className="bg-slate-500 text-white rounded border-none px-2 py-2"
        defaultValue={title || ""}
      />
      <input
        type="text"
        className="bg-slate-500 text-white rounded border-none px-2 py-2"
        defaultValue={description || ""}
      />
      <button
        type="submit"
        className="bg-slate-700 text-white px-5 py-3 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
