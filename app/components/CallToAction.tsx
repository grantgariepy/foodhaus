export default function CallToAction() {
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div className='max-w-xl flex flex-col items-center text-center mx-auto'>
          <p className='text-green-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6'>
            Proud to introduce
          </p>
          <h1 className='text-black-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12'>
            Revolutionary way to build the web
          </h1>
          <div className='w-full flex flex-col sm:flex-row sm:justify-center gap-2.5'>
            <a
              href='#'
              className='inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'
            >
              Start now
            </a>
            <a
              href='#'
              className='inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'
            >
              Take tour
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
