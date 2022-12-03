import Link from 'next/link';
const mealDBAPI = process.env.MEALDB_API;

const fetchRandomSelection = async () => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v2/${mealDBAPI}/randomselection.php`,
    {
      next: { revalidate: 86400 },
    }
  );
  const latest = await res.json();
  return latest;
};

export default async function RandomSelection() {
  const randomRecipes = await fetchRandomSelection();
  // console.log(latestRecipes);

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        {/* text - start */}
        <div className='mb-10 md:mb-16'>
          <h2 className='text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
            FoodHaus Favorites
          </h2>
        </div>
        {/* text - end */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {/* product - start */}
          {randomRecipes.meals.slice(0, 8).map((meal: any, index: number) => (
            <div key={index}>
              <Link
                href={`/recipes/${meal.idMeal}`}
                className='group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative'
              >
                <img
                  src={meal.strMealThumb}
                  loading='lazy'
                  alt='food :)'
                  className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-200'
                />
              </Link>
              <div className='flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4'>
                <div className='flex flex-col'>
                  <Link
                    href={`/recipes/${meal.idMeal}`}
                    className='text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100'
                  >
                    {meal.strMeal}
                  </Link>
                  <span className='text-gray-500 text-sm lg:text-base'>
                    {meal.strArea} - {meal.strCategory}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {/* product - end */}
        </div>
      </div>
    </div>
  );
}
