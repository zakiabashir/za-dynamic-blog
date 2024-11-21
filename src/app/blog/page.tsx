
import React from "react";
import { buttonVariants } from "../../components/ui/button";
import Link from "next/link";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import fs from "fs/promises";

// Define the Blog type
type BlogData = {
  image: string;
  title: string;
  description: string;
  author: string;
  date: string | number | Date;
  slug: string;
};

// Get blogs from the `content` folder
async function getBlogs(): Promise<BlogData[]> {
  const contentDir = path.join(process.cwd(), "content");

  // Read all files in the `content` directory
  let dirContent: string[] = [];
  try {
    dirContent = await fs.readdir(contentDir);
  } catch (error) {
    console.error("Error reading content directory", error);
    return [];
  }

  // Process each Markdown file
  const blogs: BlogData[] = (
    await Promise.all(
      dirContent.map(async (file) => {
        const filePath = path.join(contentDir, file);

        // Read file content
        let fileContent = "";
        try {
          fileContent = await fs.readFile(filePath, "utf-8");
        } catch (error) {
          console.error(`Error reading file: ${filePath}`, error);
          return null;
        }

        const { data } = matter(fileContent);

        // Ensure required fields are available
        if (!data.title || !data.slug) {
          console.error(`Missing required fields in file: ${filePath}`);
          return null;
        }

        return {
          title: data.title || "Untitled Blog",
          description: data.description || "No description available",
          author: data.author || "Anonymous",
          date: data.date || new Date(),
          slug: data.slug || file.replace(".md", ""),
          image: data.image || "/default-image.jpg",
        } as BlogData;
      })
    )
  ).filter((blog): blog is BlogData => blog !== null); // Remove nulls

  return blogs;
}

// Blog listing component
const Blog = async () => {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden dark:border-2"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <div className="text-sm mb-4">
                <span>By {blog.author}</span> |{" "}
                <span>
                  {new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: "outline" })}
              >
                Click here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
