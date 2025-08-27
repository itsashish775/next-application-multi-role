import { services } from "@/lib/data";
import { Link } from "lucide-react";

export default function Services() {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center text-gray-900'>
          Our Legal Services
        </h2>

        {/* Services Grid */}
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services?.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className='relative rounded-2xl shadow-md transition group 
             hover:shadow-lg hover:shadow-indigo-300 overflow-hidden'
            >
              {/* Background Image */}
              <div className='absolute inset-0'>
                <img
                  src={"https://picsum.photos/600/400"}
                  alt={service.title}
                  className='w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:blur-sm'
                />
                {/* Optional dark overlay (can be tuned) */}
                <div className='absolute inset-0 bg-black/30 transition duration-500 group-hover:bg-black/40'></div>
              </div>

              {/* Foreground Content */}
              <div className='relative p-6'>
                <h3 className='text-xl font-bold mb-2 text-white'>
                  {service.title}
                </h3>
                <p className='text-gray-200 mb-4'>{service.description}</p>

                {service.isDisabled ? (
                  <span className='text-gray-400 font-semibold cursor-not-allowed'>
                    Click Here →
                  </span>
                ) : (
                  <Link
                    href={service.link}
                    className='text-indigo-300 font-semibold hover:underline'
                  >
                    Click Here →
                  </Link>
                )}
              </div>
            </div>
          ))}

          {/* View More Card */}
          <div className='flex items-center justify-center bg-indigo-600 text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer'>
            <a href='public/services' className='text-xl font-semibold'>
              View More Services →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
