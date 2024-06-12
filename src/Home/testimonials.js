import React from "react";
import clientImage from "../Assets/clientImage.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import comma from '../Assets/comma.png'

const data = [
  {
    image: clientImage,
    name: "Donald H. James",
    testimonialHeading:
      "Satisfied With The Facilities Dyno Dash Construction Equipment Rental",
    testimonial:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    image: clientImage,
    name: "Kath H. James",
    testimonialHeading:
      "Satisfied With The Facilities Dyno Dash Construction Equipment Rental",
    testimonial:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    image: clientImage,
    name: "Jones H. James",
    testimonialHeading:
      "Satisfied With The Facilities Dyno Dash Construction Equipment Rental",
    testimonial:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    image: clientImage,
    name: "Donald H. James",
    testimonialHeading:
      "Satisfied With The Facilities Dyno Dash Construction Equipment Rental",
    testimonial:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
];

const Testimonials = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="w-full"
    >
      {data.map((item) => (
        <SwiperSlide key={item.testimonialHeading} className="p-2 mb-20 mt-20">
          <div className="items-center justify-center h-96 p-10 bg-white shadow-sm border border-gray-200">
            <img src={comma} className="absolute top-0"></img>
            <h1 className="text-2xl font-bold text-slate-900">
              {item.testimonialHeading}
            </h1>

            <p className="text-lg text-gray-500 mt-5">{item.testimonial}</p>
            <div className="flex flex-row items-center mt-5">
              <img
                src={item.image}
                alt="client"
                className="h-20 w-20 rounded-full"
              />
              <div className="ml-5">
                <div className=" flex flex-row items-center">
                  <h1 className="text-xl font-semibold text-slate-900">
                    {item.name}
                  </h1>
                  <div className="stars text-sm ml-2">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                </div>

                </div>
                <p className="text-gray-500">Rental Customer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;
