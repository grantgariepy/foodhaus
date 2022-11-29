import Link from 'next/link';
import { Category } from '../../../typings';
const mealDBAPI = process.env.MEALDB_API;

export const dynamicParams = true;

type PageProps = {
  params: {
    name: string;
  };
};

const fetchCategoryRecipes = async (name: string) => {
  // console.log(name);
  const res = await fetch(
    `https://www.themealdb.com/api/json/v2/${mealDBAPI}/filter.php?c=${name}`,
    { next: { revalidate: 10000 } }
  );

  const category = await res.json();
  return category;
};
export default async function recipeCategory({ params: { name } }: PageProps) {
  const category = await fetchCategoryRecipes(name);
  // console.log(category);
  return (
    <div>
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
          <div className='flex justify-between items-end gap-4 mb-6'>
            <h2 className='text-gray-800 text-2xl lg:text-3xl font-bold'>{name} Recipes</h2>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8'>
            {/* product - start */}

            {category.meals.map((meal: any, index: number) => (
              <div key={index}>
                {/* <Link href=>
                </Link> */}
                <Link
                  href={`/recipes/${meal.idMeal}`}
                  className='group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3'
                >
                  <img
                    src={meal.strMealThumb}
                    alt='category'
                    className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-200'
                    loading='lazy'
                  />
                </Link>
                <div>
                  {/* <Link>
                  </Link> */}
                  <div className='flex items-end gap-2'>
                    <span className='text-gray-800 lg:text-lg font-bold'>{meal.strMeal}</span>
                  </div>
                </div>
              </div>
            ))}
            {/* product end */}
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function generateStaticParams() {
//   const res = await fetch('http://localhost:3000/api/categories');
//   const categories = await res.json();

//   return categories.categories.map((category: any) => ({
//     name: category.strCategory.toString(),
//   }));
// }
