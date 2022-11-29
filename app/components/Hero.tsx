import Image from 'next/image';
import food from '../../public/assets/food.jpeg';

export default function Hero() {
  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <section className='flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16'>
          {/* content - start */}
          <div className='xl:w-5/12 flex flex-col justify-center items-center lg:items-start sm:text-center lg:text-left lg:py-12 xl:py-24'>
            <h1 className='text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12'>
              Welcome to FoodHaus.
            </h1>
            <p className='lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12'>
              So many recipes to choose from! You can search by catergory, ingredients, or
              geographical area! Or if you're feeling lucky you can get a random recipe!
            </p>
            <form className='w-full md:max-w-md flex gap-2'>
              <input
                placeholder='Search'
                className='w-full flex-1 bg-gray-50 text-gray-800 placeholder-gray-500 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2'
              />
              <button className='inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2'>
                Search
              </button>
            </form>
          </div>
          {/* content - end */}
          {/* image - start */}
          <div className='xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg'>
            <Image
              src={food}
              loading='lazy'
              alt='Photo by Jane Doan https://www.pexels.com/@hellojanedoan/'
              className='w-full h-full object-cover object-center'
            />
          </div>
          {/* image - end */}
        </section>
      </div>
    </div>
  );
}
