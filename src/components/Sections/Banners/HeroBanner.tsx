import { bannerSlides } from "@/lib/data";
import { User } from "@/lib/types/user.types";
import Link from "next/link";
import Slider from "react-slick";
type HeroBannerProps = {
  user?: User | null;
};

export default function HeroBanner({ user }: HeroBannerProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className='relative'>
      <Slider {...settings}>
        {bannerSlides.map((slide, index) => (
          <div key={index} className='relative h-[80vh]'>
            {/* Background Image */}
            <div
              className='absolute inset-0 bg-cover bg-center'
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className='absolute inset-0 bg-black/50'></div>
            </div>

            {/* Centered Content */}
            <div className='relative h-full flex items-center justify-center'>
              <div className='text-center text-white max-w-3xl px-4'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                  {slide.title}
                </h1>
                <p className='mt-6 text-lg sm:text-xl'>{slide.description}</p>
                <div className='mt-10 flex justify-center space-x-4'>
                  {!user && (
                    <>
                      <Link
                        href='/auth/register'
                        className='px-8 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                      >
                        Book a Consultation
                      </Link>
                      <Link
                        href='/auth/login'
                        className='px-8 py-3 border border-gray-300 rounded-md text-indigo-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'
                      >
                        Client Login
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
