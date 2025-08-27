import { features } from "@/lib/data";

export default function WhyUsSection() {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 text-center'>
        <h2 className='text-3xl font-bold text-gray-900 mb-12'>Why Us?</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className='p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-115 transform transition duration-300 ease-in-out'
              >
                <div className='flex justify-center mb-4 text-indigo-600'>
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-600'>{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
