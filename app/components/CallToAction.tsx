export default function CallToAction() {
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div className='md:h-80 flex flex-col sm:flex-row bg-gray-900 rounded-lg overflow-hidden'>
          {/* content - start */}
          <div className='w-full sm:w-1/2 lg:w-2/5 flex flex-col p-4 sm:p-8'>
            <h2 className='text-white text-xl md:text-2xl lg:text-4xl font-bold mb-4'>
              Can't Choose?
              <br />
              Let us choose for you!
            </h2>
            <p className='max-w-md text-gray-400 mb-8'>
              Click the button below and you will be taken to a random recipe in our catalogue!
            </p>
            <div className='mt-auto'>
              <a
                href='/random'
                className='inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'
              >
                Random Recipe
              </a>
            </div>
          </div>
          {/* content - end */}
          {/* image - start */}
          <div className='w-full sm:w-1/2 lg:w-3/5 h-48 sm:h-auto order-first sm:order-none bg-gray-700'>
            <img
              src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              loading='lazy'
              alt='Photo by @lvnatikk'
              className='w-full h-full object-cover object-center'
            />
          </div>
          {/* image - end */}
        </div>
      </div>
    </div>
  );
}
