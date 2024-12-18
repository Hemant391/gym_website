import React from "react";
import Slider from "react-slick";

// Import slick-carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    image: "/gymimg.png", // Ensure images are in the public folder
    stars: 5,
    feedback: "This gym helped me achieve my fitness goals!",
  },
  {
    id: 2,
    image: "/gymimg2.png",
    stars: 5,
    feedback: "Amazing trainers and top-class equipment.",
  },
  {
    id: 3,
    image: "/gymimg.png",
    stars: 5,
    feedback: "A clean and well-maintained gym!",
  },
  {
    id: 4,
    image: "/gymimg2.png",
    stars: 5,
    feedback: "Great community and workout environment!",
  },
  {
    id: 5,
    image: "/gymimg.png",
    stars: 5,
    feedback: "Affordable and worth every penny.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-800 py-10 text-white">
      <h2 className="text-center text-3xl font-bold mb-6">WHAT PEOPLE SAY</h2>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1"> {/* Added horizontal padding */}
              <div className="bg-gray-700 p-6 rounded-lg text-center ">
                <img
                  src={testimonial.image}
                  alt="User"
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <div className="flex justify-center mb-2">
                  {Array.from({ length: testimonial.stars }).map((_, idx) => (
                    <span key={idx} className="text-red-500 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-xs">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
