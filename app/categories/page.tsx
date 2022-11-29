import Link from 'next/link';
import CategoryItem from './CategoryItem';

const fetchCategories = async () => {
  const res = await fetch('http://foodhaus.vercel.app/api/categories');
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
            <CategoryItem
              name={category.strCategory}
              thumb={category.strCategoryThumb}
              desc={category.strCategoryDescription}
              index={index}
            />
          ))}
          {/* product end */}
        </div>
      </div>
    </div>
  );
}
