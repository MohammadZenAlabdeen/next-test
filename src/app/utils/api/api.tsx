import axios from "axios";
import { error } from "console";
import { title } from "process";

interface post {
  id: number;
  title: string;
  description: string;
}
const API_BASE_URL = "https://vica-post-api.vercel.app/api/posts";

const fetchPostsFromAPI = async (): Promise<post[]> => {
  try {
    const response = await axios.get<post[]>(API_BASE_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Cache-Control": "max-age=360",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

const fetchPostByIdFromAPI = async (id: number): Promise<post | null> => {
  try {
    const response = await axios.get<post>(`${API_BASE_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};

export const updatePost = async (
  id: number,
  title: string,
  description: string
) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/${id}`,
      { title, description },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error updating post:", error);
  }
};
export const createPost = async (title: string, description: string) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}`,
      { title, description },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error creating post:", error);
  }
};
export const deletePost = async (id: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  } catch (e) {
    console.error(e);
  }
};

export const getPosts = async (): Promise<post[]> => {
  const posts = await fetchPostsFromAPI();
  return posts;
};

export const getPostById = async (id: number): Promise<post | null> => {
  const post = await fetchPostByIdFromAPI(id);
  return post;
};
