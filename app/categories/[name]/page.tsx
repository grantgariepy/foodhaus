import { Category } from '../../../typings';
const mealDBAPI = process.env.MEALDB_API;

export const dynamicParams = true;

type PageProps = {
  params: {
    name: string;
  };
};

const fetchCategoryRecipes = async (name: string) => {
  console.log(name);
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
      {category.meals.map((meal: any, index: number) => (
        <div key={index}>
          <h1>{meal.strMeal}</h1>
        </div>
      ))}
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
