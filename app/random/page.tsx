// import { RandomRecipe } from '../../typings';
const mealDBAPI = process.env.MEALDB_API;

const fetchRandomRecipe = async () => {
  const res = await fetch(`https://www.themealdb.com/api/json/v2/${mealDBAPI}/random.php`, {
    next: { revalidate: 1 },
  });
  const randomRecipe = await res.json();
  // console.log(randomRecipe);
  return randomRecipe;
};

export default async function Random() {
  const randomRecipe = await fetchRandomRecipe();

  return (
    <>
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='max-w-screen-xl px-4 md:px-8 mx-auto'>
          <div className='text-center pb-3 '>
            <a
              href='./random'
              className='inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2'
            >
              Shuffle&#128256;
            </a>
          </div>
          <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
            <div>
              <div className='h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg'>
                <img
                  src={randomRecipe.meals[0].strMealThumb}
                  loading='lazy'
                  alt='food'
                  className='w-full h-full object-cover object-center'
                />
              </div>
            </div>
            <div className='md:pt-8'>
              <p className='text-green-500 font-bold text-center md:text-left'>
                {randomRecipe.meals[0].strArea} - {randomRecipe.meals[0].strCategory}
              </p>
              <h1 className='text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>
                {randomRecipe.meals[0].strMeal}
              </h1>
              <h2 className='text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4'>
                Ingredients and Measurements
              </h2>
              <ul className='text-gray-500 sm:text-lg mb-6 md:mb-8'>
                <li>
                  {randomRecipe.meals[0].strIngredient1} - {randomRecipe.meals[0].strMeasure1}
                </li>
                <li>
                  {randomRecipe.meals[0].strIngredient2} - {randomRecipe.meals[0].strMeasure2}
                </li>
                <li>
                  {randomRecipe.meals[0].strIngredient3} - {randomRecipe.meals[0].strMeasure3}
                </li>
                <li>
                  {randomRecipe.meals[0].strIngredient4} - {randomRecipe.meals[0].strMeasure4}
                </li>
                <li>
                  {randomRecipe.meals[0].strIngredient5} - {randomRecipe.meals[0].strMeasure5}
                </li>
                <li>
                  {randomRecipe.meals[0].strIngredient6} - {randomRecipe.meals[0].strMeasure6}
                </li>
                <li>
                  {randomRecipe.meals[0].strIngredient7} - {randomRecipe.meals[0].strMeasure7}
                </li>
                <li>
                  {randomRecipe.meals[0].strIngredient8} - {randomRecipe.meals[0].strMeasure8}
                </li>
                <li>
                  {randomRecipe.meals[0].strIngredient9} - {randomRecipe.meals[0].strMeasure9}
                </li>
              </ul>
            </div>
          </div>
          <div className='pt-5'>
            <h2 className='text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4'>
              Instructions
            </h2>
            <p className='text-gray-500 sm:text-lg mb-6 md:mb-8'>
              {randomRecipe.meals[0].strInstructions}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
