import React from "react";

const blogs = [
  {
    id: 1,
    category: "Exercise",
    title: "CONQUERING CONSISTENCY: HOW TO MAKE EXERCISE A HABIT YOU LOVE",
    date: "Jan 28, 2024",
    time: "5 min read",
    image: "./blog1.png",
  },
  {
    id: 2,
    category: "Workout Tips",
    title: "WEIGHT LOSS: A SUSTAINABLE APPROACH FOR A HEALTHIER YOU",
    date: "Jan 21, 2024",
    time: "3 min read",
    image: "./blog2.png",
  },
  {
    id: 3,
    category: "Nutrition",
    title: "FUEL YOUR FITNESS: A GUIDE TO NUTRITION FOR PEAK PERFORMANCE",
    date: "Jan 24, 2024",
    time: "3 min read",
    image: "./blog3.png",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-black py-10">
      <h2 className="text-center text-red-500 text-3xl font-bold mb-8">
        OUR LATEST BLOGS
      </h2>

      {/* Blog Layout */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-10">
        {/* Left Side: Large Image */}
        <div className="relative md:w-2/3 w-full">
          <img
            src={blogs[0].image}
            alt={blogs[0].title}
            className="w-full h-[500px] object-cover rounded-lg brightness-50"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <span className="bg-red-500 px-2 py-1 text-sm font-bold">
              {blogs[0].category}
            </span>
            <h3 className="mt-2 text-lg font-bold">{blogs[0].title}</h3>
            <p className="text-sm">
              {blogs[0].date} | {blogs[0].time}
            </p>
          </div>
        </div>

        {/* Right Side: Two Smaller Images */}
        <div className="flex flex-col justify-between gap-4 md:w-1/3 w-full">
          {blogs.slice(1).map((blog) => (
            <div key={blog.id} className="relative w-full">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[240px] object-cover rounded-lg brightness-50"
              />
              <div className="absolute bottom-2 left-2 text-white">
                <span className="bg-green-500 px-2 py-1 text-xs font-bold">
                  {blog.category}
                </span>
                <h4 className="mt-1 text-sm font-bold">{blog.title}</h4>
                <p className="text-xs">
                  {blog.date} | {blog.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
