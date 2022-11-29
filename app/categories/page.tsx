import Link from 'next/link';

export const fetchCategories = async () => {
  const res = await fetch('http://localhost:3000/api/categories');
  const categories = await res.json();
  return categories;
};

export default async function Categories() {
  const categories = await fetchCategories();
  // console.log(categories.categories);

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div className='flex justify-between items-end gap-4 mb-6'>
          <h2 className='text-gray-800 text-2xl lg:text-3xl font-bold'>Categories</h2>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8'>
          {/* product - start */}

          {categories.categories.map((category: any, index: number) => (
            <>
              <div key={index}>
                {/* <Link href=>
                </Link> */}
                <a
                  href='#'
                  className='group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3'
                >
                  <img
                    src={category.strCategoryThumb}
                    alt='category'
                    className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-200'
                    loading='lazy'
                  />
                </a>
                <div>
                  {/* <Link>
                  </Link> */}
                  <div className='flex items-end gap-2'>
                    <span className='text-gray-800 lg:text-lg font-bold'>
                      {category.strCategory}
                    </span>
                  </div>
                </div>
              </div>
            </>
          ))}
          {/* product end */}
        </div>
      </div>
    </div>
  );
}
