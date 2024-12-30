"use client";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Yasir",
    job: "Chief",
    review:
      "Stunning collection of photos! The website is beautifully designed, easy to navigate, and the quality of the images is top-notch. Perfect for photography lovers.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Rohit",
    job: "Business Analyst",
    review:
      "Amazing user experience! The layout showcases the photographs in a professional and captivating way. Highly recommended for anyone passionate about art and photography.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Aquib",
    job: "Software Developer",
    review:
      "Impressive portfolio! The website loads quickly, and the photo gallery is organized perfectly. A must-visit for photography enthusiasts.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Ritik",
    job: "CEO",
    review:
      "Beautifully curated photography website with an intuitive layout. High-quality visuals and clear categorization make it enjoyable to browse.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Sonu",
    job: "Gamer",
    review:
      "A visual treat! The photographs are stunning, and the website sleek design enhances the viewing experience. Highly recommended.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Ankush",
    job: "Data Analyst",
    review:
      "Fantastic photography website with an elegant design and exceptional photo quality. Easy navigation makes exploring the galleries a pleasure.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Kamlesh",
    job: "AI Developer",
    review:
      "Outstanding work displayed on a well-crafted platform. The website is responsive, visually appealing, and showcases the photographer  talent effectively.",
  },
  {
    avatar: "/reviews/avatar-1.png",
    name: "Aman",
    job: "Salesman",
    review:
      "Clean, professional design with remarkable photos that tell a story. The website is simple yet powerful, highlighting the artist creativity.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 max-sm:text-2xl text-center  mx-auto">
          They say about our work
        </h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="p-8 min-h-[300px] hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700">
                  <CardHeader className="p-0 mb-3">
                    <div className="flex flex-col items-start gap-x-4 cursor-pointer ">
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                        className="mb-2"
                      />
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p className="text-blue-500">{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className=" text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
