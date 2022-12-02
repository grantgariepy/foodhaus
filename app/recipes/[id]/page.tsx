import { notFound } from 'next/navigation';

const mealDBAPI = process.env.MEALDB_API;

export const dynamicParams = true;

type PageProps = {
  params: {
    name: string;
    id: string;
  };
};

const fetchRecipe = async (id: string) => {
  // console.log(id);
  const res = await fetch(`https://www.themealdb.com/api/json/v2/${mealDBAPI}/lookup.php?i=${id}`);
  if (!res.ok) {
    notFound();
  } else {
    const recipe = await res.json();
    return recipe;
  }
};

export default async function RecipePage({ params: { id } }: PageProps) {
  const recipe = await fetchRecipe(id);
  // console.log(recipe[0]);
  if (recipe.meals == null) {
    notFound();
  }
  // console.log(recipe);

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='max-w-screen-xl px-4 md:px-8 mx-auto'>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
          <div>
            <div className='h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg'>
              <img
                src={recipe.meals[0].strMealThumb}
                loading='lazy'
                alt='food'
                className='w-full h-full object-cover object-center'
              />
            </div>
          </div>
          <div className='md:pt-8'>
            <p className='text-green-500 font-bold text-center md:text-left'>
              {recipe.meals[0].strArea} - {recipe.meals[0].strCategory}
            </p>
            <h1 className='text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>
              {recipe.meals[0].strMeal}
            </h1>
            <h2 className='text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4'>
              Ingredients and Measurements
            </h2>
            <ul className='text-gray-500 sm:text-lg mb-6 md:mb-8'>
              <li>
                {recipe.meals[0].strIngredient1} - {recipe.meals[0].strMeasure1}
              </li>
              <li>
                {recipe.meals[0].strIngredient2} - {recipe.meals[0].strMeasure2}
              </li>
              <li>
                {recipe.meals[0].strIngredient3} - {recipe.meals[0].strMeasure3}
              </li>
              <li>
                {recipe.meals[0].strIngredient4} - {recipe.meals[0].strMeasure4}
              </li>
              <li>
                {recipe.meals[0].strIngredient5} - {recipe.meals[0].strMeasure5}
              </li>
              <li>
                {recipe.meals[0].strIngredient6} - {recipe.meals[0].strMeasure6}
              </li>
              <li>
                {recipe.meals[0].strIngredient7} - {recipe.meals[0].strMeasure7}
              </li>
              <li>
                {recipe.meals[0].strIngredient8} - {recipe.meals[0].strMeasure8}
              </li>
              <li>
                {recipe.meals[0].strIngredient9} - {recipe.meals[0].strMeasure9}
              </li>
            </ul>
          </div>
        </div>
        <div className='pt-5'>
          <h2 className='text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4'>
            Instructions
          </h2>
          <p className='text-gray-500 sm:text-lg mb-6 md:mb-8'>{recipe.meals[0].strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

// export async function generateStaticParams(id: string) {
//   const res = await fetchRecipe(id);
//   const recipe = await res.json();

//   return recipe.meals.map((recipe: any) => ({
//     id: recipe.strCategory.toString(),
//   }));
// }
