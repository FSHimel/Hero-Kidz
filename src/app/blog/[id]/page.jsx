import { blogs } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BlogDetails = async ({ params }) => {
  const { id } = await params;

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-content">
              {blog.category}
            </span>

            <span className="text-sm text-base-content/50">{blog.date}</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {blog.title}
          </h1>

          <p className="mt-4 text-lg leading-7 text-base-content/60">
            {blog.excerpt}
          </p>

          <p className="mt-4 text-sm text-base-content/50">
            Written by <span className="font-semibold">{blog.author}</span>
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-8">
          <div className="whitespace-pre-line text-base leading-8 text-base-content/80">
            {blog.content}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-base-300 pt-6">
          <Link href="/blog" className="btn btn-primary">
            ← Back to All Blogs
          </Link>
        </div>
      </article>
    </main>
  );
};

export default BlogDetails;
