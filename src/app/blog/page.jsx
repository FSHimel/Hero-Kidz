import { blogs } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

// const blogs = [
//   {
//     id: 1,
//     title: "How Educational Toys Help Children Learn",
//     excerpt:
//       "Discover how the right toys can improve creativity, problem-solving skills, and learning in children.",
//     image: "/images/blog-1.jpg",
//     category: "Education",
//     author: "Hero Kidz",
//     date: "Sep 15, 2026",
//   },
//   {
//     id: 2,
//     title: "Best Toys for Developing Creativity",
//     excerpt:
//       "Explore some of the best toys that encourage children to think creatively and express their imagination.",
//     image: "/images/blog-2.jpg",
//     category: "Parenting",
//     author: "Hero Kidz",
//     date: "Sep 10, 2026",
//   },
//   {
//     id: 3,
//     title: "Choosing the Right Toy for Your Child",
//     excerpt:
//       "A simple guide to choosing safe, fun, and age-appropriate toys for your little ones.",
//     image: "/images/blog-3.jpg",
//     category: "Tips",
//     author: "Hero Kidz",
//     date: "Sep 05, 2026",
//   },
// ];

const Blog = () => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Our Blog
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Latest From Hero Kidz
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base-content/60">
            Helpful tips, ideas, and insights for parents and children.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-content">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col p-5">
                <div className="mb-3 flex items-center gap-2 text-xs text-base-content/50">
                  <span>{blog.author}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>

                <h3 className="line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary">
                  {blog.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-base-content/60">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blog/${blog.id}`}
                  className="mt-5 inline-flex w-fit items-center font-semibold text-primary transition-all hover:gap-2"
                >
                  Read More
                  <span className="ml-1">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 text-center">
          <Link href="/blog" className="btn btn-primary px-6">
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
