import React from "react";

const BeforeAfterComparison = () => {
  return (
    <section className="bg-black py-10 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="https://via.placeholder.com/400x500"
            alt="Before"
            className="w-full rounded-lg"
          />
          <img
            src="https://via.placeholder.com/400x500"
            alt="After"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterComparison;
