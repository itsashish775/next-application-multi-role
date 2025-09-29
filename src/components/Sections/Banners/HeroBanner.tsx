import { bannerSlides } from "@/lib/data";
import { User } from "@/lib/types/user.types";
import Image from "next/image";
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
    // autoplay: true,
    // autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className='relative'>
      <Slider {...settings}>
        {bannerSlides.map((slide, index) => (
          <div key={index} className='relative h-[80vh]'>
            {/* Background Image */}
            <div className='absolute inset-0'>
              <Image
                src={`/${slide.image}`}
                alt='Slide background'
                fill
                priority
                className='object-cover object-center'
              />
              <div className='absolute inset-0 bg-black/50' />
            </div>

            {/* Centered Content */}
            <div className='relative h-full flex items-baseline md:items-center justify-center max-w-7xl '>
              {/* Text Section */}
              <div className='text-left text-white w-full max-w-6xl px-6'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight'>
                  {slide.title}
                </h1>
                <div className='inline-block w-full sm:w-auto my-3 text-left'>
                  <p className='px-4 sm:px-6 py-2 rounded sm:rounded-xl md:rounded-3xl lg:rounded-full bg-slate-500 text-white text-sm sm:text-base text-center'>
                    Consult in 10 Indian Languages, starting at just ₹31/min
                  </p>
                </div>
                <p className='mt-6 text-lg sm:text-xl text-gray-200'>
                  {slide.description}
                </p>

                <div className='mt-8 flex flex-col sm:flex-row items-center gap-4'>
                  {/* Consult Now Button */}
                  <Link
                    href='/consult'
                    className='w-full sm:w-auto text-center px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm sm:text-base'
                  >
                    Consult now
                  </Link>

                  <div className="flex flex-col sm:flex-row md:flex-row gap-2 items-center">
                    {/* Online Lawyers */}
                    <div className='flex  items-center space-x-2 bg-black/30 px-4 py-2 rounded-full'>
                      {/* Avatars */}
                      <div className='flex -space-x-2'>
                        <img
                          src='/avatars/lawyer1.jpg'
                          alt='lawyer1'
                          className='w-8 h-8 rounded-full border-2 border-white'
                        />
                        <img
                          src='/avatars/lawyer2.jpg'
                          alt='lawyer2'
                          className='w-8 h-8 rounded-full border-2 border-white'
                        />
                        <img
                          src='/avatars/lawyer3.jpg'
                          alt='lawyer3'
                          className='w-8 h-8 rounded-full border-2 border-white'
                        />
                      </div>
                      <span className='text-white text-sm sm:text-base font-medium'>
                        +166 Online Lawyers
                      </span>
                      <span className='w-2 h-2 rounded-full bg-green-500'></span>
                    </div>

                    {/* Online Calls */}
                    <div className='flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full'>
                      <span className='w-6 h-6 flex items-center justify-center rounded-full bg-gray-700'>
                        📞
                      </span>
                      <span className='text-white text-sm sm:text-base font-medium'>
                        +23 Online Calls
                      </span>
                      <span className='w-2 h-2 rounded-full bg-yellow-500'></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
